import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ArticleStateService} from "../../common/service/article-state.service";
import {Article} from "../../common/model/Article";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
    public contentForm: FormGroup;

    constructor(public articleStateService: ArticleStateService) {
        this.contentForm = new FormGroup({
            content: new FormControl(
                '', [Validators.required])
        });
    }

    public ngOnInit(): void {
        this.contentForm.valueChanges.subscribe(formGroup => {
            const article: Article = this.articleStateService.getSelectedArticleState();
            article.content = formGroup.content;
            this.articleStateService.setSelectedArticleState(article);
        });

    }
}
