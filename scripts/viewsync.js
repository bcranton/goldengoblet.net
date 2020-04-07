var first,second,third;
var row = 1;
//go through each row and collect youtube ids.
$('table:nth-child(3) > tbody > tr > td > a').each(function (a, b) {
    if (a % 3 == 0) {
        first = this.href.match("v=([a-zA-Z0-9\_\-]+)&?")[1];
    }
    else if (a % 3 == 1) {
        second = this.href.match("v=([a-zA-Z0-9\_\-]+)&?")[1];
    }
    else if (a % 3 == 2) {
        third = this.href.match("v=([a-zA-Z0-9\_\-]+)&?")[1];
        var temp = $('table:nth-child(3) > tbody > tr:nth-child(' + row + ') > th');
        temp.html(`<a href="https://viewsync.net/watch?v=${first}&v=${second}&v=${third}">${temp.html()}</a>`);
        row++;
    }
})