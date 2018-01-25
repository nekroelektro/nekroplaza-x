import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { ArticleDetailsBannerComponent } from './article-details/article-details-banner/article-details-banner.component';
import { AppRoutingModule } from './/app-routing.module';
import { ConfigurationComponent } from './configuration/configuration.component';


@NgModule({
  declarations: [
    AppComponent,
    ArticleDetailsComponent,
    ArticleDetailsBannerComponent,
    ConfigurationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
