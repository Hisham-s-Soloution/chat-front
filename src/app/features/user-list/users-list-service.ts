import { Injectable } from '@angular/core';
import {ApiService} from '../../core/services/api-service';

@Injectable({
  providedIn: 'root'
})
export class UsersListService {
  private getAllUsersUrl: string = 'chat-rooms/users';

  constructor(private _apiService: ApiService) {}

  getAllUsers(){
    return this._apiService.get<any>(this.getAllUsersUrl);
  }
}
