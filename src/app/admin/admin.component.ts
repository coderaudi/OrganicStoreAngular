import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import {Sort} from '@angular/material';
import{ Router } from '@angular/router';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  adminProductList ; // product list for admin
  dataSource ; // for data table in angular


 //  {"id":1,"category":"vegetables","imageUrl":"http://www.publicdomainpictures.net/pictures/170000/velka/spinach-leaves-1461774375kTU.jpg",
 // "price":10,"title":"Spinach"},

                       // 'imageUrl'
  displayedColumns: string[] = ['id', 'category', 'price','title','edit' ,'delete'];

 

  constructor( private adminService : ProductService , private router : Router ) { }

  

  //  delete the product  

  deleteProduct(id){
    this.adminService.deleteProduct(id).subscribe(res=>{
      alert("deleted !");
    })
  }
 

  ngOnInit() {
    
    this.adminService.getProducts()
    .subscribe( response =>{
      this.adminProductList = response;
      this.dataSource = response; 
    })
  }

}
