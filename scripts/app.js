// JavaScript source code

/* automatic medal totaller
 * 
 * Assumes Totals table is set up but scores have not been populated.  Will work on Totals table that is populated too though.
 * Contains code to copy player names to the totals table but has been commented out.  Feel free to uncomment.
 * Points not tallied as there's no easy way to differentiate a score (27,200) and a different quantifier (2 Targets, for example)
 * If these were split out into different elements, or sub elements (<td>12,000</td><td>0<span class="comment">2 Targets</span></td>)
 * then it would be easier to tally and populate totals.
 * */

//init variables
var firstCount = 0, secondCount = 0, thirdCount = 0;

var playerNameAndLink = '';

//loop through each column that contains scores.  First column contains episode # so we skip it.
for (var i = 2; i <= 4; i++) {
    //playerNameAndLink = $('table:nth-child(3) > thead > tr > th:nth-child(' + i + ') > a').clone();
    //go through each row and tally up the scores.
    $('table:nth-child(3) > tbody > tr > td:nth-child(' + i + ')').each(function (a, b) {
        if ($(this).hasClass('first')) {
            firstCount++;
        }
        if ($(this).hasClass('second')) {
            secondCount++;
        }
        if ($(this).hasClass('third')) {
            thirdCount++;
        }
        //$('table:nth-child(4) > thead > tr > th:nth-child(' + i + ')').html(playerNameAndLink);

        //insert the scores into the relevant medal tally
        $('table:nth-child(4) > tbody > tr:nth-child(1) > td:nth-child(' + i + ')').text(thirdCount);
        $('table:nth-child(4) > tbody > tr:nth-child(2) > td:nth-child(' + i + ')').text(secondCount);
        $('table:nth-child(4) > tbody > tr:nth-child(3) > td:nth-child(' + i + ')').text(firstCount);


    })
    //reset the medal count for the next player
    firstCount = 0, secondCount = 0, thirdCount = 0;
}