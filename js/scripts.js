$(document).ready(function() {
	$('.cs-select li').each(function(){
		var bg_img = $(this).attr('data-value');
		$(this).css({
			'background': 'url("img/DLBA/' + bg_img + '.jpg")',
			'background-size': '100% auto',
			'background-repeat': 'no-repeat'
		});
	});
});