import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store'
import { AddProduct, GetAddedProducts, GetRemovedProducts, UpdateInventory } from './shared'
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor (private store: Store) {

  }

  ngOnInit() {

  this.store.dispatch(new GetAddedProducts());
  this.store.dispatch(new GetRemovedProducts());
    
  }
}
