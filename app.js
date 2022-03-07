//(function ($) { var a = {}, c = "doTimeout", d = Array.prototype.slice; $[c] = function () { return b.apply(window, [0].concat(d.call(arguments))) }; $.fn[c] = function () { var f = d.call(arguments), e = b.apply(this, [c + f[0]].concat(f)); return typeof f[0] === "number" || typeof f[1] === "number" ? this : e }; function b(l) { var m = this, h, k = {}, g = l ? $.fn : $, n = arguments, i = 4, f = n[1], j = n[2], p = n[3]; if (typeof f !== "string") { i--; f = l = 0; j = n[1]; p = n[2] } if (l) { h = m.eq(0); h.data(l, k = h.data(l) || {}) } else { if (f) { k = a[f] || (a[f] = {}) } } k.id && clearTimeout(k.id); delete k.id; function e() { if (l) { h.removeData(l) } else { if (f) { delete a[f] } } } function o() { k.id = setTimeout(function () { k.fn() }, j) } if (p) { k.fn = function (q) { if (typeof p === "string") { p = g[p] } p.apply(m, d.call(n, i)) === true && !q ? o() : e() }; o() } else { if (k.fn) { j === undefined ? e() : k.fn(j === false); return true } else { e() } } } })(jQuery);

let isAnimating = false;

$(window).on("load resize scroll", function () {
    var windowTop = $(window).scrollTop();
    var documentHeight = $(document).height();
    var windowHeight = $(window).height();

    scrollPercent = (windowTop / (documentHeight - windowHeight)) * 100;
    $("#proBar").css("width", `${scrollPercent}%`)

    if (isAnimating == false) {
        function switchIcon(isGood, element) {
            let oldLeft = element.css("left");
            let oldRight = element.css("right");
            let oldTop = element.css("top");
            let oldBottom = element.css("bottom");

            if ($(element).is(".bg-move, .bg-move2, .bg-move3")) {
                $(element).animate({ left: -1000 }, 500, function () {
                    changeIcon();

                    $(element).animate({ left: oldLeft }, 500);
                });
            }
            else if ($(element).is(".bg-move-r, .bg-move2-r")) {
                $(element).animate({ right: -1000 }, 500, function () {
                    changeIcon();

                    $(element).animate({ right: oldRight }, 500);
                });
            }
            else if ($(element).is(".bg-move-r-t, .bg-move2-r-t")) {
                $(element).animate({ right: -1000, top: -1000 }, 500, function () {
                    changeIcon();

                    $(element).animate({ right: oldRight, top: oldTop }, 500);
                });
            }
            else if ($(element).is(".bg-move-t, .bg-move2-t")) {
                $(element).animate({ left: -1000, top: -1000 }, 500, function () {
                    changeIcon();

                    $(element).animate({ left: oldLeft, top: oldTop }, 500);
                });
            }
            else if ($(element).is(".bg-move-u")) {
                $(element).animate({ left: -1000, bottom: -1000 }, 500, function () {
                    changeIcon();

                    $(element).animate({ left: oldLeft, bottom: oldBottom }, 500);
                });
            }

            function changeIcon() {
                if (isGood == true) {
                    switch (element.attr("alt")) {
                        case "snapchat":
                            element.attr("src", "img/snapchat.png");
                            break;
                        case "instagram":
                            element.attr("src", "img/instagram.png");
                            break;
                        case "facebook":
                            element.attr("src", "img/facebook.png");
                            break;
                        case "tiktok":
                            element.attr("src", "img/tiktok.png");
                            break;
                        case "youtube":
                            element.attr("src", "img/youtube.png");
                            break;
                    }
                }
                else {
                    switch (element.attr("alt")) {
                        case "snapchat":
                            element.attr("src", "img/reverse/snapchat.png");
                            break;
                        case "instagram":
                            element.attr("src", "img/reverse/instagram.png");
                            break;
                        case "facebook":
                            element.attr("src", "img/reverse/facebook.png");
                            break;
                        case "tiktok":
                            element.attr("src", "img/reverse/tiktok.png");
                            break;
                        case "youtube":
                            element.attr("src", "img/reverse/youtube.png");
                            break;
                    }
                }
            }
        }

        var checkTop = $("#darkside").offset().top;
        if ($(".body").hasClass("to-red-500")) {
            if (windowTop < checkTop - 30) {
                isAnimating = true;

                $(".body").removeClass("to-red-500");
                $("#darkside").animate({ "padding-top": $(window).height() }, 500);

                $(".bg-static").each(function () {
                    switchIcon(true, $(this).find("*"));
                });

                isAnimating = false;
            }
        }
        else {
            if (windowTop >= checkTop - 30) {
                isAnimating = true;

                $(".body").addClass("to-red-500");
                $("#darkside").animate({ "padding-top": 10 }, 500);

                $(".bg-static").each(function () {
                    switchIcon(false, $(this).find("*"));
                });

                isAnimating = false;
            }
        }

        $(".bg-static").each(function () {
            var elementTop = $(this).offset().top;
            var position = (windowTop - elementTop) / ($(document).height() / $(document).width());
            $(this)
                .find(".bg-move")
                .css({ left: position });
            $(this)
                .find(".bg-move2")
                .css({ left: position / 2 });
            $(this)
                .find(".bg-move3")
                .css({ left: position / 3 });
            $(this)
                .find(".bg-move-r")
                .css({ right: position });
            $(this)
                .find(".bg-move2-r")
                .css({ right: position / 2 });
            $(this)
                .find(".bg-move-r-t")
                .css({ right: position / 4, top: position / 4 });
            $(this)
                .find(".bg-move2-r-t")
                .css({ right: position / 6, top: position / 6 });
            $(this)
                .find(".bg-move-t")
                .css({ left: position / 4, top: position / 4 });
            $(this)
                .find(".bg-move2-t")
                .css({ left: position / 6, top: position / 6 });
            $(this)
                .find(".bg-move-u")
                .css({ left: position / 3, bottom: position / 3 });
        });
    }
});

