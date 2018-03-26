import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Restaurant } from './restaurant/restaurant.model';
import { RestaurantService } from './restaurant/restaurants.service';



@IonicPage()
@Component({
    selector: 'page-restaurants',
    templateUrl: 'restaurants.html',
})
export class RestaurantsPage {
    restaurants: Restaurant[]; //variavel restaurants do tipo Restaurant de restaurant.model

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public restaurantService: RestaurantService,
    ) {
        this.restaurantService.showRestaurants()
        .subscribe(restaurants => this.restaurants = restaurants); //para pegar os valor do arquivo json e salvar na variavel restaurants
    }





}
