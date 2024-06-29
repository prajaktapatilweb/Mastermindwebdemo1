import moment from "moment/moment";
const axios = require('axios')
require("dotenv").config();
// let nodemailer = require('nodemailer')
// console.log('first', process.env.EMAILID, process.env.WIN_PASS, process.env.LINUX_PASS, process.env.API_TEST)

// const client = nodemailer.createTransport({
//     service: "Gmail",
//     auth: {
//         user: `${process.env.EMAILID}`,
//         pass: `${process.env.WIN_PASS}`
//     }
// });

export default async function handler(req, res) {
    const { method } = req;
    switch (method) {
        case "POST":
            try {
                const date = moment().utcOffset("+05:30").format('MMMM Do YYYY, h:mm:ss a')
                const clientIp = (req.headers['x-forwarded-for'] || '').split(',').pop().trim() ||
                    req.socket.remoteAddress;
                const emailSubject = 'New Enquiry through Landing Page'
                // const emailContent =
                //     `Dear Admin, \n \n Details of the person contacted you are as follows \n
                //   Name: ${req.body.name} \n
                //   Email: ${req.body.email} \n
                //   Mobile Number: ${req.body.mobileno} \n
                //   Purpose : ${req.body.selection} \n
                //   Message : ${req.body.msg} \n
                //   Date & Time :${date} \n
                //   IP Address: ${clientIp} \n`
                const emailContent =
                    `<p> Dear Admin, </p>
                     <p> Details of the person contacted you are as follows </p>
                <p> <strong> Name: </strong> ${req.body.name} </p>
                <p> <strong> Email: </stron> ${req.body.email} </p>
                <p> <strong> Mobile Number: </strong> ${req.body.mobileno} </p>
                <p> <strong> Purpose : </strong> ${req.body.selection} </p>
                <p> <strong> Message : </strong> ${req.body.msg} </p>
                <p> <strong> Date & Time :</strong>${date} </p>
                <p> <strong> IP Address: </strong>${clientIp} </p>`
                console.log('first', emailContent, process.env.EMAIL_URL)
                await axios.post("https://node-email-setup.vercel.app/sendemail", { email: 'hsrdentalbooth@gmail.com', sub: emailSubject, msg: emailContent }
                    // client.sendMail(
                    //     {
                    //         from: `Web Developer <${process.env.EMAILID}>`,
                    //         to: "dentavenuemumbai@gmail.com,chemburd@gmail.com,akshayb13@gmail.com,rudrawar.saudnya46@gmail.com",
                    //         subject: emailSubject,
                    //         text: emailContent
                    //     }
                ).then(() => {
                    console.log('Nodr Email sent')
                    res.status(201).json({ success: true, data: "Email Sent" })
                })
                    .catch((error) => {
                        console.error(error)
                        res.status(400).json({ success: false });
                    })
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        default:
            res.status(400).json({ success: false });
            break;
    }
}