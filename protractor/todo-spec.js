describe('ec-web-ui test cases', function () {

    beforeEach(function () {
        browser.waitForAngularEnabled(false);
        browser.driver.sleep(4000);
        browser.get('http://localhost:17990/v1.1beta/dive');
        browser.driver.sleep(1000);
        element(by.id('user-id')).sendKeys('place your login id');
        element(by.id('password')).sendKeys('Place your login password');
        element(by.id('login-btn')).click();
        browser.driver.sleep(1000);
        element(by.id('cont-btn')).click();
    });

    // Login test start
    it('Login test', function () {
        browser.driver.sleep(2000);
        expect(browser.getTitle()).toEqual('xcalr UI');
    });
    // Login test end

    // View component test start
    it('View component test', function () {
        browser.driver.sleep(4000);
        element(by.id('nav-view')).click();
        browser.driver.sleep(4000);
        expect(element(by.id('view-header-title')).getText()).toEqual('Topology view');
    });
    // View component test end

    // Agent create component test start
    it('Agent create component test', function () {
        browser.driver.sleep(4000);
        element(by.id('nav-maintain')).click();
        browser.driver.sleep(1000);
        element(by.id('nav-agent')).click();
        browser.driver.sleep(1000);
        element(by.id('nav-agent-create')).click();
        browser.driver.sleep(1000);
        expect(element(by.id('maintainagentcreate-title')).getText()).toEqual('Create Agent Creating parameters.');
    });
    // Agent create component test end

    // Agent create (Gateway) button should be disable initially test start
    it('Agent--> Gateway create button should be disable initially', function () {
        browser.driver.sleep(4000);
        element(by.id('nav-maintain')).click();
        browser.driver.sleep(1000);
        element(by.id('nav-agent')).click();
        browser.driver.sleep(1000);
        element(by.id('nav-agent-create')).click();
        browser.driver.sleep(1000);
        element(by.id('create-gateway-btn')).getAttribute('disabled').then(function (attr) {
            expect(attr).toBe('true');
        });
    });
    // Agent create (Gateway) button should be disable initially test end

    // Agent create (Server) button should be disable initially test start
    it('Agent--> Gateway create button should be disable initially', function () {
        browser.driver.sleep(4000);
        element(by.id('nav-maintain')).click();
        browser.driver.sleep(1000);
        element(by.id('nav-agent')).click();
        browser.driver.sleep(1000);
        element(by.id('nav-agent-create')).click();
        browser.driver.sleep(1000);
        element(by.id('agentModeButton1')).click();
        browser.driver.sleep(1000);
        element(by.id('create-server-btn')).getAttribute('disabled').then(function (attr) {
            expect(attr).toBe('true');
        });
    });
    // Agent create (Server) button should be disable initially test end

    // Agent create (Client) button should be disable initially test start
    it('Agent--> Client create button should be disable initially', function () {
        browser.driver.sleep(4000);
        element(by.id('nav-maintain')).click();
        browser.driver.sleep(1000);
        element(by.id('nav-agent')).click();
        browser.driver.sleep(1000);
        element(by.id('nav-agent-create')).click();
        browser.driver.sleep(1000);
        element(by.id('agentModeButton2')).click();
        browser.driver.sleep(1000);
        element(by.id('create-client-btn')).getAttribute('disabled').then(function (attr) {
            expect(attr).toBe('true');
        });
    });
    // Agent create (Client) button should be disable initially test end

    // Agent update/disable component test start
    it('Agent update/disable component test', function () {
        browser.driver.sleep(4000);
        element(by.id('nav-maintain')).click();
        browser.driver.sleep(1000);
        element(by.id('nav-agent')).click();
        browser.driver.sleep(1000);
        element(by.id('nav-agent-update-disable')).click();
        browser.driver.sleep(1000);
        expect(element.all(by.css('.Maintainagentupgrade')).isPresent()).toBe(true);
    });
    // Agent update/disable component test end

    // Agent view component test start
    it('Agent view component test', function () {
        browser.driver.sleep(4000);
        element(by.id('nav-maintain')).click();
        browser.driver.sleep(1000);
        element(by.id('nav-agent')).click();
        browser.driver.sleep(1000);
        element(by.id('nav-agent-view')).click();
        browser.driver.sleep(1000);
        expect(element.all(by.css('.Maintainagentview')).isPresent()).toBe(true);
    });
    // Agent view component test end

    afterEach(function () {
        browser.driver.sleep(4000);
    });
});