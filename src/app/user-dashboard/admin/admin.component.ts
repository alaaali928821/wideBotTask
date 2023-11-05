import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/user.service';
import { staticData } from 'src/assets/defines';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  users: User[] = [];
  userForm: FormGroup;
  userAddForm: FormGroup;
  selectedUser: User | null = null;
  showEditUserModal: boolean = false;
  showAddUserModal: boolean = false;


  constructor(private userService: UserService, private fb: FormBuilder,public router: Router) {
    this.userForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phone: ['', [Validators.required]]
    });

    this.userAddForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phone: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.getUsers()
  }


  getUsers(): void {
    this.userService.getUsers().subscribe((users: User[]) => {
      this.users = users;
    });
  }

  deleteUser(user: User): void {
    if (confirm('Are you sure you want to delete this user?')) {
      const index = this.users.findIndex((u) => u.id === user.id);
      if (index !== -1) {
        this.users.splice(index, 1);
      }
    }
  }

  addUser(): void {
    let newUser: User = {};
    if (this.userAddForm.valid) {
      newUser.name = this.userAddForm.get('name')?.value;
      newUser.email = this.userAddForm.get('email')?.value;
      newUser.phone = this.userAddForm.get('phone')?.value;
      this.updatedUser(newUser)
    }
    this.closeAddUser()
  }

  saveEditedUser(): void {
    if (this.userForm.valid && this.selectedUser) {
      this.selectedUser.name = this.userForm.get('name')?.value;
      this.selectedUser.email = this.userForm.get('email')?.value;
      this.selectedUser.phone = this.userForm.get('phone')?.value;
      this.updatedUser(this.selectedUser)
      this.selectedUser = null;
    }
    this.closeEditUserModal()
  }

  updatedUser(updatedUser: User): void {
    const indexToUpdate = this.users.findIndex(user => user.id === updatedUser.id);
    if (indexToUpdate !== -1) {
      this.users[indexToUpdate] = updatedUser;
      this.users = [...this.users];
    } else {
      this.users.push(updatedUser)
    }
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

  openAddModal(): void {
    this.showAddUserModal = true;
  }
  closeEditUserModal(): void {
    this.showEditUserModal = false;
  }

  closeAddUser(): void {
    this.showAddUserModal = false;
  }

  showAsUser(user: User): void{
    this.router.navigate([staticData.USER_ROUTE, user.id])
  }
}