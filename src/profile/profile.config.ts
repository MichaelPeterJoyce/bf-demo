function ProfileConfig($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $stateProvider.state('english-profile', {
        url: '/1',
        template: `<profile-settings title="'Profile'"></profile-settings>`
    });
    $stateProvider.state('chinese-profile', {
        url: '/2',
        template: `<profile-settings title="'忘記密碼'"></profile-settings>`
    });
    $stateProvider.state('indian-profile', {
        url: '/3',
        template: `<profile-settings title="'κωδικό πρόσβασης'"></profile-settings>`
    });
    $urlRouterProvider.otherwise('/1');
}

ProfileConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
export default ProfileConfig;