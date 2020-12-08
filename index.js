const axios = require('axios');

const LoginCredentials = {
    mailID: "",
    password: "",
    use: false
}

function sendMail(emailID, CompanyName = ""){
        return new Promise((resolve, reject)=>{
            try{
                axios.get(`https://app-authenticator.herokuapp.com/auth/${emailID}?CompanyName=${CompanyName}`)
                // axios.get(`http://localhost:5000/auth/${emailID}?CompanyName=${CompanyName}`)
                .then((result) => {
                    resolve(result.data);
                }).catch((err) => {
                    reject(err.message);
                });
            }catch (err){
                reject(err.message)
            }
        })
}

function CheckLogin(emailId, CompanyName=""){
    return new Promise((resolve, reject)=>{
        try {
            axios.get(`https://app-authenticator.herokuapp.com/check?emailId=${LoginCredentials.mailID}&password=${LoginCredentials.password}`)
            // axios.get(`http://localhost:5000/check?emailId=${LoginCredentials.mailID}&password=${LoginCredentials.password}`)
            .then((result) => {
               if(result.data.success){
                    console.log("Sending mail from -> ", LoginCredentials.mailID);
                   resolve(sendMail(emailId, CompanyName));
               } else {
                   reject(result.data.error)
               }
            }).catch((err) => {
                reject(err.message);
            });
        } catch (error) {
            reject(error.message);
        }
    })
}

function Auth (emailId, CompanyName=""){
    return new Promise((resolve, reject)=>{
        try {
            if(LoginCredentials.use){
                resolve(CheckLogin(emailId, CompanyName));
            } else {
                resolve(sendMail(emailId, CompanyName));
            }
        } catch (error) {
            reject(error.message);
        }
    }) 
}



module.exports = {
    Auth : Auth,
    LoginCredentials : LoginCredentials,
}