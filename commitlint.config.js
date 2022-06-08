module.exports = {
    extends: [
      "@commitlint/config-conventional",
      "@commitlint/parse"
    ],
    parserPreset: {
      parserOpts: {
        headerPattern: /\(DEVOPS[^)]*\)$/,
        headerCorrespondence: ['scope']
      }
    },
        rules: {
          'type-case': [0, 'never'],
          'subject-case': [0, 'never'],
          'subject-empty': [0, 'never'],
          'type-enum': [
            2,
            'always',
            [
              'build',
              'ci',
              'chore',
              'docs',
              'feat',
              'fix',
              'perf',
              'refactor',
              'revert',
              'style',
              'test',
            ]
          ]
        }
  };
