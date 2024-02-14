import { Component } from '@angular/core';
import {TimerComponent} from "../../../shared/timer/timer.component";
import {RouterLink} from "@angular/router";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-quiz-question',
  standalone: true,
  imports: [
    TimerComponent,
    RouterLink,
    NgOptimizedImage
  ],
  templateUrl: './quiz-question.component.html',
  styleUrl: './quiz-question.component.css'
})
export class QuizQuestionComponent {

}
