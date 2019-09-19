import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('app-root .content span')).getText() as Promise<string>;
  }

  getPoints()
  {
    return element(by.cssContainingText('div','Points')).$('span').getText();
  }
  getPlusButton()
  {
    return element(by.cssContainingText('Button','Plus1'));

  }
  getResetButton()
  {
    return element(by.cssContainingText('Button','Reset'));
  }
}
