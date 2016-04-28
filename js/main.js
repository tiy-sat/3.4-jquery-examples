$(function(){
  var $listEl = $("[data-js='list']");
  var $listAddEl = $("[data-js='list--add']");
  // $() - AKA _factory call_

  // listItemElements.addEventListener("click", function(e){});
  $("[data-js='listItem']").on("click", function(e){
    var $el = $(e.target);
    // $el.html("<h2>isn't this nice</h2>");
    $el.toggleClass('list__item--clicked');
  })

  $listAddEl.on("click", function(e){
    // Append a new li to the list container element
    var $newEl = $("<li></li>");
    $newEl.text("Added Element!")
    $listEl.append($newEl);
  });

  // var xhr = new XMLHttpRequest();
  $.ajax({
    url: "http://json-data.herokuapp.com/forms"
  }).done(function(requestData){
    // All code handling "xhr load" if it works!
    requestData.forEach(function(inputData){
      // This approach GETs the attribute
      // $newInput.attr("type")
      // Adding a second argument will SET attribute
      if(inputData.type === "select"){
        $listEl.append($("<select>"));
        var $listElSelect = $listEl.find("select");

        $listElSelect.append("<option> Choose Your Language </option>");
        
        inputData.options.forEach(function(option){
          $listElSelect
            .append($("<option>")
              .attr("value", option.value)
              .text(option.label)
            );
        })
      }else{
        $listEl
          .append($("<input/>")
          .attr({
            "type": inputData.type,
            "placeholder": inputData.label
          }));
      }
    });
  }).fail(function(requestData){
    // All code for a failure
    console.log(requestData);
  });
});
