myModule.controller('formFieldController',function($scope,dataManagement,$log){
    var editId=null;
    $scope.editActive=false;
    $scope.currency="USD";
    $scope.currencySymbol="$";
    $scope.animation=false;
    $scope.valid=true;
    $scope.isEmpty=true;
    $scope.defaultFormData={
        types:["card","cash","other"],
        friendsName:["Andy","Sandy","Randy","Mandy"],
        currencies:["USD","INR","EU"],
        moneyType:["USD","INR","EU"],
        name:'',
        date:'',
        amount:''
    }

    $scope.currencies=["USD","INR","EU"];
    $scope.addNewExpense=function(formData,valid){
        if($scope.editActive){
            $scope.deleteItem(editId);
        }
        $scope.valid=valid;
        if($scope.valid){
            var formDataSend = angular.copy(formData);
            dataManagement.setItem(formDataSend);
            var allFieldItems=dataManagement.getItems();
            dataManagement.currencyConversion(allFieldItems);
            $scope.allFieldITems=angular.copy(allFieldItems);
            $scope.isEmpty=false;
            $scope.reset();
        }
    }
    $scope.deleteItem=function(_id){
        dataManagement.deleteItem(_id);
        $scope.allFieldITems=dataManagement.getItems();
        $scope.reset();
    }

    $scope.editItem=function(_id){
        $scope.editActive=true;
        editId=_id;
        var specifiItem=dataManagement.getSpecificItem(_id);
        $scope.selectedForm=angular.copy(specifiItem);
        delete $scope.selectedForm.id;
    }
    $scope.friendFilter=function(friendName){

        var filtredItems=dataManagement.getFilteredItem(friendName);
        dataManagement.currencyConversion(filtredItems);
        $scope.allFieldITems=angular.copy(filtredItems);
    }
    $scope.currencyChange=function(currencyType){
        switch(currencyType){
            case 'USD':$scope.currencySymbol="$";
                       break;
            case 'INR':$scope.currencySymbol="R";
                       break;
            case 'EU' :$scope.currencySymbol="E" ;
                       break;
        }
    }
    $scope.reset = function() {
        $scope.formData = angular.copy($scope.defaultFormData);
        $scope.selectedForm = angular.copy($scope.defaultFormData);
        $scope.editActive=false;
        editId=null;
        $scope.filteredFrnd="";
    }
    $scope.addNewFrnd=function(name){
        $scope.defaultFormData.friendsName.unshift(name);
        $scope.selectedForm.friendsName.unshift(name);
        $scope.newFrndsName='';
    }
    $scope.addAnimation=function(animation){
        $scope.animation=!animation;
    }

    $scope.reset();
});
