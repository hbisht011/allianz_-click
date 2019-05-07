module.exports = {
    'Allianz Click Functionality': function(client) {
        client.init('https://www.allianz.com/en.html')
        client.useXpath().waitForElementPresent("//div[contains(@class,'c-teaser--asset-right')]//a[contains(@class,'')]", 60000)
        client.assert.elementPresent("//div[contains(@class,'c-teaser--asset-right')]//a[contains(@class,'')]", "element not present")
        client.useXpath().click("//div[contains(@class,'c-teaser--asset-right')]//a[contains(@class,'')]")
        client.pause(4000)
        client.windowHandles(function(result) {
            console.log(" Total Window Count - " + result.value.length)
            if (result.value.length == 1) {
                client.pause(3000)
                client.execute("return document.readyState;", function(result) {
                    if (result.value !== "complete" && result.value !== "null") {
                        client.waitForElementVisible('body', waitTime);
                    }
                    client.url(function(result){console.log(result.value)});
                });
            }
        })
        client.end();
    }
};