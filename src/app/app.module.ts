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
import { RestaurantService } from '../providers/restaurant/restaurants.service';
import { TabsPage } from '../pages/tabs/tabs';
import { CartPage } from '../pages/cart/cart'
import { CartService } from '../providers/cart/cart.service';

import { RestaurantDetailPage } from '../pages/restaurant-detail/restaurant-detail';
import { MenuPage } from '../pages/menu/menu';
import { ReviewsPage } from '../pages/reviews/reviews';


@NgModule({
    declarations: [
        MyApp,
        HomePage,
        LoginPage,
        SignupPage,
        WelcomePage,
        RestaurantsPage,
        TabsPage,
        CartPage,
        RestaurantDetailPage,
        MenuPage,
        ReviewsPage
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        IonicModule.forRoot(MyApp, {
            backButtonText: '',
            modalEnter: 'modal-slide-in',
            modalLeave: 'modal-slide-out',
            tabsPlacement: 'bottom',

        })
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        LoginPage,
        SignupPage,
        WelcomePage,
        RestaurantsPage,
        TabsPage,
        CartPage,
        RestaurantDetailPage,
        MenuPage,
        ReviewsPage
    ],
    providers: [
        RestaurantService,
        CartService,
        StatusBar,
        SplashScreen,
        {provide:  ErrorHandler, useClass: IonicErrorHandler},
    ]
})
export class AppModule {}
