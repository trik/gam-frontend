import { ChangeDetectionStrategy, Component, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

import { AuthService } from '@gngt/core/auth';

@Component({
  selector: 'gam-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class LoginComponent implements OnDestroy {
  private _routeSub: Subscription = Subscription.EMPTY;

  constructor(authService: AuthService, router: Router) {
    this._routeSub = authService.getCurrentUser().pipe(
      filter(u => u != null),
    ).subscribe(_ => router.navigateByUrl('/', {replaceUrl: true}));
  }

  ngOnDestroy(): void {
    this._routeSub.unsubscribe();
  }
}
