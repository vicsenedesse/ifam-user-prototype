import { Component, OnInit, Pipe, ViewChild } from '@angular/core';
import { User } from 'src/app/crud/model/user.model';
import { ListUserService } from 'src/app/crud/service/list.service';
import { Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';
import { catchError, debounceTime, distinctUntilChanged, first, map, switchMap } from 'rxjs/operators';
import { FormGroup } from '@angular/forms';
// import { sortBy } from '@types/sort-by';
// import { ApiResponse } from 'src/app/cadastro/model/api.response';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})


export class ListUserComponent implements OnInit {

  users!: Observable<any>;

  // user!: new User;

  filteredUser: User[] = [];
  _users: User[] = [];
  // @ts-ignore
  dtOptions: DataTables.Settings = {};
  // @ts-ignore
  @ViewChild('dtOptions', {static: true}) table;
  // users!: User[];
  private searchTerms = new Subject<any>();

  _filterBy!: any;


  constructor(
    private listUserService: ListUserService,
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
      error: err =>console.log('Error', err)
    });
  }

  show: boolean = false;
  user: User = new User();

  password() {
    this.show = !this.show;
    
  }


  set filter(any: any) {
    this._filterBy = any;
    if (any >= 0){
      this.filteredUser = this._users.filter((any: User) => any.id.toString().indexOf(this._filterBy) > -1);
      // this.filteredUser = this.filteredUser.sort(sortBy('name'))
    }
    else{
      this.filteredUser = this._users.filter((user: User) => user.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1) && this._users.filter((user: User) => user.login.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1); 
      // this.filteredUser = this.filteredUser.sort(sortBy('name'))
    }
  }

  get filter() { 
    return this._filterBy;
  }

  

}
function sortBy(name: any): any {
  throw new Error('Function not implemented.');
}

