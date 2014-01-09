define(['core', 'collections/links', 'sinon'], function(core, LinkCollection) {

	describe("Link Collection Tests", function() {
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

		beforeEach(function() {
			this.linkCollection = new LinkCollection();
			this.server = sinon.fakeServer.create();
			this.server.respondWith("GET", "fakeserver/getlinks", [200, {
				'Content-Type' : 'application/json'
			}, JSON.stringify(fixtureResponse)]);
		});

		afterEach(function() {
			this.server.restore();
		});

		it('fetch succeeds', function() {
			this.linkCollection.fetch();
			this.server.respond();
			expect(this.linkCollection.at(0).get('url')).toEqual(fixtureResponse[0].url);
		});

		describe('Post Fetch Processing', function() {

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
