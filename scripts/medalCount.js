// Automatically calculates the total medals on the bottom row on medals.html

//init letiables
let firstCount = 0, secondCount = 0, thirdCount = 0;

//loop through each column that contains scores.  First column contains episode # so we skip it.
for (let i = 1; i <= 3; i++) {
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
    $('table:nth-child(3) > tbody:nth-child(4) > tr > td:nth-child(' + i + ')').html(thirdCount + 'x <i class="fas fa-medal third"></i>&nbsp;&nbsp;&nbsp;&nbsp;' + secondCount + 'x <i class="fas fa-medal second"></i>&nbsp;&nbsp;&nbsp;&nbsp;' + firstCount + 'x <i class="fas fa-medal first"></i>');

    score = firstCount * 3 + secondCount * 2 + thirdCount;
    $('table:nth-child(3) > tbody:nth-child(4) > tr:nth-child(2) > td:nth-child(' + i + ')').html(score + 'pts');

    firstCount = 0, secondCount = 0, thirdCount = 0

}