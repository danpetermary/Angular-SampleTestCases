import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

 
  
  it('Should start with 0',()=>
  {
  page.navigateTo();
  expect(page.getPoints()).toEqual('0');
  }
  )

   it('Should increase poin by 1',
   ()=>
   {
     page.navigateTo();
     expect(page.getPoints()).toEqual('0');
     page.getPlusButton().click();
     page.getPlusButton().click();
     expect(page.getPoints()).toEqual('5');
   })
 
  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
