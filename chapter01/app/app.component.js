System.register(["angular2/core"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var Article, ArticleComponent, RedditApp;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Article = (function () {
                function Article(title, link, votes) {
                    this.title = title;
                    this.link = link;
                    this.votes = votes || 0;
                }
                Article.prototype.voteUp = function () {
                    this.votes += 1;
                };
                Article.prototype.voteDown = function () {
                    this.votes -= 1;
                };
                Article.prototype.domain = function () {
                    try {
                        var link = this.link.split('//')[1];
                        console.log('jakajka');
                        return link.split('/')[0];
                    }
                    catch (err) {
                        console.log("hahahaj");
                        return null;
                    }
                };
                return Article;
            }());
            ArticleComponent = (function () {
                function ArticleComponent() {
                    this.article = new Article("Angular2", "http://www.google.com", 10);
                    console.log(this.article);
                }
                ArticleComponent.prototype.voteUp = function () {
                    this.article.voteUp();
                    return false;
                };
                ArticleComponent.prototype.voteDown = function () {
                    this.article.voteDown();
                    return false;
                };
                ArticleComponent = __decorate([
                    core_1.Component({
                        selector: "reddit-article",
                        inputs: ['article'],
                        host: {
                            class: "row"
                        },
                        template: "\n<div  class=\"four wide column center aligned votes\">\n    <div class=\"ui statistic\">\n        <div class=\"value\">{{ article.votes }}</div>\n        <div class=\"label\">Point</div>\n    </div>\n</div>\n<div class=\"twelve wide column\">\n    <a  class=\"ui large header\" href=\"{{ article.link }}\">{{ article.title }}</a>\n    <div>({{ article.domain() }})</div>\n    <ul class=\"ui big horizontal list voters\">\n        <li class=\"item\">\n            <a href (click)=\"voteUp()\">\n                <i class=\"arrow up icon\"></i>\n                Voteup\n            </a>\n        </li>\n        <li>\n            <a href (click)=\"voteDown()\">\n              <i class=\"arrow down icon\">votedown</i>\n            </a>\n         </li>\n    </ul>\n</div>\n       "
                    }), 
                    __metadata('design:paramtypes', [])
                ], ArticleComponent);
                return ArticleComponent;
            }());
            RedditApp = (function () {
                function RedditApp() {
                    this.articles = [
                        new Article("Angular 2", "http://angular.io", 3),
                        new Article("Fullstack", "http://fullstack.io", 2),
                        new Article("Angular Homepage", "http://angular.io", 1)
                    ];
                }
                RedditApp.prototype.addArticle = function (title, link) {
                    console.log("Adding Article title: " + title.value + " and link is " + link.value);
                    this.articles.push(new Article(title.value, link.value, 0));
                    title.value = "";
                    link.value = "";
                };
                RedditApp.prototype.sortArticles = function () {
                    return this.articles.sort(function (a, b) { return b.votes - a.votes; });
                };
                RedditApp = __decorate([
                    core_1.Component({
                        selector: "redditApp",
                        template: "\n           <form class=\"ui large form segment\">\n               <h2 class=\"ui header\">Add a link</h2>\n\n               <div class=\"field\">\n                   <label for=\"title\" >Title: </label>\n                   <input type=\"text\" #newtitle>\n               </div>\n\n                <div class=\"field\">\n                   <label for=\"link\" >link: </label>\n                   <input type=\"text\" #newlink>\n               </div>\n               <button (click)=\"addArticle(newtitle ,newlink)\"\n               class=\"ui positive right floated button\">\n               Submit\n               </button>\n           </form>\n           <reddit-article *ngFor=\"#article of sortArticles()\" [article]=\"article\"></reddit-article>\n    ",
                        directives: [ArticleComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], RedditApp);
                return RedditApp;
            }());
            exports_1("RedditApp", RedditApp);
        }
    }
});
//# sourceMappingURL=app.component.js.map