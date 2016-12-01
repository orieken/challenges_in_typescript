import { ChallengesPage } from './app.po';

describe('challenges App', function() {
  let page: ChallengesPage;

  beforeEach(() => {
    page = new ChallengesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
