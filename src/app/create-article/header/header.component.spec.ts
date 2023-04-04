import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HeaderComponent} from './header.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NO_ERRORS_SCHEMA} from "@angular/core";
import {ArticleStateService} from "../../common/service/article-state.service";

describe('HeaderComponent', () => {
    let component: HeaderComponent;
    let fixture: ComponentFixture<HeaderComponent>;
    let articleStateService: ArticleStateService;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [HeaderComponent],
            imports: [MatFormFieldModule,
                MatInputModule, BrowserAnimationsModule],
            schemas: [NO_ERRORS_SCHEMA]
        })
            .compileComponents();

        fixture = TestBed.createComponent(HeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();

        articleStateService = TestBed.inject(ArticleStateService);
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
    describe("ngOnInit", () => {
        it('ngOnInit no change in article state', () => {
            component.ngOnInit();
            expect(component.disabled).toEqual(true);
        });
        it('ngOnInit change in article state, still disabled', () => {
            articleStateService.setSelectedArticleState({content: "a"});
            component.ngOnInit();
            expect(component.disabled).toEqual(true);
        });
        it('ngOnInit change in article state, not disabled', () => {
            articleStateService.setSelectedArticleState({content: "a", metadata: "a"});
            component.ngOnInit();
            expect(component.disabled).toEqual(false);
        });
    });

});
