/**
 * Created by endiny on 13/05/16.
 */

export default class l10nProvider {
    constructor(en_US, ru_RU) {
        this.languages = ['ru_RU', 'en_US'];
        this.currentLanguage = 'en_US';
        this.currentBundle = en_US;
        this.setLanguage = (lang) => {
            if (lang === 'ru') {
                this.currentLanguage = 'ru_RU';
                this.currentBundle = ru_RU;
            } else {
                this.currentLanguage = 'en_US';
                this.currentBundle = en_US;
            }
        };
        this.getBundle = () => {return this.currentBundle}
    }
}