import { Component, OnInit , Input} from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {

  //cartItem : FormGroup;
post :any = '';
parentPosts: any[]=[];
  public cartItem :any= FormGroup;
 
  currentNumber: any = 0;
  constructor(private _fb: FormBuilder) { }

  ngOnInit(): void {
    this.cartItem = this._fb.group({
      dynaRow: this._fb.array([this.insertRows()])
    });
  }
  get formArr() {
    return this.cartItem.get('dynaRow') as FormArray;
  }

  insertRows() {
    return this._fb.group({
      itemname: ['']
    });
  }

  addNewRow() {
    this.formArr.push(this.insertRows());
  }

  deleteRow(index: number) {
    this.formArr.removeAt(index);
  }
  additem()
  {
    this.currentNumber++;
  }
 deleteitem()
 {
  this.currentNumber--;
 }
 addpost(post:any)
 {
   console.log(this.post);
   this.parentPosts.push(this.post)

 }
}