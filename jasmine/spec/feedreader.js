/* feedreader.js
*
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */

$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('allFeeds variables are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

// loops through each feed in allfeeds object to ensures it has a URL defined and that the URL is not empty

        it('all urls are defined', function() {
            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].url).toBeDefined();          // expect url is defined
                expect(allFeeds[i].url.length).not.toBe(0);     // expect url not empty
    }
});
        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
// loops through each feed in allfeeds object to ensures it has a name defined and that name is not empty

        it('all names are defined',function() {
            for (var i =0;i < allFeeds.length; i++) {
                expect(allFeeds[i].name).toBeDefined();             // expect name is defined
                expect(allFeeds[i].name).not.toBe(0);               // expect name is not empty
                expect(typeof allFeeds[i].name).toBe('string');     // expect name type is string
            }
         });
    });


    /* TODO: Write a new test suite named "The menu" */

    describe('The menu',function() {

    /* TODO: Write a test that ensures the menu element is
    * hidden by default. You'll have to analyze the HTML and
    * the CSS to determine how we're performing the
    * hiding/showing of the menu element.
    */

// to test that the menu element is hidden by default

        it('menu is hidden by default',function() {
            expect($("body").hasClass('menu-hidden')).toBe(true);  // expect that body tag has 'menu-hidden' class
        });

    /* TODO: Write a test that ensures the menu changes
    * visibility when the menu icon is clicked. This test
    * should have two expectations: does the menu display when
    * clicked and does it hide when clicked again.
    */
        it('menu should change the visibility when it clicked', function() {
            $('.menu-icon-link').trigger('click');      // When the menu icon is clicked we expect that the 'menu-hidden' class was removed
            expect($("body").hasClass('menu-hidden')).toBe(false);

            $('.menu-icon-link').trigger('click');      // When the menu icon is clicked again we expect that the 'menu-hidden' class is applied
            expect($("body").hasClass('menu-hidden')).toBe(true);
        });
    });

    /* TODO: Write a new test suite named "Initial Entries" */

    describe('Initial Entries',function() {

// As the test is async we use Jasmine's beforeEach and done() funcitons with loadFeed

        beforeEach(function(done) {  
            loadFeed(0,done);
        });
       it('there is at least a single .entry element within the .feed container', function(done) {
            var feedListLength = $('.feed .entry').length;
            expect(feedListLength).toBeGreaterThan(0);
            done();
        });
    });

    /* TODO: Write a new test suite named "New Feed Selection" */

// In this test we check if the content is updated when a differnt feedId is passed to the loadFeed() function.

    describe('New Feed Selection', function () {
        var defaultContent,
            updatedContent;
        beforeEach(function (done) {

	    /* TODO: Write a test that ensures when a new feed is loaded
	    * by the loadFeed function that the content actually changes.
	    * Remember, loadFeed() is asynchronous.
	    */
//The code bellow runs the loadFeed function with the feedId 0 (default) and 1 (second on the list) and with a callback that is filling the variables with the content we get.

            loadFeed(0, function () {
                defaultContent = $('.feed').text();
                
                loadFeed(1, function () {
                    updatedContent = $('.feed').text();
                    done();
                });
            });

        });
    /* TODO: Write a test that ensures when a new feed is loaded
     * by the loadFeed function that the content actually changes.
     * Remember, loadFeed() is asynchronous.
     */
        it('loads a new feed', function () {
            expect(updatedContent).not.toBe(defaultContent);
        });
    });
}());