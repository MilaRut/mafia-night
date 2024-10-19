import {iosVhFix} from './utils/ios-vh-fix';
import {initAnimations} from './modules/animations';
import {loadLanguage, setButtonText} from './modules/localisation';
import {showDropdownList} from './modules/dropdown';

const savedLanguage = localStorage.getItem('maf-pa-lang') || 'ru';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();
  loadLanguage(savedLanguage);
  setButtonText(savedLanguage);
  showDropdownList();

  // Modules
  // ---------------------------------

  window.addEventListener('load', () => {
    initAnimations();
  });
});
