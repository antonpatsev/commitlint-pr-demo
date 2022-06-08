module.exports = {
    extends: [
      "@commitlint/config-conventional",
      "@commitlint/parse"
    ],
    parserPreset: {
      parserOpts: {
        headerPattern: /\(DEVOPS[^)]*\)$/,
        headerCorrespondence: ['type', 'scope', 'subject']
      }
    }
  };
