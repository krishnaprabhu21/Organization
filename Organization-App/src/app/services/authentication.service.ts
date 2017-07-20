import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/filter';
import { CookieService } from 'ngx-cookie';
import Auth0Lock from 'auth0-lock';
import { JwtHelper } from 'angular2-jwt';

@Injectable()
export class AuthServiceService {
    authResult: any = {};
    jwtHelper: JwtHelper = new JwtHelper();
    public userProfile: any

    //lock configuration for custom login/sign up pages
    options = {
        additionalSignUpFields: [{
            name: "address",
            placeholder: "enter your address",
            // The following properties are optional 
            icon: "https://example.com/assests/address_icon.png",
            prefill: "street 123",
            validator: function (address) {
                return {
                    valid: address.length >= 10,
                    hint: "Must have 10 or more chars" // optional 
                };
            }
        },
        {
            type: "select",
            name: "location",
            placeholder: "choose your location",
            options: [
                { value: "us", label: "United States" },
                { value: "fr", label: "France" },
                { value: "ar", label: "Argentina" }
            ],
            // The following properties are optional 
            prefill: "us"
        },
        {
            type: "checkbox",
            name: "newsletter",
            prefill: "true",
            placeholder: "I hereby agree that I want to receive marketing emails from your company",
        }],
        auth: {
            redirect: true,
            redirectUrl: "http://localhost:4200/",
            responseType: "token"
        },
        theme: {
            logo: 'http://www.freeiconspng.com/download/31',
            primaryColor: '#31324F'
        },
        languageDictionary: {
            title: "Auth0 App"
        },
        rememberLastLogin: false
    }

    //initializing lock
    lock: any = new Auth0Lock(
        'XBGaRjwrDWUO45kJXW5yirXpstPglaVO',         //client id(app id) as provided by auth0
        'nudayabhanu.auth0.com',                    //auth0 account details
        this.options                                //options for custom login/sign up pages
    )

    constructor(public router: Router, private _cookieService: CookieService) {
        this.authResult = this._cookieService.getObject("authResult");
        if (this.authResult)
            this.getProfile(function () { });

        //On login saving token in cookies
        this.lock.on("authenticated", (authResult: any) => {
            this._cookieService.putObject("authResult", authResult);
            this.authResult = authResult;
            //On login loading and saving profile details for future use
            this.getProfile(function () { });
        });

    }

    public getProfile(cb): void {
        //fetching profile details from auth0 server
        const self = this;
        if (this.authResult) {
            if (!this.authResult.accessToken) {
                throw new Error('Access token must exist to fetch profile');
            } else {
                this.lock.getUserInfo(this.authResult.accessToken, function (error: any, profile: any) {
                    self.userProfile = profile;
                    cb(error, profile);
                });
            }
        }
    }

    public login(): void {
        this.lock.show();
    }

    public signUp(): void {
        this.lock.show({ initialScreen: 'signUp' });
    }

    public logout(): void {
        // Remove saved tokens from cookies
        this._cookieService.removeAll();
        this.authResult = null;
        // Go back to the home route
        this.router.navigate(['/']);
    }

    public isAuthenticated(): boolean {
        // Checking if token has expired      
        if (this.authResult && this.authResult.idToken) {
            return !this.jwtHelper.isTokenExpired(this.authResult.idToken);
        } else
            return false;
    }

}