/**
 * Created by 19.06.2013-7pm on 25-Jan-16.
 */

(function(w){

    w.LINK_COMPANY_MAP = {};
    w.LINK_COMPANY_MAP["default"] = "http://www.stackoverflow.com";
    // TODO : ...

    var LinkRenderer = function(){
        flexiciousNmsp.UIComponent.apply(this, ["div"]);

        var a = this.a = new flexiciousNmsp.UIComponent("a");
        this.addChild(a);
    };

    flexiciousNmsp.LinkRenderer = LinkRenderer;
    LinkRenderer.prototype = new flexiciousNmsp.UIComponent();
    LinkRenderer.prototype.typeName = LinkRenderer.typeName = "LinkRenderer";
    LinkRenderer.prototype.getClassNames = function () {
        return ["LinkRenderer", "UIComponent"];
    };

    LinkRenderer.prototype.setData = function(data){
        this.data =  data;
        this.a.domElement.href = w.LINK_COMPANY_MAP["default"];
        this.a.domElement.innerHTML = "Website";
    };

    LinkRenderer.prototype.setText = function(txt){

    };


}(window));