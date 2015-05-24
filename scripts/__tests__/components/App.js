jest.dontMock("../../components/App.jsx");

describe("App", function() {

	var React,
		TestUtils,
		App;

	beforeEach(function() {
		React = require("react/addons");
		TestUtils = React.addons.TestUtils;
		App = require("../../components/App.jsx");
	});

	it("should exist", function() {
		var app = TestUtils.renderIntoDocument(
				<App />
			),
			renderedApp = TestUtils.findRenderedDOMComponentWithClass(
				app, "piano");


		expect(app).toBeDefined();
		expect(renderedApp).toBeDefined();
	});
});