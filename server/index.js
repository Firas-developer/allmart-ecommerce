const express = require("express")
const cors = require("cors")

const app =express();

app.use(cors())
app.use(express.json())

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service:"gmail",
  auth: {
    user: "allmart509@gmail.com",
    pass: "tlce aatw nttc mlla",
  },
});


app.post("/sendmail",function(req,res){

    const email = req.body.email;
   
    transporter.sendMail(
    {
        from:"allmart509@gmail.com",
        to:email,
        subject:"Greeting from All Mart! ",
        text:"Thank you for regsitering in our website happy shopping...!"
    },
    function(error,info){
        if(error){
        console.log(error);
        }
        else{
            console.log(info);
        }
    }
)
})


app.listen(5000, function(){
    console.log("Server Starting...")
})