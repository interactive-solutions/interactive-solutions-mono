/**
 * Second part of message id should match its parents key name
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
        if (!getFilename().match(regex)) return;

        /**
         * Find "id" key within value properties
         *
         * export const texts = defineMessages({
         *   heading: {
         *     id: 'Modo.heading', <-- Will try to find this key
         *     description: 'Lorem ipsum dolor sit amet',
         *     defaultMessage: 'Consectetur adipiscing elit'
         *   }
         * });
         */
        const findIdProperty = value?.properties?.find(
          (property) => property.key?.name === 'id'
        );

        // Return if id property doesn't include a value
        if (!findIdProperty?.value?.value) return;

        // Get property name by relying on that the property comes after "."
        const getPropertyName = findIdProperty.value.value.split('.')[1];

        if (key.name !== getPropertyName) {
          report({
            node,
            message: `Second part of ID should match parents key name, in this case it should be "${key.name}"`,
            loc: findIdProperty.value.loc
          });
        }
      }
    };
  }
};
