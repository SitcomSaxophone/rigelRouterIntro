// a router that uses express... otherwise known as an "Express Router"
const express = require( 'express' );
const router = express.Router();

router.get( '/', ( req, res )=>{
    console.log( '/messages GET router hit' );
    res.send( 'whinney' );
}) // end GET call

// module exports
module.exports = router;