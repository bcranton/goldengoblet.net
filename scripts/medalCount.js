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

//loop through each column that contains scores.  First column contains episode # so we skip it.
for (var i = 1; i <= 3; i++) {
    //go through each row and tally up the scores.
    $('table:nth-child(3) > tbody > tr > td:nth-child(' + i + ') > i').each(function (a, b) {
        if ($(this).hasClass('first')) {
            firstCount++;
        }
        else if ($(this).hasClass('second')) {
            secondCount++;
        }
        else if ($(this).hasClass('third')) {
            thirdCount++;
        }

    })
    $('table:nth-child(3) > tbody:nth-child(3) > tr > td:nth-child(' + i + ')').html(thirdCount + 'x <i class="fas fa-medal third"></i>&nbsp;&nbsp;&nbsp;&nbsp;' + secondCount + 'x <i class="fas fa-medal second"></i>&nbsp;&nbsp;&nbsp;&nbsp;' + firstCount + 'x <i class="fas fa-medal first"></i>');

    firstCount = 0, secondCount = 0, thirdCount = 0
    
}