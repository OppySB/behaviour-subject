import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {CreateArticleModule} from "./create-article/create-article.module";
import {CreateArticleComponent} from "./create-article/create-article.component";

@NgModule({
    declarations: [
        AppComponent,
        CreateArticleComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NoopAnimationsModule,
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        CreateArticleModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
