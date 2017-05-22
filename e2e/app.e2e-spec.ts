import { PercentoftotalPage } from './app.po';

describe('percentoftotal App', () => {
  let page: PercentoftotalPage;

  beforeEach(() => {
    page = new PercentoftotalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
