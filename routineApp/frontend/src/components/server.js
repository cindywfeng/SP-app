const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const nodemailer = require("nodemailer");
const path = require("path");

// initialize
const server = express();
var cors = require("cors");
server.use(cors());
server.locals.layout = false;

// View engine setup
server.engine("handlebars", exphbs());
server.set("view engine", "handlebars");

// Static folder
server.use("/public", express.static(path.join(__dirname, "public")));

// Body parser Middleware
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

server.get("/", (req, res) => {
  res.render("contact", { layout: false });
});

server.post("/send", (req, res) => {
  const output = `
      <p>You have a new contact request</p>
      <h3>Contact Details</h3>
      <ul>  
        <li>Name: ${req.body.name}</li>
        <li>Email: ${req.body.email}</li>
      </ul>
      <h3>Message</h3>
      <p>${req.body.message}</p>
    `;

  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "mason.nader1@ethereal.email",
      pass: "9kj76ka6Mx67QPkvsH",
    },
  });

  // setup email data with unicode symbols
  let mailOptions = {
    from: '"Nodemailer Contact" <mason.nader1@ethereal.email>', // sender address
    to: req.body.email, // list of receivers
    subject: "Node Contact Request", // Subject line
    text: "Hello world?", // plain text body
    html: output, // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

    res.render("contact", { msg: "Email has been sent" });
  });
});

server.listen(3000, () => console.log("Server started ..."));
