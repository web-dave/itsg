import { browser, logging } from 'protractor';
import { BookNew } from './book-new.po';
import { AppPage } from './app.po';

describe('Book New', () => {
  let page: BookNew;
  let list: AppPage;
  let btn;

  beforeAll(() => {
    page = new BookNew();
    page.navigateTo('/books/new');
    btn = page.getElement('book-new button');
  });

  it('should validate the form with values', () => {
    expect(btn.isEnabled()).toBeFalsy();
    page.sendKeys(
      [
        '[formcontrolname="isbn"]',
        '[formcontrolname="title"]',
        '[formcontrolname="author"]'
      ],
      [new Date().toISOString().substr(0, 13), 'Moin Test Book', 'Hans Wurst']
    );

    expect(btn.isEnabled()).toBeTruthy();
  });
  it('should show the book in the list', () => {
    const isbn = new Date().toISOString().substr(0, 13);
    page.sendKeys(
      [
        '[formcontrolname="isbn"]',
        '[formcontrolname="title"]',
        '[formcontrolname="author"]'
      ],
      [isbn, 'Moin Test Book', 'Hans Wurst']
    );
    btn.click();
    list = new AppPage();
    page.navigateTo('/books/' + isbn);
    expect(page.getElement('book-detail .card-title').getText()).toContain(
      'Moin Test Book'
    );
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
