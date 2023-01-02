var jsPersonName = $('.name');
var jsFieldName = $('.fieldOfPerson');
var jsDescription = $('.description');

var personOfTheMonth = [{ Name: "Karlie Kloss", Field: "Fashion and Comp Sci", Description: "temp blahblahabklah" }];


var thanksMsg = $('.thanksMsg');

$(document).ready(function() {
  $("input[type='button'").click(submitEntry);

  function submitEntry() {
    var personName = jsPersonName.val();
    var fieldName = jsFieldName.val();
    var description = jsDescription.val();
    console.log(personName);
    console.log(fieldName);
    console.log(description);
      thanksMsg.append(`<h2 class = "submitThanks">Thank you for submitting your request!</h2>`);

  }

})
