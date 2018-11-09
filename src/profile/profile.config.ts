function ProfileConfig($stateProvider) {
    $stateProvider
        .state('profile', {
            url: '',
            template: '<profile-settings></profile-settings>'
        });

}

ProfileConfig.$inject = ['$stateProvider'];
export default ProfileConfig;