import angular from "angular";
import {BannerComponent} from "./banner/banner.component";
// Create the shared module
let sharedModule = angular.module('shared', []);
// Attach bannerComponent to module
sharedModule.component('banner', BannerComponent);

export default sharedModule;