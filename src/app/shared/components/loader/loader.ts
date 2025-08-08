import {Component, OnInit} from '@angular/core';
import {LoaderService} from '../../../core/services/loader-service';
import {Observable} from 'rxjs';
import {AsyncPipe, NgIf} from '@angular/common';

@Component({
  selector: 'app-loader',
  imports: [
    NgIf,
    AsyncPipe
  ],
  templateUrl: './loader.html',
  styleUrl: './loader.css'
})
export class Loader implements OnInit {
  loading$!: Observable<boolean>;

  constructor(private loaderService: LoaderService) {}

  ngOnInit(): void {
    this.loading$ = this.loaderService.loading$;
  }
}
