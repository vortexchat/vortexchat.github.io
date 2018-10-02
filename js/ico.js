(function() {

    /* CROWDFUNDING PROGRESS */
    var date = Date.now().toString();
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {

        if (this.readyState == 4 && this.status == 200) {

            var jsonData = JSON.parse(xhttp.responseText);

            var crowdfundingProgressBuffer = document.getElementById("icoProgressBuffer") || document.querySelector("#icoProgressBuffer");
            var crowdfundingTokenSoldInK = document.getElementById("icoTokenSoldInK") || document.querySelector("#icoTokenSoldInK");
            var crowdfundingTokenTotalK = document.getElementById("icoTokenTotalK") || document.querySelector("#icoTokenTotalK");
            var crowdfundingTokenSoldInPercent = document.getElementById("icoTokenSoldInPercent") || document.querySelector("#icoTokenSoldInPercent");

            var ratio = Math.round(jsonData.sold * 100 * 10 / jsonData.total) / 10;
            var soldInK = Math.round(jsonData.sold / 100) / 10;
            var totalInK = Math.round(jsonData.total / 100) / 10;

            crowdfundingProgressBuffer.setAttribute("style", "width: " + ratio + "%;");
            crowdfundingTokenSoldInK.innerText = soldInK;
            crowdfundingTokenTotalK.innerText = totalInK;
            crowdfundingTokenSoldInPercent.innerText = ratio;

        }
    };
    xhttp.open("GET", "https://vortex.chat/data/crowdfunding.json?rand="+date, true);
    xhttp.send();

})();