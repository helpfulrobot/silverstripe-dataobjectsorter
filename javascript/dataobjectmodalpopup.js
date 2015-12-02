/**
*@author nicolaas[at]sunnysideup . co . nz
*
**/

(function($){
	jQuery(document).ready(
		function() {
			DataObjectModalPopUp.init();
		}
	);
})(jQuery);


var DataObjectModalPopUp = {
	init: function () {
		jQuery('a.modalPopUp').on(
			'click',
			function(event){
				event.preventDefault();
				var src = jQuery(this).attr("href");
				var popupWidth = jQuery(this).attr("data-width");
				var popupHeight = jQuery(this).attr("data-height");
				jQuery.modal(
					'<iframe src="' + src + '" height="' + popupHeight + '" width="' + popupWidth + '" style="border:0">',
					{
						closeHTML:"<span>X</span>",
						containerCss:{
							backgroundColor:"#ccc", 
							width:popupWidth,
							height:popupHeight, 
							padding:0,
							borderRadius: 5
						},
						overlayClose:true
					}
			);
			}
		);
	}
}


