$(document).ready(function () {

    if (window.localStorage.getItem("spoiler") != "show") {
        window.localStorage.setItem("spoiler", "hide");
        $('#hide-spoiler').addClass('active');
        // $('#show-spoiler').removeClass('active');
        scoreCount()

    }

    else if (window.localStorage.getItem("spoiler") == "show") {
        $('#show-spoiler').addClass('active');
        // $('#hide-spoiler').removeClass('active');
        $('.results #spoilerSpan').toggle();
        scoreCount()

    }
    else {
        window.localStorage.setItem("spoiler", "hide");
        $('#hide-spoiler').addClass('active');
        // $('#show-spoiler').removeClass('active');
        scoreCount()

    }
    $('.unit-toggler').change(function () {
        $('.results #spoilerSpan').toggle();
        stateChange()

    })

})
$(document).ready(function () {
    function stateChange() {
        if (window.localStorage.getItem("spoiler") == "show") {
            window.localStorage.setItem("spoiler", "hide");
        }
        else {
            window.localStorage.setItem("spoiler", "show");
        }
        scoreCount()

    }


    function scoreCount() {
        let firstCount = 0, secondCount = 0, thirdCount = 0, points = 0, pointsTemp = 0;

        let playerNameAndLink = '';

        //loop through each column that contains scores.  First column contains episode # so we skip it.
        for (let i = 2; i <= 4; i++) {
            playerNameAndLink = $('table:nth-child(3) > thead > tr > th:nth-child(' + i + ') > a').clone();
            //go through each row and tally up the scores.
            $('table:nth-child(3) > tbody > tr > td:nth-child(' + i + ') > a > #spoilerSpan:nth-child(2)').each(function (a, b) {
                if ($(this).hasClass('first')) {
                    firstCount++;
                }
                else if ($(this).hasClass('second')) {
                    secondCount++;
                }
                else if ($(this).hasClass('third')) {
                    thirdCount++;
                }
                if (!$(this).hasClass("comment")) {
                    // If the row is not part of the "comment" class
                    // Assign pointsTemp to itself plus the value of the row, with any commas removed, and converted to a floating point
                    pointsTemp += parseFloat(($(this).text().replace(",", "")));
                    // Points is equal to pointsTemp, but uses this regex to add the commas back into the number
                    points = pointsTemp.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                }
                $('table:nth-child(4) > thead > tr > th:nth-child(' + i + ')').html(playerNameAndLink);
                //insert the scores into the relevant medal tally
                if (window.localStorage.getItem("spoiler") == "show") {
                    $('table:nth-child(4) > tbody > tr:nth-child(1) > td:nth-child(' + i + ')').text(thirdCount);
                    $('table:nth-child(4) > tbody > tr:nth-child(2) > td:nth-child(' + i + ')').text(secondCount);
                    $('table:nth-child(4) > tbody > tr:nth-child(3) > td:nth-child(' + i + ')').text(firstCount);
                    $('table:nth-child(4) > tbody > tr:nth-child(4) > td:nth-child(' + i + ')').text(points);
                }
                if (window.localStorage.getItem("spoiler") == "hide") {
                    $('table:nth-child(4) > tbody > tr:nth-child(1) > td:nth-child(' + i + ')').text("Spoilers");
                    $('table:nth-child(4) > tbody > tr:nth-child(2) > td:nth-child(' + i + ')').text("Spoilers");
                    $('table:nth-child(4) > tbody > tr:nth-child(3) > td:nth-child(' + i + ')').text("Spoilers");
                    $('table:nth-child(4) > tbody > tr:nth-child(4) > td:nth-child(' + i + ')').text("Spoilers");
                }


            })
            //reset the medal count for the next player
            firstCount = 0, secondCount = 0, thirdCount = 0, points = 0, pointsTemp = 0;
        }

    }
})