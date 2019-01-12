var active='';
function filteringSelect(color){
    if(active!=color){
        $('.portfolio_img_items').filter('.'+color).slideDown();
        $('.portfolio_img_items').filter(':not(.'+color+')').slideUp();active=color;}
}
$('.website-btn').click(function(){filteringSelect('websites');});
$('.brochures-btn').click(function(){filteringSelect('brochures');});
$('.logos-btn').click(function(){filteringSelect('logos');});
$('.all-btn').click(function(){filteringSelect('all');});