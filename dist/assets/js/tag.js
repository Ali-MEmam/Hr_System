$.expr[":"].contains = $.expr.createPseudo(function(arg) {
    return function( elem ) {
        return $(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
    };
});
/*$(document).on('ready',function(){
    $('#addTagBtn').on('click', function(){
        $('#tags option:selected').each(function() {
            $(this).appendTo($('#selectedTags'));
        });
    });
    $('#removeTagBtn').on('click', function(){
        $('#selectedTags option:selected').each(function(el) {
            $(this).appendTo($('#tags'));
        });
    });
    $('.tagRemove').on('click', function(event){
        event.preventDefault();
        $(this).parent().remove();
    });
    $('ul.tags').on('click', function(){
        $('#search-field').focus();
    });

});*/




$(function() { $("form").submit(function() { return false; }); });

