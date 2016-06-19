function show_img(img_li,type){
    var _ul=img_li.parent('.img-ul'),
        _bg_div=img_li.closest('.product-banner'),
        _li;
    if(type==0){
        (img_li.index()!=0)?_li=img_li.prev('.img-li'):_li=img_li.siblings('.img-li:last');
    }else{
        (img_li.index()!=_ul.children('.img-li').length-1)?_li=img_li.next('.img-li'):_li=img_li.siblings('.img-li:first');
    }
    img_li.removeClass('show-li');
    _bg_div.css('background',_li.attr('data-bg'));
    _li.addClass('show-li');
}
$('.prev-btn').on('click',function () {
    show_img($('.show-li'),0);
});
$('.next-btn').on('click',function () {
    show_img($('.show-li'),1);
});