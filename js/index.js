(function() {

    // Swiper
    var screenshotsSwiper = new Swiper('#screenshotsSwiper', {
        pagination: '#screenshotsSwiperPagination',
        effect: 'coverflow',
        autoplayStopOnLast: true,
        autoplay: 3600,
        keyboardControl: true,
        centeredSlides: true,
        grabCursor: true,
        slidesPerView: 'auto',
        coverflow: {
            rotate: 0,
            stretch: 0,
            depth: 200,
            modifier: 1.7,
            slideShadows: true
        }

    });

    var featuresSwiper = new Swiper('#featuresSwiper', {
        pagination: '#featuresSwiperPagination',
        effect: 'coverflow',
        autoplayStopOnLast: true,
        autoplay: 3600,
        keyboardControl: true,
        centeredSlides: true,
        grabCursor: true,
        slidesPerView: 'auto',
        coverflow: {
            rotate: 33,
            stretch: 0,
            depth: 150,
            modifier: .7,
            slideShadows: true
        }

    });

    /* OTHER */
    var windowHeight = window.height;

    var screenshots = document.getElementById("screenshotsSwiper") || document.querySelector("#screenshotsSwiper");
    var features = document.getElementById("featuresSwiper") || document.querySelector("#featuresSwiper");

    var screenshotsDistanceFromTop = screenshots.offsetTop;
    var featuresDistanceFromTop = features.offsetTop;

    var scrollTimeStamp = 0;

    var screenshotsSwiperAutoplayActive = false;
    var featuresSwiperAutoplayActive = false;

    screenshotsSwiper.stopAutoplay();
    featuresSwiper.stopAutoplay();

    window.addEventListener("scroll", activateThingsOnScroll);

    function activateThingsOnScroll(e) {

        var newScrollTimeStamp = e.timeStamp;

        if (newScrollTimeStamp - scrollTimeStamp > 20) {

            scrollTimeStamp = newScrollTimeStamp;

            var scrollTopPX = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;

            // Screenshots swiper autoplay
            if (scrollTopPX + windowHeight * 0.5 > screenshotsDistanceFromTop && !screenshotsSwiperAutoplayActive) {

                screenshotsSwiper.startAutoplay();
                screenshotsSwiperAutoplayActive = true;
            }

            // Features swiper autoplay
            if (scrollTopPX + windowHeight * 0.5 > featuresDistanceFromTop && !featuresSwiperAutoplayActive) {

                featuresSwiper.startAutoplay();
                featuresSwiperAutoplayActive = true;
            }
        }
    }

    /* HEADER DOWNLOAD BUTTON */
    var headerDownloadButton = document.getElementById("headerDownloadButton") || document.querySelector("#headerDownloadButton");
    var downloadButton = document.getElementById("downloadButton") || document.querySelector("#downloadButton");

    headerDownloadButton.innerText = window.jscd.os + " download";

    /* SNACKBAR COMING SOON */
    function openBlog() {
        window.open("https://vortex.chat/crowdfunding.html");
    }

    var comingSoonSnackbar = document.getElementById("comingSoonSnackbar") || document.querySelector("#comingSoonSnackbar");
    var snackbarData = {
        message: 'Coming soon! Crowd-investment opened',
        actionHandler: openBlog,
        actionText: 'Participate',
        timeout: 10000
    };

    function showSnackBar() {
        comingSoonSnackbar.MaterialSnackbar.showSnackbar(snackbarData);
    }

    headerDownloadButton.onclick = showSnackBar;
    downloadButton.onclick = showSnackBar;

    var securitySectionQuestion = document.getElementById("securitySectionQuestion") || document.querySelector("#securitySectionQuestion");
    var questionText = "Do you value your secrets and private's life?";

    function inputTextEffect(element, text, speed, waitTimeBeforeErase, eraseToo) {

        var text = text || "";
        var speed = speed || 50;
        var waitTimeBeforeErase = waitTimeBeforeErase || 0;
        var eraseToo = eraseToo || false;

        function setElementTextWithTimeout(element, text, timeout) {

            setTimeout(function(){ element.innerText = text; }, timeout);
        }

        function writeWithTimeout(element, text, speed, reverse) {

            for(var i = 1; i <= text.length; i++) {

                var toChar = reverse ? text.length + 1 - i: i;
                var textTimeout = i * speed;
                var textString = questionText.substr(0, toChar);

                setElementTextWithTimeout(element, textString, textTimeout);

            }
        }





    }

})();