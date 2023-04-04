import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MetadataComponent} from './metadata.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NO_ERRORS_SCHEMA} from "@angular/core";
import {ArticleStateService} from "../../common/service/article-state.service";
import {Article} from "../../common/model/Article";

describe('MetadataComponent', () => {
    let component: MetadataComponent;
    let fixture: ComponentFixture<MetadataComponent>;
    let articleStateService: ArticleStateService;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [MetadataComponent],
            imports: [MatFormFieldModule,
                MatInputModule, BrowserAnimationsModule],
            schemas: [NO_ERRORS_SCHEMA]
        })
            .compileComponents();

        fixture = TestBed.createComponent(MetadataComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        articleStateService = TestBed.inject(ArticleStateService);
    });

    it('should create', () => {
        expect(component).toBeTruthy();
        expect(component.metadataForm.get("metadata").value).toEqual("");
    });

    it('ngOnInit', () => {
        component.ngOnInit();
        component.metadataForm.get('metadata').setValue('aaaa');
        expect(articleStateService.getSelectedArticleState()).toEqual({metadata: "aaaa"} as Article);
    });
});
