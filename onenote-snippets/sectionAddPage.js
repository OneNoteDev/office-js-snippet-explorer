OneNote.run(function (context) {

    // Queue a command to add a page to the current section.
    var page = context.application.getActiveSection().addPage("Wish list");

    // Queue a command to load the id and title of the new page. 
    // This example loads the new page so it can read its properties later.           
    page.load('id,title');

    // Run the queued commands, and return a promise to indicate task completion.
    return context.sync().then(function () {

        // Display the properties.       
        console.log("Page name: " + page.title);
        console.log("Page ID: " + page.id);

    });
})
.catch(function (error) {
    console.log("Error: " + error);
    if (error instanceof OfficeExtension.Error)
    {
        console.log("Debug info: " + JSON.stringify(error.debugInfo));
    }
});