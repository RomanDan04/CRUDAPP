import { Component, Input } from '@angular/core';
import { Iuser } from 'src/app/models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent{
  @Input() users: Iuser[]
  @Input() limit: number = 4
  @Input() active: boolean = false
}
