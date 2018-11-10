import angular from 'angular';
import '@uirouter/angularjs';
import './style.css';
import './shared/shared.module';
import './profile/profile.module';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Create and bootstrap application
const requires = [
    'ui.router',
    'profile',
    'shared'
];

(<any>window).app = angular.module('app', requires);

angular.bootstrap(<any>document.getElementById('app'), [ 'app' ]);