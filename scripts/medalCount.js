// Automatically calculates the total medals on the bottom row on medals.html

//init variables

for (c of allCompetitors) {
    for (let p = 0; p < 3; p++) {
        var img = document.createElement('span');
        img.style.fontStyle = 'bold';
        if (p == 0) {
            img.innerHTML = `${c.bronze}x <i class ="fas fa-medal third"></i>`
        }else if (p == 1) {
            img.innerHTML = `${c.silver}x <i class ="fas fa-medal second" style="font-style:none"></i>`
        }else {
            img.innerHTML = `${c.gold}x <i class ="fas fa-medal first"></i>`
        }
        document.querySelector(`table:nth-child(3) > tbody:nth-child(4) > tr > td:nth-child(${allCompetitors.indexOf(c)+1})`).appendChild(img).appendChild(document.createElement('span'));
        document.querySelectorAll(`table:nth-child(3) > tbody:nth-child(4) > tr > td:nth-child(${allCompetitors.indexOf(c)+1}) > span > span`)[p].style = "padding: 1.5%"
    }
    var body = ''
    for (let b = 0; b < c.bronze-1; b++) {
        body += '<i class="fas fa-medal third"></i>';
    }
    for (let s = 0; s < c.silver-1; s++) {
        body += '<i class="fas fa-medal second"></i>';
    }
    for (let g = 0; g < c.gold-1; g++) {
        body += '<i class="fas fa-medal first"></i>';
    }
    document.querySelector(`#medals-bg > div > table > tbody:nth-child(3) > tr > td:nth-child(${allCompetitors.indexOf(c)+1})`).innerHTML = body;
    
    

}



for (c of allCompetitors) {
    let place = '';
    switch (c.standing) {
        case 1:
            place = 'first';
            break;
        case 2:
            place = 'second';
            break;
        case 3:
            place = 'third';
            break;
        default:
            break;
    }
    $(`table:nth-child(3) > tbody:nth-child(4) > tr:nth-child(2) > td:nth-child(${allCompetitors.indexOf(c)+1})`).html(`<i class="fas fa-trophy ${place}"></i> ` + c.score + 'pts');
}

