import { Component, Input } from '@angular/core';
import { Question } from '../../../core/model/question';
import { TimerComponent } from '../../../shared/timer/timer.component';
import { MultichoicesQuestionComponent } from '../multichoices-question/multichoices-question.component';
import { QuestionType } from '../../../core/enums/questio-type';
import { MultiresponseQuestionComponent } from '../multiresponse-question/multiresponse-question.component';
import { TrueFalseQuestionComponent } from '../true-false-question/true-false-question.component';

@Component({
  selector: 'app-quiz-question',
  standalone: true,
  imports: [
    TimerComponent,
    MultichoicesQuestionComponent,
    MultiresponseQuestionComponent,
    TrueFalseQuestionComponent
  ],
  templateUrl: './quiz-question-card.component.html',
  styleUrl: './quiz-question-card.component.css'
})
export class QuizQuestionCardComponent {
  @Input({ required: true }) question!: Question;
  multiChoice: QuestionType = QuestionType.MULTIPLE_CHOICE;
  multiResponse: QuestionType = QuestionType.MULTIPLE_RESPONSE;
  trueFalse: QuestionType = QuestionType.TRUE_FALSE;
}
