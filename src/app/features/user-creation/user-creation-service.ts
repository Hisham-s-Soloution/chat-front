import { Injectable } from '@angular/core';
import {ApiService} from '../../core/services/api-service';
import {UserCreationModel} from '../../shared/types/user-creation/user-creation.model';

@Injectable({
  providedIn: 'root'
})
export class UserCreationService {
  private saveUserUrl: string = 'user';

  constructor(private _apiService: ApiService) {}

  saveNewUser(userCreationRequest: UserCreationModel){
    return this._apiService.post<any>(this.saveUserUrl, userCreationRequest);
  }

}
