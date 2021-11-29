import {NOT_EMPTY_REGEX} from './constant';

export const validateRequire = (text?: string) =>
  (!text || !NOT_EMPTY_REGEX.test(text)) && 'errorMessage.fieldIsRequired';
