import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: ':lang',
    children: [
      {
        path: 'user-creation',
        loadComponent: () => import('./features/user-creation/user-creation/user-creation').then(m => m.UserCreation)
      },
      {
        path: 'users',
        loadComponent: () => import('./features/user-list/user-list/user-list').then(m => m.UserList)
      }
    ]
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'en'
  }
];
