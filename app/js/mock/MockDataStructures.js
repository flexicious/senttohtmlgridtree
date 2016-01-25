/**
 * Flexicious
 * Copyright 2011, Flexicious LLC
 */
(function(window)
{
    var BaseEntity=function(){
        flexiciousNmsp.TypedObject.apply(this, []);

    };
    var p = BaseEntity.prototype = new flexiciousNmsp.TypedObject();
    var uiUtil=flexiciousNmsp.UIUtils;
    var flxConstants=flexiciousNmsp.Constants;
    p.getClassNames=function(){
        return ["BaseEntity"];
    };
    BaseEntity.prototype.typeName = BaseEntity.typeName = 'BaseEntity';//for quick inspection
    p.addedBy=null;
    p.addedDate=null;
    p.updatedBy=null;
    p.updatedDate=null;
    p.id=null;
    p.clone=function(deepClone){
        if(typeof deepClone=="undefined")deepClone=true;

        var entity=this.createNew();
        entity.addedBy=this.addedBy;
        for(var levelProp in this){
            if(uiUtil.isPrimitive(this[levelProp])){
                entity[levelProp]=this[levelProp];
            }

            else if(this[levelProp]&&deepClone&&typeof this[levelProp]["splice"]=='function')
            {
                entity[levelProp]=[];
                for(var i=0;i<this[levelProp].length;i++)
                {
                    var item=this[levelProp][i];
                    entity[levelProp].push(item.clone(deepClone));
                }
            }
            else if(this[levelProp]&&(!this[levelProp] instanceof Array)&&this[levelProp].implementsOrExtends('BaseEntity'))
                entity[levelProp]=this[levelProp];
        }
        return entity;

    };
    p.createNew=function(){
        throw new Error("Psuedo abstract method, need to override");
    };
    flexiciousNmsp.BaseEntity = BaseEntity;
}(window));

/**
 * Flexicious
 * Copyright 2011, Flexicious LLC
 */
(function(window)
{
    var Organization=function(){
        flexiciousNmsp.BaseEntity.apply(this, []);
    };
    var p = Organization.prototype=new flexiciousNmsp.BaseEntity();
    var uiUtil=flexiciousNmsp.UIUtils;
    var flxConstants=flexiciousNmsp.Constants;
    p.getClassNames=function(){
        return ["Organization","BaseEntity"];
    };
    Organization.prototype.typeName = Organization.typeName = 'BaseEntity';//for quick inspection
    p.getOrgIndex=function(){
        return myCompanyNameSpace.FlexiciousMockGenerator.simpleList.indexOf(this);
    };
    p.headquarterAddress=null;
    p.mailingAddress=null;
    p.legalName=null;
    p.url=null;
    p.billingContact=null;
    p.salesContact=null;
    p.annualRevenue=null;
    p.numEmployees=null;
    p.earningsPerShare=null;
    p.lastStockPrice=null;
    p.chartUrl=null;
    p.deals=[];
    p.isActive=true;
    p.headQuartersSameAsMailing=null;
    p.getRelationshipAmount=function(){
        var total=0;
        for(var i=0;i<this.deals.length;i++){
            var deal=this.deals[i];
            total+= deal.getDealAmount();
        }
        return total;

    };
    p.createNew=function(){
        return new Organization();

    };
    p.getName=function(){
        return this.legalName;

    };
    p.getChildren=function(){
        return this.deals;

    };
    flexiciousNmsp.Organization = Organization;
}(window));
/**
 * Flexicious
 * Copyright 2011, Flexicious LLC
 */
(function(window)
{
    var CustomerOrganization=function(){

        flexiciousNmsp.Organization.apply(this, []);
        this.deals=[];
    };
    var p = CustomerOrganization.prototype=new flexiciousNmsp.Organization();
    var uiUtil=flexiciousNmsp.UIUtils;
    var flxConstants=flexiciousNmsp.Constants;

    p.getClassNames=function(){
        return ["CustomerOrganization","Organization","BaseEntity"];
    };
    CustomerOrganization.prototype.typeName = CustomerOrganization.typeName = 'CustomerOrganization';//for quick inspection
    p.billingAddress=null;
    p.createNew=function(){
        return new CustomerOrganization();
    };
    flexiciousNmsp.CustomerOrganization = CustomerOrganization;
}(window));

