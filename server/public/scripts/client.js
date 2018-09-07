$( document ).ready( readyNow );

function login(){
    console.log( 'in login' );
} // end login

function logout(){
    console.log( 'in logout' );
} // end logout

function readyNow(){
    $( '#loginButton' ).on( 'click', login );
    $( '#logoutButton' ).on( 'click', logout );
    $( '#submitButton' ).on( 'click', submit );
    updateMessages();
} // end readynow

function submit(){
    console.log( 'in submit' );
    let objectToSend = {
        from: $( '#usernameIn' ).val(),
        text: $( '#messageIn' ).val()
    } //end objectToSend
    console.log( 'objectToSend:', objectToSend );
    $.ajax({
        method: 'POST',
        url: '/messages',
        data: objectToSend
    }).then( function( response ){
        console.log( 'back from POST with:', response );
        updateMessages();
    }).catch( function( error ){
        alert( 'Error posting new message' );
        console.log( 'error:', error );
    }) //end ajax
} // end submit

function updateMessages(){
    $.ajax({
        method: 'GET',
        url: '/messages'
    }).then( function ( response ){
        console.log( 'back from GET with:', response );
        let el = $( '#messagesOut' );
        el.empty();
        for( message of response ){
            el.append( `<li>${message.text}: <i>${message.from}</i></li>`)
        } //end for
    }).catch( function( error ){
        alert( 'Error updating messages' );
        console.log( 'error:', error );
    }) //end ajax
} // end updateMessages