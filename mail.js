var http   = require('http'),
qs         = require('querystring'),
nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'bressin.justine@gmail.com',
    pass: 'pwd'
  }
});

var server = http.createServer(function(req, res) {
  if (req.method === 'POST' && req.url === '/') {
    var body = '';
    req.on('data', function (data) {
      body += data;
    });

    req.on('end', function () {
      var mail = qs.parse(body);

      var mailOptions = {
        from: mail.name+' <'+ mail.sender +'>',
        to: 'bressin.justine@gmail.com',
        subject: 'Contact ',
        text: mail.message,
        html: mail.message
      };

      transporter.sendMail(mailOptions, function(err, response){
        !!err ? console.error(err) : res.end();
      });
    });
  }
  res.end();
});

server.listen(1337);

// http://www.lilleweb.fr/js/2014/09/09/envoyer-un-mail-en-javascript/ 