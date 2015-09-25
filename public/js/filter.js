myModule.filter('mycurrency', function() {
    var defaultCurrency = '$';
    return function(input, currencySymbol) {
        var out = "";
        currencySymbol = currencySymbol || defaultCurrency;
        if(currencySymbol=="R"){
            out=input*60;
        }
        else if(currencySymbol=="E"){
            out=input/1.5;
        }
        else{
            out=input;
        }
        var finalNumber=out.toPrecision(6);
        return finalNumber;
    }
  });
