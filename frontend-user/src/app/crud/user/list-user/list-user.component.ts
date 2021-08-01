import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/crud/model/user.model';
import { ListUserService } from 'src/app/crud/service/list.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
// import { ApiResponse } from 'src/app/cadastro/model/api.response';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  users!: Observable<any>;
  // @ts-ignore
  dtOptions: DataTables.Settings = {};
  // @ts-ignore
  @ViewChild('dtOptions', {static: true}) table;


  constructor(
    private listUserService: ListUserService,
    private router: Router) {
    //   setTimeout(function(){
    //     $(function(){
    //       $('#example').DataTable();
    //   });
    //   },2000);
    }

  ngOnInit() {
    this.users = this.listUserService.getUser();
    // setTimeout(function(){
    //   $(function(){
    //     $('#example').DataTable();
    // });
    // },2000);

  }

}
