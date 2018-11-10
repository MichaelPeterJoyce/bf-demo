// This is a function and not an ES6 class because when angular calls a config block it does not use the new keyword
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
        // Different way of loading component just showing the different methods UI-Router supports
        url: '/3',
        component: 'profileSettings',
        resolve: {
            title: () => 'κωδικό πρόσβασης'
        }
    });
    $urlRouterProvider.otherwise('/1');
}

ProfileConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
export default ProfileConfig;