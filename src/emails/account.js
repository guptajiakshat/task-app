const sgMail = require('@sendgrid/mail')
const from = 'akshatgupta2k@gmail.com'
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const signupEmail = (name, to) => {
    sgMail.send({
        to,
        from,
        subject: 'thanks for joining',
        text: `welcome ${name} to your random shit hole`
    }).then(() => {
        console.log('Email sent')
    }).catch((error) => {
        console.error(error)
    })
}

const deleteEmail = (name, to) => {
    sgMail.send({
        to,
        from,
        subject: 'Sorry to see you go',
        text: `Goodbye ,${name}`
    })
}

module.exports = {
    signupEmail,
    deleteEmail
}