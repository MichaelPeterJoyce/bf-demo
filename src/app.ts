// Load dependencies
import angular from 'angular';
import '@uirouter/angularjs';
import './style.css';

// Load the modules needed for the app
import './shared/shared.module';
import './profile/profile.module';

// Load external CSS
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