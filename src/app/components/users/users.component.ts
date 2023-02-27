import { Component, Input, HostListener, OnInit } from '@angular/core';
import { Iuser } from 'src/app/models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
  @Input() users: Iuser[]
  @Input() limit = 4
  @Input() active = false

  ngOnInit(){
    this.getLimitByDimensions()
  }

  @HostListener('window:resize', ['$event'])
  getLimitByDimensions(){
    const scrWidth = window.innerWidth
    if(scrWidth > 770) this.limit = 3
    else if(scrWidth > 570) this.limit = 2
    else if(scrWidth > 370) this.limit = 1
  }
}
