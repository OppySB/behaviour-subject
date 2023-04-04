import {Component, OnInit} from '@angular/core';
import {ArticleStateService} from "../../common/service/article-state.service";
import {Article} from "../../common/model/Article";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    public disabled: boolean;

    public constructor(public readonly articleStateService: ArticleStateService) {
    }

    public ngOnInit(): void {
        this.disabled = true;
        this.articleStateService.selectedArticleState$.subscribe((article: Article) => {
            if (article.content && article.metadata) {
                this.disabled = !(article.content.length > 0 && article.metadata.length > 0);
            } else {
                this.disabled = true;
            }
        });
    }
}
