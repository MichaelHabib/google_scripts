
/*
Note 1: Make sure that the 1st tax_rates item is the tax_free range.

tax_rate = tax rate in % for set wage range.
tax_min_payable = tax in $ payable in addition to the % tax for set range.
range_start = 
range_end = 
*/

function myFunction(wage) {
  var tax_rates = [
    {"tax_rate": 0,
     "tax_min_payable": 0,
     "range_start": 0,
     "range_end": 18200
    },
    {"tax_rate": 0.19,
     "tax_min_payable":0,
     "range_start": 18201,
     "range_end": 37000
    },
    {"tax_rate": 0.325,
      "tax_min_payable": 3572,
     "range_start": 37001,
     "range_end":80000
    },
    {"tax_rate": 0.37,
      "tax_min_payable":17547,
     "range_start": 80001,
     "range_end": 180000
    },
    {"tax_rate": 0.45,
      "tax_min_payable": 54547,
     "range_start": 180001,
     "range_end": 999999999999999
    }
    ];
  tax_rates = tax_rates.reverse();
  //return wage;
  for (var i = 0, tax = 0, rates = tax_rates; tax_rates.length > i ; i++) {
    var rate = rates[i];
    if(wage >= rate.range_start){
      tax = rate.tax_min_payable + ((wage - rate.range_start) * rate.tax_rate);
      return tax;
    };
    
      
  }
  
}
