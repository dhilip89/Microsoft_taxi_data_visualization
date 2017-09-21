import config from 'app/config/config';

export default class Util {

    // Get i18n from label.
    static getI18n(label) {
        return !!label ? (label[config.language] ? label[config.language] : label) : '';
    }
}