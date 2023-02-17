import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Ifunction } from 'src/app/models/function';
import { Igroup } from 'src/app/models/group';
import { Iuser } from 'src/app/models/user';
import { ShareService } from 'src/app/services/share.service';

@Component({
  selector: 'app-group-form',
  templateUrl: './group-form.component.html',
  styleUrls: ['./group-form.component.css']
})
export class GroupFormComponent implements OnInit{
  public name: "Gruppo di firma per disposizioni"
  public groupForm = this._fb.group({
    id: this._fb.control(0),
    groupName: this._fb.control("", Validators.required),
    minValue: this._fb.control(0, Validators.required),
    maxValue: this._fb.control(0, Validators.required),
    functions: this._fb.array([]),
    filterUser: this._fb.control(""),
    users: this._fb.array([]),
  })
  public disabled: boolean = false
  private index: number

  constructor(
    private _fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private share: ShareService,
  ){ }

  ngOnInit(){
    this.index = parseInt(this.route.snapshot.params['id']) | 0
    let group = this.share.getGroup(this.index)
    
    // redirect to add group if the group is not found
    if(!group || Array.isArray(group)){
      this.router.navigateByUrl('/group-add')
    }

    // add group data
    if(group && !Array.isArray(group)){
      this.disabled = this.route.snapshot.params['disabled'] === 'true'
      this.groupForm.patchValue({
        id: group.id,
        groupName: group.groupName,
        minValue: parseInt(group.minValue),
        maxValue: parseInt(group.maxValue),
      })
    }

    // add users
    let users = this.share.getUser()
    if(Array.isArray(users))
    users.forEach(user => {
      let userForm = this._fb.group({
        userId: this._fb.control(user.userId),
        userInitials: this._fb.control(user.userInitials),
        fullName: this._fb.control(user.fullName),
        checked: this._fb.control(false)
      })

      if(group && !Array.isArray(group)){
        let groupUser = group.users.find(usr => usr.userId === user.userId)
        if(groupUser) userForm.patchValue({
          userInitials: groupUser.userInitials,
          checked: true
        })
      }
      this.users.push(userForm)
    })

    // add services
    let servizi = this.share.getService()
    if(Array.isArray(servizi))
    servizi?.forEach(ser => {
      let functionForm = this._fb.group({
        title: this._fb.control(ser.title),
        functionCode: this._fb.control(ser.functionCode),
        minValue: this._fb.control(0),
        maxValue: this._fb.control(0),
        checked: this._fb.control(false),
      })

      if(group && !Array.isArray(group)){
        let groupFun = group.functions.find(fn => fn.functionCode === ser.functionCode)
        if(groupFun) functionForm.patchValue({
          minValue: parseInt(String(groupFun.minValue)),
          maxValue: parseInt(String(groupFun.maxValue)),
          checked: true,
        })
      }
      this.functions.push(functionForm)
    })

    if(this.disabled) this.groupForm.disable()
  }

  get functions(): FormArray{
    return this.groupForm.controls['functions'] as FormArray
  }

  
  get users(): FormArray{
    return this.groupForm.controls['users'] as FormArray
  }

  enable(){
    this.disabled = false
    this.groupForm.enable()
    this.router.navigate([
      '/group-edit', {
        id: this.index
      }
    ])
  }

  salva(){
    let errorMessage = 'In atessa che il gruppo di firma venga approvato dai master'
    let formData = this.groupForm.value
    let newGroup = <Igroup>{
      id: formData.id,
      groupName: formData.groupName,
      minValue: String(formData.minValue),
      maxValue: String(formData.maxValue),
      users: (formData.users as Iuser[]).filter(user => user.checked),
      functions: (formData.functions as Ifunction[]).filter(fn => fn.checked),
    }

    if(
      !newGroup.groupName ||
      !newGroup.minValue ||
      !newGroup.maxValue ||
      !newGroup.users.length ||
      !newGroup.functions.length ||
      newGroup.functions.find(fn =>
        fn.minValue != newGroup.minValue ||
        fn.maxValue != newGroup.maxValue
      )
    ) newGroup.warning = errorMessage

    if(newGroup.groupName &&
      newGroup.users.length &&
      newGroup.functions.length &&
      newGroup.minValue && newGroup.maxValue
    ){
      this.share.editGroup(newGroup)
      this.router.navigateByUrl('/group-list')
    }
  }
}
