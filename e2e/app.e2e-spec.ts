import { OsuQueueManagerPage } from './app.po';

describe('osu-queue-manager App', () => {
  let page: OsuQueueManagerPage;

  beforeEach(() => {
    page = new OsuQueueManagerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
