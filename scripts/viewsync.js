var first,second,third;
var count = 0;
var row = 1;
//go through each row and collect youtube ids.
$('table:nth-child(3) > tbody > tr > td > a').each(function (a, b) {
    if (count == 0) {
        first = this.href.match("v=([a-zA-Z0-9\_\-]+)&?")[1];
    }
    else if (count == 1) {
        second = this.href.match("v=([a-zA-Z0-9\_\-]+)&?")[1];
    }
    else if (count == 2) {
        third = this.href.match("v=([a-zA-Z0-9\_\-]+)&?")[1];
        var temp = $('table:nth-child(3) > tbody > tr:nth-child(' + row + ') > th');
        temp.html(`<a href="https://viewsync.net/watch?v=${first}&v=${second}&v=${third}">${temp.html()}</a>`);
        count = 0;
        row++;
    }
    count++;
})