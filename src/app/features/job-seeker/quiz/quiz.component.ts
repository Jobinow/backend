import { Component, OnInit, Signal } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { TuiMarkerIconModule } from '@taiga-ui/kit';
import {AuthBackgroundComponent} from "../../../shared/auth-background/auth-background.component";
import {NgOptimizedImage} from "@angular/common";
import {NavBarComponent} from "../../../shared/nav-bar/nav-bar.component";
import { QuizService } from '../../../core/services/quiz.service';
import { Quiz } from '../../../core/model/quiz';
import { Store } from '@ngrx/store';
import { selectSelectedQuiz } from '../../../core/store/quiz-state/quiz.reducer';

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
export class QuizComponent {

  quiz: Signal<Quiz | null | undefined> = this.store.selectSignal(selectSelectedQuiz);

  constructor(private currentRoute: ActivatedRoute, private store: Store) { }
}
