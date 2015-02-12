



<style type="text/css">
    input.ui-pg-input { width: auto; }
</style>

<div class="row-fluid awluser">
	<!--div class="span12 responsive" data-tablet="span12 fix-offset" data-desktop="span12"-->
	<div class="span12">
		<!-- BEGIN EXAMPLE TABLE PORTLET-->
		<div class="portlet pduser box purple">
			<div class="portlet-title">
				<div class="caption"><i class="icon-cogs"></i>Daftar User</div>
				<div class="tools">
					<a href="javascript:;" class="collapse"></a>
				</div>

				<div class="actions">
					<a href="#" class="btn green mini duser"><i class="icon-plus"></i> Tambah Data </a>
				</div>
			</div>
			<div class="portlet-body">
				<table id="jqUser"></table>
				<div id="jqUserPager"></div>
			</div>
		</div>
		<!-- END EXAMPLE TABLE PORTLET-->
	</div>
</div>

<div class="row-fluid">
	<div class="span12">
		<!-- BEGIN VALIDATION STATES-->
		<div class="portlet ptuser box green">
			<div class="portlet-title">
				<div class="caption"><i class="icon-reorder"></i>Tambah & Edit User</div>
				<div class="tools">
					<a href="javascript:;" class="expand tambahuser"></a>
					<!--a href="#portlet-config" data-toggle="modal" class="config"></a>
					<a href="javascript:;" class="reload"></a>
					<a href="javascript:;" class="remove"></a-->
				</div>
			</div>
			<div class="portlet-body form hide">
				<!-- BEGIN FORM-->
				<!--form action="index.php/admin/user3.html" class="form-horizontal" method="POST"-->
				<form id="ftuser" class="form-horizontal" >
					<div class="alert alert-error hide">
						<button class="close" data-dismiss="alert"></button>
						You have some form errors. Please check below.
					</div>
					<div class="alert alert-error2 hide">
						<button class="close" data-dismiss="alert"></button>
						Username, ID User, atau Email sudah terdaftar. Silakan pilih isi data yang lain.
					</div>
					<div class="alert alert-success hide">
						<button class="close" data-dismiss="alert"></button>
						Your form validation is successful!
					</div>

					<h3 class="form-section">Info Personal </h3>
					<div class="row-fluid">
						<div class="span12 ">
							<div class="control-group">
								<label class="control-label" >Nama<span class="required">*</span></label>
								<div class="controls">
									<input type="text" name="nama" data-required="1" class="m-wrap span12"  />
									<input type="hidden" name="id" data-required="1" class="m-wrap span12"  />
								</div>
							</div>
						</div>
					</div>
					<div class="row-fluid">
						<div class="span12 ">
							<div class="control-group">
								<label class="control-label" >Alamat<span class="required">*</span></label>
								<div class="controls">
									<input type="text" name="almt" data-required="1" class="m-wrap span12" />
								</div>
							</div>
						</div>
					</div>
					<div class="row-fluid">
						<div class="span6 ">
							<div class="control-group">
								<label class="control-label" >Tempat Lahir<span class="required">*</span></label>
								<div class="controls">
									<input type="text" name="t4lhr" data-required="1" class="m-wrap span12" /> 
								</div>
							</div>
						</div>
						<!--/span-->
						<div class="span6 ">
							<div class="control-group">
								<label class="control-label" >Tanggal Lahir<span class="required">*</span></label>
								<div class="controls">
									<!--input type="text" class="m-wrap span12" name="tgllhr"-->
									<input type="text" name="tgllhr" data-required="1" value="" class="m-wrap span12" id="ui_date_picker_change_year_month" /> 
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
									<input type="password" class="m-wrap span12" name="pword" /> 
								</div>
							</div>
						</div>
						<!--/span-->
						<!--div class="span6 ">
							<div class="control-group">
								<label class="control-label" >Password Lagi<span class="required">*</span></label>
								<div class="controls">
									<input type="text" class="m-wrap span12" name="passwlg" /> 
								</div>
							</div>
						</div-->
						<!--/span-->
					</div>
					<div class="row-fluid">
						<div class="span6 ">
							<div class="control-group">
								<label class="control-label" >Email<span class="required">*</span></label>
								<div class="controls">
									<input type="text" class="m-wrap span12" name="email" /> 
								</div>
							</div>
						</div>
						<!--/span-->
						<!--div class="span6 ">
							<div class="control-group">
								<label class="control-label" >Password Lagi<span class="required">*</span></label>
								<div class="controls">
									<input type="text" class="m-wrap span12" name="passwlg" /> 
								</div>
							</div>
						</div-->
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
					<input type="hidden" name="flag" value="0" />
					<div class="form-actions">
						<button type="submit" class="btn blue hide"><i class="icon-ok"></i>Ubah User</button>
						<button type="submit" class="btn green"><i class="icon-ok"></i>Tambah User</button>
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



<script type="text/javascript" src="<?php echo $base_url ?>assets/scripts/md5.js"></script>
<script type="text/javascript" src="<?php echo $base_url ?>assets/scripts/admin/jqg-user.js" ></script>
<script>
	jQuery(document).ready(function() {
		UIJQueryUI.init();
		UserAdvanced.init();
	});
</script>


