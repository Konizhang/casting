import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './component/search-bar.component';
import { FiltersComponent } from './component/filters.component';
import { ShowcaseComponent } from './component/showcase.component';
import { CartComponent } from './component/cart.component';
import { ProductComponent } from './component/product.component';
import { ProductThumbnailComponent } from './component/product-thumbnail.component';
import { CartPreviewComponent } from './component/cart-preview.component';

import { SortFiltersComponent } from './component/sort-filters.component';

import { ItemService } from 'src/app/service/item.service';
import { CartService } from '../service/cart.service';
import { DataService } from '../service/data.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { JsonpModule } from '@angular/http';
import { CartEntryComponent } from './cart-entry.component';
import { ShopRoutingModule } from './shop.routing';
import { ConstantsService } from 'src/app/service/constants.service';
import { FrontendModule } from '../frontend/frontend.module';
import { ProductlistComponent } from './component/productlist.component';
//import { LightboxModule } from 'ngx-lightbox';
import {NgxPaginationModule} from 'ngx-pagination';
import { PaginationComponent } from './component/pagination.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    JsonpModule,
    ShopRoutingModule,
    FrontendModule,
    NgxPaginationModule
  //  LightboxModule
  ],
  declarations: [
    CartEntryComponent,
    SearchBarComponent,
    FiltersComponent,
    ShowcaseComponent,
    CartComponent,
    ProductComponent,
    ProductThumbnailComponent,
    CartPreviewComponent,
    ProductlistComponent,
    SortFiltersComponent,
    PaginationComponent,

  ],
  providers: [ItemService ,
              DataService,
              CartService,
              ConstantsService
    ],
    bootstrap: [CartEntryComponent]
})
export class ShopModule { }
