import {Component, OnInit} from '@angular/core';
import {WIQuestionsRepositoryMock} from "../../injectable/w-i-questions-repository-mock.service";
import {ClosedQuestion} from "../model/closed-question.model";

@Component({
  selector: 'app-closed-question-list',
  templateUrl: './closed-question-list.component.html',
  styleUrls: ['./closed-question-list.component.css']
})
export class ClosedQuestionListComponent implements OnInit {

  questions: ClosedQuestion[];
  score: number;
  pointsPerQuestion: number;
  totalQuestions: number;

  constructor(
    private questionsRepository: WIQuestionsRepositoryMock
  ) {
    this.questions = [];
    this.score = 0;
    this.pointsPerQuestion = 1.5;
    this.totalQuestions = 10;
  }

  ngOnInit(): void {
    //this.questions = this.questionsRepository.getRandomQuestions(this.totalQuestions);
  }

  submitAnswers(): void {
    this.questions.forEach(q => q.submitted = true);
    this.score = this.calculateClosedQuestionsScore();
  }

  calculateClosedQuestionsScore(): number {
    let ret = 0;
    this.questions.forEach(q => {
      if (q.selected === q.correctAnswer) {
        ret++;
      }
    });
    console.log('dupa: ' + ret);
    return ret * this.pointsPerQuestion;
  }

}
