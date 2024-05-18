// Logout
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('Logout', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('logout', async function() {
    await driver.get("http://localhost:3000/restaurantdetailpagedesktop")
    await driver.manage().window().setRect({ width: 1552, height: 832 })
    await driver.findElement(By.css(".gap-3")).click()
    {
      const element = await driver.findElement(By.css(".text-black-900 > span"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
  })
})
