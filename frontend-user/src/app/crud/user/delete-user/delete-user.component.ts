import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { User } from '../../model/user.model';
import { DeleteUserService } from '../../service/delete.service';
import { ListUserService } from '../../service/list.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {

  users!: Observable<any>;
  searchText: any;

  // @ts-ignore
  dtOptions: DataTables.Settings = {};
  // @ts-ignore
  @ViewChild('dtOptions', {static: true}) table;
  // users!: User[];
  private searchTerms = new Subject<any>();
  
  _filterBy!: string;
  filteredUser: User[] = [];
  _users: User[] = [];


  constructor(
    private listUserService: ListUserService,
    private deleteUserService: DeleteUserService,
    private router: Router,
  ) 
  { 
  }

  ngOnInit() {
    this.listUserService.getUser()
    .subscribe({
      next: users => {
        this._users = users;
        this.filteredUser = this._users;
      },
      error:err =>console.log('Error', err)
    });

  }

  deleteOp(user: User){
    console.log(user)
    this.deleteUserService.deleteUserById(user.id).subscribe((resposta)=>{
      console.log("resposta ao deletar item", resposta)
      const indexDeletedUser = this._users.findIndex((item) => item.id == user.id)
      this._users.splice(indexDeletedUser, 1)
      this.filteredUser = this._users
      this._filterBy = ""

    })

  }

  set filter(any: any) {
    this._filterBy = any;
    if (any >= 0){
      this.filteredUser = this._users.filter((any: User) => any.id.toString().indexOf(this._filterBy) > -1);
      // this.filteredUser = this.filteredUser.sort(sortBy('name'))
    }
    //foi uma luta
    else{
      this.filteredUser = this._users.filter((user: User) => 
                                                user.login.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1 || 
                                                user.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1
                                            );
    }
  }

  get filter() { 
    return this._filterBy;
  }


 

}
