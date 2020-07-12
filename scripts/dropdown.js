// loads the template HTML in the templates folder for the navbar content
$(function(){
    $("#navbarSupportedContentjs").load("./Templates/navbarContent.html"); 
    });
// Configures a highlighted region for the active window by adding a class and then using a CSS element to color it 
$(function(){
    $('a').each(function(){
        if ($(this).prop('href') == window.location.href) {
            $(this).addClass('active'); $(this).parents('li').addClass('active');
        }
    });
});