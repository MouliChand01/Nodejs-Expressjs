// use of this modue is to send mails from yahoo or google or any other plactforms
// we need to install one module that is mailer (npm i mailer)

var ml= require('nodemailer');

var transporter = nodemailer.createTransport({
    service :'gmail',
    auth:{
        user:"moulichand01@gmail.com",
        password:'Mouli@143'
    }
})

var options ={
    from:"moulichand01@gmail.com",
    to:"mouli.developer01@gmail.com",
    subject:'testing mail',
    text:"hello this is testing mail don't warry keep it a side"
}

transporter.sendMail(options,(err,data)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(data.respone)
    }
})