$(document).ready(function(){
    $('.horizontal-tab').on('click', function() {
        $('.content .work').removeClass('work');
        $(this).addClass('work');
        $("#"+this.dataset.type).addClass("work");
    });


    $.get( './js/cities.json',   function( data ) {
        console.log(data);
        for(var i = 0; i < data.length; i++){
            var city = data[i];
            var option = document.createElement('option');
            option.innerHTML = city;
            $('#city').append(option);
        }

    });    
});
