import { Component, Input, OnChanges } from '@angular/core';
import { ProductService } from '../shared/services/product.service';
import { Observable } from 'rxjs';
import { ProductInventory } from '../shared'; 

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

  constructor(private productService: ProductService) { 
  }

  ngOnChanges(){
    this.productService.getProductInventory(this.productId).subscribe(productRemains=>
      this.productInventory = productRemains[0]
    )
  }
}
