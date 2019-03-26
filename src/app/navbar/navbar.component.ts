import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor( private navbarserve : ProductService) { }

  productItemCount ;

  ngOnInit() {

   this.productItemCount =  this.navbarserve.getCartItem();
  }

}
