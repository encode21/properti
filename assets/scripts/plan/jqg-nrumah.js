var NRumahAdvanced = function () {

    var initTableNRumah = function() {
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
			
			var pro = $("select[name='proyek'] option:selected").text();
			//$('.portlet .portlet-title .caption').val("<i class='icon-reorder'></i>"+pro);
			//alert($("select[name='proyek'] option:selected").text());
			
			
			/*
			$("#jqNRumah").jqGrid('setGridParam', {
				url: "index.php/jsplan/nrumah/rrabNR.html?id="+,
				datatype: "json"
			}).trigger("reloadGrid");
			
			var trf = $("#jqNRumah tbody:first tr:first")[0];
			$("#jqNRumah tbody:first").empty().append(trf);
			
			var l = jQuery.parseJSON(d).nrRab;
			var gridL = $("#jqNRumah");
			
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
			//*/
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
		
		function plhRowNR(d,j,e,g)	{
			//*
			if (d)	{
				$("#jqDetNRumah").jqGrid('setGridParam', {
					url: "index.php/jsplan/nrumah/rjobNR.html?r="+d,
					datatype: "json"
				}).trigger("reloadGrid");
				var rr = $("#jqNRumah").jqGrid ('getRowData', d);
				$("#jqDetNRumah").jqGrid('setCaption', rr.grp+": "+rr.job);
			}
			//*/
		}
		
		//$('.portlet .portlet-body form .control-group .controls select').change(function (e) {$('.portlet .portlet-body form .control-group .controls select').change(function (e) {
		$('#pilNRProyek').change(function (e) {
			e.preventDefault();
			var prd = $("select[name='proyek']").val();
			console.log("prd: "+prd);
			$.ajax({
				type: "GET",
				cache: false,
				url: "index.php/jsplan/nrumah/rproyNR.html?id="+prd,
				//dataType: "html",
				success: cariProyek,
				error: function(xhr, ajaxOptions, thrownError)	{
					alert("gagal");
				},
				async: false
			});
			//*
			$("#jqNRumah").jqGrid('setGridParam', {
				url: "index.php/jsplan/nrumah/rrabNR.html?id="+prd,
				datatype: "json"
			}).trigger("reloadGrid");
			//*/
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

		$("#jqNRumah").jqGrid({
			//url: 'index.php/jsplan/nrumah/rrabNR.html',
			url: '',
			datatype: "json",
			//editurl: 'index.php/jsplan/nrumah/gproyNR.html',
			colModel: [
				//*
				{
					label: "Aksi",
					name: "actions",
					width: 50,
					formatter: "actions"
				},
				//*/
				{ label: 'Kode', name: 'nom', width: 80 }, 
				{ label: 'Nama Pekerjaan', name: 'job', width: 200	},
				{ label: 'ID', name: 'xxid', width: 50, key: true, hidden: true },		// ,frozen: true
				{ label: 'Tgl Mulai', name: 'tglawPlan', width: 80,editable: true
					,editoptions: {
                            // dataInit is the client-side event that fires upon initializing the toolbar search field for a column
                            // use it to place a third party control to customize the toolbar
                            dataInit: function (element) {
                                $(element).datepicker({
                                    id: 'orderDate_datePicker',
                                    dateFormat: 'd M yy',
                                    //minDate: new Date(2010, 0, 1),
                                    //maxDate: new Date(2020, 0, 1),
                                    showOn: 'focus'
                                });
                            }
                        }
				},		// ,frozen: true
				{ label: 'Durasi Kerja', name: 'dur', width: 80,editable: true,edittype:"text" },		// ,frozen: true
				{ label: 'Jumlah', name: 'jml', align:'right', width: 100, editable: true },
				{ label: 'Harga', name: 'harga', align:'right', width: 100, editable: true },
				{ label: 'Satuan', name: 'sat', align:'right', width: 100, editable: true },
				{ label: 'Divisi', name: 'div', align:'center', width: 100, editable: true },
				{ label: 'Group', name: 'grp', width: 150, editable: true },
				{ label: 'Keterangan', name: 'ket', width: 300, editable: true	},
				
			],
			width: $('.portlet-body').width(),
			shrinkToFit: false,
			height: 'auto',
			//height: 150,
			rowNum: 5,
			//rowList: [10, 20, 30],
			rownumbers: true,
			//viewrecords: false,
			//loadonce: true,
			//onCellSelect: pilihCell,
			onSelectRow: plhRowNR,
			//onCellSelect: 
			//afterSaveCell: afterSaveCell,
			grouping: true,
			groupingView: {
				groupField: ["grp"],
			},
			caption: "PEKERJAAN/RAB NON RUMAH",
			pager: "#jqNRumahPager"
		});

		$(window).bind('resize', function() {
			$("#jqNRumah").setGridWidth($('.portlet-body').width());
		}).trigger('resize');

		$("#jqNRumah").jqGrid('setFrozenColumns');
		$("#jqNRumah").jqGrid('navGrid',"#jqNRumahPager",
			{ edit: false, add: true, del: false}
			,{ width: 400, recreateForm: true },
			{ width: 400,closeAfterAdd: true, recreateForm: true,
				errorTextFormat: function (data) {
					return 'Error: ' + data.responseText
				}
			}
			//*/
		);
		
		//*
		$("#jqDetNRumah").jqGrid({
			//url: 'index.php/jsplan/nrumah/rjobNR?r=13',
			url: '',
			datatype: "json",
			//editurl: 'index.php/jsplan/nrumah/gproyNR.html',
			colModel: [
				{
					label: "Aksi",
					name: "actions",
					width: 50,
					formatter: "actions"
				},
				{ label: 'Nama Pekerjaan', name: 'nama', width: 200	},
				{ label: 'Status', name: 'status', align:'right', width: 100, editable: true },
				{ label: 'Dana', name: 'dana', align:'right', width: 100, editable: true },
				{ label: 'ID', name: 'xxid', width: 50, hidden: false },		// ,frozen: true
				{ label: 'Gambar', name: 'gmb', width: 150, editable: true },
				{ label: 'Pekan', name: 'pekan', width: 80 },		// ,frozen: true
				{ label: 'Pekan', name: 'np', width: 80 },		// ,frozen: true
				{ label: 'Keterangan', name: 'ket', width: 300, editable: true	},
				
			],
			width: $('.portlet-body').width(),
			shrinkToFit: false,
			height: 'auto',
			//height: 150,
			rowNum: 5,
			//rowList: [10, 20, 30],
			rownumbers: true,
			viewrecords: true,
			//loadonce: true,
			//onCellSelect: pilihCell,
			//onSelectRow: editRow,
			//onCellSelect: 
			//afterSaveCell: afterSaveCell,
			//*
			grouping: true,
			groupingView: {
				groupField: ["pekan"],
			},
			//*/
			caption: "Detail Aktivitas RAB NON RUMAH",
			pager: "#jqDetNRumahPager"
		});

		$(window).bind('resize', function() {
			$("#jqDetNRumah").setGridWidth($('.portlet-body').width());
		}).trigger('resize');
		//*/
		$("#jqDetNRumah").jqGrid('navGrid',"#jqDetNRumahPager",
			{ edit: false, add: true, del: false}
			,{ width: 400, recreateForm: true },
			{ width: 400,closeAfterAdd: true, recreateForm: true,
				errorTextFormat: function (data) {
					return 'Error: ' + data.responseText
				}
			}
			//*/
		);
	}

    return {

        //main function to initiate the module
        init: function () {
            /*
            if (!jQuery().dataTable) {
                return;
            }
			//*/
            initTableNRumah();
		}
    };

}();
