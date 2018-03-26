import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { WelcomePage } from '../pages/welcome/welcome';
import { RestaurantsPage } from '../pages/restaurants/restaurants';
import { RestaurantService } from '../pages/restaurants/restaurant/restaurants.service';
import { RestaurantDetailPage } from '../pages/restaurant-detail/restaurant-detail';
import { TabsPage } from '../pages/tabs/tabs';


@NgModule({
    declarations: [
        MyApp,
        HomePage,
        LoginPage,
        SignupPage,
        WelcomePage,
        RestaurantsPage,
       RestaurantDetailPage,
        TabsPage
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        LoginPage,
        SignupPage,
        WelcomePage,
        RestaurantsPage,
       RestaurantDetailPage,
        TabsPage
    ],
    providers: [
        RestaurantService,
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
})
export class AppModule {}
