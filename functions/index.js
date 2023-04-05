const functions = require("firebase-functions");
const nodemailer = require('nodemailer');
const admin = require('firebase-admin');

admin.initializeApp()

let { useremail, refreshtoken, clientid, clientsecret } = functions.config().gmail;

const cors = require('cors')({
        credentials: true, 
        origin: '{portfolio-2023-6bd0c.web.app, gichelleamon.dev}'
    }
)

const transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: true,

    auth: {
        type: 'OAUTH2',
        user : useremail,
        // accessToken,
        clientId: clientid,
        clientSecret: clientsecret,
        refreshToken: refreshtoken
    }
});

exports.sendEmail = functions.https.onRequest((req,res) => {
      //for testing purposes
  console.log(
    'from sendEmail function. The request object is:',
    JSON.stringify(req.body)
  );

  cors(req, res, () => {
     let user = req.body;

     const mailOptions = {
        from: useremail, // change this to default email address 
        to: 'gichelleamon93@gmail.com',
        subject: `Portfolio 2023: ${user.name} messaged you!`,
        html: `
        <h3>Sender Information: </h3>
            <strong>Name: </strong> <p>${user.name}</p>
            <strong>Email Address: </strong><p>${user.email}</p>
            <strong>Phone Number: </strong><p>${user.phone}</p>
            <hr>
        <h3>Message: </h3>
        <p>${user.message}</p>
        `
     };

     return transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send({
              data: {
                status: 500,
                message: error.toString(),
              },
            });
          }
    
          return res.status(200).send({
            data: {
              status: 200,
              message: 'sent',
            },
          });
     })
  })
})