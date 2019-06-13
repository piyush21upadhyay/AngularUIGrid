import { GridDemoPage } from './app.po';

describe('grid-demo App', function() {
  let page: GridDemoPage;

  beforeEach(() => {
    page = new GridDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
