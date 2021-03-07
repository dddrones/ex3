// var quote = [
// '"this is quote one" - me',
// '"this is the second quote" - also me'
// ];

var quote1 = {
	quote: '"this is quote one" ',
	author: "me",
	tags: ["one", "two"],
	color: "pink",
	display: function()  {
		var quoteString = "";
		quoteString +="<div style='background:" + this.color + "'>";
		quoteString += "<p>" + this.quote + "</p>";
		quoteString += "<cite>" + this.author + "</cite>";
		quoteString += "</div>";
		$("body").prepend(quoteString)

 	}
}

var quote2 = {
	quote: '"this is the second quote" ',
	author: "me again",
	tags: ["one", "two", "four"],
	color: "orange",
	display: function()  {
		var quoteString = "";
		quoteString +="<div style='background:" + this.color + "'>";
		quoteString += "<p>" + this.quote + "</p>";
		quoteString += "<cite>" + this.author + "</cite>";
		quoteString += "</div>";
		$("body").prepend(quoteString)

 	}
}


quote2.display();
quote1.display();

// console.log(quote1.quote);

// quote.forEach(function(quote){
// 	console.log("x= " + quote);
// 	$("body").prepend(quote)
// })

// var quoteString = "";
// quote.forEach(function(quote){
// 	console.log("x= " + quote);
// 		quoteString += "<p>" + quote = "</p>"

// 		console.log(quotestring)
// })

// 	$("body").prepend(quote)
