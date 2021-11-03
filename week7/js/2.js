$( "#cartNo" ).hide();

$( function() {
    $( "#addtocart" ).on( "click", function() {
        $( "#cartNo" ).show( "fade" );
        console.log("added");

    });

} );