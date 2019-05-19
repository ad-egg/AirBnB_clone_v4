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
}
document.addEventListener("DOMContentLoaded", ready);
