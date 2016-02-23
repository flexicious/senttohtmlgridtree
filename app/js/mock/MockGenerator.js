/**
 * Flexicious
 * Copyright 2011, Flexicious LLC
 */
(function(window)
{
    var FlexiciousMockGenerator=function(){

    };

    FlexiciousMockGenerator.areaCodes = ['201','732','212','646','800','866'] ;
    FlexiciousMockGenerator.streetTypes = ['Ave','Blvd','Rd','St','Lane'];
    FlexiciousMockGenerator.streetNames = ['Park','West','Newark','King','Gardner'];


    FlexiciousMockGenerator.companyNames=['3M Co',
        'Abbott Laboratories',
        'Adobe Systems',
        'Advanced Micro Dev',
        'Aetna Inc',
        'Affiliated Computer Svcs',
        'AFLAC Inc',
        'Air Products & Chem',
        'Airgas Inc',
        'AK Steel Holding',
        'Akamai Technologies',
        'Alcoa Inc',
        'Allegheny Energy',
        'Allegheny Technologies',
        'Allergan, Inc',
        'Allstate Corp',
        'Altera Corp',
        'Altria Group',
        'Amazon.com Inc',
        'Amer Electric Pwr',
        'Amer Express',
        'Amer Tower',
        'Ameren Corp',
        'Ameriprise Financial',
        'AmerisourceBergen Corp',
        'Amgen Inc',
        'Amphenol Corp',
        'Anadarko Petroleum',
        'Aon Corp',
        'Apache Corp',
        'Apartment Investment & Mgmt',
        'Apollo Group',
        'Apple Inc',
        'Archer-Daniels-Midland',
        'Assurant Inc',
        'AT&T Inc',
        'Automatic Data Proc',
        'AutoNation Inc',
        'AutoZone Inc',
        'AvalonBay Communities',
        'Avery Dennison Corp',
        'Avon Products',
        'Baker Hughes Inc',
        'Ball Corp',
        'Bank of America',
        'Bank of New York Mellon',
        'Bard (C.R.)',
        'Baxter Intl',
        'BB&T Corp',
        'Becton, Dickinson',
        'Bed Bath & Beyond',
        'Bemis Co',
        'Best Buy',
        'Biogen Idec',
        'Black & Decker Corp',
        'BMC Software',
        'Boeing Co',
        'Boston Properties',
        'Boston Scientific',
        'Bristol-Myers Squibb',
        'Broadcom Corp',
        'Burlington Northn Santa Fe',
        'C.H. Robinson Worldwide',
        'CA Inc',
        'Cabot Oil & Gas',
        'Cameron Intl',
        'Capital One Financial',
        'Carnival Corp',
        'Caterpillar Inc',
        'CB Richard Ellis Grp',
        'Celgene Corp',
        'CenterPoint Energy',
        'Cephalon Inc',
        'CF Industries Hldgs',
        'Chesapeake Energy',
        'Chevron Corp',
        'Chubb Corp',
        'Cincinnati Financial',
        'Cintas Corp',
        'Cisco Systems',
        'Citigroup Inc',
        'Citrix Systems',
        'Clorox Co',
        'CME Group Inc',
        'CMS Energy',
        'Coach Inc',
        'Coca-Cola Co',
        'Coca-Cola Enterprises',
        'Cognizant Tech Solutions',
        'Colgate-Palmolive',
        'Comcast Cl',
        'Comerica Inc',
        'Compuware Corp',
        'ConAgra Foods',
        'ConocoPhillips',
        'CONSOL Energy',
        'Consolidated Edison',
        'Constellation Brands',
        'Constellation Energy Group',
        'Convergys Corp',
        'Corning Inc',
        'Costco Wholesale',
        'Coventry Health Care',
        'CSX Corp',
        'Cummins Inc',
        'Danaher Corp',
        'Darden Restaurants',
        'DaVita Inc',
        'Dean Foods',
        'DENTSPLY Intl',
        'Devon Energy',
        'DeVry Inc',
        'Diamond Offshore Drilling',
        'Discover Financial Svcs',
        'Dominion Resources',
        'Donnelley(R.R.)& Sons',
        'Dover Corp',
        'Dow Chemical',
        'DTE Energy',
        'Duke Energy',
        'Dun & Bradstreet',
        'duPont(E.I.)deNemours',
        'E Trade Financial',
        'Eastman Chemical',
        'Eastman Kodak',
        'Eaton Corp',
        'eBay Inc',
        'Ecolab Inc',
        'El Paso Corp',
        'EMC Corp',
        'Emerson Electric',
        'ENSCO Intl',
        'Entergy Corp',
        'EQT Corp',
        'Equifax Inc',
        'Equity Residential',
        'Exelon Corp',
        'Expedia Inc',
        'Expeditors Intl,Wash',
        'Express Scripts',
        'Exxon Mobil',
        'Family Dollar Stores',
        'Fastenal Co',
        'Federated Investors ',
        'FedEx Corp',
        'Fidelity Natl Info Svcs',
        'Fifth Third Bancorp',
        'First Horizon Natl',
        'FirstEnergy Corp',
        'Fiserv Inc',
        'FLIR Systems',
        'Flowserve Corp',
        'FMC Corp',
        'FMC Technologies',
        'Ford Motor',
        'Forest Labs',
        'Fortune Brands',
        'FPL Group',
        'Franklin Resources',
        'Freept McMoRan Copper&Gold',
        'Frontier Communications',
        'Gannett Co',
        'Genl Dynamics',
        'Genl Electric',
        'Genl Mills',
        'Genuine Parts',
        'Genworth Financial',
        'Genzyme Corp',
        'Gilead Sciences',
        'Goldman Sachs Group',
        'Goodrich Corp',
        'Goodyear Tire & Rub',
        'Google Inc',
        'Grainger (W.W.)',
        'Halliburton Co',
        'Harley-Davidson',
        'Harman Intl',
        'Harris Corp',
        'Hartford Finl Svcs Gp',
        'Hasbro Inc',
        'HCP Inc',
        'Health Care REIT',
        'Hershey Co',
        'Hess Corp',
        'Honeywell Intl',
        'Hospira Inc',
        'Host Hotels & Resorts',
        'Hudson City Bancorp',
        'Humana Inc',
        'Huntington Bancshares',
        'Illinois Tool Works',
        'IMS Health',
        'Intel Corp',
        'IntercontinentalExchange Inc',
        'Interpublic Grp Cos',
        'Intl Bus. Machines',
        'Intl Flavors/Fragr',
        'Intl Paper',
        'Intuitive Surgical',
        'INVESCO Ltd',
        'Iron Mountain',
        'ITT Corp',
        'Jabil Circuit',
        'Janus Capital Group',
        'Johnson & Johnson',
        'Johnson Controls',
        'JPMorgan Chase & Co',
        'Juniper Networks',
        'KB HOME',
        'Kellogg Co',
        'KeyCorp',
        'Kimberly-Clark',
        'Kimco Realty',
        'KLA-Tencor Corp',
        'Kraft Foods',
        'L-3 Communications Hldgs',
        'Laboratory Corp Amer Hldgs',
        'Lauder (Estee) Co',
        'Legg Mason Inc',
        'Leggett & Platt',
        'Lennar Corp',
        'Lexmark Intl',
        'Life Technologies',
        'Lilly (Eli)',
        'Lincoln Natl Corp',
        'Linear Technology Corp',
        'Lockheed Martin',
        'Loews Corp',
        'Lorillard Inc',
        'LSI Corp',
        'M&T Bank',
        'Marathon Oil',
        'Marriott Intl',
        'Marsh & McLennan',
        'Marshall & Ilsley',
        'Masco Corp',
        'Massey Energy',
        'MasterCard Inc',
        'Mattel, Inc',
        'McAfee Inc',
        'McCormick & Co',
        'McDonalds Corp',
        'McGraw-Hill Companies',
        'McKesson Corp',
        'MeadWestvaco Corp',
        'Medco Health Solutions',
        'MEMC Electronic Materials',
        'Merck & Co',
        'Meredith Corp',
        'MetLife Inc',
        'Microchip Technology',
        'Micron Technology',
        'Microsoft Corp',
        'Molex Inc',
        'Molson Coors Brewing',
        'Monsanto Co',
        'Monster Worldwide',
        'Moodys Corp',
        'Morgan Stanley',
        'Motorola, Inc',
        'Murphy Oil',
        'Mylan Inc',
        'Nabors Indus',
        'Natl Oilwell Varco',
        'Natl Semiconductor',
        'New York Times',
        'Newell Rubbermaid',
        'Newmont Mining',
        'News Corp ',
        'NICOR Inc',
        'NIKE, Inc',
        'NiSource Inc',
        'Noble Energy',
        'Norfolk Southern',
        'Northeast Utilities',
        'Northern Trust',
        'Northrop Grumman',
        'Novellus Systems',
        'Nucor Corp',
        'NYSE Euronext',
        'OReilly Automotive',
        'Occidental Petroleum',
        'Office Depot',
        'Omnicom Group',
        'Oracle Corp',
        'Owens-Illinois',
        'PACCAR Inc',
        'Pactiv Corp',
        'Parker-Hannifin',
        'Paychex Inc',
        'Peabody Energy',
        'Peoples United Financial',
        'Pepco Holdings',
        'Pepsi Bottling Group',
        'PepsiCo Inc',
        'PerkinElmer Inc',
        'Pfizer, Inc',
        'PG&E Corp',
        'Philip Morris Intl',
        'Pinnacle West Capital',
        'Pioneer Natural Resources',
        'Pitney Bowes',
        'Plum Creek Timber',
        'PNC Financial Services Group',
        'Polo Ralph Lauren',
        'PPG Indus',
        'PPL Corp',
        'Praxair Inc',
        'Precision Castparts',
        'Principal Financial Grp',
        'Procter & Gamble',
        'Progress Energy',
        'Progressive Corp,Ohio',
        'ProLogis',
        'Prudential Financial',
        'Public Svc Enterprises',
        'Pulte Homes',
        'QLogic Corp',
        'QUALCOMM Inc',
        'Quanta Services',
        'Quest Diagnostics',
        'Questar Corp',
        'Qwest Communications Intl',
        'RadioShack Corp',
        'Range Resources',
        'Raytheon Co',
        'Red Hat Inc',
        'Regions Financial',
        'Republic Services',
        'Reynolds American',
        'Robert Half Intl',
        'Rockwell Collins',
        'Rowan Cos',
        'Ryder System',
        'Safeway Inc',
        'SanDisk Corp',
        'SCANA Corp',
        'Schering-Plough',
        'Schlumberger Ltd',
        'Schwab(Charles)Corp',
        'Sealed Air',
        'Sherwin-Williams',
        'Sigma-Aldrich',
        'Simon Property Group',
        'SLM Corp',
        'Smith Intl',
        'Snap-On Inc',
        'Southern Co',
        'Southwest Airlines',
        'Southwestern Energy',
        'Sprint Nextel Corp',
        'St. Jude Medical',
        'Stanley Works',
        'Starwood Hotels&Res Worldwide',
        'State Street Corp',
        'Stericycle Inc',
        'Stryker Corp',
        'SunTrust Banks',
        'Supervalu Inc',
        'Symantec Corp',
        'Sysco Corp',
        'T.Rowe Price Group',
        'TECO Energy',
        'Tellabs, Inc',
        'Tenet Healthcare',
        'Teradyne Inc',
        'Texas Instruments',
        'Textron, Inc',
        'Thermo Fisher Scientific',
        'Time Warner',
        'Torchmark Corp',
        'Total System Svcs',
        'Travelers Cos',
        'U.S. Bancorp',
        'U.S. Steel',
        'Union Pacific',
        'United Parcel',
        'United Technologies',
        'UnitedHealth Group',
        'Unum Group',
        'Valero Energy',
        'Varian Medical Systems',
        'Ventas Inc',
        'Verizon Communications',
        'VF Corp',
        'Viacom Inc',
        'Vornado Realty Trust',
        'Vulcan Materials',
        'Walgreen Co',
        'Washington Post',
        'Waste Management',
        'Waters Corp',
        'Watson Pharmaceuticals',
        'WellPoint Inc',
        'Wells Fargo',
        'Western Digital',
        'Western Union',
        'Whirlpool Corp',
        'Whole Foods Market',
        'Williams Cos',
        'Wisconsin Energy Corp',
        'Wyndham Worldwide',
        'Wynn Resorts',
        'Xcel Energy',
        'Xerox Corp',
        'Xilinx Inc',
        'XL Capital Ltd',
        'XTO Energy',
        'Yahoo Inc',
        'Yum Brands',
        'Zimmer Holdings'
    ];

    FlexiciousMockGenerator.lastNames=['SMITH',
        'JOHNSON',
        'WILLIAMS',
        'BROWN',
        'JONES',
        'MILLER',
        'DAVIS',
        'GARCIA',
        'RODRIGUEZ',
        'WILSON',
        'MARTINEZ',
        'ANDERSON',
        'TAYLOR',
        'THOMAS',
        'HERNANDEZ',
        'MOORE',
        'MARTIN',
        'JACKSON',
        'THOMPSON',
        'WHITE',
        'LOPEZ',
        'LEE',
        'GONZALEZ',
        'HARRIS',
        'CLARK',
        'LEWIS',
        'ROBINSON',
        'WALKER',
        'PEREZ',
        'HALL',
        'YOUNG',
        'ALLEN',
        'SANCHEZ',
        'WRIGHT',
        'KING',
        'SCOTT'];

    FlexiciousMockGenerator.firstNames=['LATONYA',
        'CANDY',
        'MORGAN',
        'CONSUELO',
        'TAMIKA',
        'ROSETTA',
        'DEBORA',
        'CHERIE',
        'POLLY',
        'DINA',
        'JEWELL',
        'FAY',
        'JILLIAN',
        'DOROTHEA',
        'NELL',
        'TRUDY',
        'ESPERANZA',
        'PATRICA',
        'KIMBERLEY',
        'FRANK',
        'SCOTT',
        'ERIC',
        'STEPHEN',
        'ANDREW',
        'RAYMOND',
        'GREGORY',
        'JOSHUA',
        'JERRY',
        'DENNIS',
        'WALTER',
        'PATRICK',
        'PETER',
        'HAROLD',
        'DOUGLAS',
        'HENRY',
        'CARL',
        'ARTHUR',
        'RYAN'
    ];
    FlexiciousMockGenerator.getMockNestedData = function() {return [
        {
            "employeeName": "Tony Devanthery",
            "title": "Architect",
            "hireDate": "07/08/2008",
            "fileId": "tdony@email.com",
            "emailAddress": "tdony@email.com",
            "department": "IT",
            "employeeId": "EMP_TNY_DVN",
            "items": [
                {
                    "identifier": "versionId",
                    "comments": "Created By Job",
                    "project": "Mapping",
                    "roleOnProject": "Lead Developer",
                    "createdBy": "6/10/2011",
                    "createdBy": "6/3/2012",
                    "initialArchiveFlag": true,
                    "projectStartDate": "08/08/2008",
                    "projectEndDate": "08/08/2010",
                    "projectId": "PRJ_MPING",
                    "items": [
                        {
                            "hours": 40,
                            "rate": 100,
                            "timeSheetTitle": "Time Sheet-1",
                            "totalExpense": 4000,
                            "timesheetId" : "TD_MP_TS1"
                        },
                        {
                            "hours": 42,
                            "rate": 100,
                            "timeSheetTitle": "Time Sheet-2",
                            "totalExpense": 4200,
                            "timesheetId" : "TD_MP_TS2"
                        }
                    ]
                },
                {
                    "project": "Network Analysis",
                    "roleOnProject": "Lead Developer",
                    "projectStartDate": "08/09/2010",
                    "projectEndDate": "08/09/2011",
                    "projectId": "PRJ_NTA",
                    "items": [
                        {
                            "hours": 46,
                            "rate": 100,
                            "timeSheetTitle": "Time Sheet-1",
                            "totalExpense": 4600,
                            "timesheetId" : "TD_NTA_TS1"
                        },
                        {
                            "hours": 48,
                            "rate": 100,
                            "timeSheetTitle": "Time Sheet-2",
                            "totalExpense": 4800,
                            "timesheetId" : "TD_NTA_TS2"
                        }
                    ]
                }
            ]
        },
        {
            "employeeName": "Jason Parker",
            "title": "Programmer",
            "hireDate": "06/06/2008",
            "department": "Support",
            "emailAddress": "jpason@email.com",
            "employeeId": "EMP_JSN_PRK",
            "items": [
                {
                    "project": "Grid Support",
                    "roleOnProject": "Developer",
                    "projectStartDate": "06/07/2008",
                    "projectEndDate": "06/12/2009",
                    "projectId": "PRJ_GRD",
                    "items": [
                        {
                            "hours": 42,
                            "rate": 100,
                            "timeSheetTitle": "Time Sheet-1",
                            "totalExpense": 4200,
                            "timesheetId" : "TD_GRD_TS1"
                        },
                        {
                            "hours": 49,
                            "rate": 100,
                            "timeSheetTitle": "Time Sheet-2",
                            "totalExpense": 4900,
                            "timesheetId" : "TD_GRD_TS2"
                        }
                    ]
                },
                {
                    "project": "Mapsharp",
                    "roleOnProject": "Architect",
                    "projectStartDate": "06/14/2009",
                    "projectEndDate": "06/12/2011",
                    "projectId": "PRJ_MPSHRP",
                    "items": [
                        {
                            "hours": 40,
                            "rate": 100,
                            "timeSheetTitle": "Time Sheet-1",
                            "totalExpense": 4000,
                            "timesheetId" : "TD_MPSH_TS1"
                        }
                    ]
                }
            ]
        }
    ];
    };




    FlexiciousMockGenerator.mockNestedXml="<grid x='0' y='0' forcePagerRow='true' enableFilters='true' enableMultiColumnSort='true' builtInActions='sort,separator'  width='100%' height='100%' id='dgMain' styleName='FlexiciousGridStyle' enableSelectionCascade='true' enableSelectionBubble='true' enableTriStateCheckbox='true' showSpinnerOnFilterPageSort='true' enableDefaultDisclosureIcon='false'>"+
        "  <level childrenField='items'  enableFilters='false' nestIndent='20' selectedKeyField='employeeId'>"+
        "    <columns>"+
        "      <column sortable='false' headerText='' excludeFromSettings='true' enableExpandCollapseIcon='true' width='25' columnWidthMode='fixed'/>"+
        "      <column type='checkbox'/>"+
        "      <column headerText='Employee Name' dataField='employeeName' filterControl='TextInput' filterOperation='BeginsWith'  />"+
        "      <column headerText='Title' dataField='title' filterControl='TextInput' filterOperation='BeginsWith'/>"+
        "      <column headerText='Email Address' dataField='emailAddress' filterControl='TextInput' filterOperation='BeginsWith'/>"+
        "      <column headerText='Department' dataField='department' filterControl='TextInput' filterOperation='BeginsWith'/>"+
        "      <column headerText='Hire Date' dataField='hireDate' filterControl='TextInput' filterOperation='BeginsWith' />"+
        "      </columns>"+
        "      <nextLevel>"+
        "      <level reusePreviousLevelColumns='false' childrenField='items'   headerVerticalGridLineThickness='1' selectedKeyField='projectId'>"+
        "        <columns>"+
        "	       <column sortable='false' headerText='' excludeFromSettings='true' enableExpandCollapseIcon='true' width='50' columnWidthMode='fixed' expandCollapseIconLeft='25'/>"+
        "   	   <column type='checkbox'/>"+
        "          <column  dataField='project' headerText='Project' />"+
        "          <column dataField='roleOnProject' headerText='Role On Project'  />"+
        "          <column dataField='projectStartDate' headerText='Project Start'  />"+
        "          <column dataField='projectEndDate' headerText='Project End'  />"+
        "        </columns>"+
        "        <nextLevel>"+
        "          <level reusePreviousLevelColumns='false' childrenField='items' headerVerticalGridLineThickness='1'  selectedKeyField='timesheetId'>"+
        "            <columns>"+
        "	       	   <column sortable='false' headerText='' excludeFromSettings='true' width='75' columnWidthMode='fixed'/>"+
        "   	   	   <column type='checkbox'/>"+
        "              <column dataField='timeSheetTitle' headerText='TimeSheet Title' />"+
        "              <column dataField='hours' headerText='Hours'  />"+
        "              <column dataField='rate' headerText='Rate'  />"+
        "              <column dataField='totalExpense' headerText='Total Expense'  />"+
        "            </columns>"+
        "          </level>"+
        "        </nextLevel>"+
        "      </level>"+
        "    </nextLevel>"+
        "  </level>"+
        "</grid>"

    var p = FlexiciousMockGenerator.prototype;
    var uiUtil=flexiciousNmsp.UIUtils;
    var flxConstants=flexiciousNmsp.Constants;
    p.getClassNames=function(){
        return "FlexiciousMockGenerator";
    };
    FlexiciousMockGenerator.DEALS_PER_ORG=2;
    FlexiciousMockGenerator.INVOICES_PER_DEAL=2;
    FlexiciousMockGenerator.LINEITEMS_PER_INVOICE=2;

    FlexiciousMockGenerator.lineItems=[];
    FlexiciousMockGenerator.simpleList=null
    FlexiciousMockGenerator.deepList=null
    var _instance = new FlexiciousMockGenerator();
    FlexiciousMockGenerator.instance=function(){
        return _instance;
    };
    p.progress=null;
    p.getAllLineItems=function(){
        if(FlexiciousMockGenerator.lineItems.length==0){
            this.getDeepOrgList()
        }
        return FlexiciousMockGenerator.lineItems;

    };
    p.getFlatOrgList=function(){
        if(!this.simpleList){
            this.simpleList=this.getOrgList(false);
        }
        return (this.simpleList.slice());

    };
    p.getDeepOrgList=function(){
        if(!this.deepList){
            this.deepList=this.getOrgList(true);
        }
        return this.deepList;

    };
    var _pageIndex=0;
    var _pageSize=30;
    var _index=0;
    p.init=function(){
        this.deepList=[];
        this.index=0;
        var timer=new flexiciousNmsp.Timer(100);
        timer.addEventListener(flxConstants.EVENT_TIMER,this.onTimer);
        timer.start();
    };

    p.onTimer=function (evt){
        for(var i=_pageIndex*_pageSize;i<Math.min(FlexiciousMockGenerator.companyNames.length,(_pageIndex+1)*_pageSize);i++){
            var nm =FlexiciousMockGenerator.companyNames[i];
            this.deepList.push(this.createOrganization(nm,true));
        }
        if((_pageIndex*_pageSize)>=FlexiciousMockGenerator.companyNames.length){
            (evt.target).stop();
            this.progress=100;
            this.dispatchEvent(new flexiciousNmsp.BaseEvent("progress"));

            return;
        }else{
            this.progress=(_pageIndex*_pageSize)*100/FlexiciousMockGenerator.companyNames.length;
            _pageIndex++;
            this.dispatchEvent(new flexiciousNmsp.BaseEvent("progress"));
            evt.target.start();
        }

    };
    p.getOrgList=function(deep){
        var orgs=[];
        for(var i=0;i<FlexiciousMockGenerator.companyNames.length;i++){
            var nm=FlexiciousMockGenerator.companyNames[i];
            orgs.push(this.createOrganization(nm,deep));
        }
        return orgs;

    };
    p.index=0;
    p.getDeepOrg=function(orgId){
        for(var i=0;i<this.deepList.length;i++){
            var org=this.deepList[i];
            if(org.id==orgId){
                return org.clone();
            }
        }
        throw new Error("Invalid org ID passed in : " + orgId);

    };
    p.getPagedOrganizationList=function(filter){
        if(!this.simpleList){
            this.simpleList=this.getOrgList(false);
        }
        if(filter.implementsOrExtends('PrintExportFilter')){
            var pef = filter;
            if(pef.printExportOptions.printExportOption == flexiciousNmsp.PrintExportOptions.PRINT_EXPORT_ALL_PAGES){
                filter.setPageIndex(-1);//so we return all records.
                return new flexiciousNmsp.PagedResult((uiUtil.filterPageSort(this.deepList,filter)),filter.recordCount);
            }else{
                return new flexiciousNmsp.PagedResult((uiUtil.filterPageSort(this.deepList,filter,[pef.printExportOptions.pageFrom,pef.printExportOptions.pageTo])),filter.recordCount);
            }
        }
        else
            return new flexiciousNmsp.PagedResult((uiUtil.filterPageSort(this.simpleList,filter)),filter.recordCount);

    };
    p.getDealsForOrganization=function(orgId,filter){
        for(var i=0;i<this.getDeepOrgList().length;i++){
            var org=this.getDeepOrgList()[i];
            if(org.id==orgId){
                var arr=org.deals;
                return new flexiciousNmsp.PagedResult(filter.pageIndex>=0?
                    (uiUtil.filterPageSort(arr,filter)):arr,arr.length,
                    {"total":uiUtil.sum(org.deals,"dealAmount"),"count":arr.length},false);
            }
        }
        return new flexiciousNmsp.PagedResult([],0);

    };
    p.getInvoicesForDeal=function(dealId,filter){
        for(var i=0;i<this.getDeepOrgList().length;i++){
            var org=this.getDeepOrgList()[i];
            for(var j=0;j<org.deals.length;j++){
                var deal=org.deals[j];
                if(deal.id==dealId){
                    var arr=deal.invoices;
                    return new flexiciousNmsp.PagedResult(filter.pageIndex>=0?
                        (uiUtil.filterPageSort(arr,filter)):arr,arr.length,
                        {"total":uiUtil.sum(arr,"invoiceAmount"),"count":arr.length},false);
                }
            }
        }
        return new flexiciousNmsp.PagedResult([],0);

    };
    p.getLineItemsForInvoice=function(invoiceId,filter){
        for(var i=0;i<this.getDeepOrgList().length;i++){
            var org=this.getDeepOrgList()[i];
            for(var j=0;j<org.deals.length;j++){
                var deal=org.deals[j];
                for(var k=0;k<deal.invoices.length;k++){
                    var invoice=deal.invoices[k];
                    if(invoice.id==invoiceId){
                        var arr=invoice.lineItems;
                        return new flexiciousNmsp.PagedResult(filter.pageIndex>=0?
                            (uiUtil.filterPageSort(arr,filter)):arr,arr.length,
                            {"total":uiUtil.sum(arr,"lineItemAmount"),"count":org.deals.length},false);
                    }
                }
            }
        }
        return new flexiciousNmsp.PagedResult([],0);

    };
    p.createOrganization=function(legalName,deep){
        if(deep)_index++;
        var org= new flexiciousNmsp.CustomerOrganization();
        org.id= 20800 + FlexiciousMockGenerator.companyNames.indexOf(legalName);
        org.legalName=legalName;
        org.headquarterAddress = FlexiciousMockGenerator.createAddress();
        org.mailingAddress = FlexiciousMockGenerator.createAddress();
        org.billingContact=FlexiciousMockGenerator.createContact();
        org.salesContact=FlexiciousMockGenerator.createContact();
	org.provider= org.salesContact.getDisplayName();
	org.payer = "Aetna";;
	org.status= "Rejected";
	org.patient=org.billingContact.getDisplayName();
	org.batch= "12345678cgn";
        org.annualRevenue = FlexiciousMockGenerator.getRandom(1000,60000)
        org.numEmployees = FlexiciousMockGenerator.getRandom(1000,60000)
        org.earningsPerShare = FlexiciousMockGenerator.getRandom(1,6) + (FlexiciousMockGenerator.getRandom(1,99)/100);
        org.lastStockPrice = FlexiciousMockGenerator.getRandom(10,30) + (FlexiciousMockGenerator.getRandom(1,99)/100);
        org.url = "http://www.google.com/search?q="+legalName+"";
        org.chartUrl="http://www.flexicious.com/resources/images/chart" + FlexiciousMockGenerator.getRandom(1,7)+".png"
        org.addedDate = FlexiciousMockGenerator.getRandomDate();
        if(deep){
            for(var dealIdx=0;dealIdx<FlexiciousMockGenerator.DEALS_PER_ORG;dealIdx++){
                org.deals.push(this.createDeal(dealIdx,org,deep));
            }
        }
        return org;

    };
    p.createDeal=function(idx,org,deep){

        var deal = new flexiciousNmsp.Deal();
        deal.customer=org;
        deal.dealDate = FlexiciousMockGenerator.getRandomDate();
        deal.dealDescription = "Project # "+(org.deals.length+1)+" - " +org.legalName + " - "  + (deal.dealDate.getMonth()+1) + "/" +deal.dealDate.getFullYear();
        deal.dealStatus= FlexiciousMockGenerator.getRandomReferenceData(flexiciousNmsp.SystemConstants.dealStatuses).cloneSpecial();
        deal.id = (org.id*10)+(idx);
        deal.billingContact=FlexiciousMockGenerator.createContact();
        deal.salesContact=FlexiciousMockGenerator.createContact();		
        deal.source = "ApexEdi";
        deal.message = "ApexEdi";
        deal.payerCorrespondence = "check number " + idx;	
	deal.status	= "Paid";	
	deal.provider= deal.salesContact.getDisplayName();
	deal.payer = "Aetna";;
	deal.status= "Rejected";
	deal.patient=deal.billingContact.getDisplayName();
	deal.batch= "12345678cgn";
        deal.annualRevenue = FlexiciousMockGenerator.getRandom(1000,60000)		
        if(deep){

            for(var invoiceIDx=0;invoiceIDx<FlexiciousMockGenerator.INVOICES_PER_DEAL;invoiceIDx++){
                deal.invoices.push(this.createInvoice(invoiceIDx,deal,deep));
            }
        }
        FlexiciousMockGenerator.setGlobals(deal);
        return deal;

    };
    p.createInvoice=function(idx,deal,deep){
        var invoice = new flexiciousNmsp.Invoice();
        invoice.deal=deal;
        invoice.dealDate = FlexiciousMockGenerator.getRandomDate();
        invoice.invoiceDate = FlexiciousMockGenerator.getRandomDate();
        invoice.id = (deal.id*10)+idx;
        invoice.invoiceStatus= FlexiciousMockGenerator.getRandomReferenceData(flexiciousNmsp.SystemConstants.invoiceStatuses).cloneSpecial();
        invoice.dueDate = flexiciousNmsp.DateUtils.dateAdd(flexiciousNmsp.DateUtils.DAY_OF_MONTH,30,invoice.invoiceDate);
        invoice.hasPdf = FlexiciousMockGenerator.getRandom(1,2)==1;
        invoice.billingContact=FlexiciousMockGenerator.createContact();
        invoice.salesContact=FlexiciousMockGenerator.createContact();		
        invoice.source = "ApexEdi";
        invoice.message = "ApexEdi";
        invoice.payerCorrespondence = "check number " + idx;	
	invoice.status	= "Paid";	
	invoice.provider= invoice.salesContact.getDisplayName();
	invoice.payer = "Aetna";;
	invoice.status= "Rejected";
	invoice.patient=invoice.billingContact.getDisplayName();
	invoice.batch= "12345678cgn";
        invoice.annualRevenue = FlexiciousMockGenerator.getRandom(1000,60000)		
        if(deep){
            for(var lineItemIDx=0;lineItemIDx<FlexiciousMockGenerator.LINEITEMS_PER_INVOICE;lineItemIDx++){
                var lineItem = this.createInvoiceLineItem(lineItemIDx,invoice,deep);
                invoice.lineItems.push(lineItem);
            }
        }
        FlexiciousMockGenerator.setGlobals(invoice);
        return invoice;

    };
    p.createInvoiceLineItem=function(lineItemIdx,invoice,deep){
        var lineItem = new flexiciousNmsp.LineItem();
        lineItem.id=(invoice.id*10)+lineItemIdx;
        lineItem.invoice=invoice;
        lineItem.lineItemAmount=FlexiciousMockGenerator.getRandom(10000,50000);
        lineItem.lineItemDescription = "Professional Services - " + FlexiciousMockGenerator.getRandomReferenceData(flexiciousNmsp.SystemConstants.billableConsultants).cloneSpecial().name;
        lineItem.units = lineItem.lineItemAmount/100;
        FlexiciousMockGenerator.setGlobals(lineItem);
        FlexiciousMockGenerator.lineItems.push(lineItem);
        return lineItem;

    };
    FlexiciousMockGenerator.getRandomReferenceData=function(arr){
        return arr[FlexiciousMockGenerator.getRandom(0,arr.length-1)];

    };
    FlexiciousMockGenerator.createContact=function(){
        var commercialContact=new flexiciousNmsp.Person();
        commercialContact.firstName=this.firstNames[FlexiciousMockGenerator.getRandom(0,this.firstNames.length-1)];
        commercialContact.lastName=this.lastNames[FlexiciousMockGenerator.getRandom(0,this.lastNames.length-1)];
        commercialContact.homeAddress=FlexiciousMockGenerator.createAddress();
        commercialContact.telephone=FlexiciousMockGenerator.generatePhone();
        FlexiciousMockGenerator.setGlobals(commercialContact);
        return commercialContact;

    };
    FlexiciousMockGenerator.setGlobals=function(entity){
        entity.addedBy=FlexiciousMockGenerator.getSystemUser();
        entity.addedDate = FlexiciousMockGenerator.getRandomDate();
        entity.updatedDate=entity.addedDate;
        entity.updatedBy=FlexiciousMockGenerator.getSystemUser();


    };
    FlexiciousMockGenerator.getRandomDate=function(){
        return new Date(FlexiciousMockGenerator.getRandom(2012,2014),FlexiciousMockGenerator.getRandom(0,11),FlexiciousMockGenerator.getRandom(1,28));

    };
    FlexiciousMockGenerator.generatePhone=function(){
        return FlexiciousMockGenerator.areaCodes[FlexiciousMockGenerator.getRandom(0,3)] + "-" +
            FlexiciousMockGenerator.getRandom(100,999).toString()+ "-" + FlexiciousMockGenerator.getRandom(1000,9999).toString();


    };
    FlexiciousMockGenerator.getSystemUser=function(){
        if(this.sysAdmin)return this.sysAdmin;

        var user=new flexiciousNmsp.SystemUser();
        user.addedBy=user;
        user.addedDate= new Date(2010,1,1);
        user.updatedBy = user;
        user.updatedDate = new Date(2010,1,1);
        user.id=1;
        user.firstName=this.firstNames[FlexiciousMockGenerator.getRandom(0,this.firstNames.length-1)];
        user.lastName=this.lastNames[FlexiciousMockGenerator.getRandom(0,this.lastNames.length-1)];
        user.loginNm ="system_admin";
        this.sysAdmin=user;
        return user;

    };
    FlexiciousMockGenerator.createAddress=function(){
        var address =new flexiciousNmsp.Address();
        address.line1=FlexiciousMockGenerator.getRandom(100,999).toString() + " " +FlexiciousMockGenerator.streetNames[FlexiciousMockGenerator.getRandom(0,FlexiciousMockGenerator.streetNames.length-1)]+ " " + FlexiciousMockGenerator.streetTypes[FlexiciousMockGenerator.getRandom(0,FlexiciousMockGenerator.streetTypes.length-1)];
        address.line2="Suite #" + FlexiciousMockGenerator.getRandom(1,1000);
        address.city=flexiciousNmsp.SystemConstants.cities[FlexiciousMockGenerator.getRandom(0,flexiciousNmsp.SystemConstants.cities.length-1)];
        address.state=flexiciousNmsp.SystemConstants.states[FlexiciousMockGenerator.getRandom(0,flexiciousNmsp.SystemConstants.states.length-1)];
        address.country = flexiciousNmsp.SystemConstants.usCountry;
        return address;

    };
    FlexiciousMockGenerator.getRandom=function(minNum,maxNum){
        return Math.ceil(Math.random() * (maxNum - minNum + 1)) + (minNum - 1);
    };






p.onProgress=null;
myCompanyNameSpace.FlexiciousMockGenerator = FlexiciousMockGenerator;
}(window));

