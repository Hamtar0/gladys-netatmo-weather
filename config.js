module.exports = {
    client_id: process.env.NETATMO_CLIENT_ID || 'YOUR-CLIENT-ID', // Client id of your app in https://dev.netatmo.com/myaccount/
    client_secret: process.env.NETATMO_CLIENT_SECRET || 'YOUR-CLIENT-SECRET', // Client secret of your app in https://dev.netatmo.com/myaccount/
    username: process.env.NETATMO_LOGIN || 'YOUR-LOGIN', // The login of your Netatmo account on https://my.netatmo.com/
    password: process.env.NETATMO_PASSWORD || 'YOUR-PASSWORD', // The password of your Netatmo account on https://my.netatmo.com/
    gladysUrl: process.env.GLADYS_URL || 'http://localhost:8080', // the URL of your main Gladys Instance
    token: process.env.GLADYS_TOKEN || 'YOUR-GLADYS-TOKEN', // your gladys security token. You can find it in Gladys Dashboard "Parameters" => "Security". 
};