'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */
// Remember End-to-End testing uses Protractor  - npm run protractor

describe('PhoneCat App', function() {

	describe('Phone list view', function() {

		beforeEach(function() {
			browser.get('app/index.html');
		});


		it('should filter the phone list as user types into the search box', function() {

			var phoneList = element.all(by.repeater('phone in phones'));
			var query = element(by.model('query'));

			expect(phoneList.count()).toBe(4);

			query.sendKeys('nexus');
			expect(phoneList.count()).toBe(1);

			query.clear();
			query.sendKeys('motorola');
			expect(phoneList.count()).toBe(2);
		});

		it('should display the current filter value in the title bar', function() {

			expect(browser.getTitle()).toMatch(/Google Phone Gallery:\s*$/);

			element(by.model('query')).sendKeys('nexus');

			expect(browser.getTitle()).toMatch(/Google Phone Gallery: nexus$/);
		});

		it('should be possible to control phone order via the drop down select box', function() {

      var phoneNameColumn = element.all(by.repeater('phone in phones').column('{{phone.name}}'));
      var query = element(by.model('query'));

      function getNames() {
        return phoneNameColumn.map(function(elm) {
          return elm.getText();
        });
      }

      query.sendKeys('tablet'); //let's narrow the dataset to make the test assertions shorter

      expect(getNames()).toEqual([
        "Motorola XOOM\u2122 with Wi-Fi",
        "MOTOROLA XOOM\u2122"
      ]);

      element(by.model('orderProp')).findElement(by.css('option[value="name"]')).click();

      expect(getNames()).toEqual([
        "MOTOROLA XOOM\u2122",
        "Motorola XOOM\u2122 with Wi-Fi"
      ]);
    });
	});
});