# two-step-auth

This is a npm package that helps in verifying an Email address by sending OTP

## Installation

```bash
npm i --save two-step-auth
```
## What It Does
For people developing login sections they must know if the email Id the end user provides is valid, thus this package takes in the Email ID they provide and returns you a data OTP to verify them, and sends the client one via Email, Thus making sure only verified Emails are encouraged.

## Usage

```node.js
const {Auth} = require('two-step-auth');

async function login(emailId){
    const res = await Auth(emailId, "Optional Company Name")
    console.log(res);
}

login("YourEmail@anyDomain.com")

```

## Output Format
The output will be a Javascript JSON object, making it easy to work

```node.js
{ mail: 'YourEmail@anyDomain.com', OTP: 141129, success: true }
YourEmail@anyDomain.com
141129
true

```


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)