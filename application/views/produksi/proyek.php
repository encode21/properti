



<style type="text/css">
    input.ui-pg-input { width: auto; }
</style>

<div class="row-fluid awalTabel">
	<!--div class="span12 responsive" data-tablet="span12 fix-offset" data-desktop="span12"-->
	<div class="span12">
		<!-- BEGIN EXAMPLE TABLE PORTLET-->
		<div class="portlet pdTabelnya box blue">
			<div class="portlet-title">
				<div class="caption"><i class="icon-cogs"></i>Informasi Proyek</div>
				<div class="tools">
					<a href="javascript:;" class="collapse"></a>
				</div>

				<div class="actions">
					<a href="#" class="btn black mini dTabelnya"><i class="icon-plus"></i> Tambah Proyek </a>
				</div>
			</div>
			<div class="portlet-body">
				<table id="jqProyek"></table>
				<div id="jqProyekPager"></div>
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
				<div class="caption"><i class="icon-reorder"></i>Tambah & Edit Proyek</div>
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
				<form id="ftproyek" class="form-horizontal" >
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

					<h3 class="form-section">Informasi Proyek</h3>
					<div class="row-fluid">
						<div class="span12 ">
							<div class="control-group">
								<label class="control-label" >Nama Proyek<span class="required">*</span></label>
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
								<label class="control-label" >Identitas Lokasi<span class="required">*</span></label>
								<div class="controls">
									<input type="text" name="almt" data-required="1" class="m-wrap span12" />
								</div>
							</div>
						</div>
					</div>
					<div class="row-fluid">
						<div class="span6 ">
							<div class="control-group">
								<label class="control-label" >Cabang<span class="required">*</span></label>
								<div class="controls">
									<select class="span12 m-wrap" name="cab">
										<option value="">Select...</option>
										<?php foreach ($dcab as $d):?>
										<option value="<?php echo $d->id ?>"><?php echo strtoupper($d->nama) ?></option>
										<?php endforeach;?>
									</select>
								</div>
							</div>
						</div>
						<!--/span-->
					</div>
					<!--/row-->  
					<div class="row-fluid">
						<div class="span6 ">
							<div class="control-group">
								<label class="control-label" >Identitas Lahan<span class="required">*</span></label>
								<div class="controls">
									<input type="text" class="m-wrap span12" name="lahan" />
								</div>
							</div>
						</div>
						<!--/span-->
					</div>
					<div class="row-fluid">
						<div class="span6">
							<div class="control-group">
								<label class="control-label" >Jangka Waktu<span class="required">*</span></label>
								<div class="controls">
									<span><input type="text" class="m-wrap small" name="jangka" /><span class="text-inline">&nbsp;Tahun&nbsp;</span>
								</div>
							</div>
						</div>
						<!--/span-->
					</div>
					
					<h3 class="form-section">Penggunaan Tanah</h3>
					<div class="row-fluid">
						<div class="span6 ">
							<div class="control-group">
								<label class="control-label" >Bangunan<span class="required">*</span></label>
								<div class="controls">
									<input type="text" class="m-wrap small" name="lbang" /><span class="text-inline">&nbsp;M<sup>2</sup>&nbsp;</span>
								</div>
							</div>
						</div>
						<div class="span6 ">
							<div class="control-group">
								<label class="control-label" >Total Saleable Area<span class="required">*</span></label>
								<div class="controls">
									<input type="text" class="m-wrap small" name="lsale" /> <span class="text-inline">&nbsp;M<sup>2</sup>&nbsp;</span>
								</div>
							</div>
						</div>
					</div>
					<!--/row-->           
					<div class="row-fluid">
						<div class="span6">
							<div class="control-group">
								<label class="control-label" >KLT<span class="required">*</span></label>
								<div class="controls">
									<input type="text" class="m-wrap small" name="lklt" /><span class="text-inline">&nbsp;M<sup>2</sup>&nbsp;</span>
								</div>
							</div>
						</div>
						<div class="span6">
							<div class="control-group">
								<label class="control-label" >Fasos/Fasum<span class="required">*</span></label>
								<div class="controls">
									<input type="text" class="m-wrap small" name="lfasos" /> <span class="text-inline">&nbsp;M<sup>2</sup>&nbsp;</span>
								</div>
							</div>
						</div>
					</div>
					<div class="row-fluid">
						<div class="span6">
							<div class="control-group">
								<label class="control-label" >Infrastruktur<span class="required">*</span></label>
								<div class="controls">
									<input type="text" class="m-wrap small" name="linfra" /> <span class="text-inline">&nbsp;M<sup>2</sup>&nbsp;</span>
								</div>
							</div>
						</div>
						<div class="span6">
							<div class="control-group">
								<label class="control-label" >Total Luas Lahan<span class="required">*</span></label>
								<div class="controls">
									<input type="text" class="m-wrap small" name="ltot" /> <span class="text-inline">&nbsp;M<sup>2</sup>&nbsp;</span>
								</div>
							</div>
						</div>
					</div>
					<div class="row-fluid">
						<div class="span6">
							<div class="control-group">
								<label class="control-label" >Taman Terbuka<span class="required">*</span></label>
								<div class="controls">
									<input type="text" class="m-wrap small" name="ltaman" /> <span class="text-inline">&nbsp;M<sup>2</sup>&nbsp;</span>
								</div>
							</div>
						</div>
						<!--/span-->
					</div>
					<input type="hidden" name="fProyek" value="0" />
					<div class="form-actions">
						<button type="submit" class="btn blue hide"><i class="icon-ok"></i>Ubah Proyek</button>
						<button type="submit" class="btn green"><i class="icon-ok"></i>Tambah Proyek</button>
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



<!--script type="text/javascript" src="<?php echo $base_url ?>assets/scripts/produksi/jqg-proyek.js" ></script-->
<script>
	jQuery(document).ready(function() {
		//UIJQueryUI.init();
		ProyekAdvanced.init();
	});
</script>


