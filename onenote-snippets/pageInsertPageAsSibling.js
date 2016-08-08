OneNote.run(function (context) {

    // Gets the active page.
    var activePage = context.application.activePage;

    // Queue a command to add a new page after the active page. 
    var newPage = activePage.insertPageAsSibling("After", "Next Page");

    // Queue a command to load the newPage to access its data.
    context.load(newPage);

    // Run the queued commands, and return a promise to indicate task completion.
    return context.sync().then(function () {
        console.log("page is created with title: " + newPage.title);
    })
    .catch(function (error) {
        console.log("Error: " + error);
        if (error instanceof OfficeExtension.Error)
        {
            console.log("Debug info: " + JSON.stringify(error.debugInfo));
        }
    })
});