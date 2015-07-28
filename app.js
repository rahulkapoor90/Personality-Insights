var watson = require('watson-developer-cloud');

var personality_insights = watson.personality_insights({
    username: '97762-b05928a6fea8',
    password: '2LFCvXdm0',
    version: 'v2'
});

personality_insights.profile({
        text: 'I write this to explain why I’ll be holding back my album, 1989, from the new streaming service, Apple Music. I feel this deserves an explanation because Apple has been and will continue to be one of my best partners in selling music and creating ways for me to connect with my fans. I respect the company and the truly ingenious minds that have created a legacy based on innovation and pushing the right boundaries.I’m sure you are aware that Apple Music will be offering a free 3 month trial to anyone who signs up for the service. I’m not sure you know that Apple Music will not be paying writers, producers, or artists for those three months. I find it to be shocking, disappointing, and completely unlike this historically progressive and generous company.This is not about me. Thankfully I am on my fifth album and can support myself, my band, crew, and entire management team by playing live shows. This is about the new artist or band that has just released their first single and will not be paid for its success. This is about the young songwriter who just got his or her first cut and thought that the royalties from that would get them out of debt. This is about the producer who works tirelessly to innovate and create, just like the innovators and creators at Apple are pioneering in their field…but will not get paid for a quarter of a year’s worth of plays on his or her songs.These are not the complaints of a spoiled, petulant child. These are the echoed sentiments of every artist, writer and producer in my social circles who are afraid to speak up publicly because we admire and respect Apple so much. We simply do not respect this particular call.I realize that Apple is working towards a goal of paid streaming. I think that is beautiful progress. We know how astronomically successful Apple has been and we know that this incredible company has the money to pay artists, writers and producers for the 3 month trial period… even if it is free for the fans trying it out.Three months is a long time to go unpaid, and it is unfair to ask anyone to work for nothing. I say this with love, reverence, and admiration for everything else Apple has done. I hope that soon I can join them in the progression towards a streaming model that seems fair to those who create this music. I think this could be the platform that gets it right.But I say to Apple with all due respect, it’s not too late to change this policy and change the minds of those in the music industry who will be deeply and gravely affected by this. We don’t ask you for free iPhones. Please don’t ask us to provide you with our music for no compensation. ',
        language: 'en' },
    function (err, response) {
        if (err)
            console.log('error:', err);
        else
            console.log(JSON.stringify(response, null, 2));
    });