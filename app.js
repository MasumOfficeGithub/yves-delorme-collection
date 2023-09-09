(function($){
//Pillowcase Modal Images Showing
// var single_img = $('.single_item_gallery img');

// $(single_img).on('click', single_img, function (){
//     var src = $(this).attr('src');
//     $('#gallery_display').attr('src', src);
// });


var single_img = $('.single_item_gallery img');
single_img.each(function () {
    $(single_img).on('click', single_img, function (){
        var src = $(this).attr('src');
        var gallery_display = $(this).closest('#img_div').find('#gallery_display');
            gallery_display.attr('src', src);
       
    });
});


})(jQuery);