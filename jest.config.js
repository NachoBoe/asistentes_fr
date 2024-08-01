module.exports = {
    transform: {
      "^.+\\.tsx?$": "ts-jest",
      "^.+\\.jsx?$": "babel-jest",
    },
    transformIgnorePatterns: [
      "/node_modules/(?!(langchain)/)"
    ],
    moduleNameMapper: {
      "^.+\\.(css|less|scss)$": "identity-obj-proxy"
    },
    globals: {
      "ts-jest": {
        isolatedModules: true,
      },
    },
    testEnvironment: "jsdom",
    setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
  };
  