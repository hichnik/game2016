 function loadJSON(callback) {   

    var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
    xobj.open('GET', 'my_data.json', true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
          }
    };
    xobj.send(null);  
 }

function pad (str, max) {
  str = str.toString();
  return str.length < max ? pad("0" + str, max) : str;
}

function addClass(classname, element) {
    var cn = element.className;
    //test for existance
    if (cn.indexOf(classname) != -1) {
        return;
    }
    //add a space if the element already has class
    if (cn != '') {
        classname = ' ' + classname;
    }
    element.className = cn + classname;
}

function removeClass(classname, element) {
    var cn = element.className;
    var rxp = new RegExp("\\s?\\b" + classname + "\\b", "g");
    cn = cn.replace(rxp, '');
    element.className = cn;
}
function isPositive(n) {
    return n > 0;
}
