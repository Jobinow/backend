import { Component, OnInit } from '@angular/core';
import { TuiButtonModule } from '@taiga-ui/core';
import { TuiBadgedContentModule, TuiMarkerIconModule } from '@taiga-ui/kit';
import { NavBarComponent } from '../../../shared/nav-bar/nav-bar.component';
import { AuthenticationService } from '../../../core/services/authentication.service';
import { RouterModule } from '@angular/router';
import { User } from '../../../core/model/user';
import { QuizService } from '../../../core/services/quiz.service';
import { Quiz } from '../../../core/model/quiz';
import { UserStatus } from '../../../core/enums/user-status';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    TuiButtonModule,
    TuiMarkerIconModule,
    NavBarComponent,
    RouterModule,
    TuiBadgedContentModule
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {

  isUserNotLoaded: boolean = true;
  user!: User;
  quizes!: Quiz[];
  userStatus!: string;

  constructor(private authenticationService: AuthenticationService, private quizService: QuizService) { }

  ngOnInit(): void {
    this.getAuthenticatedUser();
    this.getAllAvailableQuizes();
    this.userStatus = this.user && this.user.status === UserStatus.ONLINE ? 'online' : 'offline'
  }

  getAuthenticatedUser() {
    this.authenticationService.getCurrentAuthenticatedUser().subscribe(res => {
      this.user = res;
      this.isUserNotLoaded = true;
    })
  }

  getAllAvailableQuizes() {
    return this.quizService.getAllQuizes().subscribe(res => {
      this.quizes = res;
      console.log("quizes", res);
    })
  }
}
