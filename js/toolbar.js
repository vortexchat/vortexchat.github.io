(function() {

    var toolbar = document.getElementById("toolbar") || document.querySelector("#toolbar");
    var toolbarClass = "";
    var scrollTimeStamp = 0;

    window.addEventListener("scroll", updateToolbarClass);

    function updateToolbarClass(e) {

        var newScrollTimeStamp = e.timeStamp;

        if(newScrollTimeStamp - scrollTimeStamp > 20) {

            scrollTimeStamp = newScrollTimeStamp;

            var scrollTopPX = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;

            // Toolbar style
            if(scrollTopPX < 10) {

                if(toolbarClass !== "") {

                    toolbarClass = "";
                    toolbar.className = toolbarClass;
                }
            }else {

                if(toolbarClass !== "scrolled") {

                    toolbarClass = "scrolled";
                    toolbar.className = toolbarClass;
                }
            }

        }
    }

})();