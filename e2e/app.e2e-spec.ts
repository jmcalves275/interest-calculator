import { InterestCalculatorPage } from './app.po';

describe('interest-calculator App', function() {
  let page: InterestCalculatorPage;

  beforeEach(() => {
    page = new InterestCalculatorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
