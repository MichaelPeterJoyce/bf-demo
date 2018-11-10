import angular from 'angular';
import ProfileService from './profile.service';
import { ProfileSettingsComponent } from './profile-settings.component';
import ProfileConfig from './profile.config';

// Create the Profile Module
let profileModule = angular.module('profile', []);
// attach Configs
profileModule.config(ProfileConfig);
// attach Services
profileModule.service('profileService', ProfileService);
// attach Components
profileModule.component('profileSettings', ProfileSettingsComponent);


export default profileModule;