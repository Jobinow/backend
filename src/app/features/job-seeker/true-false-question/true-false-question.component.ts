import { Component, Input } from '@angular/core';
import { Question } from '../../../core/model/question';

@Component({
  selector: 'app-true-false-question',
  standalone: true,
  imports: [],
  templateUrl: './true-false-question.component.html',
  styleUrl: './true-false-question.component.css'
})
export class TrueFalseQuestionComponent {
  @Input({ required: true }) question!: Question;
}
