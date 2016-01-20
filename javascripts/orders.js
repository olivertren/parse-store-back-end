/**
 * 
 */
Parse.initialize("pEZtAFuzsjCmkxrPrdpwD0zWvXSmB0GWSWPat9rF", "odmOFVGIjpFNje7yqEUMS4DzAJ5eU2T8soL0kScl");
var order = new Parse.Object("Order");
var query = new Parse.Query(order);
query.find({
  success: function(results) {
    for (i = 0; i < results.length; i++) {
    	document.querySelector('.test').innerHTML += results[i].id + "\r\n";
    }
  },

  error: function(error) {
	  document.write("error");
  }
});