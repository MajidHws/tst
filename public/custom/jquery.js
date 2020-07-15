$(document).ready(function () {
    $("#flip").click(function (e) {
        console.log(e.target.class)
        $("#panel").slideToggle("slow");
    });

    // Check Radio-box
    $(".rating input:radio").attr("checked", false);

    $('.rating input').click(function () {
        $(".rating span").removeClass('checked');
        $(this).parent().addClass('checked');
    });

    $('input:radio').change(
        function () {
            var userRating = this.value;
            alert(userRating);
        });


});

