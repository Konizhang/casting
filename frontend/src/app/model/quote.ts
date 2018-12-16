export class Quote {
  name : string;
  email : string;
  products : any;

  constructor(name: string, email: string,products:any) { 
      this.email = email;
      this.name = name;
      this.products = products;
 }
}
