var yo = require('yo-yo');

module.exports = function account(boxHead, boxBody) {
    return yo`<div class="container">
    <div class="row">
      <div class="col s10 push-s1">
        <div class="row">
          <div class="col m5 hide-on-small-only">
            <img src="https://scontent-atl3-1.xx.fbcdn.net/hphotos-xpa1/v/t1.0-9/11031148_10153448564292612_2579019413701631604_n.jpg?oh=d83cdd0687c87c91b247a42375f
c5a57&oe=57B12767" class="avatar">
          </div>
          ${boxHead}
        </div>
        <div class="row">            
              ${boxBody}
        </div>
      </div>
    </div>
  </div>`
}
