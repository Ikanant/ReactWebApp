// This will be the only place where we are going to use REQUIRE
// Since WebPack itself is gonna be compiling ES6 it gets tricky if we want to also write our configuration in ES6
const path = require("path");

// Define an object that will be our configuration
// This is what webpack will check when it runs
module.exports = {
    mode: "development",
    // The file we will start the app from
    // __dirname: special property: which is always the directory the file has been run from
    // We don't need to specify index.js because it's smart enough to figure that one out
    entry: path.resolve(__dirname, 'src', 'app'),
    // Definition of the one file that our application is gonna become
    output: {
        path: path.resolve(__dirname, 'dist'), // dist will be where we output our finished files
        filename: 'bundle.js', // File name we will be exporting too
        publicPath: '/' // Where our code expects to found our bunbdle file. The ROOT in this case
    }
}