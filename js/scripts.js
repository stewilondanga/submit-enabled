var navigate = (function() {
  $('.dd').toggle();
  $('.dd_btn').click(function() {
    var dataName = $(this).attr('data-name');
    $('.dd').hide();
    $('.' + dataName).toggle();
  });
})();

$(function() {
  var btnSubmit = $('#submit');
  btnSubmit.attr('disabled', 'disabled');
  $('input[name=chosen]').change(function(e) {
    if ($(this).val() == 'agree') {
      btnSubmit.removeAttr('disabled');
    } else {
      btnSubmit.attr('disabled', 'disabled');
    }
  });
});
