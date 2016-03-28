module.exports = {
  getParameterByName: (name, url) => {
    if (!url) url = window.location.href;
    url = url.toLowerCase();
    name = name.replace(/[\[\]]/g, "\\$&").toLowerCase();
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }

  , serializeObject: (paramObject) => {
    const str = [];

    for(let p in paramObject)
      if (
        paramObject.hasOwnProperty(p)
        && !!paramObject[p]
      ) {
        str.push(encodeURIComponent(p)
          + "="
          + encodeURIComponent(paramObject[p]));
      }
    return str.join("&");
  }
}