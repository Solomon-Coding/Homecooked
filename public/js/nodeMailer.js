// // Pull in needed information for the email
// const nodemailer = require("nodemailer");

async function emailFormHandler(event) {
  event.preventDefault();
  // const emailRecipientEl = document.querySelector('#emailRecipient').value;
  // const emailSubjectEl = document.querySelector('#emailSubject').value;
  // const emailMessageEl = document.querySelector('#emailMessage').value;

  const recipient = document.querySelector('#emailRecipient').value;
  const subject = document.querySelector('#emailSubject').value;
  const message = document.querySelector('#emailMessage').value;
console.log(recipient)
console.log(subject)
console.log(message)
  const response = await fetch(`/api/recipes/send`,{
    method: 'POST',
    body:{
      recipient,
      subject,
      message,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (response.ok) {
    alert('Message Sent');
  } else {
    alert('Failed');
  }
}

document
  .querySelector('.emailForm')
  .addEventListener('submit', emailFormHandler);


// let transporter = nodemailer.createTransport({
//   host: "mail.gmail.com",
//   port: 587,
//   secure: false, // true for 465, false for other ports
//   auth: {
//     user: 'solomonvana18@gmail.com', // generated ethereal user
//     pass: 'Puweda73', // generated ethereal password
//   },
//   tls:{
//     rejectUnauthorized:false
//   }
// });

// // send mail with defined transport object
// let info = await transporter.sendMail({
//   from: '"Homecooked" <solomonvana18@gmail.com>', // sender address
//   to: `${req.body.recipient}`, // list of receivers
//   subject: `${req,body.subject}`, // Subject line
//   text: "efv?", // plain text body
//   html: `<b>${req,body.message}</b>`, // html body
// });

// console.log("Message sent: %s", info.messageId);
// console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
