require("dotenv").config()
const exprees = require('express')
const nodemailer = require('nodemailer')
const cors = require('cors')

const app = exprees()
const PORT = process.env.PORT || 4000

// midleware setup
app.use(exprees.json())
app.use(cors())



app.get('/',(req,res)=>{
  res.send('send')  
})


app.post('/user_info', async(req,res)=>{
  try {
   const {name,email,message} = req.body;

   const transPorter = nodemailer.createTransport({
    service: "gmail",
    auth: {
     user: process.env.USER,
     pass: process.env.PASS
    },
   })

   const mailOptions = {
    from: `${name} <${process.env.USER}/>`,
    to: process.env.USER,
    subject: "New Message Recevied",
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
   }
    
   await transPorter.sendMail(mailOptions)
   res.status(200).send("Message sent successfully")

  } catch (error) {
    console.error("Error sending email",error)
    res.status(500).send("Something went wrong email not sent")
    // console.log(error)
  }
})






app.listen(PORT,()=>{
    console.log(`server is listening on port ${PORT}`)
})


