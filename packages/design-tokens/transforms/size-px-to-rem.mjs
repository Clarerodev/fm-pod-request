import { throwSizeError } from './_utils.mjs';

const BASE_FONT_SIZE = 16;
const CONFIG_CATEGORY = 'femConfig';
const SIZE_CATEGORY = 'size';
const ITEMS = ['lineHeight', 'height', 'size', 'space'];
const UNIT = 'rem';

export default {
  name: 'size/pxToRem',
  type: 'value',
  // only transforms that have transitive: true will be applied to tokens
  // that alias/reference other tokens
  transitive: true,
  matcher: (token) => {
    const isConfigToken = token.attributes.category === CONFIG_CATEGORY;
    const isCategory = ITEMS.includes(token.attributes.category);
    const isItem = ITEMS.includes(token.attributes.item);
    const isSubItem = ITEMS.includes(token.attributes.subitem);

    return (isConfigToken && isSubItem) || (!isConfigToken && (isCategory || isItem || isSubItem));
  },
  transformer(token) {
    const { name, value } = token;

    const floatVal = parseFloat(value);
    let finalValue = 0;
    
    if (isNaN(floatVal)) {
      throwSizeError(name, value, UNIT);
    }

    if (floatVal === 0) {
      return '0';
    }

    finalValue = `${floatVal / BASE_FONT_SIZE}${UNIT}`;
    return finalValue;
  },
};
