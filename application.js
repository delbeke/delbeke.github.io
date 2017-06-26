App.onLaunch =  function(options) {
    var alert = createAlert("Hosted TVML App", "tvOS app hosted on delbeke.github.io");
    navigationDocument.pushDocument(alert);

    var btn = alert.getElementById("btnGotIt")
    btn.addEventListener("select", function () {
        var response = createAlert("Damn, you got it!", "Seems to work :p");
        navigationDocument.pushDocument(response);    
    })
}

App.onWillResignActive = function () {

}

App.onDidEnterBackground = function () {

}

App.onWillEnterForeground = function () {

}

App.onDidBecomeActive = function () {

}

App.onWillTerminate = function () {

}

var createAlert = function(title, description) {
    var alertString = `<?xml version="1.0" encoding="UTF-8" ?>
        <document>
            <alertTemplate>
                <title>${title}</title>
                <description>${description}</description>
                <button id="btnGotIt">
                    <text>Got it!</text>
                </button>
            </alertTemplate>
        </document>`;
    var parser = new DOMParser();
    var alertDoc = parser.parseFromString(alertString, "application/xml");
    return alertDoc;
}