import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/crud/model/user.model';
import { ListUserService } from 'src/app/crud/service/list.service';
import { Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';
import { catchError, debounceTime, distinctUntilChanged, first, map, switchMap } from 'rxjs/operators';
import { FormGroup } from '@angular/forms';
// import { ApiResponse } from 'src/app/cadastro/model/api.response';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  users!: Observable<any>;

  filteredUser: User[] = [];
  _users: User[] = [];
  // @ts-ignore
  dtOptions: DataTables.Settings = {};
  // @ts-ignore
  @ViewChild('dtOptions', {static: true}) table;
  // users!: User[];
  private searchTerms = new Subject<any>();

  _filterBy!: string;


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

  //TO DO - BY ID

  // getById(id: number) {
  //   const user = this.users.find(x => x.id === id);
  //   if (!user) return;
  //   this.listUserService.getById(id)
  //       .pipe(first())
  //       .subscribe(() => this.users = this.users.filter(x => x.id !== id));
  // }


  set filter(name: any) {
    this._filterBy = name;
    this.filteredUser = this._users.filter((user: User) => user.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
    // this.listUserService.getUserById(id);
  }

  get filter() {
    return this._filterBy;
  }

}
