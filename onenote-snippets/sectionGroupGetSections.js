OneNote.run(function (context) {

    // Get the sections that are siblings of the current section.
    var sections = context.application.activeSection.sectionGroup.getSections();

    // Queue a command to load the section groups.
    // For best performance, request specific properties.
    sections.load("id,name");

    // Run the queued commands, and return a promise to indicate task completion.
    return context.sync()
        .then(function () {

            // Write the properties for each section.
            $.each(sections.items, function (index, section) {
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
});