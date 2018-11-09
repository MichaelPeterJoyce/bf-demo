import {IComponentOptions} from 'angular';
import selectedUser from './selected-user.interface';
import ProfileService from "./profile.service";

class ProfileSettings {
    public selectedUser: selectedUser | undefined;
    public title: string | undefined;
    public isLoading: boolean;
    public isSaving: boolean;
    public isError: {
        show: boolean,
        message: string
    };

    constructor(private profileService: ProfileService) {
        this.isError = {
            show: false,
            message: ''
        }
    }

    $onInit = () => {
        this.isLoading = true;
        this.profileService.getProfileUser().then((user: selectedUser) => {
            this.selectedUser = user;
            this.isLoading = false;
        });
    };

    public saveProfile = () => {
        this.isSaving = true;
        this.isError.show = false;
        this.profileService.setUsername(this.selectedUser.username).then((res) => {
            this.profileService.setUserEmail(this.selectedUser.username).then((res) => {
                this.isSaving = false;
            }, (res) => {
                this.isSaving = false;
                this.isError.show = true;
                this.isError.message = res.error
            })
        }, (res) => {
            this.isSaving = false;
            this.isError.show = true;
            this.isError.message = res.error
        })

    };
}

ProfileSettings.$inject = ['profileService'];

export const ProfileSettingsComponent: IComponentOptions = {
    controller: ProfileSettings,
    controllerAs: 'ctrl',
    template:
        `<div>
          <h1>{{ctrl.title}}</h1>
          <p ng-show="ctrl.isLoading">Loading profile...</p>
          <p ng-show="ctrl.isSaving">Saving profile...</p>
          <p ng-show="ctrl.isError.show">Error! {{ctrl.error.message}}</p>
          <div>
            <label>Username:</label>
            <input 
                type="text"
                ng-model="ctrl.selectedUser.username"
                ng-disabled="ctrl.isSaving || ctrl.isLoading" 
                ng-change="ctrl.error.show = false;"
            />
            <input type="button" ng-disabled="ctrl.isSaving || ctrl.isLoading" value="save" ng-click="ctrl.saveProfile()"/>
          </div>
    </div>`,
    bindings: {
        title: '='
    }
};