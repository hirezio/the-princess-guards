import { ThePrincessGuardsPage } from './app.po';

describe('the-princess-guards App', () => {
  let page: ThePrincessGuardsPage;

  beforeEach(() => {
    page = new ThePrincessGuardsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
