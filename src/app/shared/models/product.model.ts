
export abstract class ProductModel{

  id?: string;
  name: string;
  description: string;

  constructor(){
    this.id = '';
    this.name = '';
    this.description = ''
  }


}

export interface Product extends ProductModel {

}

export class ProductFormModel extends ProductModel{

  constructor(){
    super()
  }

}

export interface ProductImage{
  title: string;
  path: string;
  product: string;//for downloading
} 

export interface ProductInventory{
  quantity: number;
  totalsum: number;
  date: Date;
  product: string;
}