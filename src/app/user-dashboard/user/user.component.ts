import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  user: User = {}
  showEditUserModal: boolean = false;
  selectedUser: User ={};
  userForm: FormGroup;

  constructor(private route: ActivatedRoute, private userService: UserService, private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phone: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.userService.getUser(id).subscribe((data)=>{
        this.user = data;
      })
    });
  }

  openEditUserModal(user: User): void {
    this.showEditUserModal = true;
    this.selectedUser = user;
    this.userForm.patchValue({
      name: user.name,
      email: user.email,
      phone: user.phone
    });
  }


  closeEditUserModal(): void {
    this.showEditUserModal = false;
  }

  saveEditedUser(): void {
    if (this.userForm.valid && this.selectedUser) {
      this.selectedUser.name = this.userForm.get('name')?.value;
      this.selectedUser.email = this.userForm.get('email')?.value;
      this.selectedUser.phone = this.userForm.get('phone')?.value;
      this.user = this.selectedUser;
      this.updatedUser(this.selectedUser)
    }
    this.closeEditUserModal()
  }

  updatedUser(updatedUser: User): void {
    const indexToUpdate = this.userService.allUsers.findIndex(user => user.id === updatedUser.id);
    if (indexToUpdate !== -1) {
      this.userService.allUsers[indexToUpdate] = updatedUser;
      this.userService.allUsers = [...this.userService.allUsers];
    }
  }
}
