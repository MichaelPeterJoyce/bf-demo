import angular from 'angular';
import '@uirouter/angularjs';

// Import your app stylesheets
import './style.css';

// Import your app functionality
import './profile/profile.module';

// Create and bootstrap application
const requires = [
    'ui.router',
    'profile'
];

(<any>window).app = angular.module('app', requires);

angular.bootstrap(<any>document.getElementById('app'), [ 'app' ]);