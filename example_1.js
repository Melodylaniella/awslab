var AWS = require('aws-sdk');
AWS.config.loadFromPath('./config.json');
var ec2 = new AWS.EC2();

var params = {
  DryRun: false,
  InstanceIds: [
    'i-0dd34149b6c9db741',

  ],
};

var task =  function(request, callback){

        var fName = request.query.fName ? request.query.fName : "missing parameter: fName";
        var lName = request.query.lName ? request.query.lName : "missing parameter: lName";

        ec2.describeInstances(params, function(err, data) {
        	if (err) console.log(err, err.stack); // an error occurred
       	else callback(null, fName + " " + lName+ "\n"+data);           // successful response
        });
}

exports.lab = task
