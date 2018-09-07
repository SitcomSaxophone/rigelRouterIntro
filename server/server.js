// requires
const express = require( 'express' );
const app = express();
const bodyParser = require( 'body-parser' );
/// require router
const messages = require( './modules/routes/messages' );
// uses
app.use( express.static( 'server/public' ) );
app.use( bodyParser.urlencoded( { extended: true } ) );
app.use( '/messages', messages );
// globals
const port = 5000;
// spin up server
app.listen( port, ()=>{
    console.log( 'server is up on:', port );
}) // end server up