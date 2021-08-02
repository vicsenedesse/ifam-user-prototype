import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { User } from 'src/app/crud/model/user.model';
import { UpdateUserService} from "src/app/crud/service/update.service";
import { ApiResponse } from 'src/app/crud/model/api.response';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  id!: number;
  user!: User;
  apiResponse!:ApiResponse;

  constructor(private route: ActivatedRoute,private router: Router,
    private updateUserService: UpdateUserService) { }

  ngOnInit() {
    this.user = new User();
    this.id = this.route.snapshot.params['id'];
    this.updateUserService.getUserById(this.id)
      .subscribe(data => {
        console.log(data)
        this.user = data;
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateUserService.updateUser(this.id, this.user)
      .subscribe(data => console.log(data), error => console.log(error));
    this.user = new User();
    this.router.navigate(['/atualizar/user']);
  }

  refresh(): void {
    window.location.reload();
  }

  list(){
    this.router.navigate(['atualizar/user']);
  }
}
