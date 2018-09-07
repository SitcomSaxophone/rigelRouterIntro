$( document ).ready( readyNow );
let username = '';

function login(){
    console.log( 'in login' );
    username = $( '#usernameIn' ).val();
    $( '#usernameOut' ).text( username );
    updateMessages();
} // end login

function logout(){
    console.log( 'in logout' );
    username = '';
    updateMessages();
} // end logout

function readyNow(){
    $( '#loginButton' ).on( 'click', login );
    $( '#logoutButton' ).on( 'click', logout );
    $( '#refreshButton' ).on( 'click', updateMessages );
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
        $( '#messageIn' ).val( '' );
        updateMessages();
    }).catch( function( error ){
        alert( 'Error posting new message' );
        console.log( 'error:', error );
    }) //end ajax
} // end submit

function updateMessages(){
    if( username != '' ){
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
        $( '#userDiv' ).hide();
        $( '#messageDiv' ).show();
    } //end loggedInt
    else{
        $( '#userDiv' ).show();
        $( '#messageDiv' ).hide();
    }
    
} // end updateMessages