import { Component, Input, OnInit, HostListener } from '@angular/core';
import { Ifunction } from 'src/app/models/function';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  @Input() limit = 5
  @Input() inactive = false
  @Input() functions: Ifunction[]

  public nrrHidenServices: number

  ngOnInit(){
    this.getLimitByDimensions()
  }

  @HostListener('window:resize', ['$event'])
  getLimitByDimensions(){
    const scrWidth = window.innerWidth
    if(scrWidth > 1400) this.limit = 6 
    else if(scrWidth > 1200) this.limit = 5
    else if(scrWidth > 1000) this.limit = 4
    else if(scrWidth > 770) this.limit = 3
    else if(scrWidth > 460) this.limit = 2
    else if(scrWidth > 100) this.limit = 1

    if(this.limit >= this.functions.length) this.nrrHidenServices = 0
    else this.nrrHidenServices = this.functions.length - this.limit +1
  }
}
