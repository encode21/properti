<link rel="stylesheet" type="text/css" href="<?php echo $base_url ?>assets/plugins/jquery-ui/jquery-ui-1.10.1.custom.min.css"/>


<div class="row-fluid">
	<div class="span12">
		<!-- BEGIN VALIDATION STATES-->
		<div class="portlet box green">
			<div class="portlet-title">
				<div class="caption"><i class="icon-reorder"></i>Tambah User</div>
				<!--div class="tools">
					<a href="javascript:;" class="collapse"></a>
					<a href="#portlet-config" data-toggle="modal" class="config"></a>
					<a href="javascript:;" class="reload"></a>
					<a href="javascript:;" class="remove"></a>
				</div-->
			</div>
			<div class="portlet-body form">
				<!-- BEGIN FORM-->
				<!--form action="index.php/admin/user3.html" class="form-horizontal" method="POST"-->
				<form  class="form-horizontal" >
					<h3 class="form-section">Info Personal </h3>
					<div class="row-fluid">
						<div class="span12 ">
							<div class="control-group">
								<label class="control-label" >Nama<span class="required">*</span></label>
								<div class="controls">
									<input type="text" class="m-wrap span12" name="nama" />
								</div>
							</div>
						</div>
					</div>
					<div class="row-fluid">
						<div class="span12 ">
							<div class="control-group">
								<label class="control-label" >Alamat<span class="required">*</span></label>
								<div class="controls">
									<input type="text" class="m-wrap span12" name="almt" />
								</div>
							</div>
						</div>
					</div>
					<div class="row-fluid">
						<div class="span6 ">
							<div class="control-group">
								<label class="control-label" >Tempat Lahir<span class="required">*</span></label>
								<div class="controls">
									<input type="text" class="m-wrap span12" name="t4lhr" /> 
								</div>
							</div>
						</div>
						<!--/span-->
						<div class="span6 ">
							<div class="control-group">
								<label class="control-label" >Tanggal Lahir<span class="required">*</span></label>
								<div class="controls">
									<!--input type="text" class="m-wrap span12" name="tgllhr"-->
									<input class="m-wrap" size="16" type="text" value="" id="ui_date_picker_change_year_month" name="tgllhr"/> 
								</div>
							</div>
						</div>
						<!--/span-->
					</div>
					<!--/row-->  
					<div class="row-fluid">
						<div class="span6 ">
							<div class="control-group">
								<label class="control-label" >No HP/Telp<span class="required">*</span></label>
								<div class="controls">
									<input type="text" class="m-wrap span12" name="tlp" />
								</div>
							</div>
						</div>
						<!--/span-->
					</div>
					
					<h3 class="form-section">Info Kepegawaian</h3>
					<div class="row-fluid">
						<div class="span6 ">
							<div class="control-group">
								<label class="control-label" >Username<span class="required">*</span></label>
								<div class="controls">
									<input type="text" class="m-wrap span12" name="uname" /> 
								</div>
							</div>
						</div>
						<!--/span-->
						<div class="span6 ">
							<div class="control-group">
								<label class="control-label" >ID User<span class="required">*</span></label>
								<div class="controls">
									<input type="text"  class="m-wrap span12" name="idusr" /> 
								</div>
							</div>
						</div>
						<!--/span-->
					</div>
					<!--/row-->           
					<div class="row-fluid">
						<div class="span6 ">
							<div class="control-group">
								<label class="control-label" >Password<span class="required">*</span></label>
								<div class="controls">
									<input type="text" class="m-wrap span12" name="passw" /> 
								</div>
							</div>
						</div>
						<!--/span-->
						<div class="span6 ">
							<div class="control-group">
								<label class="control-label" >Password Lagi<span class="required">*</span></label>
								<div class="controls">
									<input type="text" class="m-wrap span12" name="passwlg" /> 
								</div>
							</div>
						</div>
						<!--/span-->
					</div>
					<div class="row-fluid">
						<div class="span6 ">
							<div class="control-group">
								<label class="control-label" >Posisi<span class="required">*</span></label>
								<div class="controls">
									<select class="span12 m-wrap" name="jabat">
										<option value="">Select...</option>
										<?php foreach ($djabat as $d):?>
										<option value="<?php echo $d->id ?>"><?php echo $d->nama ?></option>
										<?php endforeach;?>
									</select>
								</div>
							</div>
						</div>
						<!--/span-->
						<div class="span6 ">
							<div class="control-group">
								<label class="control-label" >Divisi<span class="required">*</span></label>
								<div class="controls">
									<select class="span12 m-wrap" name="div">
										<option value="">Select...</option>
										<?php foreach ($ddiv as $d):?>
										<option value="<?php echo $d->id ?>"><?php echo $d->nama ?></option>
										<?php endforeach;?>
									</select>
								</div>
							</div>
						</div>
						<!--/span-->
					</div>
					<div class="row-fluid">
						<div class="span6 ">
							<div class="control-group">
								<label class="control-label">Status<span class="required">*</span></label>
								<div class="controls">                                                
									<label class="radio"><input type="radio" name="aktif" value="1" checked />Aktif</label>
									<label class="radio"><input type="radio" name="aktif" value="0" />Tidak Aktif</label>  
								</div>
							</div>
						</div>
						<!--/span-->
					</div>
					<!--/row--> 
					<div class="form-actions">
						<button type="button" class="btn blue"><i class="icon-ok"></i>Simpan</button>
						<button type="reset" class="btn red ">Bersihkan</button>
					</div>
				</form>
				<!-- END FORM--> 
			</div>
		</div>
		<!-- END VALIDATION STATES-->
	</div>
</div>

<script src="<?php echo $base_url ?>assets/scripts/admin/table-user.js"></script>
<script src="<?php echo $base_url ?>assets/scripts/ui-jqueryui.js"></script>

<script>
	jQuery(document).ready(function() {
		UIJQueryUI.init();

		//UserAdvanced.init();
	});
</script>
