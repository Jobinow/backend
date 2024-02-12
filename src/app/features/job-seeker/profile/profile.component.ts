import { Component } from '@angular/core';
import { TuiButtonModule } from '@taiga-ui/core';
import { TuiMarkerIconModule } from '@taiga-ui/kit';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    TuiButtonModule,
    TuiMarkerIconModule
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

}
