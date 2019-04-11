import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText(path) {
    return element(by.css(path)).getText() as Promise<string>;
  }
  getNthElement(a, b, i) {
    return element(by.tagName(a))
      .all(by.css(b))
      .get(i);
  }
}
