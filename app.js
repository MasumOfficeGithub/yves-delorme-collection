(function($){

// Main Collection Color Div

var color_div = $('.singel_color_div');

color_div.each(function (){
    $(this).on('click mouseover', function(){
        var color_name = $(this).data('color');
        var parentElement = $(this).parent();

        var color_replace_div = parentElement.prev('p').find('strong#color_replace');
        color_replace_div.text(color_name);

        // console.log(color_replace_div)
        
    
            
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