import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Article} from "../../common/model/Article";
import {ArticleStateService} from "../../common/service/article-state.service";

@Component({
    selector: 'app-metadata',
    templateUrl: './metadata.component.html',
    styleUrls: ['./metadata.component.scss']
})
export class MetadataComponent implements OnInit {
    public metadataForm: FormGroup;

    constructor(public articleStateService: ArticleStateService) {
        this.metadataForm = new FormGroup({
            metadata: new FormControl(
                '', [Validators.required])
        });
    }

    public ngOnInit(): void {
        this.metadataForm.valueChanges.subscribe(formGroup => {
            const article: Article = this.articleStateService.getSelectedArticleState();
            article.metadata = formGroup.metadata;
            this.articleStateService.setSelectedArticleState(article);
        });

    }
}
