(function($){

// Main Collection Color Div

var color_div = $('.singel_color_div');

color_div.each(function (){
    $(this).on('click mouseover', function(){
        var color_name = $(this).data('color');
        var parentElement = $(this).parent();
        var color_replace_div = parentElement.prev('p').find('strong#color_replace');
        color_replace_div.text(color_name);
            
    });
});

//Block Modal Images Showing

var single_img = $('.single_item_gallery img');
single_img.each(function () {
    $(single_img).on('click', single_img, function (){
        var src = $(this).attr('src');
        var gallery_display = $(this).closest('#img_div').find('#gallery_display');
            gallery_display.attr('src', src);
       
    });
});


// Block Color Swtiches Div

var block_color_swtiches_div = $('.block_color_swtiches_div');
var color_swtiches = $('.color_swtiches');
color_swtiches.each(function () {
    $(color_swtiches).on('click', function (){
       $(this).closest('div').find(block_color_swtiches_div).toggle();
    });
});


// Block Color Swtiches

var color_div = $('.singel_color_div');

color_div.each(function (){
    $(this).on('click mouseover', function(){
        var color_name = $(this).data('color');
        var parentElement = $(this).parent().parent();
        var color_replace_div = parentElement.prev('p').find('strong#color_replace');
        color_replace_div.text(color_name);
            
    });
});



})(jQuery);