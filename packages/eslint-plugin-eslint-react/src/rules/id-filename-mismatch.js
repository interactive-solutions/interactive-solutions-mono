/**
 * First part of message id should match filename
 */

module.exports = {
  meta: {
    type: 'suggestion'
  },
  create({ getFilename, report }) {
    return {
      Property(node) {
        const { key, value } = node;

        // If filename doesn't include "*.text.(ts|tsx)" return early
        const regex = /([A-z])\w+\.text\.(ts|tsx)$/g;
        const hasCorrectFilename = getFilename().match(regex)?.[0];
        if (!hasCorrectFilename) return;

        /**
         * Return if "id" key doesn't exist
         *
         * export const texts = defineMessages({
         *   heading: {
         *     id: 'Modo.heading', <-- Will check this key
         *     description: 'Lorem ipsum dolor sit amet',
         *     defaultMessage: 'Consectetur adipiscing elit'
         *   }
         * });
         */
        if (key.name !== 'id') return;

        /**
         * Make sure "value" exists and includes "."
         *
         * export const texts = defineMessages({
         *   heading: {
         *     id: 'Modo.heading', <-- Will check this value
         *     description: 'Lorem ipsum dolor sit amet',
         *     defaultMessage: 'Consectetur adipiscing elit'
         *   }
         * });
         */
        if (!value.value?.includes('.')) {
          report({
            node,
            message:
              'ID needs to include "." to separate filename and property',
            loc: value.loc
          });
          return;
        }

        // Get internal filename by selecting everything before "."
        const getInternalFilename = hasCorrectFilename.split('.')[0];

        // Read internal filename by selecting everything before "." within the
        // value
        const readFilenameFromValue = value.value.split('.')[0];

        if (readFilenameFromValue !== getInternalFilename) {
          report({
            node,
            message: `First part of ID should match filename, in this case it should be "${getInternalFilename}"`,
            loc: value.loc
          });
        }
      }
    };
  }
};
