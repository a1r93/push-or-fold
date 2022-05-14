module.exports = {
    resolve: {
        extensions: ['.ts', '.js', '.jpeg'],
    },
    entry: './electron/main.ts',
    module: {
        rules: require('./rules.webpack'),
    },
};
