OneNote.run(function (context) {

    // Queue a command to insert a section after the current section.
    var section = context.application.getActiveSection().insertSectionAsSibling("After", "New section");

    // Queue a command to load the id and name of the new section. 
    // This example loads the new section so it can read its properties later.           
    section.load('id,name');

    // Run the queued commands, and return a promise to indicate task completion.
    return context.sync().then(function () {
        // Display the properties.       
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