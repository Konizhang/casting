import { Category } from './../../model/category';
import { Component, OnInit, ViewChild } from '@angular/core';

import { Item } from '../../model/item';
import { FiltersComponent } from './filters.component';
import { SearchBarComponent } from './search-bar.component';
import { DataService } from '../../service/data.service';
import { CartService } from '../../service/cart.service';
import { ConstantsService } from '../../service/constants.service';
import { ItemService } from '../../service/item.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})
export class ProductlistComponent implements OnInit {

  categories : Category[];
  
  items: Item[];

  mainFilter: any
  private category_id:number;
  private pages:Array<number>;
  private page:number;
  private id:number;
  currentSorting: string;
  private numProducts : number

  @ViewChild('filtersComponent')
  filtersComponent: FiltersComponent;

  @ViewChild('searchComponent')
  searchComponent: SearchBarComponent;


  image_url : String  = "";


  sortFilters: any[] = [
    { name:'Name (A to Z)', value:'name' },
    { name:'Price (low to high)', value:'priceAsc' },
    { name:'Price (high to low)', value:'priceDes' }
  ]

  customFilters: any[] = [
    { name:'All', value:'all', checked:true },
    { name:'Available', value:'available', checked:false },
    { name:'Not Available', value:'unavailable', checked:false },
    { name:'Bestseller', value:'bestseller', checked:false }
  ]

  priceFilters: any[] = [
    { name:'All', value:'all', checked:true },
    { name:'Price > 30.000', value:'more_30000', checked:false },
    { name:'Price < 10.000', value:'less_10000', checked:false }
  ]

  originalData: any = []
  // constantsService: any;
 // categories: any;

  constructor(private dataService: DataService, private cartService: CartService,private constantsService: ConstantsService,private itemService: ItemService){  }

  ngOnInit(){
    this.numProducts = this.cartService.displayItems();
    this.image_url = this.itemService.domain_url+"/images/items";
    this.page = 0;
    this.constantsService.getCategories().subscribe(categories => {
      this.categories = categories;
    });


    this.dataService.getData().then(data => {
      this.originalData = data
      this.mainFilter = {
        search: '',
        categories:  this.categories,
        customFilter: this.customFilters[0],
        priceFilter: this.priceFilters[0]
      }

  
      //Make a deep copy of the original data to keep it immutable
     this.itemService.getItemsby(1,'category',1).subscribe(data => {
      this.category_id =data.data[0].category_id ;
      this.items = data.data;
      this.id =1;
      this.pages = new Array(data.last_page);
      });
     // this.sortProducts('name')
    })
   
    
  }

  setPages(i,event:any){

    console.log(this.page);
    event.preventDefault();

    this.page = i;
   
    this.getitems( this.category_id,i+1);
   
  }

  getitems(id,i){
  
    this.itemService.getItemsby(id,'category',i).subscribe(data => {

      this.id =id;
      this.items = data.data;
      this.pages = new Array(data.last_page);
     });
  }

  onCategoryChange(obj){
    this.itemService.getItemsby(obj['id'],'category',1).subscribe(data => {
      this.items = data.data;
      this.pages = new Array(data.last_page);
   });

    
  }




  onSearchChange(search){
    this.mainFilter.search = search.search
    this.updateProducts({
      type:'search',
      change:search.change
    })
  }

  onFilterChange(data){
     console.log("ibfu"+data);
    if(data.type == 'category'){
      if(data.isChecked){
        this.mainFilter.categories.push(data.filter)
      }else{
        this.mainFilter.categories = this.mainFilter.categories.filter(category => { return category.id != data.filter.id })
      }
    }else if(data.type == 'custom'){
      this.mainFilter.customFilter = data.filter
    }else if(data.type == 'price'){
      this.mainFilter.priceFilter = data.filter
    }
    this.updateProducts({
      type:data.type,
      change: data.change
    })
  }

  updateProducts(filter){
    let productsSource = this.originalData.products
    let prevProducts = this.items
    let filterAllData = true
    if((filter.type=='search' && filter.change == 1) || (filter.type=='category' && filter.change == -1)){
      productsSource = this.items
      filterAllData = false
    }
    //console.log('filtering ' + productsSource.length + ' products')

    this.items = productsSource.filter(product => {
      //Filter by search
      if(filterAllData || filter.type=='search'){
        if (!product.name.match(new RegExp(this.mainFilter.search, 'i'))){
          return false;
        }
      }

      //Filter by categories
      if(filterAllData || filter.type=='category'){
        let passCategoryFilter = false
        this.categories.forEach(product_category => {
          if(!passCategoryFilter){
            console.log(" this.mainFilter.categories", this.mainFilter.categories);
            passCategoryFilter = this.mainFilter.categories.reduce((found, category) => {
                return found || product_category == category.categori_id
            }, false)
          }
        })
        if(!passCategoryFilter){
          return false
        }
      }

      //Filter by custom filters
      if(filterAllData || filter.type=='custom'){
        let passCustomFilter = false
        let customFilter = this.mainFilter.customFilter.value
        if(customFilter == 'all'){
          passCustomFilter = true;
        }else if(customFilter == 'available' && product.available){
          passCustomFilter = true;
        }else if(customFilter == 'unavailable' && !product.available){
          passCustomFilter = true;
        }else if(customFilter == 'bestseller' && product.best_seller){
          passCustomFilter = true;
        }
        if(!passCustomFilter){
          return false
        }
      }

      //Filter by price filters
      if(filterAllData || filter.type=='price'){
        let passPriceFilter = false
        let customFilter = this.mainFilter.priceFilter.value
        let productPrice = parseFloat(product.price.replace(/\./g, '').replace(',', '.'))
        if(customFilter == 'all'){
          passPriceFilter = true;
        }else if(customFilter == 'more_30000' && productPrice > 30000){
          passPriceFilter = true;
        }else if(customFilter == 'less_10000' && productPrice < 10000){
          passPriceFilter = true;
        }
        if(!passPriceFilter){
          return false
        }
      }

      return true
    })

    //If the number of products increased after the filter has been applied then sort again
    //If the number of products remained equal, there's a high chance that the items have been reordered.
    if(prevProducts.length <= this.items.length && this.items.length>1){
      this.sortProducts(this.currentSorting)
    }

    //These two types of filters usually add new data to the products showcase so a sort is necessary
    if(filter.type == 'custom' || filter.type == 'price'){
      this.sortProducts(this.currentSorting)
    }
  }





  sortProducts(criteria){
    //console.log('sorting ' + this.products.length + ' products')
    this.items.sort((a,b) => {
      let priceComparison = parseFloat(a.name.replace(/\./g, '').replace(',', '.')) - parseFloat(b.name.replace(/\./g, '').replace(',', '.'))
      if(criteria == 'priceDes'){
        return -priceComparison
      }else if(criteria == 'priceAsc'){
        return  priceComparison
      }else if(criteria == 'name'){
        let nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
        if (nameA < nameB)
          return -1;
        if (nameA > nameB)
          return 1;
        return 0;
      }else{
        //Keep the same order in case of any unexpected sort criteria
        return -1
      }
    })
    this.currentSorting = criteria
  }

}
