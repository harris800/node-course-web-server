const {ObjectID} = require('mongodb');
const {Todo} = require('./../../models/todo');
const {User} = require('./../../models/user');
const jwt = require('jsonwebtoken');

const UserOneId = new ObjectID();
const UserTwoId = new ObjectID();


const todos = [{
  _id: new ObjectID(),
  text: 'First test todo',
  _creator: UserOneId
}, {
  _id: new ObjectID(),
  text: 'Second test todo',
  _creator: UserTwoId
}];

const users = [{
  _id: UserOneId,
  email: 'test@test.com',
  password: 'userOnePass',
  token: [{
    access: 'auth',
    token: jwt.sign({_id: UserOneId, access: 'auth'}, 'abc123').toString()
  }]
}, {
  _id: UserTwoId,
  email: 'test2@test.com',
  password: 'userTwoPass',
  token: [{
    access: 'auth',
    token: jwt.sign({_id: UserTwoId, access: 'auth'}, 'abc123').toString()
  }]
}];

const populateTodos = (done) => {
  Todo.remove({}).then(() => {
    return Todo.insertMany(todos);
  }).then(() => done());
};

const populateUsers = (done) => {
  User.remove({}).then(() => {
    var userOne = new User(users[0]).save();
    var userTwo = new User(users[1]).save();
    return Promise.all([userOne, userTwo]);
  }).then(() => {
    done();
  })
}

module.exports = {
  todos,
  populateTodos,
  users,
  populateUsers
}
