OneNote.run(function (context) {

    // Gets the active page.
    var page = context.application.activePage;

    // Queue a command to add an outline with given html. 
    var outline = page.addOutline(200, 200,
"<p>Images and a table below:</p> " +
" <img src=\\\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==\\\"> " +
" <img src=\\\"http://imagenes.es.sftcdn.net/es/scrn/6653000/6653659/microsoft-onenote-2013-01-535x535.png\\\"> " +
" <table> " +
"   <tr> " +
"     <td>Jill</td> " +
"     <td>Smith</td> " +
"     <td>50</td> " +
"   </tr> " +
"   <tr> " +
"     <td>Eve</td> " +
"     <td>Jackson</td> " +
"     <td>94</td> " +
"   </tr> " +
" </table>");
    // Run the queued commands, and return a promise to indicate task completion.
    return context.sync();
})
.catch(function (error) {
    console.log("Error: " + error);
    if (error instanceof OfficeExtension.Error)
    {
        console.log("Debug info: " + JSON.stringify(error.debugInfo));
    }
})