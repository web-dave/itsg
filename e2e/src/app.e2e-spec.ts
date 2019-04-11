import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeAll(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('should display 📖🐵 BookMonkey', () => {
    expect(page.getTitleText('navigation a')).toEqual('📖🐵 BookMonkey');
  });
  it('should display New Book', () => {
    expect(page.getNthElement('navigation', 'a', 2).getText()).toEqual(
      'New Book'
    );
  });
  it('should navigate to New Book', () => {
    page.getNthElement('navigation', 'a', 2).click();
    expect(browser.getCurrentUrl()).toBe('http://localhost:4200/books/new');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser
      .manage()
      .logs()
      .get(logging.Type.BROWSER);
    expect(logs).not.toContain(
      jasmine.objectContaining({
        level: logging.Level.SEVERE
      } as logging.Entry)
    );
  });
});
