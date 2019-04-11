import { browser, by, element } from 'protractor';

export class BookNew {
  navigateTo(url) {
    return browser.get(browser.baseUrl + url) as Promise<any>;
  }
  sendKeys(path, keys) {
    path.forEach((p, i) => {
      element(by.css(p)).sendKeys(keys[i]);
    });
  }

  getTitleText(path) {
    return element(by.css(path)).getText() as Promise<string>;
  }
  getElement(path) {
    return element(by.css(path));
  }
}
