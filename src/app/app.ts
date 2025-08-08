import {Component, OnInit, signal} from '@angular/core';
import {NavigationEnd, Router, RouterOutlet} from '@angular/router';
import {ToastModule} from 'primeng/toast';
import {Loader} from './shared/components/loader/loader';
import {filter} from 'rxjs';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ToastModule, Loader],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  constructor(private router: Router, private translate: TranslateService) {
  }
  ngOnInit(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        const browserLang = window.location.pathname.split('/')[1]; // 'en' or 'ar'
        const lang = ['en', 'ar'].includes(browserLang) ? browserLang : 'en';
        this.translate.use(lang);
        // Update text direction
        document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

        // Optional: update HTML lang attribute for accessibility
        document.documentElement.setAttribute('lang', lang);
      });
  }
  protected readonly title = signal('chat-front');
}
