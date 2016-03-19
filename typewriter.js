//My very own try at making typewriter libary -- More features and refactoring needed --

(function (global, $) {
'use strict'
    var Typewriter = function (selector) {
        return new Typewriter.init(selector);
    };

    Typewriter.prototype = {
        typeText: function (x) {
            var selector = this.selector;
            var len = x.length;
            var i = 0;
            var interval = len * 500;
            function type() {
                selector.html("");
                $.each(x[i].split(''), function (index, letter) {
                    //we add 100*i ms delay to each letter 
                    setTimeout(function () {
                        //we add the letter to the container
                        selector.html(selector.html() + letter);

                    }, 100 * index);
                });
                i++;
                if (i === len) {
                    i = 0;
                }
            }
            setInterval(type, interval);

        }
        //Chain method should be added
        return this;
    }

    Typewriter.init = function (selector) {

        this.selector = $(selector);
        this.len = this.selector.length;
        console.log(this.len);

        return selector;
    }


    Typewriter.init.prototype = Typewriter.prototype;
    global.Typewriter = Typewriter;

}(this, jQuery));

