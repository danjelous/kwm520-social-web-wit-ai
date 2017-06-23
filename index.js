const {Wit} = require('node-wit');

const Client = new Wit({
    accessToken: '6AJQKKLX2ZIN764W2G7IVFN7SALSENW7'
});

Client.message('Gruezi', {})
    .then((data) => {
        let intent = data.entities.intent[0].value
    });