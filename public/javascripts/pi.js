$(function () {
  $('.relay-switch').click(function () {
    var btn = $(this);
    var pin = btn.data('relay-pin');
    var state = btn.data('relay-on');

    btn.addClass('active')
    btn.addClass(state ? 'btn-success' : 'btn-danger');
    btn.removeClass('btn-default');

    var secondBtn = $('.relay-switch[data-relay-pin=' + pin + ']')
      .not(btn)
      .removeClass('btn-success')
      .removeClass('btn-danger')
      .removeClass('active')
      .addClass('btn-default');
  });
});