const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcryptjs = require('bcryptjs');

var password = '123abc!';

// bcryptjs.genSalt(10,(err, salt) => {
//   bcryptjs.hash(password, salt, (err, hash) => {
//     console.log(hash);
//   })
// });

var hasedpassword = '$2a$10$0u9ueO7qOypNCh74B9/t.e/a5jEAydsyUWmpUPy12SgjIhqM8IvKO';

bcryptjs.compare(password, hasedpassword, (err, res) => {
  console.log(res);
});
// var data = {
//   id: 10
// }
//
// var token = jwt.sign(data, '123abc');
// console.log(token);
// var decoded = jwt.verify(token, '123abc');
// console.log(decoded);

//
// var message = 'I am user number 3';
//
// var hash = SHA256(message).toString();
// console.log(`message ${message}`);
// console.log(`hash ${hash}`);
//
// var data = {
//   id: 4
// };
//
// var token = {
//   data,
//   hash: SHA256(JSON.stringify(data) + 'secret').toString()
// }
//
// var resultHash = SHA256(JSON.stringify(token.data) + 'secret').toString();
//
// token.data.id = 5;
// token.hash = SHA256(JSON.stringify(token.data)).toString();
//
//
//
//
// if(resultHash === token.hash) {
//   console.log('data was not changed');
// } else {
//   console.log('data was changed. Don\'t trust');
// }
