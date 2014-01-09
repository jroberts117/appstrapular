define(['core', 'collections/links', 'sinon'], function(core, LinkCollection) {

	/**Sample of nested testing and sinon.fakeServer. This shows how the fake server can be used to simulate network requests, and how tests can be nested to build on the setups of each other. In this scenario, the outer setup takes care of orchestrating the fake server and the inner setup prepopulates the collection using that fake server.*/
	describe("Link Collection Tests", function() {
		/**Mock object*/
		var fixtureResponse = [{
			url : 'www.google.com',
			display : 'self',
			target : 'self'
		}, {
			url : 'www.bing.com',
			display : 'self',
			target : 'self'
		}, {
			url : 'www.yahoo.com',
			display : 'self',
			target : 'self'
		}];

		/** Before each test, create a link collection object for the test, and then set up a mock sinon server that will respond to fetch requests with the mock object above*/
		beforeEach(function() {
			this.linkCollection = new LinkCollection();
			// Create the server
			this.server = sinon.fakeServer.create();
			// Set the default response for requesting a collection of links
			this.server.respondWith("GET", "fakeserver/getlinks", [200, {
				'Content-Type' : 'application/json'
			}, JSON.stringify(fixtureResponse)]);
		});

		afterEach(function() {
			this.server.restore();
		});

		it('fetch succeeds', function() {
			this.linkCollection.fetch();
			// Fetch request will have queued with our fake server so now we need to tell the server to respond
			this.server.respond();
			expect(this.linkCollection.at(0).get('url')).toEqual(fixtureResponse[0].url);
		});

		describe('Post Fetch Processing', function() {

			/** Inner tests are all to be predicated on the object being populated, so as part of the setup we can prepopulate our collection using the server created in the outer tests*/
			beforeEach(function() {
				this.linkCollection.fetch();
				this.server.respond();
			});

			it('sorting succeeds', function() {
				expect(this.linkCollection.at(0).get('url')).toEqual(fixtureResponse[0].url);
				this.linkCollection.sortLinks();
				expect(this.linkCollection.at(0).get('url')).toEqual(fixtureResponse[1].url);
			});
		});

	});

});
