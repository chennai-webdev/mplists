var app = app | {};
app.mp = (function(){
	var data = $.get("http://sansad.co/api/legislators?state=Tamil%20Nadu&questions__gt=200");
	var source = $.get("./tmpl/table_mp.html");
	data.then(view);
	function view(data){
		source.then(compile);
		function compile(compiled){
			var tmp = Handlebars.compile(compiled);
			var out = tmp(data);
			$("#perf_table").html(out);
		}
	}
})();