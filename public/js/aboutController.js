myModule.controller('aboutController',function($scope,dynamicMetaFactory){
    
    $scope.name="about Name";
    dynamicMetaFactory.appId=20;
    dynamicMetaFactory.appArgument="what the fuck";
});