var CommandSchema = {
  "action":"",
  "parameter":""
}

exports.parse = function(str) {
  var res = str.split(" ");
  if (res.length > 1) {

    var cmd = res[0].toLowerCase();
    var prm = res.slice(1, res.length);
    prm = prm.join(" ");

    switch (cmd) {
      case 'join':
        console.log("Joining " + prm);
        break;

      case 'leave':
        console.log("Leaving " + prm);
        break;

      case 'add':
        console.log("Adding " + prm);
        break;
    }
  }
}
