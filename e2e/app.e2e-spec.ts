import { FbNg2Page } from './app.po';

describe('fb-ng2 App', function() {
  let page: FbNg2Page;

  beforeEach(() => {
    page = new FbNg2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
