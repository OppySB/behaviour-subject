import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateArticleComponent } from './create-article.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NO_ERRORS_SCHEMA} from "@angular/core";

describe('CreateArticleComponent', () => {
  let component: CreateArticleComponent;
  let fixture: ComponentFixture<CreateArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateArticleComponent ],
        imports: [ MatFormFieldModule,
            MatInputModule, BrowserAnimationsModule],
        schemas :[NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
