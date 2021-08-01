import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/crud/model/user.model';
// import { CreateUserService } from 'src/app/crud/service/list.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
// import { ApiResponse } from 'src/app/cadastro/model/api.response';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {


  constructor() {
  
    }

  ngOnInit() {
   
  }

}
