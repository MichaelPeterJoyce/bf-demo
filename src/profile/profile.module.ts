import angular from 'angular';

// Create the module where our functionality can attach to
let profileModule = angular.module('profile', []);

// Service
import ProfileService from './profile.service';
profileModule.service('ProfileService', ProfileService);

import Pro

export default profileModule;