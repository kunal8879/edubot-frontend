import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

// Angular Material imports
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MenuComponent } from './menu/menu.component';
import { UserListComponent } from './user-list/user-list.component';
import { UnansweredQuestionsComponent } from './unanswered-questions/unanswered-questions.component';
import { MoodleComponent } from './moodle/moodle.component';
import { LoginComponent } from './menu/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatbotComponent,
    MenuComponent,
    UserListComponent,
    UnansweredQuestionsComponent,
    MoodleComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'moodle', component: MoodleComponent},
      {path: 'login', component: LoginComponent},
      {path: 'menu', component: MenuComponent},
      {path: 'unanswered-questions', component: UnansweredQuestionsComponent},
      {path: 'user-list', component: UserListComponent},
    ]),

    // Angular Material imports
    BrowserAnimationsModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