/**
 * Flexicious
 * Copyright 2011, Flexicious LLC
 */
(function(window)
{
    var Address=function(){
        flexiciousNmsp.BaseEntity.apply(this, []);
    };
    var p = Address.prototype=new flexiciousNmsp.BaseEntity();
    var uiUtil=flexiciousNmsp.UIUtils;
    var flxConstants=flexiciousNmsp.Constants;
    p.getClassNames=function(){
        return ["Address","BaseEntity"];
    };
    Address.prototype.typeName = Address.typeName = 'Address';//for quick inspection

    p.addressType=null;
    p.isPrimary=null;
    p.line1=null;
    p.line2=null;
    p.line3=null;
    p.city=null;
    p.state=null;
    p.country=null;
    p.postalCode=null;
    p.createNew=function(){
        return new Address();
    };
    p.toDisplayString=function(){
        var ret="";
        ret += this.line1 + " ";
        ret += this.line2+ " ";
        ret += this.line2+ ". " ;
        ret += this.city.name+ ", ";
        ret += this.state.name + ", ";
        ret += this.country.name+ " ";
        return ret;
    }
    flexiciousNmsp.Address = Address;
}(window));
/**
 * Flexicious
 * Copyright 2011, Flexicious LLC
 */
(function(window)
{
    var Person=function(){
        flexiciousNmsp.BaseEntity.apply(this, []);
    };
    var p = Person.prototype=new flexiciousNmsp.BaseEntity();
    var uiUtil=flexiciousNmsp.UIUtils;
    var flxConstants=flexiciousNmsp.Constants;
    p.getClassNames=function(){
        return ["BaseEntity","Person"];
    };
    Person.prototype.typeName = Person.typeName = 'Person';//for quick inspection
    p.firstName=null;
    p.lastName=null;
    p.getDisplayName=function(){
        return this.firstName + " " +this.lastName;
    };
    p.telephone=null;
    p.homeAddress=null;
    p.createNew=function(){
        return new Person();
    };
    flexiciousNmsp.Person = Person;
}(window));


/**
 * Flexicious
 * Copyright 2011, Flexicious LLC
 */
(function(window)
{
    var SystemUser=function(){
        flexiciousNmsp.Person.apply(this, []);
    };
    var p = SystemUser.prototype=new flexiciousNmsp.Person();
    var uiUtil=flexiciousNmsp.UIUtils;
    var flxConstants=flexiciousNmsp.Constants;
    p.getClassNames=function(){
        return ["BaseEntity","Person","SystemUser"];
    };
    SystemUser.prototype.typeName = SystemUser.typeName = 'SystemUser';//for quick inspection
    p.loginNm=null;
    p.createNew=function(){
        return new SystemUser();

    };
    flexiciousNmsp.SystemUser = SystemUser;
}(window));
/**
 * Flexicious
 * Copyright 2011, Flexicious LLC
 */
(function(window)
{
    var Deal=function(){
        this.invoices=[];
        flexiciousNmsp.BaseEntity.apply(this, []);
    };
    var p = Deal.prototype=new flexiciousNmsp.BaseEntity();
    var uiUtil=flexiciousNmsp.UIUtils;
    var flxConstants=flexiciousNmsp.Constants;

    p.getClassNames=function(){
        return ["Deal","BaseEntity"];
    };
    Deal.prototype.typeName = Deal.typeName = 'Deal';//for quick inspection
    p.customer=null;
    p.invoices=[];
    p.dealDate=null;
    p.dealStatus=null;
    p.dealDescription=null;
    p.finalized=true;
    p.getDealAmount=function(){
        var total=0;
        for(var i=0;i<this.invoices.length;i++){
            var inv=this.invoices[i];
            total+= inv.getInvoiceAmount();
        }
        return total;

    };
    p.provider=null;
    p.dealContacts=null;
    p.getIsBillable=function(){
        return this.dealStatus.code!="Prospect";

    };
    p.createNew=function(){
        return new Deal();
    };
    p.getName=function(){
        return this.dealDescription;

    };
    p.getChildren=function(){
        return this.invoices;

    };
    p.getParent=function(){
        return this.customer;
    };
    p.setParent=function(val){
        this.customer=val;

    };
    flexiciousNmsp.Deal = Deal;
}(window));


