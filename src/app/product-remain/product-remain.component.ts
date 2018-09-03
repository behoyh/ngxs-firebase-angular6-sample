import { Store } from '@ngxs/store'
import { Component, Input, OnChanges } from '@angular/core';
import { ProductService } from '../shared/services/product.service';
import { Observable } from 'rxjs';
import { ProductInventory,UpdateInventory } from '../shared'; 

@Component({
  selector: 'app-product-remain',
  templateUrl: './product-remain.component.html',
  styleUrls: ['./product-remain.component.scss']
})
export class ProductRemainComponent implements OnChanges {
  
  @Input()
  productId: string;

  @Input()
  productName: string;

  productInventory: ProductInventory;

  constructor(private productService: ProductService,private store: Store) { 
  }

  ngOnChanges(){
    this.productService.getProductInventory(this.productId).subscribe(productRemains=>
      this.productInventory = productRemains[0]
    )
  }

  public addInventory(name, val){
    this.store.dispatch(new UpdateInventory(name, val))
  }
}
