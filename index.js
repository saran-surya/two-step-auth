const axios = require('axios');

function Auth (emailId, CompanyName=""){
    return new Promise((resolve, reject)=>{
        try{
            axios.get(`https://app-authenticator.herokuapp.com/auth/${emailId}?CompanyName=${CompanyName}`)
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

module.exports = {
    Auth : Auth
}