/**
 * Flexicious
 * Copyright 2011, Flexicious LLC
 */
(function(window)
{
    "use strict";
    var ServiceProxyBase, uiUtil = flexiciousNmsp.UIUtils, flxConstants = flexiciousNmsp.Constants;
    /**
     * This is a base class that wraps a Webservice/RemoteObject object. Since the concrete classes are
     * singletons, we always have a single instance of the webservice wsdl downloaded for efficiency.
     * @author Flexicious
     * @constructor
     * @namespace com.flexicious.example.serviceproxies
     * @extends TypedObject
     */
    ServiceProxyBase=function(ro){
        this.remoteObject=ro;

    };
    flexiciousNmsp.ServiceProxyBase = ServiceProxyBase; //add to name space
    ServiceProxyBase.prototype = new flexiciousNmsp.TypedObject(); //setup hierarchy
    ServiceProxyBase.prototype.typeName = ServiceProxyBase.typeName = 'ServiceProxyBase';//for quick inspection
    ServiceProxyBase.prototype.getClassNames=function(){
        return ["ServiceProxyBase","TypedObject"];
    };
    /*protected var webSerivce:WebService;

     public function ServiceProxyBase(webSerivce:mx.rpc.soap.WebService)
     {
     this.webSerivce=webSerivce;
     }*/
    ServiceProxyBase.prototype.callServiceMethod=function (token, resultFunction, faultFunction){
        if(typeof  faultFunction=="undefined") faultFunction=null;

        if(faultFunction==null)faultFunction=this.defaultFaultHandler;

        var evt = {};
        evt.result=token;
        window.setTimeout(function(){resultFunction(evt)},this.delay);

    };
    ServiceProxyBase.prototype.defaultFaultHandler=function(error, token){
        if(typeof  token=="undefined") token= null;

        window.alert("Error occured while calling service method" + error);

    };
}(window));

