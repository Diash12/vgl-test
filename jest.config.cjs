module.exports = {
  // other Jest configuration options...
  transform: {
    "^.+\\.tsx?$": ["ts-jest", { tsconfig: "@/tsconfig.json" }],
  },
  testEnvironment: "node",
  globals: {
    "ts-jest": {
      tsconfig: "@/tsconfig.json",
    },
  },
};
