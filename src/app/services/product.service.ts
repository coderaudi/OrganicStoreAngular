import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url = "http://localhost:3000/api/products";

  constructor( private http : HttpClient ) { }

  cartIted =0;

  addtoMyCart(){
    console.log("service call");
    this.cartIted++;
    console.log(this.cartIted);
  }

  getCartItem(){
    return this.cartIted;
  }

  // get the product from server
  getProducts(){
      return this.http.get(this.url);
    }

  deleteProduct(id){
    //console.log("delete serv called ");
    return this.http.delete(this.url+'/'+id);
    }

  addProduct(product){
        return this.http.post(this.url,product);
      }

  updateProduct(product , id){
      
         return  this.http.put(this.url+'/'+id ,product);
        // hard coded object !
       // return  this.http.put(this.url+'/'+product.id, {"category":"vegetables","imageUrl":"http://www.publicdomainpictures.net/pictures/170000/velka/spinach-leaves-1461774375kTU.jpg","price":10,"title":"Spinach"});
      }  
}
