import {Component, Input, OnInit} from '@angular/core';
import {LebiedzQuestion} from "../model/lebiedz-question.model";

@Component({
  selector: 'app-lebiedz-question',
  templateUrl: './lebiedz-question.component.html',
  styleUrls: ['./lebiedz-question.component.css']
})
export class LebiedzQuestionComponent implements OnInit {

  @Input()
  question: LebiedzQuestion;

  @Input()
  index: number;

  selectedAnswers: number[];
  submitted: boolean;

  constructor() { }

  ngOnInit(): void {
    this.mixQuestion();
  }

  private mixQuestion(): void {
    console.log(this.question);
    let correctAnswerString = this.question.answers[this.question.correctAnswer];
    let answersStrings = [];
    this.question.answers.forEach(a => answersStrings.push(a));
    this.question.answers.splice(0, this.question.answers.length);
    let correctAnswerNewInd = 0;
    let totalAnswers = answersStrings.length;
    for (let i = 0; i < totalAnswers; i++) {
      let ind = Math.floor(Math.random() * answersStrings.length);
      if (answersStrings[ind] === correctAnswerString) {
        correctAnswerNewInd = i;
      }
      this.question.answers.push(answersStrings[ind]);
      answersStrings.splice(ind, 1);
    }
    this.question.correctAnswer = correctAnswerNewInd;
    console.log(this.question);
  }

  public onSelectAnswer(selected: number): void {
    this.question.selectedAnswers.push(selected);
  }

}
