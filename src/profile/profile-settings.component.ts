import { IComponentOptions } from 'angular';
import selectedUser from './selected-user.interface';

class ProfileSettings {
    public selectedUser: selectedUser | undefined;
    public title: string | undefined;

    $onInit = () => {

    };

    public saveProfile = () => {

    };
}

export const ProfileSettingsComponent: IComponentOptions = {
    controller: ProfileSettings,
    template:
    `<div>
          <h1>Profile</h1>
          <p>Loading profile...</p>
          <p>Saving profile...</p>
          <p>Error!</p>
          <div>
            <label>Username:</label>
            <input type="text"/>
            <input type="button" value="Save"/>
          </div>
    </div>`,
    bindings: {

    }
};