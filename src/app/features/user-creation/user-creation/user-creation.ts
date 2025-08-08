import {Component} from '@angular/core';
import {CardModule} from "primeng/card";
import {InputText} from "primeng/inputtext";
import {Button} from "primeng/button";
import {FormsModule} from '@angular/forms';
import {UserCreationModel} from '../../../shared/types/user-creation/user-creation.model';
import {UserCreationService} from '../user-creation-service';
import {TranslateModule, TranslatePipe, TranslateService} from '@ngx-translate/core';
import {NgClass} from '@angular/common';
import {Router} from '@angular/router';
import {TranslationService} from '../../../core/i18n/translation-service';

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

  constructor(
    private _userService: UserCreationService,
    private _router: Router,
    private _translate: TranslationService,
    private _translateService: TranslateService,
  ) {
    console.log(this._translate.getCurrentLanguage())
    console.log(this._translateService.instant('userCreation.username')); // should log 'Username'
  }

  onSubmit() {
    this._userService.saveNewUser(this.user).subscribe(() => {
      this._router.navigate([this._translate.getCurrentLanguage() + '/users']);
    });

  }
}
