import { HoyosgarcesAppPage } from './app.po';

describe('hoyosgarces-app App', function() {
  let page: HoyosgarcesAppPage;

  beforeEach(() => {
    page = new HoyosgarcesAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
