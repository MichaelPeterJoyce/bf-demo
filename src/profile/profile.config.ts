class ProfileConfig {
    constructor(private $stateProvider: any){
       this.setupRoutes();
    }
    setupRoutes(){
        this.$stateProvider
            .state('profile', {
                url: '',
                template: '<profile-settings></profile-settings>'
            });
    }
}
ProfileConfig.$inject = ['$stateProvider'];
export default ProfileConfig;