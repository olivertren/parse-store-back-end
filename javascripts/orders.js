/**
 * 
 */
Parse.initialize("pEZtAFuzsjCmkxrPrdpwD0zWvXSmB0GWSWPat9rF", "odmOFVGIjpFNje7yqEUMS4DzAJ5eU2T8soL0kScl");

var order = new Parse.Object("Order");
var query = new Parse.Query(order);
var text = "";
query.notEqualTo("name", "vishy");
query.find({
  success: function(results) {
    for (i = 0; i < results.length; i++) {
    	document.getElementById("test").innerHTML += results[i].get("name") + ": " + results[i].id +  "\r\n";
    	text += "hello";
    }
    console.log(document.getElementById("test").innerHTML);
    console.log(text);
  },

  error: function(error) {
	  document.write("error");
  }
});
console.log(document.getElementById("test").innerHTML);
document.getElementById("test").innerHTML = text;
console.log(document.getElementById("test").innerHTML);
console.log(text);