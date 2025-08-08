import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private loading = new BehaviorSubject<boolean>(false);
  public readonly loading$ = this.loading.asObservable();
  private requests = 0;


  show(): void {
    this.requests++;
    this.loading.next(true);
  }


  hide(): void {
    debugger
    this.requests = Math.max(0, this.requests - 1);
    if (this.requests === 0) {
      this.loading.next(false);
    }
  }

  reset(): void {
    this.requests = 0;
    this.loading.next(false);
  }
}
