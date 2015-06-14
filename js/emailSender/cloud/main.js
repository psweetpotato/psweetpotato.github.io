var API = "key-2bb1bf7a9a5f02b258cf862698cf96e8"
var Domain = "mg.otsr.com"
var Mailgun = require('mailgun');
Mailgun.initialize(Domain, API);

Parse.Cloud.beforeSave("emailObject", function(request, response) {

    var text = "Submission Form From http://psweetpotato.github.io\n\n" +
        "Name: "+request.object.get("name") + "\n\n"+
        "Email: "+request.object.get("email") + "\n\n"+
        "Message: \n"+request.object.get("comments");


    Mailgun.sendEmail({
            to: "p.sweetpotato@gmail.com",
            from: request.object.get("email"),
            subject: "Submission Form http://psweetpotato.github.io from: " + request.object.get("name"),
            text: text
        }, {
        success: function(httpResponse) {
            response.success();
        },
        error: function(httpResponse) {
            console.error(httpResponse);
            response.error("Uh oh, something went wrong");
        }
    });

});
