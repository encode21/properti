var StockAdvanced = function () {

    var initTableStock = function() {
		
		function isiProduk(d)	{
			//console.log(jQuery.parseJSON(d).rows);
			var o = jQuery.parseJSON(d).rows;
			$('#stProduk').find('option').remove().end()
				.append('<option value="">Pilih Tipe Produk ...</option>');
				//.val('whatever')

			for (var i=0; i<o.length; i++)	{
				$('#stProduk').find('option').end()
				.append('<option value="'+o[i].id+'">'+o[i].jdl+'</option>');
			}
		}
		
		function isiNdr(d)	{
			console.log(d);
			var l = jQuery.parseJSON(d).rows;
			var gridL = $("#jqStockL");
			
			var trf = $("#jqStockL tbody:first tr:first")[0];
			$("#jqStockL tbody:first").empty().append(trf);
			
			for (var i=0; i<l.length; i++)	{
				var parL = {
					initdata: l[i],
					position:"first",
					useDefValues: false,
					useFormatter: false
				}
				console.log(l[i]);
				gridL.jqGrid('addRow',parL);
			}
			for (var i=0; i<l.length; i++)	{
				gridL.jqGrid('saveRow',gridL.jqGrid('getDataIDs')[i]);
			}
		}

		$('#stProyek').change(function (e) {
			e.preventDefault();
			var pry = $("select[name='proyek']").val();
			$.ajax({
				type: "GET",
				cache: false,
				url: "index.php/jsproduksi/stock/rtipeprd.html?id="+pry,
				//dataType: "html",
				success: isiProduk,
				error: function(xhr, ajaxOptions, thrownError)	{
					alert("gagal");
				},
				async: false
			});
		});
		
		$('#stProduk').change(function (e) {
			e.preventDefault();
			var prd = $("select[name='produk']").val();
			//alert(pry+", jml: "+prd.length);
			//*
			$.ajax({
				type: "GET",
				cache: false,
				url: "index.php/jsproduksi/stock/rndr.html?id="+prd,
				//dataType: "html",
				success: isiNdr,
				error: function(xhr, ajaxOptions, thrownError)	{
					alert("gagal");
				},
				async: false
			});
			//*/
		});

		$("#jqStockL").jqGrid({
			//url: 'index.php/jsproduksi/proyek/rproduk.html',
			url: '',
			datatype: "json",
			//editurl: 'index.php/jsproduksi/produk/dsproduk.html',
			colModel: [
				//*
				{
					label: "Aksi",
					name: "actions",
					width: 50,
					formatter: "actions",
					formatoptions: {
						keys: true,
						editOptions: {},
						//addOptions: {},
						delOptions: {}
					}
					,frozen: true
				},
				//*/
				{ label: 'NDR', name: 'ndr', width: 100,frozen: true },		// ,frozen: true
				{ label: 'Tipe', name: 'tipe1', width: 50 },		// ,frozen: true
				{ label: 'LB', name: 'lbang', width: 50 },		// ,frozen: true
				{ label: 'LT', name: 'ltnh', width: 50 },		// ,frozen: true
				{ label: 'ID', name: 'id', width: 100,hidden:true, key: true },		// ,frozen: true
				{ label: 'KLT', name: 'model', width: 50
					/*
					//editable: true,
					edittype: "select",
					editoptions: {
						value: "1:LANDED HOUSE"
					}
					//*/
				},
				{ label: 'Harga Unit', name: 'harga', width: 100, editable: true },
				{ label: 'Harga KLT', name: 'hklt', width: 100, editable: true },
				{ label: 'Dev', name: 'stbg', width: 50, editable: true, 
					edittype: "select",
					editoptions: {
						value: "1:PDP;2:PSH"
					}
				},
				{ label: 'Pesan', name: 'st', width: 100, editable: true, 
					edittype: "select",
					editoptions: {
						value: "1:Tersedia;2:Tidak Tersedia"
					}
				},
				{ label: 'Info Lain', name: 'ilain', width: 300,editable: true	}
			],
			width: $('.portlet-body').width(),
			shrinkToFit: false,
			height: 'auto',
			//height: 150,
			rowNum: 5,
			//rowList: [10, 20, 30],
			rownumbers: true,
			//viewrecords: true,
			//loadonce: true,
			//onCellSelect: pilihCell,
			//onSelectRow: editRow,
			//onCellSelect: 
			//afterSaveCell: afterSaveCell,
			caption: "TIPE PRODUK LANDED HOUSE",
			pager: "#jqStockPagerL"
		});

		$(window).bind('resize', function() {
			$("#jqStockL").setGridWidth($('.portlet-body').width());
		}).trigger('resize');

		$("#jqStockL").jqGrid('setFrozenColumns');
		$("#jqStockL").jqGrid('navGrid',"#jqStockPagerL",{edit:false,add:false,del:false});
		/*
		$('#jqStockL').setGroupHeaders({
			useColSpanStyle: true,
			groupHeaders: [
				{ "numberOfColumns": 4, "titleText": "Produk", "startColumnName": "tipe1" },
				{ "numberOfColumns": 2, "titleText": "Status", "startColumnName": "stbg" }]
		});
		//*/
		
		//*
		$("#jqStockH").jqGrid({
			//url: 'index.php/jsproduksi/proyek/rproyek.html',
			url: '',
			datatype: "json",
			//editurl: 'index.php/jsproduksi/proyek/dproyek.html',
			colModel: [
				//*
				{
					label: "Aksi",
					name: "actions",
					width: 50,
					formatter: "actions"
				},
				//*/
				{ label: 'NDR', name: 'ndr', width: 100, key: true },		// ,frozen: true
				{ label: 'Tipe', name: 'tipe1', width: 50 },		// ,frozen: true
				{ label: 'LB', name: 'lbang', width: 50 },		// ,frozen: true
				{ label: 'LT', name: 'ltnh', width: 50 },		// ,frozen: true
				{ label: 'KLT', name: 'model', width: 50,frozen: true, 
					/*
					//editable: true,
					edittype: "select",
					editoptions: {
						value: "1:LANDED HOUSE"
					}
					//*/
				},
				{ label: 'View', name: 'view', width: 220,editable: true	},
				{ label: 'Harga Unit', name: 'harga', width: 100, editable: true },
				{ label: 'Harga View', name: 'hview', width: 100, editable: true },
				{ label: ' ', name: 'stbg', width: 50, editable: true, 
					edittype: "select",
					editoptions: {
						value: "1:PDP;2:PSH"
					}
				},
				{ label: ' ', name: 'st', width: 100, editable: true, 
					edittype: "select",
					editoptions: {
						value: "1:Tersedia;2:Tidak Tersedia"
					}
				}
			],
			width: $('.portlet-body').width(),
			shrinkToFit: false,
			height: 'auto',
			//height: 150,
			rowNum: 5,
			//rowList: [10, 20, 30],
			rownumbers: true,
			//viewrecords: true,
			//loadonce: true,
			//onCellSelect: pilihCell,
			//onSelectRow: editRow,
			//onCellSelect: 
			//afterSaveCell: afterSaveCell,
			caption: "TIPE PRODUK HIGHRISE",
			pager: "#jqProdukPagerH"
		});

		$(window).bind('resize', function() {
			$("#jqStockH").setGridWidth($('.portlet-body').width());
		}).trigger('resize');

		$("#jqStockH").jqGrid('setFrozenColumns');
		$("#jqStockH").jqGrid('navGrid',"#jqStockPagerH",{edit:false,add:false,del:false});
		//*/
	}

    return {

        //main function to initiate the module
        init: function () {
            /*
            if (!jQuery().dataTable) {
                return;
            }
			//*/
            initTableStock();
		}
    };

}();
