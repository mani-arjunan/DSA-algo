module.exports = {
    transform: {
        "^.+\\.ts?$": "ts-jest"
    },
    detectOpenHandles: true, //for circular refrence error.
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(ts?)$"
};