import { Component } from '@angular/core';
import {CardModule} from "primeng/card";
import {InputText} from "primeng/inputtext";
import {Button} from "primeng/button";
import {FormsModule} from '@angular/forms';
import {UserCreationModel} from '../../../shared/types/user-creation/user-creation.model';
import {UserCreationService} from '../user-creation-service';
import {TranslateModule, TranslatePipe, TranslateService} from '@ngx-translate/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-user-creation',
  imports: [CardModule, InputText, FormsModule, TranslatePipe, TranslateModule, NgClass, Button],
  templateUrl: './user-creation.html',
  styleUrl: './user-creation.css'
})
export class UserCreation {
  protected user: UserCreationModel = {
    userName: '',
    email: '',
    password: ''
  };
  showPassword: boolean = false;

  constructor(private _userService: UserCreationService, private translate: TranslateService) {
    console.log(this.translate.instant('userCreation.username')); // should log 'Username'

  }

  onSubmit() {
    this._userService.saveNewUser(this.user).subscribe();
  }
}
