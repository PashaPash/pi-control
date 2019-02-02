function changeState(pin, state)
{
  var stateString = state ? 'on' : 'off';
  var buttons = $('.relay-switch[data-relay-pin=' + pin + ']')

  var activeButtonClass = state ? 'btn-success' : 'btn-danger';
  var newActive = buttons.filter('[data-relay-state=' + stateString + ']');
  newActive
    .addClass('active')
    .addClass(activeButtonClass);

  var newPassive = buttons.not(newActive)
     .addClass('btn-default')
     .removeClass('btn-success')
     .removeClass('btn-danger')
     .removeClass('active')
  console.log(newPassive)  
  console.log(newPassive.count);
  console.log(newPassive.length);

}


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

    changeState(pin, state == 'on');
  });
});

$(function () {
  var socket = io.connect('/');
  socket.on('set', function (data) {
    changeState(data.id, data.state);
  });
});

$(function () {
  loadTemperature();
});

function loadTemperature() {
  $(".temperature").load('/temp?t=' + new Date().getTime(), undefined, function(){
    setTimeout(loadTemperature, 1000);
  });
}
