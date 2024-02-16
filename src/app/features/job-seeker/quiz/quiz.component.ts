import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { TuiMarkerIconModule } from '@taiga-ui/kit';
import {AuthBackgroundComponent} from "../../../shared/auth-background/auth-background.component";
import {NgOptimizedImage} from "@angular/common";
import {NavBarComponent} from "../../../shared/nav-bar/nav-bar.component";
import { QuizService } from '../../../core/services/quiz.service';
import { Quiz } from '../../../core/model/quiz';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [
    TuiMarkerIconModule,
    RouterModule,
    AuthBackgroundComponent,
    NgOptimizedImage,
    NavBarComponent
  ],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export class QuizComponent implements OnInit {

  quiz!: Quiz;

  constructor(private currentRoute: ActivatedRoute, private quizService: QuizService) { }
  ngOnInit(): void {
    this.currentRoute.params.subscribe(({ id }) => {
      this.quizService.getQuiz(id).subscribe(res => {
        this.quiz = res;
      })
    })
  }
}
