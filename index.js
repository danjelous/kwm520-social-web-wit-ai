const { Wit } = require('node-wit');
const request = require('request');

const Client = new Wit({
    accessToken: '6AJQKKLX2ZIN764W2G7IVFN7SALSENW7'
});

Client.message('Wie ist das Wetter in Linz?', {})
    .then((data) => {
        let intent = data.entities.intent[0].value;;

        switch (intent) {
            case 'Greeting':
                console.log('Hallo, freut mich dass du den KWM Bot benutzt!');
                break;
            case 'Weather':
                let location = data.entities.location[0].value;
                getWeather(location);
                break;
            case 'Routing':
                console.log('Routing erkannt');
                break;
            default:
                console.log('Sorry, nichts erkannt');
                break;
        }
    });

getWeather = (location) => {
    request({
        uri: 'http://api.openweathermap.org/data/2.5/weather?q=' +
        location + '&APPID=6d27a14750ed96c42de990ad1f236ec2',
        method: 'GET'
    }, (err, res, body) => {
        if (!err && res.statusCode == 200) {
            console.log(body);
        } else {
            console.log('Failed calling API', res.statusCode,
                res.statusMessage, body.error);
        }
    });
}