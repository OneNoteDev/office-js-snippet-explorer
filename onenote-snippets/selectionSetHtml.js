Office.context.document.setSelectedDataAsync(
    "<img src=\\\"http://imagenes.es.sftcdn.net/es/scrn/6653000/6653659/microsoft-onenote-2013-01-535x535.png\\\">",
    { coercionType: Office.CoercionType.Html },
    function (asyncResult) {
        var error = asyncResult.error;
        if (asyncResult.status === Office.AsyncResultStatus.Failed)
        {
            console.log(error.name + ": " + error.message);
        }
        else
        {
            console.log('API returned ' + JSON.stringify(asyncResult));
        }
    });