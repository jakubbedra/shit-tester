import { Component, OnInit } from '@angular/core';
import {OpenQuestion} from "../model/open-question.model";
import {WIQuestionsRepositoryMock} from "../../injectable/w-i-questions-repository-mock.service";

@Component({
  selector: 'app-open-question-list',
  templateUrl: './open-question-list.component.html',
  styleUrls: ['./open-question-list.component.css']
})
export class OpenQuestionListComponent implements OnInit {

  questions: OpenQuestion[];

  constructor(
    private questionsRepository: WIQuestionsRepositoryMock
  ) {
    this.questions = [];
  }

  ngOnInit(): void {
    //this.questions = this.questionsRepository.getRandomOpenQuestions(2);
  }

  submitAnswers(): void {
    this.questions.forEach(q => q.submitted = true);
  }

}
