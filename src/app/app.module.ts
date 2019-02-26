import { BrowserModule,Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ScrollitemComponent } from './scrollitem/scrollitem.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderHighlightDirective } from './highlight.directive';
import { TimelineComponent } from './timeline/timeline.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    
    FooterComponent,
    HeaderHighlightDirective,
    TimelineComponent,
    LoginComponent, 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
