var yo = require('yo-yo');
var account = require('../layout/account');

var usernameHead = function(username) {
    return yo`<div class="col s12 m7">
        <p>${username}</p>
        <p class="User-description">Profesor del Team Platzi, Javascript FullStack developer...</p>
    </div>`;
}

module.exports = usernameHead;
