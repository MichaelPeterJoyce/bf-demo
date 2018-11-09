import { ng } from '../node_modules/@uirouter/angularjs/lib-esm/angular';
import selectedUser from './selected-user.interface';

class ProfileService {
    public profileUser: selectedUser;
    constructor(private $timeout, private $q: ng.IQService) {
        // @ts-ignore
        this.profileUser = {};
    }

    public getProfileUser = () => {
        return this.$timeout(() => {
            return this.profileUser = {
                first_name: 'Michael',
                last_name: 'Collins',
                username: 'michael.collins',
                age: 30
            };
        }, 3000);
    };

    public setUsername = (username: any) => {
        return this.$q((resolve: any, reject: any) => {
            this.$timeout(() => {
                if (Math.round(Math.random())) {
                    this.profileUser.username = username;
                    resolve(this.profileUser);
                } else {
                    reject({ error: 'Invalid username' });
                }
            }, 3000);
        });
    };

    public setUserEmail = (username: any) => {
        return this.$q((resolve: any, reject: any) => {
            this.$timeout(() => {
                if (Math.round(Math.random())) {
                    this.profileUser.user_email = username + "@blueface.com";
                    resolve(this.profileUser);
                } else {
                    reject({ error: 'on email generation!' });
                }
            }, 3000);
        });
    }
}

export default ProfileService;