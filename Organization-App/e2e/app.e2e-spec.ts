import { OrganizationAppPage } from './app.po';

describe('organization-app App', () => {
  let page: OrganizationAppPage;

  beforeEach(() => {
    page = new OrganizationAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
