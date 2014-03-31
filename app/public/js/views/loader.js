$(function(){

    $.getJSON('food.json',function(data){
        $('#container').append('div');
        $.each(data,function(i,value){
            $('#container').append('p Hi')});
    });
});