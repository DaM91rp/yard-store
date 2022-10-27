import { Component, OnInit } from '@angular/core';

import { Product } from '../../models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  myShoppingCart: Product[] = [];
  total = 0;

  products: Product[] = [
    {
      id: '1',
      name: 'El mejor juguete',
      price: 565,
      image: './assets/images/juguete.jpg'
    },
    {
      id: '2',
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/bicicleta.jpg'
    },
    {
      id: '3',
      name: 'Coleccion de albumnes',
      price: 34,
      image: './assets/images/album.jpg'
    },
    {
      id: '4',
      name: 'Mis libros',
      price: 58,
      image: './assets/images/libros.jpg'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onAddToShoppingCart(product: Product) {
    this.myShoppingCart.push(product);
    this.total = this.myShoppingCart.reduce((sum, item) => sum + item.price, 0);
  }

}
