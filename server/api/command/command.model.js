var CommandSchema = {
  action:"",
  parameter:""
}

exports.parse = function(str) {
  var cs = CommandSchema;
  var res = str.split(" ");
  if (res.length > 1) {

    var cmd = res[0].toLowerCase();
    var prm = res.slice(1, res.length);
    prm = prm.join(" ");

    cs.action = cmd;
    cs.parameter = prm;
  }

  return cs;
}