jQuery(function ($) {
    var mousePos = { x: -1, y: -1 };
    $(document).mousemove(function (event) {
        mousePos.x = event.pageX;
        mousePos.y = event.pageY;
    });

    $(this).click(function () {
        let items = ["img/original/snapchat.png", "img/original/instagram.png", "img/original/youtube.png", "img/original/facebook.png", "img/original/tiktok.png"]
        $(".images").append(`<img src="${items[Math.floor(Math.random() * items.length)]}" alt="snapchat" class="movedown bg-s rotate w3-opacity-min" style="position: absolute; left:${mousePos.x - 10 + "px"}; top:${mousePos.y - 10 + "px"}; z-index: 100;">`);
        $(".movedown").animate({ top: '+=30px', opacity: '-=0.8' }, "slow").promise().done(function () {
            $(".movedown").remove()
        });
    })
});

$(document).ready(function () {
    $("#darkside").css("padding-top", $(window).height());

    $("#openNav").click(function () {
        $("#main").css("marginLeft", "25%");
        $("#mySidebar").css({ "width": "25%", "display": "block" });
        $("#openNav").css("display", "none");
    });
    $("#closeNav").click(function () {
        $("#main").css("marginLeft", "0%");
        $("#mySidebar").css("display", "none");
        $("#openNav").css("display", "inline-block");
    });
    $(".ytimgbtn").click(function () {
        console.log($('.ytimg').css("display"));
        if ($('.ytimg').css("display") == "none") {
            $('.ytimg').slideDown();
            $(this).html("Hide Picture<br>\u2227");
        }
        else {
            $('.ytimg').slideUp();
            $(this).html("Show Picture<br>&#x2228;");
        }
    });
    $("#top").click(function () {
        $('body, html').animate({ scrollTop: 0 }, 800);
    });
    $("#1").click(function () {
        $('body, html').animate({ scrollTop: $("#jump1").offset().top }, 800);
    });
    $("#2").click(function () {
        $('body, html').animate({ scrollTop: $("#jump2").offset().top }, 800);
    });
    $("#3").click(function () {
        $('body, html').animate({ scrollTop: $("#jump3").offset().top }, 800);
    });
})

// Dark part using red
// How to escape using Blue or green