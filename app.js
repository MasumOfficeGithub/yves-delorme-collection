(function($){

// Main Collection Color Div

var color_replace = $('#color_replace');
var color_div = $('.color_div');

color_div.each(function (){
    $(color_div).on('click',color_div, function(){
        var color_name = $(this).data('color');
        console.log(color_name)
    });
});

//Pillowcase Modal Images Showing

var single_img = $('.single_item_gallery img');
single_img.each(function () {
    $(single_img).on('click', single_img, function (){
        var src = $(this).attr('src');
        var gallery_display = $(this).closest('#img_div').find('#gallery_display');
            gallery_display.attr('src', src);
       
    });
});




})(jQuery);