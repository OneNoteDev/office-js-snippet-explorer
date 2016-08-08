OneNote.run(function (context) {

    // Get the pages in the current section.
    var pages = context.application.getActiveSection().pages;

    // Queue a command to load the id and title for each page.            
    pages.load('id,title');

    // Run the queued commands, and return a promise to indicate task completion.
    return context.sync().then(function () {
        for(var i = 0; i < pages.items.length; i++){
            var page = childSections.items[0];
            console.log("Page name: " + page.title);
            console.log("Page ID: " + page.id);
        }
    });
})
.catch(function (error) {
    console.log("Error: " + error);
    if (error instanceof OfficeExtension.Error)
    {
        console.log("Debug info: " + JSON.stringify(error.debugInfo));
    }
});