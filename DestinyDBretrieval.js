$('div .checkbox').click(function () { 
    checkedState = $(this).attr('checked');
     $(this).parent('div').children('.checkbox:checked').each(function () {
         $(this).attr('checked', false);
     });
     $(this).attr('checked', checkedState);
});