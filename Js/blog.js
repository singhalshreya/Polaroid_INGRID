$(document).ready(function() {
    $(".reviews").each(function() {
        var This = $(this);
        var Numbs = This.find(".panel").size();
        This.find(".panel:first").addClass("PanelAct");
        This.append("<div class='control'></div>");
        This.find(".panel").not(".PanelAct")
            .css("left", "100%")
        for (i = 0; i < Numbs; i++) {
            This.find(".control").append("<span></span>");
        }
        This.find(".control span:eq(0)").addClass("ContActive");

        This.find(".control span").click(Reviews);

        function Reviews() {
            var loc = $(this).index();
            var ActiveLoc = This.find(".ContActive").index();

            $(this).addClass("ContActive")
                .siblings().removeAttr("class");

            if (loc > ActiveLoc) {
                var Dire = '100%'
                var IDire = '-100%'
            }
            if (loc < ActiveLoc) {
                var Dire = '-100%'
                var IDire = '100%'
            }

            This.find(".panel").not(".PanelAct")
                .css("left", Dire);
            This.find(".panel:eq(" + loc + ")")
                .animate({ 'left': '0' }, speed)
                .addClass("PanelAct")
                .siblings(".PanelAct")
                .removeClass("PanelAct")
                .animate({ 'left': IDire }, speed);
        }
    });
});