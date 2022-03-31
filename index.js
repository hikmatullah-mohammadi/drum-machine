$(document).ready(function () {
  //trigger when a button is clicked
  $('.drum-pad').on('click', function() {
    document.getElementById($(this).text().trim()).play()
    
    // change the display text
    $('#display').text($(this).attr('id').toUpperCase())
  })

  // trigger when the correnspondent key pressed
  $(window).on('keypress', function(e) {
    const keyPress = String.fromCharCode(e.charCode).toUpperCase()
    try{
      const correspondentBtn = $('#'+keyPress).parent()
      document.getElementById(keyPress).play()
      
      // change the display text
      $('#display')
      .text(
        correspondentBtn
        .attr('id')
        .toUpperCase()
      )

      // change the ui when a key pressed
      correspondentBtn.css('background-color', 'rgb(207, 116, 116)')
      setTimeout(()=>{
        correspondentBtn.css('background-color', 'rgb(130, 130, 214)')
      }, 100)
    }
    catch(e){}
  })

  // place or puase the background piano
  $('#bg-piano-chkbox').on('change', function() {
    const piano = document.getElementById('piano')
    if(this.checked){
      piano.play()
      $('#display').text('Piano...')
    }else{
      piano.pause()
      $('#display').text('-------')
    }
    
  })
});
