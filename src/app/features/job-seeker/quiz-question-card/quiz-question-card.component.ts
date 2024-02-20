import {Component, OnInit, Signal} from '@angular/core';
import {Question} from '../../../core/model/question';
import {TimerComponent} from '../../../shared/timer/timer.component';
import {MultichoicesQuestionComponent} from '../multichoices-question/multichoices-question.component';
import {MultiresponseQuestionComponent} from '../multiresponse-question/multiresponse-question.component';
import {TrueFalseQuestionComponent} from '../true-false-question/true-false-question.component';
import {Store} from "@ngrx/store";
import {Quiz} from "../../../core/model/quiz";
import {selectSelectedQuiz} from "../../../core/store/quiz-state/quiz.reducer";
import {QuestionType} from "../../../core/enums/question-type";

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
export class QuizQuestionCardComponent implements OnInit {

  constructor(private store: Store) {
  }

  quiz: Signal<Quiz | undefined> = this.store.selectSignal(selectSelectedQuiz);

  currentQuestionIndex = 1;
  currentQuestion = this.quiz()?.questions[this.currentQuestionIndex - 1] as Question;

  FULL_DASH_ARRAY = 283;
  WARNING_THRESHOLD = 1 / 2;
  ALERT_THRESHOLD = 1 / 4;

  COLOR_CODES = {
    info: {color: "green"},
    warning: {color: "orange", threshold: this.WARNING_THRESHOLD},
    alert: {color: "red", threshold: this.ALERT_THRESHOLD}
  };

  TIME_LIMIT = 30;
  timePassed = 0;
  countDown = 30;
  remainingPathColor = 'base-timer__path-remaining ' + this.COLOR_CODES.info.color;
  timeLeft = 30;
  displayTime = '00:00';
  dashArray = '283';

  timer: NodeJS.Timeout | undefined = undefined;

  async ngOnInit() {
    this.countDown = this.currentQuestion.time
    this.TIME_LIMIT = this.currentQuestion.time;
    this.displayTime = this.formattedTime(this.countDown);
    await this.countDownTimer();
  }

  formattedTime(countDown: number): string {
    const minutes = Math.floor(countDown / 60);
    let seconds: number | string = countDown % 60;
    if (seconds < 10)
      seconds = `0${seconds}`;
    return `${minutes}:${seconds}`;
  }

  getDashArray() {
    const rawTimeFraction = this.timeLeft / this.TIME_LIMIT;
    const fraction = rawTimeFraction - (1 / this.TIME_LIMIT) * (1 - rawTimeFraction);
    return `${(fraction * this.FULL_DASH_ARRAY).toFixed(0)} 283`;
  }

  setRemainingPathColor(timeLeft: number, baseTime: number) {
    const {alert, warning} = this.COLOR_CODES;
    if (timeLeft <= Math.floor(baseTime * this.ALERT_THRESHOLD))
      this.remainingPathColor = 'base-timer__path-remaining ' + alert.color;
    else if (timeLeft <= Math.floor(baseTime * this.WARNING_THRESHOLD))
      this.remainingPathColor = 'base-timer__path-remaining ' + warning.color;
  }

  incrementCurrentQuestion = () => {
    return new Promise((resolve) => {
      this.currentQuestionIndex++;
      this.currentQuestion = this.quiz()?.questions[this.currentQuestionIndex - 1] as Question;
      this.countDown = this.currentQuestion.time;
      this.TIME_LIMIT = this.currentQuestion.time;
      this.displayTime = this.formattedTime(this.countDown);
      resolve(this);
    });
  };

  async setDefaultTimer() {
    return new Promise((resolve) => {
      this.dashArray = '283';
      this.timePassed = 0;
      this.remainingPathColor = 'base-timer__path-remaining ' + this.COLOR_CODES.info.color;
      resolve(this);
    });
  }

  handleQuizEnd() {
    console.log('quiz end');
    clearTimeout(this.timer);
  }

  async handleNextQuestion() {
    await new Promise((resolve) => {
        this.incrementCurrentQuestion()
        this.countDownTimer();
        resolve(this);
      }
    );
  }

  async countDownTimer() {
    if (this.countDown > 0)
      this.timer = setTimeout(() => {
        this.countDown--;
        this.timePassed+= 1;
        this.timeLeft = this.TIME_LIMIT - this.timePassed;
        this.displayTime = this.formattedTime(this.countDown);
        this.setRemainingPathColor(this.timeLeft, this.TIME_LIMIT);
        this.dashArray = this.getDashArray();
        this.countDownTimer();
      }, 1000);
    else if (this.countDown === 0) {
      await this.setDefaultTimer();

      if (this.currentQuestionIndex === this.quiz()?.questions.length)
        this.handleQuizEnd();
      else
        await this.handleNextQuestion();

    } else
      clearTimeout(this.timer);
  }


  /**
   * switch component based on question type
   */
  multiChoice: QuestionType = QuestionType.MULTIPLE_CHOICE;
  multiResponse: QuestionType = QuestionType.MULTIPLE_RESPONSE;
  trueFalse: QuestionType = QuestionType.TRUE_FALSE;
}
