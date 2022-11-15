import { createTransport } from "nodemailer";
const key = process.env.key;
const transporter = createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: process.env.email,
        pass: key
    },
});



const sendMail = async (req, res) => {
    console.log('sendmail api hitted');
    const { from, title, to, subject, body } = JSON.parse(JSON.stringify(req.body));
    console.log(req.body)
    if (!from || !title || !to || !subject || !body) {
        return res.json({ success: false, msg: "All fields required" });
    }
    const mailOption = {
        from: `${title} <${from}>`,
        to: to,
        subject: subject,
        html: body,
    };
    transporter.sendMail(mailOption, (err, info) => {
        if (err) console.log(err)
        return res.json(info);
    });
}

export default sendMail;