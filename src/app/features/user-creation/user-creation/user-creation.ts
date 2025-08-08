import { Component } from '@angular/core';
import {CardModule} from "primeng/card";
import {InputText} from "primeng/inputtext";
import {ButtonDirective} from "primeng/button";
import {FormsModule} from '@angular/forms';
import {UserCreationModel} from '../../../shared/types/user-creation/user-creation.model';
import {UserCreationService} from '../user-creation-service';

@Component({
  selector: 'app-user-creation',
  imports: [CardModule, InputText, ButtonDirective, FormsModule],
  templateUrl: './user-creation.html',
  styleUrl: './user-creation.css'
})
export class UserCreation {
  protected user: UserCreationModel = {
    userName: '',
    email: '',
    password: ''
  };

  constructor(private _userService: UserCreationService) {
  }

  onSubmit() {
    console.log(this.user);
    this._userService.saveNewUser(this.user).subscribe();
  }
}
