import { messages as enMessages } from './locales/en';
import { messages as deMessages } from './locales/de';

export const LANGUAGE = {
    EN: 'en',
    DE: 'de',
};

const locales = {
    [LANGUAGE.EN]: enMessages,
    [LANGUAGE.DE]: deMessages,
};

export { locales };