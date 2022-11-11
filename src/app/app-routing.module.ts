import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {QuestionsComponent} from './questions/questions.component'
import { QuizComponent } from './quiz/quiz.component';

const routes: Routes = [
  {path: '', redirectTo: '/questions', pathMatch: 'full'},
  {path:'questions', component: QuestionsComponent},
  {path:'quiz', component: QuizComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
