import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Igroup } from 'src/app/models/group';
import { ShareService } from 'src/app/services/share.service';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.css']
})
export class GroupListComponent {
  public filterBy: string
  public groupList: Igroup[]
  constructor(
    private share: ShareService,
    private router: Router,
  ){
    let list = share.getGroup()
    if(Array.isArray(list)) this.groupList = list
  }

  editGroup(id: number){
    this.router.navigate(['/group-edit/', {id: id, disabled: true}])
  }
}
