import { Angular4ExamplePage } from './app.po';

describe('angular4-example App', () => {
  let page: Angular4ExamplePage;

  beforeEach(() => {
    page = new Angular4ExamplePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
