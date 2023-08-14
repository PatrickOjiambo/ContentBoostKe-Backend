const AWS = require("aws-sdk");

const s3 = new AWS.S3();

(async ()=>{
    await s3
    .putObject({
        Body: '<Binary String>',
        Bucket: 'pash-bucket-s3',
        Key: 'my-file.txt'
    }).promise();
})(); 