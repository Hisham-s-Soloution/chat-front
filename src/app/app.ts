import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ToastModule} from 'primeng/toast';
import {Loader} from './shared/components/loader/loader';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ToastModule, Loader],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('chat-front');
}
