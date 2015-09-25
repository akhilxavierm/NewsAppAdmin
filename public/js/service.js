myModule.service('dataManagement', function() {
    var fieldItems=[];
    var id=0;
    this.setItem = function(items) {
        id++;
        items.id=id;
        fieldItems.push(items);
        fieldItems.sort(function (a, b) {
            var key1 = a.date;
            var key2 = b.date;
            if (key1 < key2) {
                return 1;
            } else if (key1 == key2) {
                return 0;
            } else {
                return -1;
            }
        });
    }
    this.getItems = function() {
        return fieldItems;
    }
    this.deleteItem=function(id){
        for(var i=0;i<fieldItems.length;i++){
            if(id==fieldItems[i].id){
                fieldItems.splice(i, 1);
            }
        }
    }
    this.editItem=function(id){
        for(var i=0;i<fieldItems.length;i++){
            if(id==fieldItems[i].id){
                fieldItems.splice(i, 1);
            }
        }
    }
    this.getSpecificItem=function(id){
        for(var i=0;i<fieldItems.length;i++){
            if(id==fieldItems[i].id){
                return fieldItems[i];
            }
        }
    }
    this.currencyConversion=function(items){
       for(var i=0;i<items.length;i++){
            if(items[i].currency=="INR"){
                items[i].dollarValue=items[i].amount/60;
            }
            else if(items[i].currency=="EU"){
                items[i].dollarValue=items[i].amount*1.5;
            }
            else{
                items[i].dollarValue=items[i].amount;
            }
        }
    }
    this.getFilteredItem=function(friendsName){
        var filtredItems=[];
        if(friendsName==''){
            filtredItems=fieldItems;
        }
        else{
            for(var i=0;i<fieldItems.length;i++){
                if(fieldItems[i].selecfriendsName){
                    if(fieldItems[i].selecfriendsName.indexOf(friendsName) != -1) {
                        filtredItems.push(fieldItems[i]);
                    }
                }
            }
        }
        return filtredItems;
    }
});
