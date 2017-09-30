import { cn, en } from './i18n';
import config from 'app/config/config';

let AppI18n = cn;

switch(config.language) {
    case 'cn':
        AppI18n = cn;
        break;
    case 'en': AppI18n = en;
        break;
    default:
        AppI18n = cn;
        break;
}

export default AppI18n;