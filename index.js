module.exports = function(context, options) {
    var opts = options || {};
    var unsafe = options.unsafe || false;

    var config = {
        "plugins": [
            require("babel-plugin-minify-constant-folding"),
            require("babel-plugin-closure-elimination")
        ]
    };

    if (unsafe) {
        config.plugins.push(
            require("babel-plugin-loop-optimizer")
        )
    }

    return config;
};
