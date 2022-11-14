module.exports = function (wallaby) {
    return {
        files: [
            'src/**/*.tsx'
        ],

        tests: [
            'test/**/*Spec.ts'
        ],

        testFramework: 'mocha'
    };
};
