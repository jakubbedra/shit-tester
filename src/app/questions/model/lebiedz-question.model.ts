export class LebiedzQuestion {
  public content: string;
  public answers: string[];
  public correctAnswer: number;
  public selectedAnswers: number[];
  public submitted: boolean;

  constructor(content: string, answers: string[], correctAnswer: number) {
    this.content = content;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
    this.selectedAnswers = [];
    this.submitted = false;
  }

}
