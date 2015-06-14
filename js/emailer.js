/* global $,document,console,Parse */
$(document).ready(function() {

	var parseAPPID = "8bhec68k0ObpXTAOmlvhCH6qh3j9sTfl557BHUOw";
	var parseJSID = "mjYv4uJytjkUysyk2zL24toyJwSAddZDhlwnzyTT";

	Parse.initialize(parseAPPID, parseJSID);
	var emailObject = Parse.Object.extend("emailObject");


	$("#commentForm").on("submit", function(e) {
		e.preventDefault();

		console.log("Handling the submit");
		//add error handling here
		//gather the form data

		var data = {};
		data.name = $("#name").val();
		data.email = $("#email").val();
		data.comments = $("#comments").val();

		var comment = new emailObject();
		comment.save(data, {
			success:function() {
				console.log("Success");
				$('#response').html('Email successful!').addClass('success').fadeIn('fast');
        $('input[type="text"], textarea').val('')
        $('input[type="email"], textarea').val('')
			},
			error:function(e) {
				console.dir(e);
				$('#response').html('Error! Email unsuccessful!').addClass('error').fadeIn('fast');
			}
		});
	});
});
