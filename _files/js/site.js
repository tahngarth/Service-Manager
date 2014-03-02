$(function() {
$('#1-btn').click(function() {
    $('#1-win').show(true);
    $('#2-win').hide(true);
	$('#3-win').hide(true);
	$('#settings-win').hide(true);
	$('#active').addClass('act-btn-1');
	$('#active').removeClass('act-btn-2');
	$('#active').removeClass('act-btn-3');
	$('#active').removeClass('act-btn-4');
	$('#active').removeClass('act-btn-5');
	$('#active').removeClass('act-settings-btn');	
  });
});
$(function() {
$('#2-btn').click(function() {
    $('#1-win').hide(true);
    $('#2-win').show(true);
	$('#3-win').hide(true);
	$('#settings-win').hide(true);
	$('#active').removeClass('act-btn-1');	
	$('#active').addClass('act-btn-2');
	$('#active').removeClass('act-btn-3');
	$('#active').removeClass('act-btn-4');
	$('#active').removeClass('act-btn-5');	
	$('#active').removeClass('act-settings-btn');	
  });
});
$(function() {
$('#3-btn').click(function() {
    $('#1-win').hide(true);
    $('#2-win').hide(true);
	$('#3-win').show(true);
	$('#settings-win').hide(true);
	$('#active').removeClass('act-btn-1');	
	$('#active').removeClass('act-btn-2');
	$('#active').addClass('act-btn-3');	
	$('#active').removeClass('act-btn-4');
	$('#active').removeClass('act-btn-5');
	$('#active').removeClass('act-settings-btn');	
  });
});
$(function() {
$('#4-btn').click(function() {
    $('#1-win').hide(true);
    $('#2-win').hide(true);
	$('#3-win').show(true);
	$('#settings-win').hide(true);
	$('#active').removeClass('act-btn-1');	
	$('#active').removeClass('act-btn-2');
	$('#active').removeClass('act-btn-3');	
	$('#active').addClass('act-btn-4');
	$('#active').removeClass('act-btn-5');
	$('#active').removeClass('act-settings-btn');	
  });
});
$(function() {
$('#5-btn').click(function() {
    $('#1-win').hide(true);
    $('#2-win').hide(true);
	$('#3-win').show(true);
	$('#settings-win').hide(true);
	$('#active').removeClass('act-btn-1');	
	$('#active').removeClass('act-btn-2');
	$('#active').removeClass('act-btn-3');	
	$('#active').removeClass('act-btn-4');
	$('#active').addClass('act-btn-5');
	$('#active').removeClass('act-settings-btn');	
  });
});
$(function() {
$('#settings-btn').click(function() {
    $('#1-win').hide(true);
    $('#2-win').hide(true);
	$('#3-win').hide(true);
	$('#settings-win').show(true);
	$('#active').removeClass('act-btn-1');	
	$('#active').removeClass('act-btn-2');	
	$('#active').removeClass('act-btn-3');
	$('#active').addClass('act-settings-btn');
  });
});