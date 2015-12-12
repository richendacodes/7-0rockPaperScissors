$( document ).ready(function() {

    var bands = ['rock', 'paper', 'scissors'];

    var ranNum = Math.floor(Math.random() * bands.length);

    $('#content').html(bands[ranNum]);

    function bandMe(){
        $(document).on('click', '#play', function(){
          
        });
      };
});