module.exports = function (wallaby) {
    return {
        files: [
            '*.js',
            'lib/*.js'
        ],

        tests: [
            'test/index.test.js'
        ],
        env: {
            type: 'node',
            runner: 'node',
            params: {
                runner: '--harmony'
            }
        },
        testFramework: 'jest'
    };
};
