function wbk_after_prepare_service_data_param( response ){
    response_obj = jQuery.parseJSON( response );  
    var limits = response_obj.limits.split( '-');
    var start = limits[0].split(',');
    var end = limits[1].split(',');
    start = new Date( start[0], start[1] - 1, start[2], 0, 0, 0 );
    end = new Date( end[0], end[1] - 1, end[2], 0, 0, 0 );
    dates = response_obj.disabilities.split(';');
    date = dates[0].split(',');
    current = new Date( date[0], date[1], date[2] );
    jQuery('[name=wbk-date_submit]').val( current.getFullYear() + '/' + current.getMonth() + '/' +  current.getDate() );
    wbk_searchTime();
    jQuery('#wbk-confirm-services').val(jQuery('#wbk-confirm-services').attr('data-prevname') );
}
jQuery(document).ready(function( $ ){
     jQuery('#wbk-confirm-services').click( function(){
         jQuery(this).attr('data-prevname', jQuery(this).val() );
	     jQuery(this).val('Loading...');       
     });
});
