OneNote.run(function (context) {

    // Gets the active page.
    var activePage = context.application.activePage;

    // Queue a command to add a new page after the active page. 
    var pageContents = activePage.getContents();

    // Queue a command to load the pageContents to access its data.
    context.load(pageContents);

    // Run the queued commands, and return a promise to indicate task completion.
    return context.sync().then(function () {
        for (var i = 0; i < pageContents.items.length; i++)
        {
            var pageContent = pageContents.items[i];
            if (pageContent.type == "Outline")
            {
                console.log("Found an outline");
            }
            else if (pageContent.type == "Image")
            {
                console.log("Found an image");
            }
            else if (pageContent.type == "Other")
            {
                console.log("Found a type not supported yet.");
            }
        }
    })
    .catch(function (error) {
        console.log("Error: " + error);
        if (error instanceof OfficeExtension.Error)
        {
            console.log("Debug info: " + JSON.stringify(error.debugInfo));
        }
    });
});