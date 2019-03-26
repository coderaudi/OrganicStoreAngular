import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-operation',
  templateUrl: './product-operation.component.html',
  styleUrls: ['./product-operation.component.css']
})
export class ProductOperationComponent implements OnInit {

  id;
  title;
  price;
  imageUrl;
  category;
  btnTitle = "ADD";

  constructor( private adminservice : ProductService , private route :ActivatedRoute) { }

  productTypeList = ['fruits','vegetables'];

  onAddProduct(){
  let productData = { 'category': this.category ,'title' : this.title , 'imageUrl': this.imageUrl , 'price' : this.price}
  
    this.adminservice.addProduct(productData);
    
    //  this.adminService.addProduct(productData)
    //  .subscribe(res=>{
    //  this.adminProductList.splice(0,0,newProduct); }
    // )
  
  }


  addItem(){
    let product = {"title": this.title, "category": this.category, "price": this.price, "imageUrl": this.imageUrl};
    this.adminservice.addProduct(product).subscribe(response => alert("Item Added!"));
  }

  updateItem(){
    let product = {"title": this.title, "category": this.category, "price": this.price, "imageUrl": this.imageUrl};
    this.adminservice.updateProduct(product, this.id).subscribe(response => alert("Saved!"));
  }

  ngOnInit() {
    this.route.queryParamMap.subscribe(response => {
      this.id = response.get('id');
      this.title = response.get('title');
      this.price =  response.get('price');
      this.category =  response.get('category');
      this.imageUrl = response.get('imageUrl');
      this.btnTitle = response.get('btnTitle');
    }) ;
  }

}
