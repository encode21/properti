
<style type="text/css">
    input.ui-pg-input { width: auto; }
</style>

<div class="row-fluid">
	<div class="span12">
		<!-- BEGIN VALIDATION STATES-->
		<div class="portlet ptInputnya box blue">
			<div class="portlet-title">
				<div class="caption" id="jproyek"><i class="icon-reorder"></i>Proyek</div>
				<div class="tools">
					<a href="javascript:;" class="collapse"></a>
					<!--a href="#portlet-config" data-toggle="modal" class="config"></a>
					<a href="javascript:;" class="reload"></a>
					<a href="javascript:;" class="remove"></a-->
				</div>
			</div>
			<div class="portlet-body form">
				<form id="flproyek" class="form-horizontal" >
					<div class="row-fluid">
						<div class="span12">
							<div class="control-group">
								<label class="control-label" >Nama Proyek<span class="required">*</span></label>
								<div class="controls">
									<select class="span6 m-wrap" name="proyek" id="pilNRProyek">
										<option value="">Pilih Projek ...</option>
										<?php foreach ($dproyek as $d):?>
										<option value="<?php echo $d->id ?>"><?php echo strtoupper($d->nama) ?></option>
										<?php endforeach;?>
									</select>
									<!--a class="btn blue cProduk" href="#">Cari</a-->
								</div>
							</div>
						</div>
					</div>
					<div class="row-fluid">
						<div class="span12">
							<div class="control-group">
								<label class="control-label" >Lokasi</label>
								<div class="controls">
									<input type="text" class="m-wrap span12" readonly name="almt" />
								</div>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
</div>

<div class="row-fluid awalTabel">
	<!--div class="span12 responsive" data-tablet="span12 fix-offset" data-desktop="span12"-->
	<div class="span12">
		<!-- BEGIN EXAMPLE TABLE PORTLET-->
		<div class="portlet pdTabelnya box blue">
			<div class="portlet-title">
				<div class="caption"><i class="icon-cogs"></i>Informasi Pekerjaan Non Rumah</div>
				<div class="tools">
					<a href="javascript:;" class="collapse"></a>
				</div>

				<!--div class="actions">
					<a href="#" class="btn green mini dTabelnya"><i class="icon-plus"></i> Tambah Produk </a>
				</div-->
			</div>
			<div class="portlet-body">
				<div class="row-fluid">
					<table id="jqNRumah"></table>
					<div id="jqNRumahPager"></div>
				</div>
				<br/>
				<div class="row-fluid">
					<table id="jqDetNRumah"></table>
					<div id="jqDetNRumahPager"></div>
				</div>

			</div>
		</div>
		<!-- END EXAMPLE TABLE PORTLET-->
	</div>
</div>




<!-- END PAGE CONTENT-->



<!--script type="text/javascript" src="<?php echo $base_url ?>assets/scripts/produksi/jqg-produk.js" ></script-->
<script>
	jQuery(document).ready(function() {
		//UIJQueryUI.init();
		NRumahAdvanced.init();
	});
</script>


