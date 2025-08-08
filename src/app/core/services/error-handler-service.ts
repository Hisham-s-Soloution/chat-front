import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {MessageService} from 'primeng/api';
import {HttpErrorResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {
  constructor(
    private router: Router,
    private messageService: MessageService
  ) {}

  handleError(error: HttpErrorResponse): void {
    const status = error.status;
    const message = error?.error.message || error.message || 'An unexpected error occurred.';

    if (status === 0) {
      this.showError('Network error. Please check your connection.');
    } else if (status === 400) {
      this.showError(`Bad request: ${message}`);
    } else if (status === 401) {
      this.showError('Unauthorized. Redirecting to login...');
      this.router.navigate(['/login']);
    } else if (status === 404) {
      this.showError('Resource not found.');
    } else if (status === 500) {
      this.showError('Internal server error. Please try again later.');
    } else {
      this.showError(message);
    }

    console.error('[HTTP ERROR]', error); // Optional dev logging
  }

  private showError(detail: string): void {
    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: detail,
      life: 5000
    });
  }


}
