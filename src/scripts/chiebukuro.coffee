# Description
#   A Hubot script that search the keyword on Yahoo!Chiebukuro
#
# Configuration:
#   HUBOT_CHIEBUKURO_APP_ID
#
# Commands:
#   hubot chiebukuro <keyword> - search the keyword on Yahoo!Chiebukuro
#
# Author:
#   bouzuya <m@bouzuya.net>
#
module.exports = (robot) ->
  {parseString} = require 'xml2js'
  APP_ID = process.env.HUBOT_CHIEBUKURO_APP_ID

  robot.respond /chiebukuro (.+)$/i, (res) ->
    url = 'http://chiebukuro.yahooapis.jp/Chiebukuro/V1/questionSearch'
    query = res.match[1]
    res
      .http(url + '?appid=' + APP_ID + '&query=' + query)
      .get() (err, _, body) ->
        return res.send(err) if err?
        parseString body, (err, result) ->
          return res.send(err) if err?
          question = result.ResultSet.Result[0].Question[0]
          return res.send('no question') unless question?
          res.send """
          #{question.Url[0]}
          #{question.Content[0]}
          """
