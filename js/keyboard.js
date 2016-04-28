$(function(e){
  var $textInputEl = $("[data-js='input--text']");
  var $chatFormEl = $("[data-js='chatForm']");
  var $chatLogEl = $("[data-js='chatLog']");

  // prevent default on submit event of form el
  $chatFormEl.on("submit", function(e){
    e.preventDefault();
  });

  $textInputEl.on("keyup", function(e){
    // referencing jquery factory match to e.target
    var $el = $(e.target);

    if(e.keyCode === 13){
      // take value of input and add to chat log
      $chatLogEl.prepend(`
        <li>
          ${$el.val()}
          <span class="chatMsg--delete" data-js="delete">x</span>
        </li>
      `);
      // Clear the value after
      $el.val("");

      // Setup listener for delete
      $("[data-js='delete']").on("click", function(e){
        // Currently refrences span that is a child
        // of the chat message
        var $el = $(e.target);
        $el.parent().remove();
      });
    }
  });
});
