// function openModal() {
//   $('#exampleModal').modal('show');
// }

function formSubmit(name) {
  var serializedData = $(document.forms[name]).serializeObject();
  debugger
  var url = 'https://script.google.com/macros/s/AKfycbz8vrNJ6aHq3d4p4IzXQMSshNbFx7WM9tzyyGFA9ULVzIiFFjo/exec';
  var jqxhr = $.ajax({
    url,
    method: "GET",
    dataType: "json",
    data: serializedData,
    success: function(data){
      console.log('success', data);
    }
  });
}


$(document).ready(function() {
  // evnt handlers
  // $('#order--here').click(openModal);

  $('[rel="form--quote"]').submit(function(e){ // [name="form--quote"]
    e.preventDefault();

    formSubmit(e.currentTarget.name);
  });

  $('#modal--submit').on('click', function() {
    $('#quote-form').toggle();
  });
});
