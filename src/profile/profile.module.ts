import angular from 'angular';
import ProfileService from './profile.service';
import { ProfileSettingsComponent } from './profile-settings.component';
import ProfileConfig from './profile.config';

// Create the module where our functionality can attach to
let profileModule = angular.module('profile', []);
//Configs
profileModule.config(ProfileConfig);
// Services
profileModule.service('profileService', ProfileService);
// Components
profileModule.component('profileSettings', ProfileSettingsComponent);


export default profileModule;