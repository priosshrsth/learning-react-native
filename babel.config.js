const tsconfig = require('./tsconfig.json');

const pathAlias = tsconfig.compilerOptions.paths;

const aliases = {};
for (const alias in pathAlias) {
  const resolvedPath = pathAlias[alias][0];
  aliases[alias.replace('/*', '')] = resolvedPath.replace('/*', '');
}

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['nativewind/babel'],
    [
      'module-resolver',
      {
        alias: aliases,
      },
    ],
  ],
};
