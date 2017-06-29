import { BullpenPage } from './app.po';

describe('bullpen App', () => {
  let page: BullpenPage;

  beforeEach(() => {
    page = new BullpenPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
