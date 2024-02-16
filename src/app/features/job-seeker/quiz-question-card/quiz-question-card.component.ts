import { Component, Input } from '@angular/core';
import { Question } from '../../../core/model/question';
import { TimerComponent } from '../../../shared/timer/timer.component';
import { MultichoicesQuestionComponent } from '../multichoices-question/multichoices-question.component';

@Component({
  selector: 'app-quiz-question',
  standalone: true,
  imports: [
    TimerComponent,
    MultichoicesQuestionComponent
  ],
  templateUrl: './quiz-question-card.component.html',
  styleUrl: './quiz-question-card.component.css'
})
export class QuizQuestionCardComponent {
  @Input({required: true}) question!: Question;
}
