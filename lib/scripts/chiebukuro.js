// Description
//   A Hubot script that search the keyword on Yahoo!Chiebukuro
//
// Configuration:
//   HUBOT_CHIEBUKURO_APP_ID
//
// Commands:
//   hubot chiebukuro <keyword> - search the keyword on Yahoo!Chiebukuro
//
// Author:
//   bouzuya <m@bouzuya.net>
//
module.exports = function(robot) {
  var APP_ID, parseString;
  parseString = require('xml2js').parseString;
  APP_ID = process.env.HUBOT_CHIEBUKURO_APP_ID;
  return robot.respond(/chiebukuro (.+)$/i, function(res) {
    var query, url;
    url = 'http://chiebukuro.yahooapis.jp/Chiebukuro/V1/questionSearch';
    query = res.match[1];
    return res.http(url + '?appid=' + APP_ID + '&query=' + query).get()(function(err, _, body) {
      if (err != null) {
        return res.send(err);
      }
      return parseString(body, function(err, result) {
        var question;
        if (err != null) {
          return res.send(err);
        }
        question = result.ResultSet.Result[0].Question[0];
        if (question == null) {
          return res.send('no question');
        }
        return res.send("" + question.Url[0] + "\n" + question.Content[0]);
      });
    });
  });
};
