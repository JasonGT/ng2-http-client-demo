import { Ng2HttpClientDemoPage } from './app.po';

describe('ng2-http-client-demo App', function() {
  let page: Ng2HttpClientDemoPage;

  beforeEach(() => {
    page = new Ng2HttpClientDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
