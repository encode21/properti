var UserAdvanced = function () {

    var initTableUser = function() {
		
		//$('.t_ilang').hide();
		alert("UserAdvanced");
        /* Formatting function for row details */
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
        
        function fnFormatDetails ( oTable, nTr )        {
            var aData = oTable.fnGetData( nTr );
            var sOut = '<table>';
            sOut += '<tr><td>User:</td><td>['+aData[2]+'] '+aData[3]+'</td></tr>';
			sOut += '<tr><td>Email:</td><td>'+aData[5]+'</td></tr>';
			sOut += '<tr><td>Telp:</td><td>'+aData[6]+'</td></tr>';
			sOut += '<tr><td>Alamat:</td><td>'+aData[7]+'</td></tr>';
            sOut += '<tr><td>Posisi:</td><td>'+aData[8]+', divisi '+aData[10]+'</td></tr>';
            sOut += '<tr><td>TTL:</td><td>'+aData[12]+', '+fTgl(aData[13])+'</td></tr>';
            sOut += '</table>';
             
            return sOut;
        }

        /*
         * Insert a 'details' column to the table
         */
        var nCloneTh = document.createElement( 'th' );
        var nCloneTd = document.createElement( 'td' );
        nCloneTd.innerHTML = '<span class="row-details row-details-close"></span>';

		
        $('#user_1 thead tr').each( function () {
            this.insertBefore( nCloneTh, this.childNodes[0] );
        } );
         
        $('#user_1 tbody tr').each( function () {
            this.insertBefore(  nCloneTd.cloneNode( true ), this.childNodes[0] );
        } );
		
		
		var table = $('#user_1').dataTable();
		/*
		var table = $('#user_1').dataTable( {
			//"ajax": "../ajax/data/objects.txt",
			"columns": [
				{
					"class":          'details-control',
					"orderable":      false,
					"data":           null,
					"defaultContent": ''
				},
				{ "data": "name" },
				{ "data": "position" },
				{ "data": "office" },
				{ "data": "salary" }
			],
			"iDisplayLength": 5,
			"aLengthMenu": [
                [5, 15, 20, -1],
                [5, 15, 20, "All"] // change per page values here
            ]
			//"order": [[1, 'asc']]
		} );
		
        /*
        var oTable = $('#user_1').dataTable( {
            "aoColumnDefs": [
                {"bSortable": false, "aTargets": [ 0 ] }
            ],
            "aaSorting": [[2, 'asc']],
             "aLengthMenu": [
                [5, 15, 20, -1],
                //[5, 15, 20, "All"] // change per page values here
                [5, 15, 20, "All"] // change per page values here
            ],
            // set the initial value
            "iDisplayLength": 5,
        });
        //*/

        jQuery('#user_1_wrapper .dataTables_filter input').addClass("m-wrap small"); // modify table search input
        jQuery('#user_1_wrapper .dataTables_length select').addClass("m-wrap small"); // modify table per page dropdown
        jQuery('#user_1_wrapper .dataTables_length select').select2(); // initialize select2 dropdown
         

		$('#user_1').on('click', ' tbody td .row-details', function () {
            var nTr = $(this).parents('tr')[0];
            if ( oTable.fnIsOpen(nTr) )
            {
                /* This row is already open - close it */
                $(this).addClass("row-details-close").removeClass("row-details-open");
                oTable.fnClose( nTr );
            }
            else
            {
                /* Open this row */                
                $(this).addClass("row-details-open").removeClass("row-details-close");
                oTable.fnOpen( nTr, fnFormatDetails(oTable, nTr), 'details' );
            }
        });
		
		$('#user_1 a.delete').live('click', function (e) {
			
			//*
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
			showCssInputUser();
        });
        
        var form2 = $('#ftuser');
		var error2 = $('.alert-error', form2);
		var errorm2 = $('.alert-error2', form2);
		var success2 = $('.alert-success', form2);
		
		function gdUser()	{
			var data = {
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
				aktif: $("input[name='aktif']").val(),
				paswd: CryptoJS.MD5($("input[name='pword']").val()).toString()
			}
			return data;
		}
		
		function onAddUser(id,d)	{
			//alert("Sukses Tambah User");
			console.log(id);
			console.log(d);
			/*
			<td class="t_ilang"><?php echo $d->id ?></td>
			<td><?php echo $d->idusr ?></td>
			<td><?php echo $d->nama ?></td>
			<td><?php echo $d->uname ?></td>
			<td class="hidden-480"><?php echo $d->email?"<a href='mailto:{$d->email}'>{$d->email}</a>":"." ?></td>
			<td class="t_ilang"><?php echo $d->tlp ?></td>
			<td class="t_ilang"><?php echo $d->almt ?></td>
			<td class="t_ilang"><?php echo $d->jnama ?></td>
			<td class="t_ilang"><?php echo $d->jabat ?></td>
			<td class="t_ilang"><?php echo $d->dnama ?></td>
			<td class="t_ilang"><?php echo $d->div ?></td>
			<td class="t_ilang"><?php echo $d->t4lhr ?></td>
			<td class="t_ilang"><?php echo $d->tgllhr ?></td>
			//*/
			var oTable = $('#user_1').dataTable();
			console.log(oTable);
			//*
			oTable.fnAddData([
				id,d.idusr,d.nama,d.uname,d.email,d.tlp,d.almt,
				d.jnama,d.jabat,d.dnama,d.div,d.t4lhr,d.tgllhr
			]).draw();
			//*/
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
				console.log(label);
			},
			
			submitHandler: function (form) {
				var d = gdUser();
				var djson = {
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
					url: "index.php/jsadmin/user/cuser.html",
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
			}		
		});
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
            
            $("#jqGrid").jqGrid({
				url: 'data.json',
				datatype: "json",
				colModel: [
					{ label: 'ID', name: 'CustomerID', key: true, width: 75 },
					{ label: 'Company Name', name: 'CompanyName', width: 150 },
					{ label: 'Contact Name', name: 'ContactName', width: 150 },
					{ label: 'Phone', name: 'Phone', width: 150 },
					{ label: 'City', name: 'City', width: 150 }
				],
				width: $('.portlet-body').width(),
				shrinkToFit: true,
				//height: 150,
				rowNum: 7,
				//rowList: [10, 20, 30],
				viewrecords: true,
				loadonce: true,
				//caption: 'Master Grid',
				
				onSortCol : clearSelection,
				onPaging : clearSelection,
				pager: "#jqGridPager"
			});
			
			
			jQuery(window).bind('resize', function() {

				// Get width of parent container
				var width = jQuery('.portlet-body').attr('clientWidth');
				if (width == null || width < 1){
					// For IE, revert to offsetWidth if necessary
					width = jQuery('.portlet-body').attr('offsetWidth');
				}
				width = width - 2; // Fudge factor to prevent horizontal scrollbars
				if (width > 0 &&
					// Only resize if new width exceeds a minimal threshold
					// Fixes IE issue with in-place resizing when mousing-over frame bars
					Math.abs(width - jQuery('.jqGrid').width()) > 5)
				{
					jQuery('.jqGrid').setGridWidth(width);
				}

			}).trigger('resize');
        }
    };

}();
