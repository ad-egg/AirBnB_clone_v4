
const ready = () => {
  // When document is ready run these functions
  checkboxList();
  statusOK();
  displayPlaces();
}

const displayPlaces = () => {
  // Requests an api, which retrieves a list of places
  // Create a listing for each place
  // TODO: need to find a way to get the owners name from the user_id
  let places_search_url = "http://0.0.0.0:5001/api/v1/places_search";
  let request = $.ajax({
    type: "POST",
    contentType: "application/json",
    url: places_search_url,
    data: JSON.stringify({}),
    error: (e) => {console.log(e)},
    dataType: "json",
    success: function( data, textStatus, jQxhr ){
      let places_list = jQxhr.responseJSON
      for (place of places_list) {
        if (place.id === "f9b11370-f316-492c-92da-014d7bce7213")
          console.log(place.name)
        $('section.places').append(
          "<article> \
          <div class='title'> \
          <h2> " + place.name + "</h2> \
          <div class='price_by_night'> \
          " + place.price_by_night + "\
          </div> \
          </div> \
          <div class='information'> \
          <div class = 'max_guest'>\
          <i class='fa fa-users fa-3x' aria-hidden='true'></i> \
          <br /> \
          " + place.max_guest + " Guests \
          </div> \
          <div class='number_rooms'> \
          <i class='fa fa-bed fa-3x' aria-hidden='true'></i> \
          <br /> \
          " + place.number_rooms + " Bedrooms \
          </div> \
          <div class='number_bathrooms'> \
          <i class='fa fa-bath fa-3x' aria-hidden='true'></i> \
          <br \> \
          " + place.number_bathrooms+ " Bathroom \
          </div> \
          </div> \
          <div class='user'> \
          <strong>Owner: " + place.user_id + "</strong> \
          </div> \
          <div class='description'> \
          " + place.description + " \
          </div> \
          </article>");
      }
    },
  });
}

const statusOK = () => {
  // if status is "OK", adds class 'available', otherwise remove that class
  let url = 'http://0.0.0.0:5001/api/v1/status/';
  $.get(url, function (data, status) {
    if (data.status === 'OK') {
      $('div#api_status').addClass('available');
    } else {
      $('div#api_status').removeClass('available');
    }
  })
}

const checkboxList = () => {
  // When the checkbox is changed, creates a new list of all the checked boxes
  // and displays it
  $('input:checkbox').change(function () {
      let amenities_list = []
      let amenities_h4 = $("div.amenities h4")
      amenities_h4.html("");
      $.each($("input:checked"), function () {
        amenities_list.push($(this).attr('data-name'))
      })
      amenities_h4.html(amenities_list.join(', '))
    })
}

// Function called when the document is ready
document.addEventListener("DOMContentLoaded", ready);
