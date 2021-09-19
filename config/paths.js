const path = require('path')

module.exports = {
    // Entry point.
    entry: path.resolve(__dirname, '../src/index.js'),

    // Source files.
    src: path.resolve(__dirname, '../src'), 
    
    // Production ready files.
    build: path.resolve(__dirname, '../dist'), 
    
    // Static files.
    public: path.resolve(__dirname, '../public')
}