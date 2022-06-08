module.exports = {
    extends: [
      "@commitlint/config-conventional",
      "@commitlint/parse"
    ],
    parserPreset: {
      parserOpts: {
        headerPattern: /\(DEVOPS[^)]*\)$/,
        headerCorrespondence: ["type", "scope", "subject"]
      }
    },
        rules: {
          'subject-case': [0, 'never'],
          'subject-empty': [0, 'never'],
          'type-case': [0, 'never'],
          "type-empty": [2, "never"],
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
