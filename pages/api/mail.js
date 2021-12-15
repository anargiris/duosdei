const mail = require("@sendgrid/mail");
mail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function (req, res) {
  const message = `
  Question 1: ${req.body.q1}\r\n
  Question 2: ${req.body.q2}
`;

  const data = {
    to: process.env.RECEIVER,
    from: process.env.SENDER,
    subject: `DuosDei form`,
    text: message,
    html: message.replace(/\r\n/g, "<br />"),
  };

  await mail.send(data);

  res.status(200).json({ status: "OK" });
}
