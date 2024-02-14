import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TuiMarkerIconModule } from '@taiga-ui/kit';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [
    TuiMarkerIconModule,
    RouterModule
  ],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export class QuizComponent {

}
