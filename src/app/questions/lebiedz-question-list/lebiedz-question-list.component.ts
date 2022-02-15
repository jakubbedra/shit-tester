import {Component, OnInit} from '@angular/core';
import {WIQuestionsRepositoryMock} from "../../injectable/w-i-questions-repository-mock.service";
import {LebiedzQuestion} from "../model/lebiedz-question.model";

@Component({
  selector: 'app-lebiedz-question-list',
  templateUrl: './lebiedz-question-list.component.html',
  styleUrls: ['./lebiedz-question-list.component.css']
})
export class LebiedzQuestionListComponent implements OnInit {

  questions: LebiedzQuestion[];
  score: number;
  correctAnswerPoints: number;
  wrongAnswerPoints: number;
  totalQuestions: number;

  constructor(
    private questionsRepository: WIQuestionsRepositoryMock
  ) {
    this.questions = [];
    this.score = 0;
    this.correctAnswerPoints = 3;
    this.wrongAnswerPoints = -1;
    this.totalQuestions = 10;
  }

  ngOnInit(): void {
    this.questions = this.questionsRepository.getRandomQuestions(this.totalQuestions);
  }

  submitAnswers(): void {
    this.questions.forEach(q => q.submitted = true);
    this.score = this.calculateClosedQuestionsScore();
  }

  calculateClosedQuestionsScore(): number {
    let ret = 0;
    this.questions.forEach(q => {
      for (let lebiedzChuj of q.selectedAnswers) {
        if (lebiedzChuj === q.correctAnswer) {
          ret += this.correctAnswerPoints;
        } else {
          ret += this.wrongAnswerPoints;
        }
      }
    });
    console.log('dupa: ' + ret);
    return ret;
  }

}
