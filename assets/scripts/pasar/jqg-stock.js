var StockMAdvanced = function () {

    var initTableProdukM = function() {
		var lastSel;
		
		function scrInpUser()	{
			$('html, body').animate({
				scrollTop: $(".ptInputnya").offset().top
			}, 200);
		}
		
		function hideBtnInput()	{
			$('div .form-actions .blue').addClass("hide");
			$('div .form-actions .green').addClass("hide");
		}
		
		function showCssInputTabel()	{
			var el1 = jQuery(this).closest(".pdTabelnya").children(".portlet-body");
            if ($('.pdTabelnya a').hasClass("collapse")) {
                el1.slideUp(200);
            }
		}
		
		function btnSimpanGantiProduk(jml)	{
			if (jml>0)	{
				$('#savePrd').addClass("hide");
				$('#chgPrd').removeClass("hide");
			}
			else {
				$('#chgPrd').addClass("hide");
				$('#savePrd').removeClass("hide");
			}
		}
		
		function isiStockM(p,t,n)	{
			console.log("masuk isiStockM");
			$("#jqStockML").jqGrid('setGridParam', {
					url: "index.php/jsproduksi/stock/gndrA.html?p="+p+'&t='+t+'&n='+n,
					datatype: "json"
				}).trigger("reloadGrid");
		}
		
		function cariProyek(d)	{
			var o = jQuery.parseJSON(d).rows[0];
			$("input[name='almt']").val(o.almt);
			$("input[name='cab']").val(o.cab);
			
			//var pro = $("select[name='proyek'] option:selected").text();
			//$('.portlet .portlet-title .caption').val("<i class='icon-reorder'></i>"+pro);
			//alert($("select[name='proyek'] option:selected").text());
			
			var trf = $("#jqProdukL tbody:first tr:first")[0];
			$("#jqProdukML tbody:first").empty().append(trf);
			
			var l = jQuery.parseJSON(d).house;
			console.log(l);
			$('#stProdukM').find('option').remove().end()
				.append('<option value="-1">Semua Tipe Produk</option>');

			for (var i=0; i<l.length; i++)	{
				$('#stProdukM').find('option').end()
					.append('<option value="'+l[i].id+'">'+l[i].model+' tipe '+l[i].tipe+'</option>');
			}
			
			
			
			
			
			/*
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
			//*/
			//btnSimpanGantiProduk(o.jml);
		}
		
		function buatDefaultProduk()	{
			//var o = jQuery.parseJSON(d).rows[0];
			var jml = $("input[name='jml']").val();
			var tp = $("select[name='tprod']").val();
			var lok = $("select[name='proyek']").val();
			
			if (tp==1)	{		// LANDED HOUSE
				var par = {
					initdata: {
						lok: lok,
						mdl:(tp==1)?1:2, 
						model:(tp==1)?"LANDED HOUSE":"HIGHRISE", 
						jenis:1, 
						jml:0, 
						ltnh:0, 
						lbang:0,
						tipe1:1
					},
					position:"first",
					useDefValues: false,
					useFormatter: false
				}
				var gridL = $("#jqProdukL");
				for (var i=0; i<jml; i++)	{
					gridL.jqGrid('addRow',par);
				}
				for (var i=0; i<jml; i++)	{
					gridL.jqGrid('saveRow',gridL.jqGrid('getDataIDs')[i]);
				}
			}
			if (tp==2)	{		// HIGH RISE
				var gridH = $("#jqProdukH");
				for (var i=0; i<jml; i++)	{
					gridH.jqGrid('addRow',par);
				}
				for (var i=0; i<jml; i++)	{
					gridH.jqGrid('saveRow',gridH.jqGrid('getDataIDs')[i]);
				}
			}
		}
		
		function pilihCell(row, col, isi, e)	{
			console.log("row: "+row+",col: "+col+", isi:"+isi);
		}

		//$('.portlet .portlet-body form .control-group .controls select').change(function (e) {$('.portlet .portlet-body form .control-group .controls select').change(function (e) {
		$('#pilProyekM').change(function (e) {
		
			e.preventDefault();
			var prd = $("select[name='proyek']").val();
			$.ajax({
				type: "GET",
				cache: false,
				url: "index.php/jsproduksi/produk/rproyek.html?id="+prd,
				//dataType: "html",
				success: cariProyek,
				error: function(xhr, ajaxOptions, thrownError)	{
					alert("gagal");
				},
				async: false
			});
			isiStockM(prd,-1,'');
		});
		//*		// bisa dibuang
		$('.portlet .portlet-body form .control-group .controls .cProduk').click(function (e) {
            e.preventDefault();
            
            var prd = $("select[name='proyek']").val();
            if (!prd)	{
				alert("Pilih Nama Proyek !");
			}
			/*
			else {
				$.ajax({
					type: "GET",
					cache: false,
					url: "index.php/jsproduksi/produk/rproyek.html?id="+prd,
					//dataType: "html",
					success: cariProyek,
					error: function(xhr, ajaxOptions, thrownError)	{
						alert("gagal");
					},
					async: false
				});
			}
			//*/
        });

		
        
        $('.portlet .portlet-body form .control-group .controls a .green').click(function (e) {
            e.preventDefault();
            
            var jml = $("input[name='jml']").val();
            if (jml)	{
				alert("Pilih Nama Proyek !");
				
			}
			else {
				alert("josss "+jml);
				
			}
            /*
            $.ajax({
				type: "GET",
				cache: false,
				url: "index.php/jsproduksi/produk/rproyek.html?id="+prd,
				//dataType: "html",
				success: cariProyek,
				error: function(xhr, ajaxOptions, thrownError)	{
					alert("gagal");
				},
				async: false
			});
			//*/
        });
	
		$("#jqStockML").jqGrid({
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
			$("#jqStockML").setGridWidth($('.portlet-body').width());
		}).trigger('resize');

		$("#jqStockML").jqGrid('setFrozenColumns');
		$("#jqStockML").jqGrid('navGrid',"#jqStockPagerML",{edit:false,add:false,del:false});
		/*
		$('#jqStockL').setGroupHeaders({
			useColSpanStyle: true,
			groupHeaders: [
				{ "numberOfColumns": 4, "titleText": "Produk", "startColumnName": "tipe1" },
				{ "numberOfColumns": 2, "titleText": "Status", "startColumnName": "stbg" }]
		});
		//*/
		
		//*
		$("#jqStockMH").jqGrid({
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
			$("#jqStockMH").setGridWidth($('.portlet-body').width());
		}).trigger('resize');

		$("#jqStockMH").jqGrid('setFrozenColumns');
		$("#jqStockMH").jqGrid('navGrid',"#jqStockPagerMH",{edit:false,add:false,del:false});
	}

    return {

        //main function to initiate the module
        init: function () {
            /*
            if (!jQuery().dataTable) {
                return;
            }
			//*/
            initTableProdukM();
		}
    };

}();
