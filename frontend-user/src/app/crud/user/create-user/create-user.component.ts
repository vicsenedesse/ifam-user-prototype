import { CreateUserService } from 'src/app/crud/service/create.service';
import { Observable } from 'rxjs';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { User } from '../../model/user.model';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  user: User = new User();
  submitted = false;

  constructor(
    public createUserService: CreateUserService,
    private router: Router,
  ) { }

  ngOnInit() {}

  onSubmit(){
    this.submitted = true;
    this.createUserService.createUser(this.user).subscribe(data => console.log(data), error => console.log(error));
    this.user = new User();
    this.router.navigate(['/cadastrar/user']);
  }
}
