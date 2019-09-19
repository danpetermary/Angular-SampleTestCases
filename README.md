Unit Test - created in sample.spec.ts

Component level unit test is in footercomponent.spec.ts


E2E

App.po.ts – to create page and retrieve all components
App.e2e-spec – Test cases


AppPage - Class 

navigateTo() -- to access the browser page

--For Content 

 return element(by.cssContainingText('div',‘contenttextofdiv')).$('span').getText();

-- For Object

 return element(by.cssContainingText('Button',’label')); 