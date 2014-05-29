$(function() {
$('#1-btn').click(function() {
    $('#1-win').show(true);
    $('#2-win, #3-win, #4-win, #5-win, #6-win , #7-win, #8-win, #settings-win').hide(true);

	$('#s-sab').addClass('active-nav');	
	$('#s-sb, #s-cp, #s-hp, #s-mc, #s-supermicro, #s-freenas, #s-router, #s-settings').removeClass('active-nav');
	
  });
});
$(function() {
$('#2-btn').click(function() {
    $('#2-win').show(true);
	$('#1-win, #3-win, #4-win, #5-win, #6-win, #7-win, #8-win, #settings-win').hide(true);

	$('#s-sb').addClass('active-nav');
	$('#s-cp, #s-sab, #s-hp, #s-mc, #s-supermicro, #s-freenas, #s-router, #s-settings').removeClass('active-nav');
  });
});
$(function() {
$('#3-btn').click(function() {
    $('#3-win').show(true);
	$('#1-win, #2-win, #4-win, #5-win, #6-win, #7-win, #8-win, #settings-win').hide(true);

	$('#s-cp').addClass('active-nav');
	$('#s-sab, #s-sb, #s-hp, #s-mc, #s-supermicro, #s-freenas, #s-router, #s-settings').removeClass('active-nav');
  });
});
$(function() {
$('#4-btn').click(function() {
	$('#4-win').show(true);
	$('#1-win, #2-win, #3-win, #5-win, #6-win, #7-win, #8-win, #settings-win').hide(true);

	$('#s-hp').addClass('active-nav');
	$('#s-sab, #s-sb, #s-cp, #s-mc, #s-supermicro, #s-freenas, #s-router, #s-settings').removeClass('active-nav');
  });
});
$(function() {
$('#5-btn').click(function() {
    $('#5-win').show(true);
	$('#1-win, #2-win, #3-win, #4-win, #6-win, #7-win, #8-win, #settings-win').hide(true);

	$('#s-mc').addClass('active-nav');
	$('#s-sab, #s-sb, #s-cp, #s-hp, #s-supermicro, #s-freenas, #s-router, #s-settings').removeClass('active-nav');
  });
});
$(function() {
$('#6-btn').click(function() {
    $('#6-win').show(true);
	$('#1-win, #2-win, #3-win, #4-win, #5-win, #7-win, #8-win, #settings-win').hide(true);

	$('#s-supermicro').addClass('active-nav');
	$('#s-sab, #s-sb, #s-cp, #s-hp, #s-mc, #s-freenas, #s-router, #s-settings').removeClass('active-nav');
  });
});
$(function() {
$('#7-btn').click(function() {
    $('#7-win').show(true);
	$('#1-win, #2-win, #3-win, #4-win, #5-win, #6-win, #8-win, #settings-win').hide(true);

	$('#s-freenas').addClass('active-nav');
	$('#s-sab, #s-sb, #s-cp, #s-hp, #s-mc, #s-supermicro, #s-router, #s-settings').removeClass('active-nav');
  });
});
$(function() {
$('#8-btn').click(function() {
    $('#8-win').show(true);
	$('#1-win, #2-win, #3-win, #4-win, #5-win, #6-win, #7-win, #settings-win').hide(true);

	$('#s-router').addClass('active-nav');
	$('#s-sab, #s-sb, #s-cp, #s-hp, #s-mc, #s-supermicro, #s-freenas, #s-settings').removeClass('active-nav');
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
