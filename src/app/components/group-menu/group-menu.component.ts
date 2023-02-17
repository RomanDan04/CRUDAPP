import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ShareService } from 'src/app/services/share.service';

@Component({
  selector: 'app-group-menu',
  templateUrl: './group-menu.component.html',
  styleUrls: ['./group-menu.component.css']
})
export class GroupMenuComponent {
  @Input() groupId: number

  constructor(
    private share: ShareService,
    private router: Router,
  ){ }

  editGroup(){
    this.router.navigate(['/group-edit/', {id: this.groupId}])
  }
  deleteGroup(){
    let result = confirm('Sei sicuro di voler rimuovere il gruppo?')
    if(result == true){
      this.share.deleteGroup(this.groupId)
      this.router.navigateByUrl('/group-list')
    }
  }
}
