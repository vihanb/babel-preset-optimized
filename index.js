module.exports = function(context, options) {
    var opts = options || {};
    var unsafe = opts.unsafe || false;

    var config = {
        "plugins": [
            require("babel-plugin-minify-constant-folding"),
            require("babel-plugin-closure-elimination"),
            require("babel-plugin-tailcall-optimization")
        ]
    };

    if (unsafe) {
        config.plugins.push(
            require("babel-plugin-loop-optimizer")
        )
    }

    return config;
};
