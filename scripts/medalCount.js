// Automatically calculates the total medals on the bottom row on medals.html

//init variables
let danScore = 0, malfScore = 0, NLScore = 0;

//loop through each column that contains scores.  First column contains episode # so we skip it.
for (let i = 1; i <= 3; i++) {
    let firstCount = 0, secondCount = 0, thirdCount = 0;
    //go through each row and tally up the scores.
    $('table:nth-child(3) > tbody:nth-child(3) > tr > td:nth-child(' + i + ') > i').each(function (a, b) {
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

    if (i == 1) {
        danScore = firstCount * 3 + secondCount * 2 + thirdCount;
    }

    else if (i == 2) {
        malfScore = firstCount * 3 + secondCount * 2 + thirdCount;
    }

    else {
        NLScore = firstCount * 3 + secondCount * 2 + thirdCount;
    }


    firstCount = 0, secondCount = 0, thirdCount = 0;

}


// Next chunk of code compares everyone's point to determine ranking
if (danScore >= malfScore && danScore >= NLScore) {
    $('table:nth-child(3) > tbody:nth-child(4) > tr:nth-child(2) > td:nth-child(1)').html('<i class="fas fa-trophy first"></i> ' + danScore + ' pts');
}

else if ((danScore >= malfScore && danScore <= NLScore) || (danScore <= malfScore && danScore >= NLScore)) {
    $('table:nth-child(3) > tbody:nth-child(4) > tr:nth-child(2) > td:nth-child(1)').html('<i class="fas fa-trophy second"></i> ' + danScore + ' pts');
}

else {
    $('table:nth-child(3) > tbody:nth-child(4) > tr:nth-child(2) > td:nth-child(1)').html('<i class="fas fa-trophy third"></i> ' + danScore + ' pts');
}




if (malfScore >= danScore && malfScore >= NLScore) {
    $('table:nth-child(3) > tbody:nth-child(4) > tr:nth-child(2) > td:nth-child(2)').html('<i class="fas fa-trophy first"></i> ' + malfScore + ' pts');
}

else if ((malfScore >= danScore && malfScore <= NLScore) || (malfScore <= danScore && malfScore >= NLScore)) {
    $('table:nth-child(3) > tbody:nth-child(4) > tr:nth-child(2) > td:nth-child(2)').html('<i class="fas fa-trophy second"></i> ' + malfScore + ' pts');
}

else {
    $('table:nth-child(3) > tbody:nth-child(4) > tr:nth-child(2) > td:nth-child(2)').html('<i class="fas fa-trophy third"></i> ' + malfScore + ' pts');
}





if (NLScore >= malfScore && NLScore >= danScore) {
    $('table:nth-child(3) > tbody:nth-child(4) > tr:nth-child(2) > td:nth-child(3)').html('<i class="fas fa-trophy first"></i> ' + NLScore + ' pts');
}

else if ((NLScore >= malfScore && NLScore <= danScore) || (NLScore <= malfScore && NLScore >= danScore)) {
    $('table:nth-child(3) > tbody:nth-child(4) > tr:nth-child(2) > td:nth-child(3)').html('<i class="fas fa-trophy second"></i> ' + NLScore + ' pts');
}

else {
    $('table:nth-child(3) > tbody:nth-child(4) > tr:nth-child(2) > td:nth-child(3)').html('<i class="fas fa-trophy third"></i> ' + NLScore + ' pts');
}