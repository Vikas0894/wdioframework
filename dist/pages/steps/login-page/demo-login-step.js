"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("@cucumber/cucumber");
const enviroments_config_1 = require("../../../configs/enviroments-config");
const timeouts_config_1 = require("../../../configs/timeouts-config");
const browser_open_url_1 = require("../../../support/browser/browser-open-url");
const demo_page_1 = require("../../demo-page/demo-page");
(0, cucumber_1.Given)(/^I am On login page$/, { timeout: timeouts_config_1.timeouts.large }, async () => {
    const url = `${(0, enviroments_config_1.getEnvConfig)().client}`;
    (0, browser_open_url_1.browserOpenUrl)(url);
});
(0, cucumber_1.When)(/^I enter the valid user and password$/, async () => {
    await (await demo_page_1.loginpage.getEmailText()).setValue('trainee');
    await (await demo_page_1.loginpage.getPasswordText()).setValue('trainee');
});
(0, cucumber_1.Then)(/^I click to the login button$/, async () => {
    await (await demo_page_1.loginpage.getClickLoginBtn()).click();
});
//# sourceMappingURL=demo-login-step.js.map