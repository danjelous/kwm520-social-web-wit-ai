const {Wit} = require('node-wit');

const Client = new Wit({
    accessToken: '6AJQKKLX2ZIN764W2G7IVFN7SALSENW7'
});

Client.message('Gruezi', {})
    .then((data) => {
        let intent = data.entities.intent[0].value;
        console.log(intent);

        switch(intent) {
            case 'Greeting':
                console.log('Hallo, freut mich dass du den KWM Bot benutzt!');
                break;
            case 'Weather':
                console.log('Wetter erkannt');
                break;
            case 'Routing':
                console.log('Routing erkannt');
                break;
            default:
                console.log('Sorry, nichts erkannt');
                break;
        }
    });