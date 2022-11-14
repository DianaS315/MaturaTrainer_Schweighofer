import { Injectable } from '@angular/core';

export class Question {
  constructor(
    public q: String = '',
    public isTrue: boolean = false,
    public isFalse: boolean = false
  ) {}
}
@Injectable({
  providedIn: 'root',
})
export class QuestionsService {
  public questions: Question[];
  public question = new Question('', false, false);
  public filterInput: string = '';
  constructor() {
    this.questions = [
      new Question('Molasses runs with a speed of 35 mp/h', true, false),
      new Question('Should I quit school?', false, true),
      new Question('I can find a job after i am done with HAK.', true, false),
      new Question('Angular Material makes applications look pretty.', true, false),
      new Question('Google Translate is a good way of translating any kind of written text.', false, true)
    ];
  }

  public addQuestion(): void {
    this.question = new Question();
    this.questions.push(this.question);
  }

  public getQuestions(): Question[] {
    let result: Question[] = this.questions;
    this.filterInput.toLowerCase();
    if (this.filterInput != '') {
      result = result.filter((question) =>
        question.q.toLowerCase().includes(this.filterInput.toLocaleLowerCase())
      );
    }
    return result;
  }

  public deleteQuestion(question: Question): void {
    for (let i = 0; i < this.questions.length; i++) {
      if (this.questions[i].q === question.q) {
        this.questions.splice(i, 1);
      }
    }
  }

  public changeValidity(question: Question): void {
    for (let i = 0; i < this.questions.length; i++) {
      if (this.questions[i + 1].q === question.q) {
        this.questions[i + 1].isTrue = !this.questions[i + 1].isTrue;
        this.questions[i + 1].isFalse = !this.questions[i+1].isFalse;
      }
    }
  }


}
