myModule.controller('aboutController',function($scope,smartBannerFactory){
    
    $scope.name="about Name";
    smartBannerFactory.appId=20;
    smartBannerFactory.appArgument="what the fuck";
});