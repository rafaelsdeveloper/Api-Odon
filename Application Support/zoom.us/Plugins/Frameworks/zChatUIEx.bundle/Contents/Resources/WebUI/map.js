;(function(){
  var map = {
  "commitId": "8808faed5f00d377b127b409c9378a23509da0c7",
  "branchName": "release-client-5.13.5",
  "buildTime": "Wed, 11 Jan 2023 02:23:12 GMT",
  "buildVersion": "5.1.171",
  "css": [
    "@zoom/client-scheduler/static/css/chunk-vendors.7f57ae19.css",
    "@zoom/client-scheduler/static/css/index.e12145da.css"
  ],
  "js": [
    "@zoom/client-scheduler/static/js/chunk-vendors.1f90189b.js",
    "@zoom/client-scheduler/static/js/index.4b129444.js"
  ]
};
  var prefix = 'https://dev-integration.zoomdev.us/fe-static/';
  map.css && map.css.forEach(function (cssItem) {
    var linkTag = document.createElement('link');
    var cssURL = prefix +  cssItem ;
    linkTag.href = cssURL;
    linkTag.setAttribute('rel','stylesheet');
    document.head.appendChild(linkTag);
  });
  map.js && map.js.forEach(function (jsItem) {
    var scriptTag = document.createElement("script");
    var jsURL = prefix +  jsItem;
    scriptTag.setAttribute("src", jsURL);
    document.body.appendChild(scriptTag);
  });
  window.domainFromServer= "https://dev-integration.zoomdev.us/fe-static/";
})();
