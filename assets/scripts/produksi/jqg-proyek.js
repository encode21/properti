var ProyekAdvanced = function () {

    var initTableProyek = function() {

		
		$('#user_1 a.delete').live('click', function (e) {
			e.preventDefault();
			
			if (confirm("Are you sure to delete this row ?") == false) {
				return;
			}

			var nRow = $(this).parents('tr')[0];
			var aData = oTable.fnGetData( nRow );
			oTable.fnDeleteRow(nRow);
			//console.log(aData);
			//console.log("no ID: "+aData[1]);
			
			$.ajax({
				type: "GET",
				cache: false,
				url: "index.php/jsadmin/user/duser.html?uid="+aData[1],
				dataType: "html",
				success: function(res) 	{
					//App.unblockUI(pageContent);
					alert("berhasil");
					//App.fixContentHeight(); // fix content height
					//App.initUniform(); // initialize uniform elements
				},
				error: function(xhr, ajaxOptions, thrownError)
				{
					//pageContentBody.html('<h4>Could not load the requested content.</h4>');
					alert("gagal");
					//App.unblockUI(pageContent);
				},
				async: false
			});
		});

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
                //$('.pduser a').removeClass("collapse").addClass("expand");
                //$('.pduser .portlet-body').addClass("hide");
                el1.slideUp(200);
            }
            //*
            var el2 = jQuery(this).closest(".ptInputnya").children(".portlet-body");
            if ($('.ptInputnya a').hasClass("expand")) {
				$('.ptInputnya a').removeClass("expand").addClass("collapse");
				$('.ptInputnya .portlet-body').removeClass("hide");
				el2.slideDown(200);	
            }
            if ($('.ptInputnya a').hasClass("collapse")) {
			//	$('.ptuser a').removeClass("collapse").addClass("expand");
			//	$('.ptuser .portlet-body').addClass("hide");
			//	el2.slideDown(200);

			//	$('.ptuser a').removeClass("expand").addClass("collapse");
				$('.ptInputnya .portlet-body').removeClass("hide");
				el2.slideDown(200);
            }
            //*/
            //scrInpUser();
		}
		
		jQuery('body').on('click', '.portlet > .portlet-title > .actions > .dTabelnya', function (e) {
            e.preventDefault();
            $('#ftproyek')[0].reset();
            $("input[name='fProyek']").val(0);
            hideBtnInput();
			if ($('div .form-actions .green').hasClass("hide")) {
				$('div .form-actions .green').removeClass("hide");
			}
			showCssInputTabel();
			scrInpUser();
        });

        var form2 = $('#ftproyek');
		var error2 = $('.alert-error', form2);
		var errorm2 = $('.alert-error2', form2);
		var success2 = $('.alert-success', form2);

		function gdProyek()	{
			var data = {
				flag: $("input[name='fProyek']").val(),
				nama: $("input[name='nama']").val().toUpperCase(),
				almt: $("input[name='almt']").val().toUpperCase(),
				cab: $("select[name='cab']").val(),
				jangka: $("input[name='jangka']").val(),
				lahan: $("input[name='lahan']").val(),
				lklt: $("input[name='lklt']").val(),
				lbang: $("input[name='lbang']").val(),
				linfra: $("input[name='linfra']").val(),
				ltaman: $("input[name='ltaman']").val(),
				lfasos: $("input[name='lfasos']").val(),
				ltot: $("input[name='ltot']").val(),
				lsale: $("input[name='lsale']").val()
			}
			return data;
		}
		
		function onAddProyek(id,d)	{
			var par = {
				   //rowID : "11",
			   initdata : d,
			   position :"first",
			   useDefValues : false,
			   useFormatter : false
			}
			
			if (d.flag==0)
				$("#jqProyek").jqGrid('addRow',par);
			else {
				console.log("ganti user");
				debug = $("#jqProyek");
				//$("#jqUser").setRowData();
				//$("#jqUser").jqGrid('setRowData',id,d);
				console.log($("#jqProyek").setRowData(id,d));
				console.log($("#jqProyek").saveRow(id,false));
				//$(this).trigger("reloadGrid");
				//$("#jqUser").saveRow(2);
				console.log(d);
			}
		}
        
        function showCssListTabel()	{
			var el1 = jQuery(this).closest(".pdTabelnya").children(".portlet-body");
			if ($('.pdTabelnya a').hasClass("expand")) {
				$('.pdTabelnya a').removeClass("expand").addClass("collapse");
				//$('.pduser .portlet-body').removeClass("hide");
				el1.slideDown(200);
			}
			//*
			var el2 = jQuery(this).closest(".ptInputnya").children(".portlet-body");
			if ($('.ptInputnya a').hasClass("collapse")) {
				$('.ptInputnya a').removeClass("collapse").addClass("expand");
				$('.ptInputnya .portlet-body').addClass("hide");
				el2.slideUp(200);	
			}
			
			$('html, body').animate({
				scrollTop: $(".awalTabel").offset().top
			}, 200);
		}
		
		function sdProyek(d)	{
			//$("input[name='id']").val(d.id);
			$("input[name='nama']").val(d.nama);
			$("input[name='almt']").val(d.almt);
			$("input[name='jangka']").val(d.jangka);
			$("input[name='lbang']").val(d.lbang);
			$("input[name='lklt']").val(d.lklt);
			$("input[name='linfra']").val(d.linfra);
			$("input[name='ltaman']").val(d.ltaman);
			$("select[name='cab']").val(d.cab);
		}
		
		function editProyek(id,r)	{
			showCssInputTabel();
			hideBtnInput();
			if ($('div .form-actions .blue').hasClass("hide")) {
				$('div .form-actions .blue').removeClass("hide");
			}
			$("input[name='fProyek']").val(1);
			sdProyek($("#jqProyek").getRowData(id));
		}

		$('#ftproyek').validate({
			
			errorElement: 'span', //default input error message container
			errorClass: 'help-inline', // default input error message class
			focusInvalid: false, // do not focus the last invalid input
			ignore: "",
			//*
			rules: {
				nama: {
					minlength: 2,
					required: true
				},
				almt: {
					minlength: 5,
					required: true
				},
				cab: {
					required: true
				},
				lahan: {
					required: true
				},
				jangka: {
					required: true
				},
				lbang: {
					required: true
				},
				lklm: {
					required: true
				},
				ltaman: {
					required: true
				},
				linfra: {
					required: true
				}
			},
			//*/
			messages: { // custom messages for radio buttons and checkboxes
				aktif: {
					required: "Silakan pilih status keaktifan"
				}
			},
			/*
			errorPlacement: function (error, element) { // render error placement for each input type
				if (element.attr("name") == "education") { // for chosen elements, need to insert the error after the chosen container
					error.insertAfter("#form_2_education_chzn");
				} else if (element.attr("name") == "membership") { // for uniform radio buttons, insert the after the given container
					error.addClass("no-left-padding").insertAfter("#form_2_membership_error");
				} else if (element.attr("name") == "editor1" || element.attr("name") == "editor2") { // for wysiwyg editors
					error.insertAfter($(element.attr('data-error-container'))); 
				} else if (element.attr("name") == "service") { // for uniform checkboxes, insert the after the given container
					error.addClass("no-left-padding").insertAfter("#form_2_service_error");
				} else {
					error.insertAfter(element); // for other inputs, just perform default behavior
				}
			},

			//*/

			highlight: function (element) { // hightlight error inputs
				$(element)
				    .closest('.help-inline').removeClass('ok'); // display OK icon
				$(element)
					.closest('.control-group').removeClass('success').addClass('error'); // set error class to the control group
			},

			unhighlight: function (element) { // revert the change done by hightlight
				$(element)
					.closest('.control-group').removeClass('error'); // set error class to the control group
			},
			
			invalidHandler: function (event, validator) { //display error alert on form submit   
				success2.hide();
				error2.show();
				App.scrollTo(error2, -200);
			},

			success: function (label) {
				//console.log(label);
			},
			
			submitHandler: function (form) {
				var d = gdProyek();
				var djson = {
						flag: d.flag,
						id: d.id,
						nama: d.nama,
						almt: d.almt,
						cab: d.cab,
						lahan: d.lahan,
						jangka: d.jangka,
						lbang: d.lbang,
						lklt: d.lklt,
						linfra: d.linfra,
						ltaman: d.ltaman,
						ltot: d.ltot,
						lsale: d.lsale,
						lfasos: d.lfasos,
					}
				console.log(djson);
				//*
				$.ajax({
					type: "POST",
					url: (parseInt(d.flag)>0)?"index.php/jsaproduksi/proyek/gproyek.html":"index.php/jsproduksi/proyek/cproyek.html",
					data: djson,
					success: function(resp)	{
						if (parseInt(resp)==-2)	{
							errorm2.show();
							scrInpUser();
						}
						else {
							error2.hide();
							errorm2.hide();
							showCssListTabel();
							//$('#ftproyek').trigger("reset");
							$('#ftproyek')[0].reset();
							onAddProyek(resp,djson);
						}
					}
				});
				//*/
			}		
		});

		$("#jqProyek").jqGrid({
			url: 'index.php/jsproduksi/proyek/rproyek.html',
			datatype: "json",
			editurl: 'index.php/jsproduksi/proyek/dproyek.html',
			colModel: [
				{
					label: "Aksi",
					name: "actions",
					width: 50,
					formatter: "actions",
					//*
					formatoptions: {
						keys: true,
						editOptions: {},
						//addOptions: {},
						delOptions: {}
					} 
					,frozen: true
					//*/      
				},
				{ label: 'Nama', name: 'nama', width: 200,frozen: true },
				{ label: 'ID', name: 'id', key: true, width: 30,hidden: true },		// ,frozen: true
				{ label: 'Lokasi', name: 'almt', width: 300 },
				{ label: 'Cabang', name: 'cnama', width: 100 },
				{ label: 'idc', name: 'cab', width: 30, hidden: true },
				{ label: 'Identitas Lahan', name: 'lahan', width: 100 },
				{ label: 'Durasi', name: 'jangka', width: 70 },
				{ label: 'L. Bangunan', name: 'lbang', width: 80 },
				{ label: 'L. KLT', name: 'lklt', width: 80 },
				{ label: 'L. Infrastruktur', name: 'linfra', width: 100 },
				{ label: 'L. Taman', name: 'ltaman', width: 80 }
			],
			width: $('.portlet-body').width(),
			shrinkToFit: false,
			height: 'auto',
			rowNum: 5,
			//rowList: [10, 20, 30],
			rownumbers: true,
			viewrecords: true,
			loadonce: true,
			onSelectRow: editProyek,
			//onCellSelect: 
			pager: "#jqProyekPager"
			/*
			,loadComplete: function () {
				var iCol = getColumnIndexByName(grid, 'act');
				$(this).find(">tbody>tr.jqgrow>td:nth-child(" + (iCol + 1) + ")")
					.each(function() {
						$("<div>", {
							title: "Custom",
							mouseover: function() {
								$(this).addClass('ui-state-hover');
							},
							mouseout: function() {
								$(this).removeClass('ui-state-hover');
							},
							click: function(e) {
								alert("'Custom' button is clicked in the rowis="+
									$(e.target).closest("tr.jqgrow").attr("id") +" !");
							}
						}
					  ).css({"margin-right": "5px", float: "left", cursor: "pointer"})
					   .addClass("ui-pg-div ui-inline-custom")
					   .append('<span class="ui-icon ui-icon-document"></span>')
					   .prependTo($(this).children("div"));
				});
			}
			//*/
		});

		$(window).bind('resize', function() {
			$("#jqProyek").setGridWidth($('.portlet-body').width());
		}).trigger('resize');

		jQuery("#jqProyek").jqGrid('setFrozenColumns');
		jQuery("#jqProyek").jqGrid('navGrid',"#jqProyekPager",{edit:false,add:false,del:false});
	}

    return {

        //main function to initiate the module
        init: function () {
            /*
            if (!jQuery().dataTable) {
                return;
            }
			//*/
            initTableProyek();
		}
    };

}();
