import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { take, map, tap } from 'rxjs/operators';
import { AngularFirestore } from 'angularfire2/firestore';
import { Product, ProductImage, ProductInventory } from '../models';

@Injectable()
export class ProductService {

  constructor(private af: AngularFirestore) { }

  addProduct(name: string, description: string): Promise<any> {
    const productCollection = this.af.collection<Product>("products");
    return productCollection.add({
      name: name,
      description: description
    }
    )
  }

  removeProduct(id: string): Promise<any> {
    const productCollection = this.af.doc<Product>("products/" + id);
    return productCollection.delete();
  }

  getAddedProducts(): Observable<Product[]> {
    return this.af.collection<Product>("products").stateChanges(['added']).pipe(
      map(actions => actions.map(a => {
        let product = a.payload.doc.data() as Product;
        product.id = a.payload.doc.id;
        return product;
      })),
    );
  }

  getRemovedProducts(): Observable<any> {
    return this.af.collection<Product>("products").stateChanges(['removed']).pipe(
      map(actions => actions.map(a =>
        a.payload.doc.id
      )
      )
    );
  }

  getUpdatedProducts(): Observable<Product[]> {
    return this.af.collection<Product>("products").stateChanges(['modified']).pipe(
      map(actions => actions.map(a => {
        let product = a.payload.doc.data() as Product;
        product.id = a.payload.doc.id;
        return product;
      })),
    );
  }
  
  getProductImages(productId: string): Observable<ProductImage[]>{
    return this.af.collection<ProductImage>('images', ref => ref.where('product', '==', productId)).valueChanges()
  }

  getProductInventory(productId: string): Observable<ProductInventory[]>{
    debugger;
    return this.af.collection<ProductInventory>('inventory', ref => ref.where('product', '==', productId)).valueChanges()
  }
}