import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';




@IonicPage()
@Component({
    selector: 'page-tabs',
    templateUrl: 'tabs.html'
})
export class TabsPage {


    //restaurantRoot = 'RestaurantDetailPage';
    menuRoot = 'MenuPage';
    reviewsRoot = 'ReviewsPage';


    constructor( ) {


    }

}
