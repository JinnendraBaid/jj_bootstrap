$("#carouselButton").click(function () {
    if ($("#carouselButton").children("span").hasClass('fa-pause')) {
        $("#mycarousel").carousel('pause');
        $("#carouselButton").children("span").removeClass('fa-pause');
        $("#carouselButton").children("span").addClass('fa-play');
    }
    else if ($("#carouselButton").children("span").hasClass('fa-play')) {
        $("#mycarousel").carousel('cycle');
        $("#carouselButton").children("span").removeClass('fa-play');
        $("#carouselButton").children("span").addClass('fa-pause');
    }
});


    $(document).ready(function(){
        $("#loginhref").click(function () {
            $("#loginModal").modal();
        });
});

$(document).ready(function () {
    $("#reserveTablebtn").click(function () {
        $("#reserveModal").modal();
    });
});
