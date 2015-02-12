var UserAdvanced = function () {

    var initTableUser = function() {
        function nBln(b)	{
			var nb = ["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Aug","Sep","Oct","Nov","Des"];
			return nb[b];
		}
        
        function fTgl(tgl)	{
			if (tgl.length>=8)	{
				var d = new Date(tgl);
				//return d.toString();
				return d.getDate()+" "+nBln(d.getMonth())+" "+d.getFullYear();
			}
			else return " ";
		}

		$('#user_1').on('click', ' tbody td .row-details', function () {
            var nTr = $(this).parents('tr')[0];
            if ( oTable.fnIsOpen(nTr) )     {
                /* This row is already open - close it */
                $(this).addClass("row-details-close").removeClass("row-details-open");
                oTable.fnClose( nTr );
            }
            else    {
                /* Open this row */                
                $(this).addClass("row-details-open").removeClass("row-details-close");
                oTable.fnOpen( nTr, fnFormatDetails(oTable, nTr), 'details' );
            }
        });
		
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
		//*
		$('.reset').live('click', function (e) {
			alert("Bersihkan");
		});
		//*/
		function scrInpUser()	{
			$('html, body').animate({
				scrollTop: $(".ptuser").offset().top
			}, 200);
		}
		
		function hideBtnUser()	{
			$('div .form-actions .blue').addClass("hide");
			$('div .form-actions .green').addClass("hide");
		}
		
		function showCssInputUser()	{
			var el1 = jQuery(this).closest(".pduser").children(".portlet-body");
            if ($('.pduser a').hasClass("collapse")) {
                //$('.pduser a').removeClass("collapse").addClass("expand");
                //$('.pduser .portlet-body').addClass("hide");
                el1.slideUp(200);
            }
            //*
            var el2 = jQuery(this).closest(".ptuser").children(".portlet-body");
            if ($('.ptuser a').hasClass("expand")) {
				$('.ptuser a').removeClass("expand").addClass("collapse");
				$('.ptuser .portlet-body').removeClass("hide");
				el2.slideDown(200);	
            }
            if ($('.ptuser a').hasClass("collapse")) {
			//	$('.ptuser a').removeClass("collapse").addClass("expand");
			//	$('.ptuser .portlet-body').addClass("hide");
			//	el2.slideDown(200);

			//	$('.ptuser a').removeClass("expand").addClass("collapse");
				$('.ptuser .portlet-body').removeClass("hide");
				el2.slideDown(200);
            }
            //*/
            scrInpUser();
		}
		
		jQuery('body').on('click', '.portlet > .portlet-title > .actions > .duser', function (e) {
            e.preventDefault();
            $('#ftuser')[0].reset();
            $("input[name='flag']").val(0);
            hideBtnUser();
			if ($('div .form-actions .green').hasClass("hide")) {
				$('div .form-actions .green').removeClass("hide");
			}
			showCssInputUser();
        });

        var form2 = $('#ftuser');
		var error2 = $('.alert-error', form2);
		var errorm2 = $('.alert-error2', form2);
		var success2 = $('.alert-success', form2);

		function gdUser()	{
			var data = {
				flag: $("input[name='flag']").val(),
				nama: $("input[name='nama']").val(),
				idusr: $("input[name='idusr']").val(),
				email: $("input[name='email']").val(),
				tlp: $("input[name='tlp']").val(),
				uname: $("input[name='uname']").val(),
				t4lhr: $("input[name='t4lhr']").val(),
				tgllhr: $("input[name='tgllhr']").val(),
				almt: $("input[name='almt']").val(),
				jabat: $("select[name='jabat']").val(),
				div: $("select[name='div']").val(),
				aktif: $("input:radio[name='aktif']:checked").val(),
				paswd: CryptoJS.MD5($("input[name='pword']").val()).toString()
			}
			return data;
		}
		
		function onAddUser(id,d)	{
			var par = {
				   //rowID : "11",
			   initdata : d,
			   position :"first",
			   useDefValues : false,
			   useFormatter : false
			}
			
			if (d.flag==0)
				$("#jqUser").jqGrid('addRow',par);
			else {
				console.log("ganti user");
				debug = $("#jqUser");
				//$("#jqUser").setRowData();
				//$("#jqUser").jqGrid('setRowData',id,d);
				console.log($("#jqUser").setRowData(id,d));
				console.log($("#jqUser").saveRow(id,false));
				//$(this).trigger("reloadGrid");
				//$("#jqUser").saveRow(2);
				console.log(d);
			}
		}
        
        function showCssListUser()	{
			var el1 = jQuery(this).closest(".pduser").children(".portlet-body");
			if ($('.pduser a').hasClass("expand")) {
				$('.pduser a').removeClass("expand").addClass("collapse");
				//$('.pduser .portlet-body').removeClass("hide");
				el1.slideDown(200);
			}
			//*
			var el2 = jQuery(this).closest(".ptuser").children(".portlet-body");
			if ($('.ptuser a').hasClass("collapse")) {
				$('.ptuser a').removeClass("collapse").addClass("expand");
				$('.ptuser .portlet-body').addClass("hide");
				el2.slideUp(200);	
			}
			
			$('html, body').animate({
				scrollTop: $(".awluser").offset().top
			}, 200);
		}
		
		function sdUser(d)	{
			//$("input[name='id']").val(d.id);
			$("input[name='nama']").val(d.nama);
			$("input[name='idusr']").val(d.idusr);
			$("input[name='email']").val(d.email);
			$("input[name='tlp']").val(d.tlp);
			$("input[name='uname']").val(d.uname);
			$("input[name='almt']").val(d.almt);
			$("input[name='t4lhr']").val(d.t4lhr);
			$("input:radio[name='aktif']:checked").val(d.aktif);
			$("select[name='div']").val(d.div);
			$("select[name='jabat']").val(d.jabat);
			$("input[name='tgllhr']").val(d.tgllhr);
			$("input[name='pword']").val("");
		}
		
		function editUser(id,r)	{
			showCssInputUser();
			hideBtnUser();
			if ($('div .form-actions .blue').hasClass("hide")) {
				$('div .form-actions .blue').removeClass("hide");
			}
			$("input[name='flag']").val(1);
			sdUser($("#jqUser").getRowData(id));
			//console.log("id: "+id+", r: "+r);
			//alert(jQuery('#jqUser').jqGrid('getGridParam','selrow'));
			//var u = gdUser();
			//jQuery("#jqUser").setRowData(id,);
			// grid.setRowData(rowid, info.Data, null);
			
			//console.log(u);
			
			//alert("editUser");
		}
		//*
		function tesInput()	{
			
			console.log("tesInput");
			var baru = { 
					almt: "grwgewg",
					div: "3",
					dnama: "Legal",
					email: "gegrege@frgr.rgr",
					idusr: "fffff",
					jabat: "1",
					jnama: "Manager",
					nama: "ggggg",
					t4lhr: "ergergerg",
					tgllhr: "0000-00-00",
					tlp: "24624624545",
					uname: "gxxxx"
				}
				
			var parameters = {
				   rowID : "11",
				   initdata : baru,
				   position :"first",
				   useDefValues : false,
				   useFormatter : false,
				   addRowParams : {extraparam:{}}
				}
			//$("#jqUser").jqGrid('addRow',baru);
			$("#jqUser").jqGrid('addRow',parameters);
			console.log("sampe sini");
		}
        //*/
		$('#ftuser').validate({
			
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
				uname: {
					minlength: 2,
					required: true
				},
				idusr: {
					minlength: 5,
					required: true
				},
				email: {
					required: true,
					email: true
				},
				almt: {
					minlength: 5,
					required: true
				},
				t4lhr: {
					minlength: 3,
					required: true
				},
				tgllhr: {
					minlength: 3,
					required: true
				},
				jabat: {
					required: true
				},
				div: {
					required: true
				},
				tlp: {
					required: true,
					minlength: 10
				},
				passw: {
					required: true,
					minlength: 5
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
				//*
				var d = gdUser();
				var djson = {
						flag: d.flag,
						id: d.id,
						nama: d.nama,
						email: d.email,
						idusr: d.idusr,
						uname: d.uname,
						passw: d.paswd,
						tlp: d.tlp,
						jabat: d.jabat,
						almt: d.almt,
						div: d.div,
						t4lhr: d.t4lhr,
						tgllhr: d.tgllhr,
						aktif: d.aktif
					}
				//console.log(djson);
				//*
				$.ajax({
					type: "POST",
					url: (parseInt(d.flag)>0)?"index.php/jsadmin/user/guser.html":"index.php/jsadmin/user/cuser.html",
					data: djson,
					success: function(resp)	{
						if (parseInt(resp)==-2)	{
							errorm2.show();
							scrInpUser();
						}
						else {
							error2.hide();
							errorm2.hide();
							showCssListUser();
							$('#ftuser').trigger("reset");
							onAddUser(resp,djson);
						}
					}
				});
				//*/
			}		
		});

		$("#jqUser").jqGrid({
			url: 'index.php/jsadmin/user/ruser.html',
			datatype: "json",
			editurl: 'index.php/jsadmin/user/duser.html',
			colModel: [
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
				},
				{ label: 'ID User', name: 'idusr', key: true, width: 75,frozen: true },		// 
				{ label: 'Nama', name: 'nama', width: 150,frozen: true },
				{ label: 'Username', name: 'uname', width: 100 },
				{ label: 'Email', name: 'email', width: 150 },
				{ label: 'Telepon/HP', name: 'tlp', width: 100 },
				{ label: 'Jabatan', name: 'jnama', width: 150 },
				{ label: 'idj', name: 'jabat', width: 30, hidden: true },
				{ label: 'Divisi', name: 'dnama', width: 80 },
				{ label: 'idd', name: 'div', width: 30, hidden: true },
				{ label: 'Alamat', name: 'almt', width: 250 },
				{ label: 'Tempat Lahir', name: 't4lhr', width: 100 },
				{ label: 'Tanggal Lahir', name: 'tgllhr', width: 100 }
			],
			width: $('.portlet-body').width(),
			shrinkToFit: false,
			height: 'auto',
			//height: 150,
			rowNum: 5,
			//rowList: [10, 20, 30],
			rownumbers: true,
			viewrecords: true,
			loadonce: true,
			//caption: 'Master Grid',
			onSelectRow: editUser,
			//onCellSelect: 
			//onSortCol : clearSelection,
			//onPaging : clearSelection,
			pager: "#jqUserPager"
		});

		$(window).bind('resize', function() {
			$("#jqUser").setGridWidth($('.portlet-body').width());
		}).trigger('resize');

		jQuery("#jqUser").jqGrid('setFrozenColumns');
		jQuery("#jqUser").jqGrid('navGrid',"#jqUserPager",{edit:false,add:false,del:false});
	}

    return {

        //main function to initiate the module
        init: function () {
            /*
            if (!jQuery().dataTable) {
                return;
            }
			//*/
            initTableUser();
		}
    };

}();
