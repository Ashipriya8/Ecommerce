import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  @Input() childpost:any[]=[];
  constructor() { }

  ngOnInit(): void {
  }

}
