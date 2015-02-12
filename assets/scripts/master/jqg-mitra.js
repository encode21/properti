var MitraAdvanced = function () {

    var initTableMitra = function() {

		
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
            $('#ftmitra')[0].reset();
            $("input[name='fProyek']").val(0);
            hideBtnInput();
			if ($('div .form-actions .green').hasClass("hide")) {
				$('div .form-actions .green').removeClass("hide");
			}
			showCssInputTabel();
			scrInpUser();
        });

        var form2 = $('#ftmitra');
		var error2 = $('.alert-error', form2);
		var errorm2 = $('.alert-error2', form2);
		var success2 = $('.alert-success', form2);

		function gdProyek()	{
			var data = {
				id	: $("input[name='id']").val(),
				flag: $("input[name='fMitra']").val(),
				nama: $("input[name='nama']").val().toUpperCase(),
				almt: $("input[name='alamat']").val().toUpperCase(),
				email: $("input[name='email']").val(),
				tlp: $("input[name='tlp']").val(),
				usaha: $("input[name='usaha']").val(),
				dir: $("input[name='dir']").val(),
				tgl: $("input[name='tgl']").val(),
				npwp: $("input[name='npwp']").val(),
				domi: $("input[name='domi']").val(),
				lain: $("input[name='lain']").val(),
				ubah: $("input[name='ubah']").val()
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
				$("#jqMitra").jqGrid('addRow',par);
			else {
				console.log("ganti data di tabel");
				//debug = $("#jqMitra");
				//$("#jqUser").setRowData();
				//$("#jqUser").jqGrid('setRowData',id,d);
				//console.log($("#jqMitra").setRowData(id,d));
				//console.log($("#jqMitra").saveRow(id,false));
				//$(this).trigger("reloadGrid");
				//$("#jqUser").saveRow(2);
				//console.log(d);
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
		
		function sdMitra(d)	{
			//alert("sdMitra id: "+d.id);
			$("input[name='id']").val(d.id);
			$("input[name='nama']").val(d.nama);
			$("input[name='alamat']").val(d.alamat);
			$("input[name='usaha']").val(d.usaha);
			$("input[name='email']").val(d.email);
			$("input[name='dir']").val(d.dir);
			$("input[name='npwp']").val(d.npwp);
			$("input[name='lain']").val(d.lain);
			$("input[name='domi']").val(d.domi);
			$("input[name='ubah']").val(d.ubah);
			$("input[name='tgl']").val(d.tgl);
			$("input[name='tlp']").val(d.tlp);
			//$("input[name='tdp']").val(d.tdp);
			//$("input[name='siup']").val(d.siup);
			//$("input[name='menkum']").val(d.menkum);
			//$("input[name='tlp']").val(d.tlp);
		}
		
		function editMitra(id,r)	{
			showCssInputTabel();
			hideBtnInput();
			if ($('div .form-actions .blue').hasClass("hide")) {
				$('div .form-actions .blue').removeClass("hide");
			}
			$("input[name='fMitra']").val(1);
			sdMitra($("#jqMitra").getRowData(id));
			//alert(id);
		}

		$('#ftmitra').validate({
			
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
						alamat: d.almt,
						email: d.email,
						npwp: d.npwp,
						tgl: d.tgl,
						dir: d.dir,
						usaha: d.usaha,
						tlp: d.tlp,
						lain: d.lain,
						ubah: d.ubah,
						domi: d.domi
					}
				//console.log(djson);
				//*
				$.ajax({
					type: "POST",
					url: (parseInt(d.flag)>0)?"index.php/jsmaster/mitra/umitra.html":"index.php/jsmaster/mitra/cmitra.html",
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
							//$('#ftmitra').trigger("reset");
							$('#ftmitra')[0].reset();
							if (parseInt(d.flag)>0)	{
								
							}
							else 	onAddProyek(resp,djson);
						}
					}
				});
				//*/
			}		
		});

		$("#jqMitra").jqGrid({
			url: 'index.php/jsmaster/mitra/rMitra.html',
			datatype: "json",
			editurl: 'index.php/jsmaster/mitra/xMitra.html',
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
				{ label: 'PIC/Direktur', name: 'dir', width: 150,frozen: true },
				{ label: 'Alamat', name: 'alamat', width: 300 },
				{ label: 'Telepon', name: 'tlp', width: 100 },
				{ label: 'Email', name: 'email', width: 200 },
				{ label: 'Bidang Usaha', name: 'usaha', width: 250 },
				{ label: 'ID', name: 'id', key: true, width: 30,hidden: true },		// ,frozen: true
				{ label: 'Bergabung Sejak', name: 'tgl', width: 100 },
				{ label: 'No Domisili', name: 'domi', width: 120 },
				{ label: 'No NPWP', name: 'npwp', width: 120 },
				{ label: 'No Akte Perubahan', name: 'ubah', width: 120 },
				{ label: 'No Kelengkapan Lain', name: 'lain', width: 120 },
				{ label: 'No TDP', name: 'npwp', width: 120 },
				{ label: 'No SIUP', name: 'siup', width: 120 },
				{ label: 'No Kemenhum', name: 'menkum', width: 120 }
			],
			width: $('.portlet-body').width(),
			shrinkToFit: false,
			height: 'auto',
			rowNum: 5,
			//rowList: [10, 20, 30],
			rownumbers: true,
			viewrecords: true,
			loadonce: true,
			onSelectRow: editMitra,
			//onCellSelect: 
			pager: "#jqMitraPager"
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
			$("#jqMitra").setGridWidth($('.portlet-body').width());
		}).trigger('resize');

		jQuery("#jqMitra").jqGrid('setFrozenColumns');
		jQuery("#jqMitra").jqGrid('navGrid',"#jqMitraPager",{edit:false,add:false,del:false});
	}

    return {

        //main function to initiate the module
        init: function () {
            /*
            if (!jQuery().dataTable) {
                return;
            }
			//*/
            initTableMitra();
		}
    };

}();
