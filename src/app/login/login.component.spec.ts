import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { Observable, of } from 'rxjs';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { TranslateModule } from '@ngx-translate/core';

import { AuthService } from '@gngt/core/auth';
import { AuthModule } from '@gngt/material/auth';

import { ProjectsMapModule } from '../../common/projects-map';
import { LoginComponent } from './login.component';

class FakeAuthService {
  public getCurrentUser(): Observable<any> { return of({}); }
}

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        RouterTestingModule,
        StoreModule.forRoot({}),
        EffectsModule.forRoot([]),
        TranslateModule.forRoot(),
        AuthModule,
        ProjectsMapModule
      ],
      declarations: [ LoginComponent ],
      providers: [
        { provide: AuthService, useClass: FakeAuthService },
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
