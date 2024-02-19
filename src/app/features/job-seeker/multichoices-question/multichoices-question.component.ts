import { Component, Input } from '@angular/core';
import { Question } from '../../../core/model/question';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-multichoices-question',
  standalone: true,
  imports: [
    NgFor
  ],
  templateUrl: './multichoices-question.component.html',
  styleUrl: './multichoices-question.component.css'
})
export class MultichoicesQuestionComponent {
  @Input({ required: true }) question!: Question;
}
