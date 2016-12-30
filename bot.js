module.exports = function (token, url) {
	return function (req, res, next) {
		if(req.body.token == token) {
		        console.log("it is okay");
		        var userName = req.body.user_name;
		        var text = req.body.text;
		        var db = req.db;
		        var message = "";
		        var textlist = text.split(' ');
		        switch(textlist[0]) {
		                case "one":
		                        break;
		                case "two":
		                        break;
		                default:
		                        message = "error";
		        }
		}
		else {
		        console.log("no no no");
		}
	}
}

