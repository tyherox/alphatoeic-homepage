import listScores from '../imports/api/scores/main';
import init from '/imports/startup/server/init';

Meteor.startup(() => {
    listScores();
    //Refresh Scores every hour
    Meteor.setInterval(()=>listScores(), 3600000)
});