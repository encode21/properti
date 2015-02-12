
<link rel="stylesheet" type="text/css" href="<?php echo $base_url ?>assets/plugins/bootstrap-fileupload/bootstrap-fileupload.css" />



<style type="text/css">
    input.ui-pg-input { width: auto; }
</style>

<div class="row-fluid awalTabel">
	<!--div class="span12 responsive" data-tablet="span12 fix-offset" data-desktop="span12"-->
	<div class="span12">
		<!-- BEGIN EXAMPLE TABLE PORTLET-->
		<div class="portlet pdTabelnya box blue">
			<div class="portlet-title">
				<div class="caption"><i class="icon-cogs"></i>Informasi Mitra</div>
				<div class="tools">
					<a href="javascript:;" class="collapse"></a>
				</div>

				<div class="actions">
					<a href="#" class="btn green mini dTabelnya"><i class="icon-plus"></i> Tambah Mitra </a>
				</div>
			</div>
			<div class="portlet-body">
				<table id="jqMitra"></table>
				<div id="jqMitraPager"></div>
			</div>
		</div>
		<!-- END EXAMPLE TABLE PORTLET-->
	</div>
</div>

<div class="row-fluid">
	<div class="span12">
		<!-- BEGIN VALIDATION STATES-->
		<div class="portlet ptInputnya box blue">
			<div class="portlet-title">
				<div class="caption"><i class="icon-reorder"></i>Tambah & Edit Mitra</div>
				<div class="tools">
					<a href="javascript:;" class="expand tambahInput"></a>
					<!--a href="#portlet-config" data-toggle="modal" class="config"></a>
					<a href="javascript:;" class="reload"></a>
					<a href="javascript:;" class="remove"></a-->
				</div>
			</div>
			<div class="portlet-body form hide">
				<!-- BEGIN FORM-->
				<!--form action="index.php/admin/user3.html" class="form-horizontal" method="POST"-->
				<form id="ftmitra" class="form-horizontal" >
					<div class="alert alert-error hide">
						<button class="close" data-dismiss="alert"></button>
						You have some form errors. Please check below.
					</div>
					<div class="alert alert-error2 hide">
						<button class="close" data-dismiss="alert"></button>
						Nama dengan cabang ini sudah terdaftar. Silakan pilih isi data yang lain.
					</div>
					<div class="alert alert-success hide">
						<button class="close" data-dismiss="alert"></button>
						Your form validation is successful!
					</div>

					<h3 class="form-section">Informasi Mitra</h3>
					<div class="row-fluid">
						<div class="span6">
							<div class="control-group">
								<label class="control-label" >Nama Mitra<span class="required">*</span></label>
								<div class="controls">
									<input type="text" name="nama" data-required="1" class="m-wrap span12"  />
									<input type="hidden" name="id" data-required="1" class="m-wrap span12"  />
								</div>
							</div>
						</div>
						<div class="span6">
							<div class="control-group">
								<label class="control-label" >Email<span class="required">*</span></label>
								<div class="controls">
									<input type="text" name="email" data-required="1" class="m-wrap span12"  />
								</div>
							</div>
						</div>
					</div>
					<div class="row-fluid">
						<div class="span6">
							<div class="control-group">
								<label class="control-label" >Alamat<span class="required">*</span></label>
								<div class="controls">
									<input type="text" name="alamat" data-required="1" class="m-wrap span12" />
								</div>
							</div>
						</div>
						<div class="span6">
							<div class="control-group">
								<label class="control-label" >Telepon<span class="required">*</span></label>
								<div class="controls">
									<input type="text" name="tlp" data-required="1" class="m-wrap span12" />
								</div>
							</div>
						</div>
					</div>
					<div class="row-fluid">
						<div class="span6 ">
							<div class="control-group">
								<label class="control-label" >Bidang Usaha<span class="required">*</span></label>
								<div class="controls">
									<input type="text" name="usaha" data-required="1" class="m-wrap span12" />
								</div>
							</div>
						</div>
						<div class="span6 ">
							<div class="control-group">
								<label class="control-label" >Bergabung Sejak<span class="required">*</span></label>
								<div class="controls">
									<input type="text" name="tgl" data-required="1" class="m-wrap span12" id="ui_date_picker_with_button_bar" />
								</div>
							</div>
						</div>
						<!--/span-->
					</div>
					<!--/row-->  
					<div class="row-fluid">
						<div class="span6">
							<div class="control-group">
								<label class="control-label" >PIC / Direktur<span class="required">*</span></label>
								<div class="controls">
									<input type="text" class="m-wrap span12" name="dir" />
								</div>
							</div>
						</div>
						<!--/span-->
					</div>
					
					<h3 class="form-section">Legalitas Perusahaan Mitra</h3>
					<div class="row-fluid">
						<div class="span6">
							<div class="control-group">
								<label class="control-label" >No NPWP<span class="required">*</span></label>
								<div class="controls">
									<input type="text" class="m-wrap span12" name="npwp" />
								</div>
							</div>				
						</div>
						<div class="span6">
							<div class="control-group">
								<label class="control-label" >No Domisili<span class="required">*</span></label>
								<div class="controls">
									<input type="text" class="m-wrap span12" name="domi" />
								</div>
							</div>
						</div>
					</div>
					<!--/row-->           
					<div class="row-fluid">
						<div class="span6">
							<div class="control-group">
								<label class="control-label" >No Akte Perubahan<span class="required">*</span></label>
								<div class="controls">
									<input type="text" class="m-wrap span12" name="ubah" />
								</div>
							</div>
						</div>
						<div class="span6">
							<div class="control-group">
								<label class="control-label" >No Kelengkapan Lain<span class="required">*</span></label>
								<div class="controls">
									<input type="text" class="m-wrap span12" name="lain" />
								</div>
							</div>
						</div>
					</div>
					<div class="row-fluid">
						<div class="span12">
							<div class="control-group">
								<label class="control-label">No Akte Pendirian</label>
								<div class="controls">
									<div class="fileupload fileupload-new" data-provides="fileupload">
										<div class="input-append">
											<div class="uneditable-input">
												<i class="icon-file fileupload-exists"></i> 
												<span class="fileupload-preview"></span>
											</div>
											<span class="btn btn-file">
											<span class="fileupload-new">Select file</span>
											<span class="fileupload-exists">Change</span>
											<input type="file" class="default" />
											</span>
											<a href="#" class="btn fileupload-exists" data-dismiss="fileupload">Remove</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="row-fluid">
						<div class="span12">
							<div class="control-group">
								<label class="control-label">No SIUP</label>
								<div class="controls">
									<div class="fileupload fileupload-new" data-provides="fileupload">
										<div class="input-append">
											<div class="uneditable-input">
												<i class="icon-file fileupload-exists"></i> 
												<span class="fileupload-preview"></span>
											</div>
											<span class="btn btn-file">
											<span class="fileupload-new">Select file</span>
											<span class="fileupload-exists">Change</span>
											<input type="file" class="default" />
											</span>
											<a href="#" class="btn fileupload-exists" data-dismiss="fileupload">Remove</a>
										</div>
									</div>
								</div>
							</div>

						</div>
					</div>
					
					<div class="row-fluid">
						<div class="span6">
							<div class="control-group">
								<label class="control-label">No TDP</label>
								<div class="controls">
									<div class="fileupload fileupload-new" data-provides="fileupload">
										<div class="input-append">
											<div class="uneditable-input">
												<i class="icon-file fileupload-exists"></i> 
												<span class="fileupload-preview"></span>
											</div>
											<span class="btn btn-file">
											<span class="fileupload-new">Select file</span>
											<span class="fileupload-exists">Change</span>
											<input type="file" class="default" />
											</span>
											<a href="#" class="btn fileupload-exists" data-dismiss="fileupload">Remove</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="row-fluid">
						<div class="span6">
							<div class="control-group">
								<label class="control-label">No SK Menkumham</label>
								<div class="controls">
									<div class="fileupload fileupload-new" data-provides="fileupload">
										<div class="input-append">
											<div class="uneditable-input">
												<i class="icon-file fileupload-exists"></i> 
												<span class="fileupload-preview"></span>
											</div>
											<span class="btn btn-file">
											<span class="fileupload-new">Select file</span>
											<span class="fileupload-exists">Change</span>
											<input type="file" class="default"  />
											</span>
											<a href="#" class="btn fileupload-exists" data-dismiss="fileupload">Remove</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
						
					<input type="hidden" name="fMitra" value="0" />
					<div class="form-actions">
						<button type="submit" class="btn blue hide"><i class="icon-ok"></i>Ubah Mitra</button>
						<button type="submit" class="btn green"><i class="icon-ok"></i>Tambah Mitra</button>
						<button type="reset" class="btn red">Bersihkan</button>
					</div>
				</form>
				<!-- END FORM--> 
			</div>
		</div>
		<!-- END VALIDATION STATES-->
	</div>
</div>


<!-- END PAGE CONTENT-->

<script type="text/javascript" src="<?php echo $base_url ?>assets/plugins/bootstrap-fileupload/bootstrap-fileupload.js"></script>


<!--script type="text/javascript" src="<?php echo $base_url ?>assets/scripts/produksi/jqg-proyek.js" ></script-->
<script>
	jQuery(document).ready(function() {
		//UIJQueryUI.init();
		MitraAdvanced.init();
	});
</script>


