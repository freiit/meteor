// This file exists because it is the file in the tool that is not automatically
// transpiled by Babel

require('babel-core/register')(require('./babel-config.js')); // #RemoveInProd this line is removed in isopack.js

// Include helpers from NPM so that the compiler doesn't need to add boilerplate
// at the top of every file
require("babel-core/external-helpers");

// Installs source map support with a hook to add functions to look for source
// maps in custom places
require('./source-map-retriever-stack.js');

// Run the Meteor command line tool
require('./main.js');
