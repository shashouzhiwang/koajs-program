var eventproxy = require('eventproxy');
var express = require('express');
var cheerio = require('cheerio');
var superagent = require('superagent');
var router = express.Router();
var url = require('url');
var cnodeUrl = 'https://cnodejs.org/';
/* GET home page. */
router.get('/', function(req, res, next) {
    superagent.get('https://cnodejs.org/')
        .end(function (err, sres) {
            if (err) {
                return next(err);
            }
            var $ = cheerio.load(sres.text);
            var items = [];
            var topicUrls = [];
            $('#topic_list .topic_title').each(function (idx, element) {
                var $element = $(element);
                // items.push({
                //     title: $element.attr('title'),
                //     href: $element.attr('href')
                // });
                var href = url.resolve(cnodeUrl, $element.attr('href'));
                topicUrls.push(href);
                // 得到 topicUrls 之后

// 得到一个 eventproxy 的实例

// 命令 ep 重复监听 topicUrls.length 次（在这里也就是 40 次） `topic_html` 事件再行动

            });


            var ep = new eventproxy();
            ep.after('topic_html', topicUrls.length, function (topics) {
                // topics 是个数组，包含了 40 次 ep.emit('topic_html', pair) 中的那 40 个 pair
// console.log('000');
                // 开始行动
                topics = topics.map(function (topicPair) {
                    // 接下来都是 jquery 的用法了
                    var topicUrl = topicPair[0];
                    var topicHtml = topicPair[1];
                    var $ = cheerio.load(topicHtml);
                    console.log({
                        title: $('.topic_full_title').text().trim(),
                        href: topicUrl,
                        comment1: $('.reply_content').eq(0).text().trim(),
                    });
                    return ({
                        title: $('.topic_full_title').text().trim(),
                        href: topicUrl,
                        comment1: $('.reply_content').eq(0).text().trim(),
                    });
                });

                // console.log('final:');
                // console.log(topics);
            });
//
            topicUrls.forEach(function (topicUrl) {
                superagent.get(topicUrl)
                    .end(function (err, res) {
                        // console.log('fetch ' + topicUrl + ' successful');
                        // console.log(res);
                        ep.emit('topic_html', [topicUrl, res.text]);
                    });
            });

            // res.send(items);
        });
  res.render('index', { title: 'Express' });
});

module.exports = router;
