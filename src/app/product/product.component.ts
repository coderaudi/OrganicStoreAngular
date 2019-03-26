import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productItemCount = 0 ;
  
  productcountary =[];

  productDisp ; // display the products as per userchoice
  productList;  //all original  in array from the response by get 
  productType;

  
  localStorageUser = "User";  //User1

  // productArray = JSON.parse(this.productList);

  // productCategory ; // for switch
  constructor( private service : ProductService, private router : Router ) { }


  onDelete(product){
    this.service.deleteProduct(product.id)
    .subscribe(response =>{
      let index = this.productList.indexOf(product);
      this.productList.splice(index, 1);
    })
   
  }


  logOut(){
    this.router.navigate(['']);
    localStorage.clear();
    
  }

  onAll(){
    this.productDisp = this.productList;
  }

  onFrt(){
    const fruitProductOnly = this.productList.filter(fruit => fruit.category == "fruits");
    this.productDisp = fruitProductOnly;
  }

  onVeg(){
    const vegetablesProductOnly = this.productList.filter(fruit => fruit.category == "vegetables");
    this.productDisp = vegetablesProductOnly;
  }
  // cart adding 

  addtoCart(id){
    this.productItemCount++;
    this.productcountary[id] = 1;
  }

  ngOnInit() {
    this.service.getProducts()
    .subscribe(response =>{
      this.productList = response;
      this.productDisp = response;
    })

    if(localStorage.getItem('user')){
      this.localStorageUser =  localStorage.getItem('user');
      console.log("init working" + this.localStorageUser);


    }
    
  }


  onINC(id){
    this.productItemCount++;
    this.productcountary[id]++;
  }

  onDEC(id){
    this.productItemCount--;
    this.productcountary[id]--;
  }
  // add product function 

  onProductAdd(){
    let inproduct : any = {"category":"vegetables","imageUrl":"https://static.pexels.com/photos/8390/food-wood-tomatoes.jpg","price":2.5,"title":"Tomato"};
    this.service.addProduct(inproduct)
    .subscribe(response => {
      console.log(inproduct);
       this.productList.splice(0,0,inproduct);
       console.log(response); 
     })
  }


}
