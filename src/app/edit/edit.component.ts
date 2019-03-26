import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  // title;
  // category;
  // imageUrl;
  // price;
  // id;
  // btnTitle = "ADD";

  constructor( private route :Router , private service :ProductService ) { }
  // addItem(){
  //   let product = {"title": this.title, "category": this.category, "price": this.price, "imageUrl": this.imageUrl};
  //   this.service.addProducts(product).subscribe(response => alert("Item Added!"));
  // }

  // updateItem(){
  //   let product = {"title": this.title, "category": this.category, "price": this.price, "imageUrl": this.imageUrl};
  //   this.service.updateProduct(product, this.id).subscribe(response => alert("Saved!"));
  // }

  ngOnInit() {
    // this.route.queryParamMap.subscribe(response => {
    //   this.id = response.get('id');
    //   this.title = response.get('title');
    //   this.price =  response.get('price');
    //   this.category =  response.get('category');
    //   this.imageUrl = response.get('imageUrl');
    //   this.btnTitle = response.get('btnTitle');
    // }) ;
  }

}