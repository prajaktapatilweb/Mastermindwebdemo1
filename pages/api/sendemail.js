// api/users.js


export default async function handler(req, res) {
  //   console.log('Received Data 12', req.body)

  console.log('first 21', process.env.API_TEST)
  //   console.log('first 21', loadEnvConfig())
  const sgMail = require('@sendgrid/mail')

  sgMail.setApiKey(process.env.API_TEST)
  const { method } = req
  switch (method) {
    case 'POST':
      try {
        console.log('Received Data', req.body)
        const msg = {
          to: `${req.body.email}`, // Change to your recipient
          from: 'dentavenuemumbai@gmail.com', // Change to your verified sender
          subject: `New enquiry `,
          text: `${req.body.name} has raise an inquiry on landing page. The details are as follows \n 
          Email: ${req.body.email} \n
          Mobile Number: ${req.body.mobileno} \n
          Purpose: ${req.body.selection}
          Message: ${req.body.msg}`,
          html: '<strong>and easy to do anywhere, even with Node.js</strong>',
        }
        console.log('The msessag', msg)
        sgMail
          .send(msg)
          .then(() => {
            console.log('Email sent')
          })
          .catch((error) => {
            console.error(error)
          })
        res.status(200).json({ success: true })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}
