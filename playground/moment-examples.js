var moment = require('moment');

console.log(moment().format());

var now = moment();

console.log('Current Timestamp: ', now.unix());

var timestamp = 1459111648;
var currentMoment = moment.unix(now.unix());

console.log('current moment', currentMoment.format('hh:mm'))
console.log('current moment', currentMoment.format('MMM D, YYYY @ hh:mm A'))


console.log('current moment', currentMoment.format('MMMM Do, YYYY @ hh:mm A'))
