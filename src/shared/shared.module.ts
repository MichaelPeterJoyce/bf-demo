// Create the module where our functionality can attach to
import angular from "angular";
import {BannerComponent} from "./banner/banner.component";
let sharedModule = angular.module('shared', []);

sharedModule.component('banner', BannerComponent);

export default sharedModule;