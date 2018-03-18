//AWS Credentials
let credentials = JSON.parse(Assets.getText("AWSConfig.json"));

let S3 = require('aws-sdk/clients/s3');

// Set credentials and region
let s3 = new S3({
  apiVersion: '2006-03-01',
  region: credentials.region,
  credentials: {
    accessKeyId: credentials.accessKeyId,
    secretAccessKey: credentials.secretAccessKey
  }
});

let scores = [];

//List and save scores to reduce calling to s3
function listScores(){

  scores = [];

  s3.listObjects({Bucket: 'alphatoeic-website', Marker: 'scores/'}, function(err, object){

    object.Contents.forEach(function(elem){
      let key = elem['Key'];
      //Extract date from image name
      scores.push({
        url: "https://s3.ap-northeast-2.amazonaws.com/alphatoeic-website/" + key,
        date: key.replace('scores/', '').split('_')[1].replace('.jpg', '')
      });
    });
  });
}

//Method to call saved scores
Meteor.methods({
  getScores () {
    return scores;
  }
});

export default listScores;