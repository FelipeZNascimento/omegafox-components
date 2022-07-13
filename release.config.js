module.exports = {
  branches: ['master'],
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        preset: 'eslint'
      }
    ],
    [
      '@semantic-release/release-notes-generator',
      {
        preset: 'eslint'
      }
    ],
    [
      '@semantic-release/git',
      {
        assets: ['docs', 'package.json'],
        message:
          'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}'
      }
    ],
    '@semantic-release/npm',
    '@semantic-release/github'
  ]
};
