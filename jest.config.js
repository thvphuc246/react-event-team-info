module.exports = {
  preset: "ts-jest",
  transform: {
    "^.+\\.(ts|tsx)?$": "ts-jest",
  },
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|scss|less)$": "identity-obj-proxy",
    "^components/(.*)$": "<rootDir>/src/components/$1",
    "^utils/(.*)$": "<rootDir>/src/utils/$1",
  },
  testEnvironment: "jest-environment-jsdom",
  moduleDirectories: ["node_modules", "src", "src/**/*.tsx"],
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
};
