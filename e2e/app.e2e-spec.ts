import { EarpiecefirebasePage } from './app.po';

describe('earpiecefirebase App', () => {
  let page: EarpiecefirebasePage;

  beforeEach(() => {
    page = new EarpiecefirebasePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
