/** @type {import('jest').Config} */
const config = {
  verbose: true,
  // name: "pokemon",
  // preset: "js-jest/presets/js-with-ts",
  // testEnvironment: "jsdom",
  moduleFileExtensions: ["js", "jsx", "json", "node"],
  testMatch: ["<rootDir>/src/**/__tests__/*.(js|jsx)"],
  testPathIgnorePatterns: ["/node_modules/"],
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
  transform: {
    "\\.[jt]sx?$": "babel-jest",
  }, //   snapshotSerializers: ["enzyme-to-json/serializer"],
};

module.exports = config;
