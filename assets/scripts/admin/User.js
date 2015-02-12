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
				read: 'index.php/jsadmin/user/ruser.html',
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
	/*
	var form = Ext.create('Ext.form.Panel', {
		layout: 'anchor',
		defaults: {
			//anchor: '95%'
			anchor: '100%'
		},
		//width: 300,
		title: 'Form User',
		bodyPadding: 5,
		//scrollable: true,
		autoScroll: true,
		collapsable: true,
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
		//*
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
		
		}]
	});
	//*/
	
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

	var combo = new Ext.form.ComboBox({
	  name : 'perpage',
	  width: 40,
	  store: new Ext.data.ArrayStore({
		fields: ['id'],
		data  : [
		  ['15'], 
		  ['25'],
		  ['50']
		]
	  }),
	  mode : 'local',
	  value: '15',
	 
	  listWidth     : 40,
	  triggerAction : 'all',
	  displayField  : 'id',
	  valueField    : 'id',
	  editable      : false,
	  forceSelection: true
});

    // create the grid
    var grid = Ext.create('Ext.grid.Panel', {
    //Ext.define('Ext.grid.Panel', {
        bufferedRenderer: false,
        store: store,
        scrollable: true,
        viewConfig:	{
			sortable: false
		},
		plugins : [{
            ptype: 'bufferedrenderer',
            trailingBufferZone: 5,
            leadingBufferZone: 5,
            scrollToLoadBuffer: 10,
            onViewResize: function(view, width, height, oldWidth, oldHeight) {
                // Only process first layout (the boxready event) or height resizes.
                if (!oldHeight || height !== oldHeight) {
                    var me = this,
                        newViewSize,
                        scrollRange;

                    // View has rows, delete the rowHeight property to trigger a recalculation when scrollRange is calculated
                    if (view.all.getCount()) {
                        // We need to calculate the table size based upon the new viewport size and current row height
                        delete me.rowHeight;
                    }
                    // If no rows, continue to use the same rowHeight, and the refresh handler will call this again.

                    // Calculates scroll range. Also calculates rowHeight if we do not have an own rowHeight property.
                    // That will be the case if the view contains some rows.
                    scrollRange = me.getScrollHeight();
                    //newViewSize = Math.ceil(height / me.rowHeight) + me.trailingBufferZone + me.leadingBufferZone;
                    newViewSize = 18;
                    me.viewSize = me.setViewSize(newViewSize);
                    me.stretchView(view, scrollRange);
                }
            }
        }],
        bbar: [bbar],
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
        //forceFit: true,
		//height:250,
        //split: true,
        region: 'center',
       
    });

	var bbar = new Ext.PagingToolbar({
	  store:       store, //the store you use in your grid
	  displayInfo: true,
	  items   :    [
		'-',
		'Per Page: ',
		combo
	  ]
	});
 
	combo.on('select', function(combo, record) {
	  bbar.pageSize = parseInt(record.get('id'), 10);
	  bbar.doLoad(bbar.cursor);
	}, this);

	//*/
    var panel = Ext.create('Ext.Panel', {
        renderTo: 'extjs',
        //frame: true,
        //title: 'Book List',
        //width: 580,
        //minHeight: 150,
        height: 250,
        forceFit: true,
        //autoscroll: true,
		scrollable: true,
        //layout: 'fit',
        layout: 'border',
        items: [
            grid,
            
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
        grid.setSize(w, d);
    });
    //*/
});
