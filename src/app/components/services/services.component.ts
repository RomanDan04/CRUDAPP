import { Component, Input, OnInit } from '@angular/core';
import { Ifunction } from 'src/app/models/function';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  @Input() limit: number = 5
  @Input() functions: Ifunction[]
  @Input() inactive: boolean = false

  public nrrHidenServices: number

  ngOnInit(){
    if(this.limit >= this.functions.length) this.nrrHidenServices = 0
    else this.nrrHidenServices = this.functions.length - this.limit +1
  }
}
