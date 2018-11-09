import { IComponentOptions } from 'angular';
import selectedUser from './selected-user.interface';

class ProfileSettings {
    public selectedUser: selectedUser;
    public title: string;

    $onInit = () => {

    };

    public saveProfile = () => {

    };
}
export const ProfileSettingsComponent: IComponentOptions = {
    controller: ProfileSettings,

};