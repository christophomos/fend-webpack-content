import { checkForName } from './js/nameChecker';
import { handleSubmit } from './js/formHandler';
import { handleWeatherClick } from './js/weather';

import './styles/resets.scss';
import './styles/base.scss';
import './styles/footer.scss';
import './styles/form.scss';
import './styles/header.scss';

console.log(checkForName);

export {
    checkForName,
    handleSubmit,
    handleWeatherClick
};