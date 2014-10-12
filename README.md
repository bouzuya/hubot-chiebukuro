# hubot-chiebukuro

A Hubot script that search the keyword on Yahoo!Chiebukuro

## Installation

    $ npm install git://github.com/bouzuya/hubot-chiebukuro.git

or

    $ # TAG is the package version you need.
    $ npm install 'git://github.com/bouzuya/hubot-chiebukuro.git#TAG'

## Example

    bouzuya> hubot chiebukuro ぼうず
      hubot> http://detail.chiebukuro.yahoo.co.jp/qa/question_detail/q13136587523
             てれてれぼうずのお父さんの職業って何なんでしょうか？

## Configuration

See [`src/scripts/chiebukuro.coffee`](src/scripts/chiebukuro.coffee).

## Development

`npm run`

## License

[MIT](LICENSE)

## Author

[bouzuya][user] &lt;[m@bouzuya.net][mail]&gt; ([http://bouzuya.net][url])

## Badges

[![Build Status][travis-badge]][travis]
[![Dependencies status][david-dm-badge]][david-dm]
[![Coverage Status][coveralls-badge]][coveralls]

[travis]: https://travis-ci.org/bouzuya/hubot-chiebukuro
[travis-badge]: https://travis-ci.org/bouzuya/hubot-chiebukuro.svg?branch=master
[david-dm]: https://david-dm.org/bouzuya/hubot-chiebukuro
[david-dm-badge]: https://david-dm.org/bouzuya/hubot-chiebukuro.png
[coveralls]: https://coveralls.io/r/bouzuya/hubot-chiebukuro
[coveralls-badge]: https://img.shields.io/coveralls/bouzuya/hubot-chiebukuro.svg
[user]: https://github.com/bouzuya
[mail]: mailto:m@bouzuya.net
[url]: http://bouzuya.net
