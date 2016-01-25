angular.module('fdConfBuilder',[]);



angular.module('fdConfBuilder').factory('fdBuilder', ['fdAttr',function (fdAttr) {

    var canRender = function (s) {
        return s.substring(0, 2) == 'xi';
    };

    var addAttrs = function (node) {
        var attr = $(node)[0].attributes;
        var txt = '';
        for (var i = 0; i < attr.length; i++) {
            var attrName = attr[i].nodeName;
            if (canRender(attrName)) {
                txt += ' ' + fdAttr.get(attrName, 'xi') + '="' + attr[i].nodeValue.replace(/"/g, "'") + '"';
            }
        }
        return txt;

    };

    var addChildren = function (node) {
        var innerNodes = $(node).children();
        var txt = '';
        for (var i = 0; i < innerNodes.length; i++) {
            txt += renderConfig($(innerNodes[i]));
        }
        return txt;
    };
    var addNode = function (node) {
        var txt = '', name = node.nodeName.toLowerCase();

        txt += '<' + fdAttr.get(name);
        txt += addAttrs(node);

        var child = addChildren(node);
        if (child) {
            txt += '>';
            txt += child;
            txt += '</' + fdAttr.get(name) + '>';
        } else {
            txt += '/>';
        }


        return txt;
    };

    var renderConfig = function (node) {
        var nodeTxt = '';
        for (var i = 0; i < node.length; i++) {
            nodeTxt += addNode(node[i]);
        }
        return nodeTxt;
    };

    return {
        build: renderConfig
    };

}]);

angular.module('fdConfBuilder').factory('fdAttr', function () {
    var attrName = function (atName, perfix) {

        if (perfix) {
            if (atName.substring(0, perfix.length) != perfix)
                return atName;
            else
                atName = atName.substring(perfix.length, atName.length)
        }
        if (atName.substring(0, 2) == 'xi')
            atName = atName.substring(2, atName.length)

        return atName.replace(/-\w/g, function (r) {
            return r.charAt(1).toUpperCase()
        });


    };
    return {
        get: attrName
    };
});


angular.module('fdConfBuilder').factory('fdXmlToJson',function(){


    var jsonFn= function (xml,attNameFunc) {

        // Create the return object
        attNameFunc=attNameFunc||function(a){return a;}
        var obj = {};

        if (xml.nodeType == 1) { // element
            // do attributes
            if (xml.attributes.length > 0) {
                //obj["@attributes"] = {};
                for (var j = 0; j < xml.attributes.length; j++) {
                    var attribute = xml.attributes.item(j);
                    obj[attNameFunc(attribute.nodeName)] = attribute.nodeValue;
                }
            }
        } else if (xml.nodeType == 3) { // text
            //obj = xml.nodeValue;
        }

        // do children
        if (xml.hasChildNodes()) {
            for(var i = 0; i < xml.childNodes.length; i++) {

                var item = xml.childNodes.item(i);
                if(item.nodeName !='#text'){
                    var nodeName= item.nodeName.indexOf(':')?
                        item.nodeName.substring(item.nodeName.indexOf(':')+1,item.nodeName.length):
                        item.nodeName;
                    nodeName=attNameFunc(nodeName)

                    if (typeof(obj[nodeName]) == "undefined") {
                    obj[nodeName] = jsonFn(item,attNameFunc);
                    } else {
                        if (typeof(obj[nodeName].push) == "undefined") {
                            var old = obj[nodeName];
                            obj[nodeName] = [];
                            obj[nodeName].push(old);
                        }
                        obj[nodeName].push(jsonFn(item,attNameFunc));
                    }
                }
            }
        }
        return obj;
    };

    return jsonFn;
})