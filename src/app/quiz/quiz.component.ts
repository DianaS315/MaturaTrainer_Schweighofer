import { Component } from '@angular/core';
import { Question, QuestionsService } from '../questions/questions.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
})
export class QuizComponent {
  public question: String = '';
  public isTrue: boolean = false;
  public isFalse: boolean = false;
  public pickedTrue: boolean = false;
  public pickedFalse: boolean = false;

  public answeredCorrectly: boolean = false;
  public answeredIncorrectly: boolean = false;
  public amountOfQuestionsAnsweredCorrectly: number = 0;
  public amountOfQuestionsAnsweredIncorrectly: number = 0;

  constructor(public questions: QuestionsService) {
    this.newRandomQuestion();
  }

  public newRandomQuestion() {
    const questions: Question[] = this.questions.getQuestions();
    const randomNumberIndex: number = Math.floor(
      Math.random() * questions.length
    );

    this.question = questions[randomNumberIndex].q;
    this.isTrue = questions[randomNumberIndex].isTrue;
    this.isFalse = questions[randomNumberIndex].isFalse;

    this.answeredCorrectly = false;
    this.answeredIncorrectly = false;
    this.pickedTrue = false;
    this.pickedFalse = false;
  }

  public changeValidity(question: Question): void {
    for (let i = 0; i < this.questions.questions.length; i++) {
      if (this.questions.questions[i + 1].q === question.q) {
        this.questions.questions[i + 1].isTrue =
          !this.questions.questions[i + 1].isTrue;
        this.questions.questions[i + 1].isFalse =
          !this.questions.questions[i + 1].isFalse;
      }
    }
  }
  public checkAnswer() {
    if (this.pickedTrue === this.isTrue && this.pickedFalse === this.isFalse) {
      this.answeredCorrectly = true;
      this.amountOfQuestionsAnsweredCorrectly ++
       } else {
      this.answeredIncorrectly = true;
      this.amountOfQuestionsAnsweredIncorrectly ++
    }
  }

  public resetScore(){
    this.amountOfQuestionsAnsweredCorrectly = 0;
    this.amountOfQuestionsAnsweredIncorrectly = 0;
  }

}
