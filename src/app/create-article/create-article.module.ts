import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {CreateArticleComponent} from "./create-article.component";
import {MatMenuModule} from "@angular/material/menu";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {ContentComponent} from "./content/content.component";
import {HeaderComponent} from "./header/header.component";
import {MetadataComponent} from "./metadata/metadata.component";
import {MatTabsModule} from "@angular/material/tabs";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
    declarations: [
        CreateArticleComponent,
        ContentComponent,
        HeaderComponent,
        MetadataComponent,
    ],
    exports: [
        CreateArticleComponent
    ],
    imports: [
        CommonModule,
        MatMenuModule,
        MatIconModule,
        MatButtonModule,
        MatCardModule,
        MatTabsModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule
    ]
})
export class CreateArticleModule {

}
