import { ToolsRoomPage } from './app.po';

describe('tools-room App', function() {
  let page: ToolsRoomPage;

  beforeEach(() => {
    page = new ToolsRoomPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
