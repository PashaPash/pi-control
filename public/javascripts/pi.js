$(function () {
  $('.relay-switch').click(function () {
    var btn = $(this);
    var pin = btn.data('relay-pin');
    var state = btn.data('relay-state');

    btn.addClass('active')
    btn.addClass(state == 'on' ? 'btn-success' : 'btn-danger');
    btn.removeClass('btn-default');

    $.post('/relay', {
      pin: pin,
      state: state
    });

    var secondBtn = $('.relay-switch[data-relay-pin=' + pin + ']')
      .not(btn)
      .removeClass('btn-success')
      .removeClass('btn-danger')
      .removeClass('active')
      .addClass('btn-default');
  });
});