import express from "express";  
import cors from "cors";
import http from "http";
import dotenv from "dotenv";
import path from "path";
import nodemailer from "nodemailer";
import google from "googleapis";

dotenv.config();

const __dirname = path.resolve();
const app = express();
const clientPath = path.join(__dirname, 'dist/client');
const OAuth2 = google.Auth.OAuth2Client;
const PORT = 3000; // temporary. Save it in the env file
const mail_user = {
    test_emailfrom: process.env.TEST_EMAILFROM,
    password: process.env.PASSWORD,
    emailto: process.env.EMAILTO
}

const createTransporter = async () => {
    const oauth2Client = new OAuth2(
        process.env.OAUTH_CLIENTID,
        process.env.OAUTH_CLIENT_SECRET,
        "https://developers.google.com/oauthplayground"
    );

    oauth2Client.setCredentials({
        refresh_token: process.env.OAUTH_REFRESH_TOKEN,
    });

    const accessToken: any = await new Promise((resolve, reject) => {
        oauth2Client.getAccessToken((err, token) => {
            if(err){
                reject("Failed to create access Token" + err);
            }
            resolve(token);
        });
    });

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            type: 'OAUTH2',
            user : mail_user.test_emailfrom,
            accessToken,
            clientId: process.env.OAUTH_CLIENTID,
            clientSecret: process.env.OAUTH_CLIENT_SECRET,
            refreshToken: process.env.OAUTH_REFRESH_TOKEN
        }
    });

    return transporter;
}


app.use(express.static(clientPath));
app.use(cors({
    credentials: true,
    origin: '*'
    // origin: ['http://localhost:3000', 'http://localhost:4200', 'http://localhost:3501', 'http://localhost:8080']
}));
app.use(express.json());


app.get("/", (req, res) => {
    res.send("Congratulations! Server is running successfully.")
});


app.post("/api/sendmail", (req,res) => {
    let user: string = req.body;
    sendMail(user, (err: Error, info: any) => {
        try {
            console.log("Email has been sent") // Keeping this for testing 
            res.send(info)
        } catch (error) {
            res.status(500)
            res.send(err)
            console.log("From server error: ", error, err) // leave for testing
        }
    });

        async function sendMail(user: any, cb:any){
            const mailOptions = {
                from: user.email, // change this to default email address 
                to: mail_user.test_emailfrom,
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

            try {
                let emailTransporter = await createTransporter();

                emailTransporter.sendMail(mailOptions, function (error, info) {
                    if (error){
                        console.log(error)
                    }else {
                        cb(info.response)
                    }
                })
            }catch(error){
                return console.log(error);
            }
        }
    }
)

app.all("*", function (req, res) {
    const filePath = path.join(__dirname, 'dist/client/index.html');
    res.sendFile(filePath);
  });


app.listen(PORT, () => {
    console.log(`Success! Starting localhost http://localhost:${PORT}`)
});

