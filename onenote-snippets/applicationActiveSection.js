OneNote.run(function (context) {

    // Get the current section.
    var section = context.application.activeSection;

    // Queue a command to load the section. 
    // For best performance, request specific properties.           
    section.load('id,name');

    // Run the queued commands, and return a promise to indicate task completion.
    return context.sync().then(function () {
        // Show some properties.
        console.log("Section name: " + section.name);
        console.log("Section ID: " + section.id);
    });
})
.catch(function (error) {
    console.log("Error: " + error);
    if (error instanceof OfficeExtension.Error)
    {
        console.log("Debug info: " + JSON.stringify(error.debugInfo));
    }
});