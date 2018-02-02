
/*
Note 1: Make sure that the 1st tax_rates item is the tax_free range.

tax_rate = tax rate in % for set wage range.
tax_min_payable = tax in $ payable in addition to the % tax for set range.
range_start = 
range_end = 
*/

function au_tax(wage) {
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
/*

Formula Source : https://www.ato.gov.au/Rates/Schedule-1---Statement-of-formulas-for-calculating-amounts-to-be-withheld/
The formulas comprise linear equations of the form y = ax − b, where:

y is the weekly withholding amount expressed in dollars
x is the number of whole dollars in the weekly earnings plus 99 cents
a and b are the values of the coefficients for each set of formulas for each range of weekly earnings (or, in the case of fortnightly, monthly or quarterly earnings, the weekly equivalent of these amounts).

*/
function au_tax_weekly(weeklyincome) {
  var scale_1 = [
    {"max_income": 66,
     "a": 0.19,
     "b": 0.19,
     "dollar_adjustments_to_income": 0.99
    },
      {"max_income": 361,
     "a": 0.2337,
     "b": 2.9035,
     "dollar_adjustments_to_income": 0.99
    },
        {"max_income": 932,
     "a": 0.3477,
     "b": 44.1189,
     "dollar_adjustments_to_income": 0.99
    },
        {"max_income": 1323,
     "a": 0.3450,
     "b": 41.6024,
     "dollar_adjustments_to_income": 0.99
    },
        {"max_income": 3111,
     "a": 0.3900,
     "b": 101.1408,
     "dollar_adjustments_to_income": 0.99
    },
      {"max_income": 9999999999,
     "a": 0.4700,
     "b": 350.0639,
     "dollar_adjustments_to_income": 0.99
    }
    ];

  //return wage;
  for (var i = 0, tax = 0, scale_item = scale_1; scale_1.length > i ; i++) {
    var scale_item = scale_1[i];
    if(weeklyincome > scale_item.max_income){
      tax = scale_item.a * ((weeklyincome + scale_item.dollar_adjustments_to_income) - scale_item.b);
      return tax;
    };
    
      
  }
  
}
