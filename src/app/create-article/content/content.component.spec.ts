import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ContentComponent} from './content.component';
import {MatFormField, MatFormFieldModule} from "@angular/material/form-field";
import {NO_ERRORS_SCHEMA} from "@angular/core";
import {MatInputModule} from "@angular/material/input";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {Article} from "../../common/model/Article";
import {ArticleStateService} from "../../common/service/article-state.service";

describe('ContentComponent', () => {
    let component: ContentComponent;
    let fixture: ComponentFixture<ContentComponent>;
    let articleStateService: ArticleStateService;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ContentComponent],
            imports: [MatFormFieldModule,
                MatInputModule, BrowserAnimationsModule],
            schemas: [NO_ERRORS_SCHEMA]
        })
            .compileComponents();

        fixture = TestBed.createComponent(ContentComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        articleStateService = TestBed.inject(ArticleStateService);
    });

    it('should create', () => {
        expect(component).toBeTruthy();
        expect(component.contentForm.get("content").value).toEqual("");
    });

    it('ngOnInit', () => {
        component.ngOnInit();
        component.contentForm.get('content').setValue('aaaa');
        expect(articleStateService.getSelectedArticleState()).toEqual({content: "aaaa"} as Article);
    });
});
