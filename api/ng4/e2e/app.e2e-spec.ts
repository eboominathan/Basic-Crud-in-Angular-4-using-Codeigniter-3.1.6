import { HelloWorldPage } from './app.po';

describe('hello-world App', () => {
  let page: HelloWorldPage;

  beforeEach(() => {
    page = new HelloWorldPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
