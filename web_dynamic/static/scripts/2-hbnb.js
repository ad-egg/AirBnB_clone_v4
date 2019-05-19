// Function called when the document is ready
const ready = () => {
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

  // if status is "OK", adds class 'available', otherwise remove that class
  let url = 'http://0.0.0.0:5001/api/v1/status/';
  $.get(url, function (data, status) {
    if (data.status === 'OK') {
      $('div#api_status').addClass('available');
    } else {
      $('div#api_status').removeClass('available');
    }
  });

  // Send a POST request and send a empty dictionary
    //loop into the result of the request and create an ARTICLE tag representing
    //a PLACE in the SECTION.places
  let places_search_url = "http://0.0.0.0:5001/api/v1/places_search";
  console.log(places_search_url)
  $.post(places_search_url, {}, (data, textStatus) => {
    console.log('hi')
    console.log(textStatus)
    console.log(data)
  })
}
document.addEventListener("DOMContentLoaded", ready);
