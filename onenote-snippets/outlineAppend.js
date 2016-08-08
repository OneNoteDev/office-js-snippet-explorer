OneNote.run(function (context) {

    // Gets the active page.
    var activePage = context.application.getActivePage();

    // Get pageContents of the activePage. 
    var pageContents = activePage.contents;

    // Queue a command to load the pageContents to access its data.
    pageContents.load("id,type");

    // Run the queued commands, and return a promise to indicate task completion.
    return context.sync().then(function () {
        if (pageContents.items.length != 0 && pageContents.items[0].type == "Outline")
        {
            // First item is an outline.
            outline = pageContents.items[0].outline;

            // Queue a command to append a paragraph to the outline.
            outline.appendHtml("<p>new paragraph</p>");

            // Run the queued commands.
            return context.sync();
        }
    })
})
.catch(function (error) {
    console.log("Error: " + error);
    if (error instanceof OfficeExtension.Error)
    {
        console.log("Debug info: " + JSON.stringify(error.debugInfo));
    }
});