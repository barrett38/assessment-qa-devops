const { colours } = require("nodemon/lib/config/defaults");
const { Builder, Browser, By, until } = require("selenium-webdriver");

let driver;

beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.SAFARI).build();
});

afterEach(async () => {
  await driver.quit();
});

describe("Duel Duo tests", () => {
  test("page loads with title", async () => {
    await driver.get("http://localhost:8000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);
  });
  test("clicking Draw button displays div with id = choices", async () => {
    await driver.get("http://localhost:8000");
    await driver.findElement(By.id("draw")).click();
    await driver.wait(until.elementLocated(By.id("choices")), 1000);
    expect(await driver.findElement(By.id("choices")).isDisplayed()).toBe(true);
  });
  test("to see if See All Bots is present on page", async () => {
    await driver.get("http://localhost:8000");
    await driver.findElement(By.id("draw")).click();
    await driver.wait(until.elementLocated(By.id("choices")));
    await driver.findElement(By.id("see-all")).click();
  });
});
