$('.navItem').css('color', 'white');
$('#nav').css('backgroundcolor', '#145');
$('li:even').css('backgroundcolor', '#ccc');
$('li:odd').css('backgroundcolor', '#aaa');
$('input').each(function() {
    let putIn = $(this);
    putIn.val('Miguel');
});