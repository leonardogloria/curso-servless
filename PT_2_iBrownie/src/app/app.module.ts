import {NgModule} from "@angular/core";
import {IonicApp, IonicModule} from "ionic-angular";
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {IonicStorageModule} from '@ionic/storage';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {Keyboard} from '@ionic-native/keyboard';

import {ActivityService} from "../services/activity-service";
import {TripService} from "../services/trip-service";
import {WeatherProvider} from "../services/weather";

import {MyApp} from "./app.component";

import {SettingsPage} from "../pages/settings/settings";
import {CheckoutTripPage} from "../pages/checkout-trip/checkout-trip";
import {HomePage} from "../pages/home/home";
import {LoginPage} from "../pages/login/login";
import {NotificationsPage} from "../pages/notifications/notifications";
import {RegisterPage} from "../pages/register/register";
import {SearchLocationPage} from "../pages/search-location/search-location";
import {TripDetailPage} from "../pages/trip-detail/trip-detail";
import {TripsPage} from "../pages/trips/trips";
import {LocalWeatherPage} from "../pages/local-weather/local-weather";

// import services
import { BrownieService } from '../services/brownie-service';
import {UserService} from '../services/user-service';
import { OrderService } from '../services/order-service';
import { CognitoUtil } from '../services/cognito.service';
import { UserRegistrationService } from '../services/userRegistration.service';
import { UserLoginService } from '../services/userLogin.service';
// end import services

// import pages
import { ConfirmationRegisterPage } from '../pages/confirmation-register/confirmation-register';
import { ListBrowniePage } from '../pages/list-brownie/list-brownie';
import { BrownieDetailPage } from '../pages/brownie-detail/brownie-detail';
import { OrderListPage } from '../pages/order-list/order-list';
import { ChangePassPage } from '../pages/change-pass/change-pass';
// end import pages

@NgModule({
  declarations: [
    MyApp,
    SettingsPage,
    CheckoutTripPage,
    HomePage,
    LoginPage,
    LocalWeatherPage,
    NotificationsPage,
    RegisterPage,
    SearchLocationPage,
    TripDetailPage,
    TripsPage,
    ConfirmationRegisterPage,
    ListBrowniePage,
    BrownieDetailPage,
    OrderListPage,
    ChangePassPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp, {
      scrollPadding: false,
      scrollAssist: true,
      autoFocusAssist: false
    }),
    IonicStorageModule.forRoot({
      name: '__ionic3_start_theme',
        driverOrder: ['indexeddb', 'sqlite', 'websql']
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SettingsPage,
    CheckoutTripPage,
    HomePage,
    LoginPage,
    LocalWeatherPage,
    NotificationsPage,
    RegisterPage,
    SearchLocationPage,
    TripDetailPage,
    TripsPage,
    ConfirmationRegisterPage,
    ListBrowniePage,
    BrownieDetailPage,
    OrderListPage,
    ChangePassPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    Keyboard,
    ActivityService,
    TripService,
    WeatherProvider,
    BrownieService,
    UserService,
    OrderService,
    CognitoUtil,
    UserRegistrationService,
    UserLoginService
  ]
})

export class AppModule {
}
