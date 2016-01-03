module.exports = function (object) {

    // create reusable transporter object using the default SMTP transport
    var transporter = nodemailer.createTransport('smtps://user%40gmail.com:pass@smtp.gmail.com');

    // setup e-mail data with unicode symbols
    var mailOptions = function (object) {

      var options = {
        from: 'Fred Foo ✔ <foo@blurdybloop.com>', // sender address
        to: object.email, // list of receivers
        subject: 'Product Update - Price Traker', // Subject line
        text: 'Hello world ✔', // plaintext body
        html: '<b>Hello world ✔</b>' // html body
      }

      return options;

    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions(object), function(error, info){
        if(error){
            return console.log(error);
        }
        console.log('Message sent: ' + info.response);
    });

};
