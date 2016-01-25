/**
 * Created by 19.06.2013-7pm on 25-Jan-16.
 */

(function(w){

    w.LOGO_COMPANY_MAP = {};
    w.LOGO_COMPANY_MAP["default"] = "http://www.stackoverflow.com/favicon.ico";
    // TODO : ...

    var LogoRenderer = function(){
        flexiciousNmsp.UIComponent.apply(this, ["div"]);
        this.domElement.setAttribute("style","text-align:center;");

        var img = this.img = new flexiciousNmsp.UIComponent("img");
        img.domElement.setAttribute("style", "width: 22px; height: 22px;");
        this.addChild(img);
    };

    flexiciousNmsp.LogoRenderer = LogoRenderer;
    LogoRenderer.prototype = new flexiciousNmsp.UIComponent();
    LogoRenderer.prototype.typeName = LogoRenderer.typeName = "LogoRenderer";
    LogoRenderer.prototype.getClassNames = function () {
        return ["LogoRenderer", "UIComponent"];
    };

    LogoRenderer.prototype.setData = function(data){
        this.data =  data;
        this.img.domElement.src = w.LOGO_COMPANY_MAP["default"];
        this.img.domElement.alt = this.img.domElement.title = data.legalName;
    };

    LogoRenderer.prototype.setText = function(txt){

    };

}(window));