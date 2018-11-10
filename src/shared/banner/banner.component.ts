import {IComponentOptions} from 'angular';
import './banner.component.css';
class Banner {
    constructor() {
    }

    $onInit = () => {
    };

}

Banner.$inject = [''];

export const BannerComponent: IComponentOptions = {
    controller: Banner,
    controllerAs: 'ctrl',
    template: require('./banner.component.html'),
    bindings: {
        title: '='
    }
};