/**
 * Flexicious
 * Copyright 2011, Flexicious LLC
 */
(function(window)
{
    var Invoice=function(){
        this.lineItems=[];
        flexiciousNmsp.BaseEntity.apply(this, []);
    };
    var p = Invoice.prototype=new flexiciousNmsp.BaseEntity();;
    var uiUtil=flexiciousNmsp.UIUtils;
    var flxConstants=flexiciousNmsp.Constants;

    p.getClassNames=function(){
        return ["Invoice","BaseEntity"];
    };
    Invoice.prototype.typeName = Invoice.typeName = 'Invoice';//for quick inspection
    p.deal=null;
    p.invoiceDate=null;
    p.dueDate=null;
    p.invoiceStatus=null;
    p.lineItems=[];
    p.hasPdf=true;
    p.getInvoiceNumber=function(){
        return this.id;

    };
    p.getInvoiceAmount=function(){
        var total=0;
        for(var i=0;i<this.lineItems.length;i++){
            var lineItem=this.lineItems[i];
            total+= lineItem.lineItemAmount;
        }
        return total;

    };
    p.createNew=function(){
        return new Invoice();

    };
    p.getChildren=function(){
        return this.lineItems;

    };
    p.getParent=function(){
        return this.deal;

    };
    p.setParent=function(val){
        this.deal=val;

    };
    p.getName=function(){
        return this.id;

    };
    flexiciousNmsp.Invoice = Invoice;
}(window));
/**
 * Flexicious
 * Copyright 2011, Flexicious LLC
 */
(function(window)
{
    var LineItem=function(){
        flexiciousNmsp.BaseEntity.apply(this, []);
    };
    var p = LineItem.prototype=new flexiciousNmsp.BaseEntity();
    var uiUtil=flexiciousNmsp.UIUtils;
    var flxConstants=flexiciousNmsp.Constants;

    p.getClassNames=function(){
        return ["LineItem","BaseEntity"];
    };
    LineItem.prototype.typeName = LineItem.typeName = 'LineItem';//for quick inspection
    p.invoice=null;
    p.lineItemAmount=null;
    p.lineItemDescription=null;
    p.units=null;
    p.createNew=function(){
         return new LineItem();

    };
    p.getParent=function(){
        return this.invoice;

    };
    p.setParent=function(val){
        this.invoice=val;

    };
    flexiciousNmsp.LineItem = LineItem;
}(window));


/**
 * Flexicious
 * Copyright 2011, Flexicious LLC
 */
(function(window)
{
    var ReferenceData=function(id,code,name){ //constructor
        if(typeof name=="undefined")name=null;
        //properties
        this.code=code;
        this.id=id;
        if(!name)
            name=code;
        this.name=name;

        flexiciousNmsp.BaseEntity.apply(this, []);
    };
    var p = ReferenceData.prototype;
    var uiUtil=flexiciousNmsp.UIUtils;
    var flxConstants=flexiciousNmsp.Constants;
    p.getClassNames=function(){//support for is/as
        return ["ReferenceData"];
    };
    ReferenceData.prototype.typeName = ReferenceData.typeName = 'ReferenceData';//for quick inspection
    p.cloneSpecial=function(){
        var ref = new ReferenceData(this.id,this.code,this.name);
        return ref;

    };
    p.createNew=function(){
        return  this.cloneSpecial();

    };
    flexiciousNmsp.ReferenceData = ReferenceData;//associate with namespace
}(window));

