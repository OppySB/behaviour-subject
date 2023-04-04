import {TestBed} from '@angular/core/testing';
import {ArticleStateService} from "./article-state.service";
import {Article} from "../model/Article";


describe('ArticleStateService', () => {
    let articleStateService: ArticleStateService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
            ],
            providers: [
            ],
        });

        articleStateService = TestBed.inject(ArticleStateService);
    });

    describe('1 setSelectedArticleState', () => {
        it('1.0 setSelectedArticleState : call function', () => {
            const article = {
                metadata: "bbb",
                content: "aaaa"
            } as Article;

            articleStateService.setSelectedArticleState(article);

            expect(articleStateService.getSelectedArticleState()).toEqual(article);
        });
    });

});
