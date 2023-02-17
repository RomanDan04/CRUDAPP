import { Injectable } from '@angular/core';
import { functions } from '../data/functions';
import { groupList } from '../data/groupList';
import { users } from '../data/users';
import { Ifunction } from '../models/function';
import { Igroup } from '../models/group';
import { Iuser } from '../models/user';

@Injectable() export class ShareService{
    public getGroup(id?: number): Igroup[] | Igroup | undefined{
        if(id) return groupList.find(grp => grp.id === id)
        return groupList
    }

    public getUser(id?: string): Iuser[] | Iuser | undefined{
        if(id) return users.find(user => user.userId === id)
        return users
    }

    public getService(code?: string): Ifunction[] | Ifunction | undefined{
        if(code) return functions.find(fn => fn.functionCode === code)
        return functions
    }

    public editGroup(newGroup: Igroup){
        if(newGroup.id){
            let pos = groupList.findIndex(grp => grp.id == newGroup.id)
            groupList.splice(pos, 1, newGroup)
            return true
        }else{
            newGroup.id = this.genGroupId()
            groupList.push(newGroup)
            return true
        }
    }

    public deleteGroup(id: number): boolean{
        if(id){
            let i = groupList.findIndex(grp => grp.id == id)
            if(i >= 0) groupList.splice(i, 1)
            return true
        }else return false
    }

    private genGroupId(id:number = 1): number{
        if(groupList.length){
            let pos = groupList.findIndex(grp => grp.id == id)
            if(pos != -1) id = this.genGroupId(id+1)
        }
        return id
    }
}