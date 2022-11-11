import { Component } from '@angular/core';
import { filter } from 'rxjs';
import { QuestionsService } from './questions.service';


@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css'],
})
export class QuestionsComponent {

  constructor(public questions: QuestionsService) {}
  }
