import express from "express";  
import cors from "cors";
import http from "http";
import dotenv from "dotenv";
import path from "path";
import nodemailer from "nodemailer";

dotenv.config();

const __dirname = path.resolve();
const app = express();
const clientPath = path.join(__dirname, 'dist/client');
const PORT = 3000; // temporary. Save it in the env file
const mail_user = {
    test_emailfrom: process.env.TEST_EMAILFROM,
    password: process.env.PASSWORD,
    emailto: process.env.EMAILTO
}


app.use(express.static(clientPath));
app.use(cors({
    credentials: true,
    origin: "*"
}));
app.use(express.json());


app.get("/", (req, res) => {
    res.send("Congratulations! Server is running successfully.")
});


app.post("/sendmail", (req,res) => {
    let user: string = req.body;
    sendMail(user, (err: Error, info: any) => {
            if (err) {
                console.log("Error: ", err);
                res.status(400);
                res.send({error: "Failed to send email"})
            } else {
                console.log("Email has been sent")
                res.send(info)
            }
        });

        async function sendMail(user: any, cb:any){
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    type: 'OAUTH2',
                    user : mail_user.test_emailfrom,
                    clientId: process.env.OAUTH_CLIENTID,
                    clientSecret: process.env.OAUTH_CLIENT_SECRET,
                    refreshToken: process.env.OAUTH_REFRESH_TOKEN
                }
            });

            const mailOptions = {
                from: user.from,
                to: mail_user.test_emailfrom,
                subject: "Portfolio 2023: Consultation",
                html: `<p>${user.html}</p>`
            };

            let info = await transporter.sendMail(mailOptions);

            cb(info.messageId);
        }
    }
)

// const sendMail = (user: any, callback: any) => {
//     const transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//             type: 'OAUTH2',
//             user : mail_user.test_emailfrom,
//             pass: mail_user.password,
//             clientId: process.env.OAUTH_CLIENTID,
//             clientSecret: process.env.OAUTH_CLIENT_SECRET,
//             refreshToken: process.env.OAUTH_REFRESH_TOKEN
//         }
//     })
//     const mailOptions = {
//         from: mail_user.test_emailfrom,
//         to: mail_user.emailto,
//         subject: "Test nodemail email",
//         html: "Whyyyyyyyyyyyy?? why is this working?"
//     }
//     transporter.sendMail(mailOptions, callback)

// }




app.all("*", function (req, res) {
    const filePath = path.join(__dirname, 'dist/client/index.html');
    res.sendFile(filePath);
  });


app.listen(PORT, () => {
    console.log(`Success! Starting localhost http://localhost:${PORT}`)
});

