import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ProductService } from '../shared/services/product.service';
import { ProductImage } from '../shared';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireStorage } from 'angularfire2/storage';
import { Observable } from 'rxjs'

@Component({
  selector: 'app-product-image',
  templateUrl: './product-image.component.html',
  styleUrls: ['./product-image.component.scss']
})
export class ProductImageComponent implements OnInit, OnChanges {

  @Input()
  productId: string;

  productImages: ProductImage[] = [];
  srcImg: Array<string> = [];
  titleImg: Array<string> = [];

  constructor(private productService: ProductService, private af: AngularFireStorage) { }

  ngOnChanges() {
    // ngxs storeify this
    // Thats enough for today!
    this.srcImg = [];
    this.titleImg = [];
    this.productService.getProductImages(this.productId).subscribe(productImages => {
      this.productImages = productImages;
      this.productImages.forEach(productImage => {
        this.srcImg.push(productImage.path);
        this.titleImg.push(productImage.title);
      }
      )

    }
    )
  }

  ngOnInit() {

  }

}
