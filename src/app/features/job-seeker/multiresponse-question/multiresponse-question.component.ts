import { Component, Input } from '@angular/core';
import { Question } from '../../../core/model/question';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-multiresponse-question',
  standalone: true,
  imports: [
    NgFor
  ],
  templateUrl: './multiresponse-question.component.html',
  styleUrl: './multiresponse-question.component.css'
})
export class MultiresponseQuestionComponent {
  @Input({required: true }) question!: Question;
}