/**
 * Flexicious
 * Copyright 2011, Flexicious LLC
 */
(function(window)
{
    var PagedResult=function(collection,totalRecords,summaryData,deepClone){
        if(typeof totalRecords=="undefined")totalRecords=0;
        if(typeof summaryData=="undefined")summaryData=null;
        if(typeof deepClone=="undefined")deepClone=true;

        this.collection=[];
        for(var i=0;i<collection.length;i++){
            var entity=collection[i];
            this.collection.push(entity.clone(deepClone));
        }

        this.totalRecords=totalRecords;
        this.summaryData=summaryData;
        flexiciousNmsp.BaseEntity.apply(this, []);

    };
    var p = PagedResult.prototype;
    var uiUtil=flexiciousNmsp.UIUtils;
    var flxConstants=flexiciousNmsp.Constants;
    p.getClassNames=function(){
        return ["PagedResult"];
    };
    p.collection=null;
    p.totalRecords=null;
    p.summaryData=null;
    flexiciousNmsp.PagedResult = PagedResult;
}(window));


/**
 * Flexicious
 * Copyright 2011, Flexicious LLC
 */
(function(window)
{
    /**
     * When is actionscript getting ENUMS!!
     */
    var SystemConstants=function(){

    };
    var p = SystemConstants.prototype;
    var uiUtil=flexiciousNmsp.UIUtils;
    var flxConstants=flexiciousNmsp.Constants;
    p.getClassNames=function(){
        return ["SystemConstants"];
    };
    SystemConstants.prototype.typeName = SystemConstants.typeName = 'SystemConstants';//for quick inspection
    SystemConstants.usCountry= new flexiciousNmsp.ReferenceData(1,"United States");
    SystemConstants.cities = [new flexiciousNmsp.ReferenceData(1,'Grand Rapids'),
        new flexiciousNmsp.ReferenceData(2,'Albany'),
        new flexiciousNmsp.ReferenceData(3,'Stroudsburgh'),
        new flexiciousNmsp.ReferenceData(4,'Barrie'),
        new flexiciousNmsp.ReferenceData(5,'Springfield')];
    SystemConstants.states =
        [new flexiciousNmsp.ReferenceData(1,'MI','Michigan'),
            new flexiciousNmsp.ReferenceData(2,'NY','New York'),
            new flexiciousNmsp.ReferenceData(3,'PA','Penn'),
            new flexiciousNmsp.ReferenceData(4,'NJ','New Jersey'),
            new flexiciousNmsp.ReferenceData(5,'OH','Ohio'),
            new flexiciousNmsp.ReferenceData(6,'NC','North Carolina')];

    SystemConstants.dealStatuses = [
        new flexiciousNmsp.ReferenceData(1,'Prospect'),
        new flexiciousNmsp.ReferenceData(2,'Qualified'),
        new flexiciousNmsp.ReferenceData(3,'In Process'),
        new flexiciousNmsp.ReferenceData(4,'Cancelled'),
        new flexiciousNmsp.ReferenceData(5,'Complete')
    ];

    SystemConstants.invoiceStatuses = [
        new flexiciousNmsp.ReferenceData(1,'Draft'),
        new flexiciousNmsp.ReferenceData(2,'Approved'),
        new flexiciousNmsp.ReferenceData(3,'Transmitted'),
        new flexiciousNmsp.ReferenceData(4,'Paid'),
        new flexiciousNmsp.ReferenceData(5,'Cancelled')
    ];

    SystemConstants.billableConsultants = [
        new flexiciousNmsp.ReferenceData(1,'Jason Bourne'),
        new flexiciousNmsp.ReferenceData(2,'Lars Wilson'),
        new flexiciousNmsp.ReferenceData(3,'Tarah Silverman'),
        new flexiciousNmsp.ReferenceData(4,'Betty White'),
        new flexiciousNmsp.ReferenceData(5,'Kristian Donovan')];

    flexiciousNmsp.SystemConstants = SystemConstants;
}(window));
