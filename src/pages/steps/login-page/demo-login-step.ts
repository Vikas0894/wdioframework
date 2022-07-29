import { When, Given, Then } from "@cucumber/cucumber";
import { getEnvConfig } from "../../../configs/enviroments-config";
import { timeouts } from "../../../configs/timeouts-config";
import { browserOpenUrl } from "../../../support/browser/browser-open-url";
import { loginpage } from "../../demo-page/demo-page";


Given(/^I am On login page$/, { timeout: timeouts.large }, async () => {
    const url=`${getEnvConfig().client}`;
    browserOpenUrl(url);
});

When(/^I enter the valid user and password$/, async () => {
    await (await loginpage.getEmailText()).setValue('trainee');
    await (await loginpage.getPasswordText()).setValue('trainee');
});

Then(/^I click to the login button$/, async () => {
    await (await loginpage.getClickLoginBtn()).click();
});
