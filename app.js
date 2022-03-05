$(window).on("load resize scroll", function () {
    $(".bg-static").each(function () {
        var windowTop = $(window).scrollTop();
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
            .find(".bg-move4")
            .css({ left: position / 4 });
        $(this)
            .find(".bg-move5")
            .css({ left: position / 5 });
        $(this)
            .find(".bg-move-r")
            .css({ right: position });
        $(this)
            .find(".bg-move2-r")
            .css({ right: position / 2 });
        $(this)
            .find(".bg-move3-r")
            .css({ right: position / 3 });
        $(this)
            .find(".bg-move4-r")
            .css({ right: position / 4 });
        $(this)
            .find(".bg-move5-r")
            .css({ right: position / 5 });
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
    });
});

$(document).ready(function () {
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
})