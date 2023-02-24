import { Component, Input, HostListener, OnInit } from '@angular/core';
import { Iuser } from 'src/app/models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
  @Input() users: Iuser[]
  @Input() limit: number = 4
  @Input() active: boolean = false

  ngOnInit(){
    this.getLimitByDimensions()
  }

  @HostListener('window:resize', ['$event'])
  getLimitByDimensions(event?: any){
    let scrWidth = window.innerWidth
    if(scrWidth > 770) this.limit = 3
    else if(scrWidth > 570) this.limit = 2
    else if(scrWidth > 370) this.limit = 1
  }
}
