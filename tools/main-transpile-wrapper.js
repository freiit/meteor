// This file exists because it is the file in the tool that is not automatically
// transpiled by Babel.

require('source-map-support').install();
require('babel/register')(require('./babel-config.js')); // #RemoveInProd this line is removed in isopack.js

// Run the Meteor command line tool
require('./main.js');
