import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { Article } from "../model/Article";

@Injectable({
    providedIn: 'root'
})
export class ArticleStateService {

    public readonly selectedArticleState$ = new BehaviorSubject<Article>([] as Article);
    private selectedArticleState: Article = {} as Article;

    public constructor() {
    }

    /**
     * set the current article
     * @param value
     */
    public setSelectedArticleState(value: Article): void {
        this.selectedArticleState = value;
        this.selectedArticleState$.next(this.selectedArticleState);
    }

    /**
     * Récupère le référentiel courant
     */
    public getSelectedArticleState(): Article {
        return <Article>this.selectedArticleState;
    }
}
