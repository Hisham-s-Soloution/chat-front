import {HttpErrorResponse, HttpInterceptorFn} from '@angular/common/http';
import {inject} from '@angular/core';
import {ErrorHandlerService} from '../services/error-handler-service';
import {catchError, throwError} from 'rxjs';

export const httpErrorInterceptor: HttpInterceptorFn = (req, next) => {

  const errorHandler = inject(ErrorHandlerService);
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      errorHandler.handleError(error);
      return throwError(() => error);
    })
  );
};
