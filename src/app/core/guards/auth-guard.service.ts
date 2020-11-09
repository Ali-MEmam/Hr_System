import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from "@angular/router";
import { Injectable } from "@angular/core";
import { AuthService } from "../../../services/core-services/authentication-services/auth.service";

@Injectable({ providedIn: "root" })
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let loginStat = this.authService.isAuthenticated();
    if (loginStat) {
      return true;
    } else {
      this.router.navigate([""], {
        queryParams: { returnUrl: state.url },
      });
    }
  }
}
