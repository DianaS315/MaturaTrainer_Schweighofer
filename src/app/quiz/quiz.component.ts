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
  constructor(public questions: QuestionsService) {}

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

  public checkAnswer() {
    if (this.pickedTrue === this.isTrue && this.pickedFalse === this.isFalse) {
      this.answeredCorrectly = true;
    } else {
      this.answeredIncorrectly = true;
    }
  }
}
