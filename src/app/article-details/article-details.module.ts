import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ArticleCommentsComponent } from './article-comments/article-comments.component';
import { ArticleLastComponent } from './article-last/article-last.component';
import { ArticleContentComponent } from './article-content/article-content.component';


@NgModule({
  declarations: [
    
  ArticleCommentsComponent,
    
  ArticleLastComponent,
    
  ArticleContentComponent],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
