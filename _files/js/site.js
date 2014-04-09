$(function() {
$('#1-btn').click(function() {
    $('#1-win').show(true);
    $('#2-win').hide(true);
	$('#3-win').hide(true);
	$('#4-win').hide(true);
	$('#5-win').hide(true);
	$('#settings-win').hide(true);
	$('#s-sab').addClass('active-nav');	
	$('#s-sb').removeClass('active-nav');
	$('#s-cp').removeClass('active-nav');
	$('#s-hp').removeClass('active-nav');
	$('#s-mc').removeClass('active-nav');	
	$('#s-settings').removeClass('active-nav');	
  });
});
$(function() {
$('#2-btn').click(function() {
    $('#1-win').hide(true);
    $('#2-win').show(true);
	$('#3-win').hide(true);
	$('#4-win').hide(true);
	$('#5-win').hide(true);
	$('#settings-win').hide(true);
	$('#s-sab').removeClass('active-nav');	
	$('#s-sb').addClass('active-nav');
	$('#s-cp').removeClass('active-nav');
	$('#s-hp').removeClass('active-nav');
	$('#s-mc').removeClass('active-nav');	
	$('#s-settings').removeClass('active-nav');	
  });
});
$(function() {
$('#3-btn').click(function() {
    $('#1-win').hide(true);
    $('#2-win').hide(true);
	$('#3-win').show(true);
	$('#4-win').hide(true);
	$('#5-win').hide(true);
	$('#settings-win').hide(true);
	$('#s-sab').removeClass('active-nav');	
	$('#s-sb').removeClass('active-nav');
	$('#s-cp').addClass('active-nav');
	$('#s-hp').removeClass('active-nav');
	$('#s-mc').removeClass('active-nav');	
	$('#s-settings').removeClass('active-nav');	
  });
});
$(function() {
$('#4-btn').click(function() {
    $('#1-win').hide(true);
    $('#2-win').hide(true);
	$('#3-win').hide(true);
	$('#4-win').show(true);
	$('#5-win').hide(true);
	$('#settings-win').hide(true);
	$('#s-sab').removeClass('active-nav');	
	$('#s-sb').removeClass('active-nav');
	$('#s-cp').removeClass('active-nav');
	$('#s-hp').addClass('active-nav');
	$('#s-mc').removeClass('active-nav');	
	$('#s-settings').removeClass('active-nav');	
  });
});
$(function() {
$('#5-btn').click(function() {
    $('#1-win').hide(true);
    $('#2-win').hide(true);
	$('#3-win').hide(true);
	$('#4-win').hide(true);
	$('#5-win').show(true);
	$('#settings-win').hide(true);
	$('#s-sab').removeClass('active-nav');	
	$('#s-sb').removeClass('active-nav');
	$('#s-cp').removeClass('active-nav');
	$('#s-hp').removeClass('active-nav');
	$('#s-mc').addClass('active-nav');	
	$('#s-settings').removeClass('active-nav');
  });
});
$(function() {
$('#settings-btn').click(function() {
    $('#1-win').hide(true);
    $('#2-win').hide(true);
	$('#3-win').hide(true);
	$('#4-win').hide(true);
	$('#5-win').hide(true);
	$('#settings-win').show(true);
	$('#s-sab').removeClass('active-nav');	
	$('#s-sb').removeClass('active-nav');
	$('#s-cp').removeClass('active-nav');
	$('#s-hp').removeClass('active-nav');
	$('#s-mc').removeClass('active-nav');	
	$('#s-settings').addClass('active-nav');
  });
});
