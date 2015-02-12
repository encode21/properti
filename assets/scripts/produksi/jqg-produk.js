var ProdukAdvanced = function () {

    var initTableProduk = function() {
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
		
		function cariProyek(d)	{
			var o = jQuery.parseJSON(d).rows[0];
			$("input[name='almt']").val(o.almt);
			$("input[name='jangka']").val(o.jangka);
			$("input[name='lahan']").val(o.lahan);
			$("input[name='cab']").val(o.cab);
			$("input[name='jml']").val(o.jml);
			
			var pro = $("select[name='proyek'] option:selected").text();
			//$('.portlet .portlet-title .caption').val("<i class='icon-reorder'></i>"+pro);
			//alert($("select[name='proyek'] option:selected").text());
			
			var trf = $("#jqProdukL tbody:first tr:first")[0];
			$("#jqProdukL tbody:first").empty().append(trf);
			
			var l = jQuery.parseJSON(d).house;
			var gridL = $("#jqProdukL");
			
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
			
			btnSimpanGantiProduk(o.jml);
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
		$('#pilProyek').change(function (e) {
		
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

		$('#savePrd').click(function (e) {
            e.preventDefault();
            
            var jml = $("input[name='jml']").val();
            var pry = $("select[name='proyek']").val();
            var mdl = $("select[name='tprod']").val();
            if (jml==0)	alert("Isi jumlah > 0 !");
			else if (!pry)	alert("Pilih Nama Proyek !");
			else 	buatDefaultProduk();
        });
        
        
		$('#simpanPrd').click(function (e) {
            e.preventDefault();
            var rows = jQuery("#jqProdukL").jqGrid('getRowData');

			console.log(JSON.stringify(rows));
			$.ajax({
				type: "POST",
				url: "index.php/jsproduksi/produk/cproduk.html",
				data: JSON.stringify(rows),
				success: function(msg){
					alert(msg);
				}
			});
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

		$("#jqProdukL").jqGrid({
			//url: 'index.php/jsproduksi/proyek/rproduk.html',
			url: '',
			datatype: "json",
			editurl: 'index.php/jsproduksi/produk/dsproduk.html',
			colModel: [
				//*
				{
					label: "Aksi",
					name: "actions",
					width: 50,
					formatter: "actions"
					,frozen: true
				},
				//*/
				{ label: 'Model Produk', name: 'model', width: 150,frozen: true, 
					/*
					//editable: true,
					edittype: "select",
					editoptions: {
						value: "1:LANDED HOUSE"
					}
					//*/
				},
				{ label: 'ID', name: 'id', width: 30, key: true,hidden: true },		// ,frozen: true
				{ label: 'ID', name: 'hid', width: 30,hidden: true },		// ,frozen: true
				{ label: 'lok', name: 'lok', width: 30,hidden: true },		// ,frozen: true
				{ label: 'mdl', name: 'mdl', width: 30,hidden: true },		// ,frozen: true

				{ label: 'Jenis Produk', name: 'jenis', width: 120,
					editable: true,
					edittype: "select",
					editoptions: {
						value: function(r,c,i)	{
							return "1:HUNIAN;2:RUKO";
							//return "1:APARTEMEN;2:MALL;3:KONDOTEL";
						}
					}
				},
				{ label: 'Tipe', name: 'tipe', width: 100, editable: true },
				{ label: 'Luas Tanah', name: 'ltnh', align:'center', width: 90, editable: true },
				{ label: 'Luas Bangunan', name: 'lbang', align:'center', width: 100, editable: true },
				{ label: 'Jumlah Unit', name: 'jml', align:'center', width: 100, editable: true },
				{ label: 'Jml Luas Tanah', name: 'jlt', align:'center', width: 110,
					formatter: function (cell, opt, row) {
						return row["jml"] * row["ltnh"];
					}
				},
				{ label: 'Jml Luas Bangunan', name: 'jlb', align:'center', width: 120,
					formatter: function (cell, opt, row) {
						return row["jml"] * row["lbang"];
					}
				},
				{ label: 'Nama Blok', name: 'blok', width: 100, editable: true },
				{ label: 'Tipe 1', name: 'tipe1', width: 100, editable: true,
					edittype: "select",
					editoptions: {
						value: "1:RST"
					}
				},
				{ label: 'Tipe 2', name: 'tipe2', width: 100, editable: true },
				{ label: 'Tipe 3', name: 'tipe3', width: 100, editable: true },
				{ label: 'KLT', name: 'klt', width: 60, editable: true },
				{ label: 'Harga Unit', name: 'harga', width: 100, editable: true },
				{ label: 'harga KLT', name: 'hklt', width: 100, editable: true },
				{ label: 'Status Pembangunan', name: 'stbg', width: 150, editable: true, 
					edittype: "select",
					editoptions: {
						value: "1:PDP;2:PSH"
					}
				},
				{ label: 'Status Stock', name: 'st', width: 100, editable: true, 
					edittype: "select",
					editoptions: {
						value: "1:Tersedia;2:Tidak Tersedia"
					}
				},
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
			pager: "#jqProdukPagerL"
		});

		$(window).bind('resize', function() {
			$("#jqProdukL").setGridWidth($('.portlet-body').width());
		}).trigger('resize');

		$("#jqProdukL").jqGrid('setFrozenColumns');
		$("#jqProdukL").jqGrid('navGrid',"#jqProdukPagerL",{edit:false,add:false,del:false});
		
		//*
		$("#jqProdukH").jqGrid({
			//url: 'index.php/jsproduksi/proyek/rproyek.html',
			url: '',
			datatype: "json",
			//editurl: 'index.php/jsproduksi/proyek/dproyek.html',
			colModel: [
				{
					label: "Aksi",
					name: "actions",
					width: 50,
					formatter: "actions"
				},
				{ label: 'ID', name: 'id', key: true, width: 30,hidden: true },		// ,frozen: true
				{ label: 'Model Produk', name: 'model', width: 150,frozen: true },
				{ label: 'Jenis Produk', name: 'almt', width: 120,
					editable: true,
					edittype: "select",
					editoptions: {
						value: function(r,c,i)	{
							//return "1:HUNIAN;2:RUKO";
							return "1:APARTEMEN;2:MALL;3:KONDOTEL";
						}
					}
				},
				{ label: 'Tipe', name: 'tipe', width: 100 },
				{ label: 'Luas Tanah', name: 'ltnh', align:'center', width: 90, editable: true },
				{ label: 'Luas Bangunan', name: 'lbang', align:'center', width: 100, editable: true },
				{ label: 'Jumlah Unit', name: 'jml', align:'center', width: 100, editable: true },
				{ label: 'Jml Luas Tanah', name: 'jlt', align:'center', width: 110,
					formatter: function (cell, opt, row) {
						return row["jml"] * row["ltnh"];
					}
				},
				{ label: 'Jml Luas Bangunan', name: 'jlb', align:'center', width: 120,
					formatter: function (cell, opt, row) {
						return row["jml"] * row["lbang"];
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
			$("#jqProdukH").setGridWidth($('.portlet-body').width());
		}).trigger('resize');

		$("#jqProdukH").jqGrid('setFrozenColumns');
		$("#jqProdukH").jqGrid('navGrid',"#jqProdukPagerH",{edit:false,add:false,del:false});
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
            initTableProduk();
		}
    };

}();
