var row = 1;
var first, second, third = "";
//go through each row and collect youtube ids.
$('table:nth-child(3) > tbody > tr > td > a').each(function (a, b) {
    if (a % 3 == 0) {
        first = ((this.href.match("v=([a-zA-Z0-9\_\-]+)&?")) || (""))[1];
        if (first != null) {
            first = "v=" + first;
        }
    }
    else if (a % 3 == 1) {
        second = ((this.href.match("v=([a-zA-Z0-9\_\-]+)&?")) || (""))[1];
        if (second != null) {
            second = "v=" + second;
        }

    }
    else if (a % 3 == 2) {
        third = ((this.href.match("v=([a-zA-Z0-9\_\-]+)&?")) || (""))[1];
        if (third != null) {
            third = "v=" + third;
        }
        var temp = $('table:nth-child(3) > tbody > tr:nth-child(' + row + ') > th');
        if ((first != null) || (second != null) || (third != null)) {
            temp.html(`<a href="https://viewsync.net/watch?${first}&${second}&${third}">${temp.html()}</a>`);
        }
        row++;
    }
})