/**
 * Flexicious
 * Copyright 2011, Flexicious LLC
 */
(function(window)
{
    "use strict";
    var BusinessService, uiUtil = flexiciousNmsp.UIUtils, flxConstants = flexiciousNmsp.Constants;
    /**
     * This is a flex interface for a webservice or a remoting servicer.
     * @author Flexicious
     * @constructor
     * @namespace com.flexicious.example.serviceproxies
     * @extends ServiceProxyBase
     */
    BusinessService=function(){



        this.mockGenerator = myCompanyNameSpace.FlexiciousMockGenerator.instance();
        this.delay=1000;
        this.showBusyCursor=true;
        flexiciousNmsp.ServiceProxyBase.apply(this,[]);

    };
    flexiciousNmsp.BusinessService = BusinessService; //add to name space
    BusinessService.prototype = new flexiciousNmsp.ServiceProxyBase(); //setup hierarchy
    BusinessService.prototype.typeName = BusinessService.typeName = 'BusinessService';//for quick inspection
    BusinessService.prototype.getClassNames=function(){
        return ["BusinessService","ServiceProxyBase"];
    };

    BusinessService.getInstance=function(){

        if (BusinessService.instance == null)
        {
            BusinessService.instance = new BusinessService();
        }
        return BusinessService.instance;

    };
    BusinessService.prototype.getDeepOrgList=function(resultHandler, faultHandler){
        if(typeof  faultHandler=="undefined") faultHandler=null;

        this.callServiceMethod(this.mockGenerator.getDeepOrgList(), resultHandler, faultHandler);

    };
    BusinessService.prototype.getFlatOrgList=function(resultHandler, faultHandler){
        if(typeof  faultHandler=="undefined") faultHandler=null;

        this.callServiceMethod(this.mockGenerator.getFlatOrgList(), resultHandler, faultHandler);

    };
    BusinessService.prototype.getDeepOrg=function(orgId,resultHandler, faultHandler){
        if(typeof  faultHandler=="undefined") faultHandler=null;

        this.callServiceMethod(this.mockGenerator.getDeepOrg(orgId), resultHandler, faultHandler);

    };
    BusinessService.prototype.getPagedOrganizationList=function(filter,resultHandler, faultHandler){
        if(typeof  faultHandler=="undefined") faultHandler=null;

        this.callServiceMethod(this.mockGenerator.getPagedOrganizationList(filter), resultHandler, faultHandler);

    };
    BusinessService.prototype.getDealsForOrganization=function(orgId,filter,resultHandler, faultHandler){
        if(typeof  faultHandler=="undefined") faultHandler=null;

        this.callServiceMethod(this.mockGenerator.getDealsForOrganization(orgId,filter), resultHandler, faultHandler);

    };
    BusinessService.prototype.getInvoicesForDeal=function(dealId,filter,resultHandler, faultHandler){
        if(typeof  faultHandler=="undefined") faultHandler=null;

        this.callServiceMethod(this.mockGenerator.getInvoicesForDeal(dealId,filter), resultHandler, faultHandler);

    };
    BusinessService.prototype.getLineItemsForInvoice=function(invoiceId,filter,resultHandler, faultHandler){
        if(typeof  faultHandler=="undefined") faultHandler=null;

        this.callServiceMethod(this.mockGenerator.getLineItemsForInvoice(invoiceId,filter), resultHandler, faultHandler);

    };
    BusinessService.prototype.getAllLineItems=function(resultHandler, faultHandler){
        if(typeof  faultHandler=="undefined") faultHandler=null;

        this.callServiceMethod(this.mockGenerator.getAllLineItems(), resultHandler, faultHandler);

    };
}(window));