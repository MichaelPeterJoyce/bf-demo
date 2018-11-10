import {IComponentOptions, ITimeoutService} from 'angular';
import selectedUser from './selected-user.interface';
import ProfileService from "./profile.service";

class ProfileSettings {
    public selectedUser: selectedUser | undefined;
    public title: string | undefined;
    public isLoading: boolean;
    public isSuccess: boolean;
    public isSaving: boolean;
    public isError: {
        show: boolean,
        message: string
    };

    constructor(private profileService: ProfileService, private $timeout: ITimeoutService) {
        this.isError = {
            show: false,
            message: ''
        }
    }

    $onInit = () => {
        // Angular lifecycle hook for init
        this.isLoading = true;
        this.profileService.getProfileUser().then((user: selectedUser) => {
            this.selectedUser = user;
            this.isLoading = false;
        });
    };

    public updateMessage = (isSaving, success?, error?) => {
        // Helper function to show error or success messages
        this.isSaving = isSaving;
        this.isError.show = false;
        if (success) {
            this.isSuccess = true;
            this.$timeout(() => {
                this.isSuccess = false;
            }, 1500);
        }
        if (error) {
            this.isError.show = true;
            this.isError.message = error.error
        }
    };

    public saveProfile = () => {
        this.updateMessage(true);
        this.profileService.setUsername(this.selectedUser.username).then((res) => {
            //Successful callback updated messages
            this.updateMessage(false, true);
        }, (res) => {
            // Failure callback updated the messages
            this.updateMessage(false, false, res);
        })

    };
}
// Angular dependency injection
ProfileSettings.$inject = ['profileService', '$timeout'];

// Export component
export const ProfileSettingsComponent: IComponentOptions = {
    controller: ProfileSettings,
    controllerAs: 'ctrl',
    template:
        `<div class="container mt-5">
            <div class="card">
                <div class="card-body">
                    <h1 class="mb-3">{{ctrl.title}}</h1>
                    <div ng-show="ctrl.isSuccess" class="alert alert-success" role="alert">
                        <span>Saving Successful</span>
                    </div>
                    <div ng-show="ctrl.isLoading" class="alert alert-info" role="alert">
                        <span>Loading profile...</span>
                    </div>
                    <div ng-show="ctrl.isSaving" class="alert alert-info" role="alert">
                        <span>Saving profile...</span>
                    </div>
                    <div ng-show="ctrl.isError.show" class="alert alert-danger" role="alert">
                        <span>Error! {{ctrl.isError.message}}</span>
                    </div>
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon1">Username</span>
                        </div>
                        <input type="text" ng-model="ctrl.selectedUser.username" ng-disabled="ctrl.isSaving || ctrl.isLoading"
                            ng-change="ctrl.isError.show = false;" class="form-control">
                        <div class="input-group-append">
                            <button
                             ng-disabled="ctrl.isSaving || ctrl.isLoading"
                             class="btn btn-primary" 
                             ng-click="ctrl.saveProfile()" 
                             type="button">
                             Save</button>
                        </div>
                    </div>
                     <div ng-if="ctrl.selectedUser.user_email" class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon1">Email</span>
                        </div>
                        <input type="text" class="form-control" ng-model="ctrl.selectedUser.user_email" disabled>
                    </div>
                </div>
            </div>
        </div>
    `,
    bindings: {
        title: '='
    }
};