$('div .checkbox').click(function () { 
    checkedState = $(this).attr('checked');
     $(this).parent('div').children('.checkbox:checked').each(function () {
         $(this).attr('checked', false);
     });
     $(this).attr('checked', checkedState);
});

SELECT columns FROM table WHERE MATCH( columns ) AGAINST( "search term" );
SELECT * FROM armor,ghost,weapon WHERE MATCH( name ) AGAINST( "search term" );  