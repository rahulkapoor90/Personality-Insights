var watson = require('watson-developer-cloud');
var fs = require('fs');

var personality_insights = watson.personality_insights({
    username: '...',
    password: '...',
    version: 'v2'
});

personality_insights.profile({
    text: 'blah blah blah',
    language: 'en' 
}, function (err, response) {
        if (err) {
            console.log('error:', err);
        } else {
            fs.writeFile(
                './file.json', 
                JSON.stringify(response, null, 2), 
                function(err){
                    throw err;
                }
            );
        }
    });
