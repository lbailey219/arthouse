function getZipcode(zipcode) {
  // debugger
  console.log(zipcode);
  $('#modal--zipcode').val(zipcode);
}

function formSubmit(name) {
  var serializedData = $(document.forms[name]).serializeObject();
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
  $('#order--here').click(function(){
    var zipcode = $('#zipcode').val();

    getZipcode(zipcode);
  });

  $('[rel="form--quote"]').submit(function(e){ // [name="form--quote"]
    e.preventDefault();

    formSubmit(e.currentTarget.name);
  });

  $('#modal--submit').on('click', function() {
    $('#quote-form').toggle();
  });
});
