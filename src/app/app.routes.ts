import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: ':lang',
    children: [
      {
        path: 'user-creation',
        loadComponent: () => import('./features/user-creation/user-creation/user-creation').then(m => m.UserCreation)
      }
    ]
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'en'
  }
];
