import { Component, ViewContainerRef, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AuthService } from 'services/core-services/authentication-services/auth.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',

})
export class AppComponent implements OnInit, OnDestroy {
    urlLink;
    resumeUrl='candidate/new-resume';
    subscription: Subscription;
    constructor(
        private router: Router,private auth:AuthService,
        private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.urlLink=this.router.url
        console.log(this.urlLink);
        console.log(this.resumeUrl);
        
    this.auth.autoLogin()
    
        this.subscription = this.router.events
            .pipe(
                filter(event => event instanceof NavigationEnd)
            )
            .subscribe(() => window.scrollTo(0, 0));
            console.log(this.router.url);
            
    }


    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }



}
