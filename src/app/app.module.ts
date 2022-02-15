import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OpenQuestionListComponent } from './questions/open-question-list/open-question-list.component';
import { ClosedQuestionListComponent } from './questions/closed-question-list/closed-question-list.component';
import {WIQuestionsRepositoryMock} from "./injectable/w-i-questions-repository-mock.service";
import { OpenQuestionComponent } from './questions/open-question/open-question.component';
import { ClosedQuestionComponent } from './questions/closed-question/closed-question.component';
import { ExamComponent } from './exam/exam.component';
import { LebiedzQuestionComponent } from './questions/lebiedz-question/lebiedz-question.component';
import { LebiedzQuestionListComponent } from './questions/lebiedz-question-list/lebiedz-question-list.component';

@NgModule({
  declarations: [
    AppComponent,
    OpenQuestionListComponent,
    ClosedQuestionListComponent,
    OpenQuestionComponent,
    ClosedQuestionComponent,
    ExamComponent,
    LebiedzQuestionComponent,
    LebiedzQuestionListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    WIQuestionsRepositoryMock
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
