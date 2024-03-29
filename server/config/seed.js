/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');
var Message = require('../api/message/message.model');
var Channel = require('../api/channel/channel.model');

Thing.find({}).remove(function () {
  Thing.create({
    name: 'Development Tools',
    info: 'Integration with popular tools such as Bower, Grunt, Karma, Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, Stylus, Sass, CoffeeScript, and Less.'
  }, {
      name: 'Server and Client integration',
      info: 'Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node.'
    }, {
      name: 'Smart Build System',
      info: 'Build system ignores `spec` files, allowing you to keep tests alongside code. Automatic injection of scripts and styles into your index.html'
    }, {
      name: 'Modular Structure',
      info: 'Best practice client and server structures allow for more code reusability and maximum scalability'
    }, {
      name: 'Optimized Build',
      info: 'Build process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching.'
    }, {
      name: 'Deployment Ready',
      info: 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators'
    });
});

Channel.find({}).remove(function () {
  Channel.create(
    {
      name: 'health',
      members: [
        { number: random(7), gender: "Female", age: 28 }, { number: random(7), gender: "Male", age: 54 }, { number: random(7), gender: "Female", age: 43 }, { number: random(7), gender: "Male", age: 27 }
      ],
      statsimage: 'assets/images/health.png'
    }, {
      name: 'agriculture',
      members: [
        { number: random(7), gender: "Female", age: 28 }, { number: random(7), gender: "Male", age: 54 }, { number: random(7), gender: "Female", age: 43 }, { number: random(7), gender: "Male", age: 27 }
      ], statsimage: "assets/images/agriculture.png"
    }, {
      name: 'oleleshwaagriculture',
      members: [{ number: random(7), gender: "Female", age: 28 }, { number: random(7), gender: "Male", age: 54 }, { number: random(7), gender: "Female", age: 43 }], statsimage: 'assets/images/oleleshwaagriculture.png'
    }, {
      name: 'education',
      members: [{ number: random(7), gender: "Female", age: 28 }, { number: random(7), gender: "Male", age: 54 }], statsimage: 'assets/images/education.png'
    }, function () {
      console.log('finished populating channels');
    });

});

Message.find({}).remove(function () {
  Message.create(
    {
      content: 'Health event today at 6pm in the town hall',
      channel: 'health',
      from: '+12312313213'
    }, {
      content: 'Fertilizer truck is coming in tomorrow morning',
      channel: 'agriculture',
      from: '+1231252213'
    }, {
      content: 'I need some help with my dying crops',
      channel: 'agriculture',
      from: '+12348513213'
    }, {
      content: 'Parents and teachers meeting happening in 5 hours',
      channel: 'education',
      from: '+12312313213'
    }, function () {
      console.log('finished populating message');
    });
});

User.find({}).remove(function () {
  User.create({
    provider: 'local',
    name: 'Amy (FTC Admin)',
    email: 'amy@ftc.com',
    password: 'amy'
  }, {
      provider: 'local',
      role: 'admin',
      name: 'Admin',
      email: 'admin@admin.com',
      password: 'admin'
    }, function () {
      console.log('finished populating users');
    }
    );
});

function random(count)
{
    var text = "254";
    var possible = "0123456789";

    for( var i=0; i < count; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}
