
const ready = () => {
  // When document is ready run these functions
  checkboxList();
  statusOK();
};

const statusOK = () => {
  // if status is "OK", adds class 'available', otherwise remove that class
  let url = 'http://0.0.0.0:5001/api/v1/status/';
  $.get(url, function (data, status) {
    if (data.status === 'OK') {
      $('div#api_status').addClass('available');
    } else {
      $('div#api_status').removeClass('available');
    }
  });
};

const checkboxList = () => {
  // When the checkbox is changed, creates a new list of all the checked boxes
  // and displays it
  $('input:checkbox').change(function () {
    let amenitiesList = [];
    let amenitiesH4 = $('div.amenities h4');
    amenitiesH4.html('');
    $.each($('input:checked'), function () {
      amenitiesList.push($(this).attr('data-name'));
    });
    amenitiesH4.html(amenitiesList.join(', '));
  });
};

// Function called when the document is ready
document.addEventListener('DOMContentLoaded', ready);
