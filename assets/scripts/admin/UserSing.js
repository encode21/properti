Ext.require([
    'Ext.grid.*',
    'Ext.data.*',
    'Ext.form.*',
    'Ext.panel.*',
    'Ext.layout.container.Border'
]);

Ext.onReady(function(){
	if(!Ext.ClassManager.isCreated('MUser') )	{
		Ext.define('MUser',{
			extend: 'Ext.data.Model',
			proxy: {
				type: 'ajax',
				reader: 'json'
			},
			fields: [
				//{name: 'id', mapping: '@author.name'}, // xml perlu mapping
				{name: 'id', type:'int'},'iduser',
				'nama','t4lhr','tlp',
				{name: 'jabat', type: 'int'},
				{name: 'div', type: 'int'},
				{name: 'tgllhr', type: 'date'},
				'almt',
				{name: 'aktif', type: 'int'},
			]
		});
		
		Ext.define('MJabat',{
			extend: 'Ext.data.Model',
			proxy: {
				type: 'ajax',
				reader: 'json'
			},
			fields: [
				//{name: 'id', mapping: '@author.name'}, // xml perlu mapping
				{name: 'id', type:'int'},'nama'
			]
		});
		
		Ext.define('MDivisi',{
			extend: 'Ext.data.Model',
			proxy: {
				type: 'ajax',
				reader: 'json'
			},
			fields: [
				//{name: 'id', mapping: '@author.name'}, // xml perlu mapping
				{name: 'id', type:'int'},'nama'
			]
		});
	}

    // create the Data Store
    var store = Ext.create('Ext.data.Store', {
        model: 'MUser',
        proxy: {
            // load using HTTP
			type: 'ajax',
			//url: 'sheldon.xml',
			api: {
				read: '../../index.php/jsadmin/user/ruser.html',
				create: 'index.php/jsadmin/user/cuser',
				update: 'index.php/jsadmin/user/uuser',
				destroy: 'index.php/jsadmin/user/duser'
			},
            // the return will be XML, so lets set up a reader
            reader: {
                type: 'json',
                messageProperty: 'message',
				rootProperty: 'user'
				//totalProperty  : 'total'
            }
        }
    });

	// create form
	var form = Ext.create('Ext.form.Panel', {
		layout: 'anchor',
		defaults: {
			anchor: '95%'
			//width: 350
		},
		//scrollable: true,
		autoScroll:true,
		width: 350,
		title: 'Form User',
		bodyPadding: 5,
		//collapsed: true,
		collapsible: true,
		//scrollable: 'y',
		//region: 'center',
		region: 'east',
		// The fields
		defaultType: 'textfield',
		items: [{
			fieldLabel: 'ID User',
			name: 'idusr',
			allowBlank: false
		},{
			fieldLabel: 'Nama',
			name: 'nama',
			allowBlank: false
		},{
			fieldLabel: 'Divisi',
			name: 'div',
			allowBlank: false
		},{
			fieldLabel: 'Telepon',
			name: 'tlp',
			allowBlank: false
		},{
			fieldLabel: 'Alamat',
			name: 'almt',
			allowBlank: false
		},{
			fieldLabel: 'Jabatan',
			name: 'jabat',
			allowBlank: false
		},{
			fieldLabel: 'Tempat Lahir',
			name: 't4lhr',
			allowBlank: false
		},{
			fieldLabel: 'Tanggal Lahir',
			name: 'tgllhr',
			xtype: 'datefield',
			formatter: 'date("j M Y")',
			allowBlank: false
		/*
		},{
			fieldLabel: 'User Aktif',
			xtype: 'radiogroup',
			columns: 2,
			defaults: {
				name: 'rating' //Each radio has the same name so the browser will make sure only one is checked at once
			},
			items: [{
				inputValue: '1',
				boxLabel: 'Aktif'
			}, {
				inputValue: '0',
				boxLabel: 'Tidak Aktif'
			}]
		//*/
		}]
	});
	/*
	Ext.create('Ext.form.Panel', {
    title: 'Simple Form',
    bodyPadding: 5,
    width: 350,

    // The form will submit an AJAX request to this URL when submitted
    url: 'save-form.php',

    // Fields will be arranged vertically, stretched to full width
    layout: 'anchor',
    defaults: {
        anchor: '100%'
    },

    // The fields
    defaultType: 'textfield',
    items: [{
        fieldLabel: 'First Name',
        name: 'first',
        allowBlank: false
    },{
        fieldLabel: 'Last Name',
        name: 'last',
        allowBlank: false
    }],

    // Reset and Submit buttons
    buttons: [{
        text: 'Reset',
        handler: function() {
            this.up('form').getForm().reset();
        }
    }, {
        text: 'Submit',
        formBind: true, //only enabled once the form is valid
        disabled: true,
        handler: function() {
            var form = this.up('form').getForm();
            if (form.isValid()) {
                form.submit({
                    success: function(form, action) {
                       Ext.Msg.alert('Success', action.result.msg);
                    },
                    failure: function(form, action) {
                        Ext.Msg.alert('Failed', action.result.msg);
                    }
                });
            }
        }
    }],
    renderTo: Ext.getBody()
});
//*/

    // create the grid
    var grid = Ext.create('Ext.grid.Panel', {
    //Ext.define('Ext.grid.Panel', {
        bufferedRenderer: false,
        store: store,
        scrollable: true,
        viewConfig:	{
			sortable: false
		},
        columns: [
            {text: "ID User", width: 85, dataIndex: 'idusr', locked: true},
            {text: "Nama", width: 125, dataIndex: 'nama', locked: true},
            {text: "Divisi", width: 125, dataIndex: 'div'},
            {text: "Telp", width: 110, dataIndex: 'tlp'},
            {text: "Alamat", flex:1, minWidth:200, dataIndex: 'almt'},
            {text: "Jabatan", width: 125, dataIndex: 'jabat'},
            {text: "Tempat Lahir", width: 120, dataIndex: 't4lhr'},
            {text: "Tanggal Lahir", width: 125, dataIndex: 'tgllhr',formatter: 'date("j M Y")'},
            {text: "User Aktif", width:100, dataIndex: 'aktif'},
        ],
        forceFit: true,
        height:250,
        split: true,
        region: 'center'
    });
        
	//*/
    var panel = Ext.create('Ext.Panel', {
        renderTo: 'extjs',
        //frame: true,
        //title: 'Book List',
        //width: 580,
        minHeight: 150,
        height: 150,
        forceFit: true,
        //autoscroll: true,
		scrollable: true,
        layout: 'border',
        items: [
            grid,
            form
			/*
            ,{
                id: 'detailPanel',
                region: 'center',
                bodyPadding: 7,
                bodyStyle: "background: #ffffff;",
                html: 'Please select a book to see additional details.'
            }
            //*/
        ]
    });
		
	grid.getSelectionModel().on('selectionchange', function(sm, selRec) {
		if (selRec.length) {
			console.log(selRec[0]);
			form.getForm().loadRecord(selRec[0]);
		}
	});
	store.load();
	/*
	Ext.Ajax.request({
			url: '../../index.php/jsadmin/user/ruser.html',
			//url: 'ci/dashboard',
			method: 'GET',
			params: {user:'usr',pass:'pwd'},
			scope: this,
			//callback: this.onHomeStore
			//success: this.onHomeStoreSS
			sunccess: function(res)	{
				console.log(res);
			}
			
            //original: options
        });
	//*/
    //*
    Ext.EventManager.onWindowResize(function (w,d) {
        //grid.setSize(undefined, undefined);
        grid.setSize(w, 150);
    });
    //*/
});
