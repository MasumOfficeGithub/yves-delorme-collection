(function($){

// Main Collection Color Div
var color_div = $('.main_color_div');
color_div.each(function (){
    $(this).on('click mouseover', function(){

        //Color Swtiches
        var color_name = $(this).data('color');
        var parentElement = $(this).parent();
        var color_replace_div = parentElement.prev('p').find('strong#color_replace');
        color_replace_div.text(color_name);

        //Images Swtiches Bundle Thumbnail
        var img_url = $(this).data('img-url');
        var swtiches_target = $(this).closest('.thumb_class').find('#img_thumb');
        swtiches_target.attr('src', img_url);

        //Images Swtiches Pillowcase Thumbnail
        var img_pillow = $(this).data('pillow');
        var pillow_thumb = $('.pillow_thumb');
        pillow_thumb.attr('src', img_pillow);


         //Images Swtiches Duvet Cover Thumbnail
         var img_duvet = $(this).data('duvet');
         var duvet_thumb = $('.duvet_thumb');
         duvet_thumb.attr('src', img_duvet);

         //Images Swtiches Fitted Sheet Thumbnail
         var img_fitted = $(this).data('fitted');
         var fitted_thumb = $('.fitted_thumb');
         fitted_thumb.attr('src', img_fitted);
        
        

            
    });
});


// Mian Color Buttons Inteaction in 3 space ( Pillwocase, Duvet Cover, Fitted Sheet)
var color_div = $('.singel_color_div');
color_div.each(function (){
    $(this).on('click mouseover', function(){
        var color_name = $(this).data('color');
        var img_url = $(this).data('img-url');
        var swtiches_target = $(this).closest('.thumb_class').find('#img_thumb');
        var parentElement = $(this).parent().parent();
        var color_replace_div = parentElement.prev('p').find('strong#color_replace');
        color_replace_div.text(color_name);
        swtiches_target.attr('src', img_url);
    
            
    });
});

//Block Modal Images Showing
var single_img = $('.single_item_gallery img');
single_img.each(function () {
    $(this).on('click', function (){
        var src = $(this).attr('src');
        var gallery_display = $(this).closest('#img_div').find('#gallery_display');
            gallery_display.attr('src', src);
       
    });
});


// Block Color Swtiches Div
var block_color_swtiches_div = $('.block_color_swtiches_div');
var color_swtiches = $('.color_swtiches');
color_swtiches.each(function () {
    $(this).on('click', function (){
       $(this).closest('div').find(block_color_swtiches_div).toggle();
    });
});



// Block Color Swtiches & Image Changes
var color_div = $('.singel_color_div');
color_div.each(function (){
    $(this).on('click mouseover', function(){
        var color_name = $(this).data('color');
        var img_url = $(this).data('img-url');
        var swtiches_target = $(this).closest('.thumb_class').find('#img_thumb');
        var parentElement = $(this).parent().parent();
        var color_replace_div = parentElement.prev('p').find('strong#color_replace');
        color_replace_div.text(color_name);
        swtiches_target.attr('src', img_url);
    
            
    });
});



})(jQuery);