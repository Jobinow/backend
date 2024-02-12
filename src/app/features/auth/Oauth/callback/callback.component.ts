import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";
import {AuthenticationService} from "../../../../core/services/authentication.service";

@Component({
  selector: 'app-callback',
  standalone: true,
  imports: [],
  templateUrl: './callback.component.html',
})
export class CallbackComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private authService: AuthenticationService
  ) {
  }

  ngOnInit() {
    console.log('callback');
    this.route.queryParams
      .subscribe(async (params) => {
          if (params["code"] !== undefined) {
            await this.authService.OauthGoogleAuthenticate(params["code"])
          }
        }
      );
  }

}
