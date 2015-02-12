
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
									<select class="span6 m-wrap" name="proyek" id="pilProyek">
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
					<div class="row-fluid">
						<div class="span6">
							<div class="control-group">
								<label class="control-label" >Cabang</label>
								<div class="controls">
									<input type="text" class="m-wrap span12" readonly name="cab" />
								</div>
							</div>
						</div>
					</div>
					<div class="row-fluid">
						<div class="span6">
							<div class="control-group">
								<label class="control-label" >Status Lahan</label>
								<div class="controls">
									<input type="text" class="m-wrap span12" readonly name="lahan" />
								</div>
							</div>
						</div>
					</div>
					<div class="row-fluid">
						<div class="span6">
							<div class="control-group">
								<label class="control-label" >Jangka Waktu<span class="required">*</span></label>
								<div class="controls">
									<span><input type="text" class="m-wrap small" readonly name="jangka" /><span class="text-inline">&nbsp;Tahun&nbsp;</span>
								</div>
							</div>
						</div>
						<!--/span-->
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
				<div class="caption"><i class="icon-cogs"></i>Informasi Produk</div>
				<div class="tools">
					<a href="javascript:;" class="collapse"></a>
				</div>

				<!--div class="actions">
					<a href="#" class="btn green mini dTabelnya"><i class="icon-plus"></i> Tambah Produk </a>
				</div-->
			</div>
			<div class="portlet-body">
				<div class="row-fluid">
					<form id="flproyek" class="form-horizontal" >
						<div class="span6">
							<div class="control-group">
								<label class="control-label" >Tipe Produk<span class="required">*</span></label>
								<div class="controls">
									<select class="span12 m-wrap" name="tprod">
										<option value="">Select...</option>
										<option value="1">LANDED HOUSE</option>
										<option value="2">HIGH RISE</option>
									</select>
								</div>
							</div>
						</div>
						<div class="span6">
							<div class="control-group">
								<label class="control-label" >Jumlah Tipe Produk<span class="required">*</span></label>
								<div class="controls">
									<input type="text" class="m-wrap small" name="jml" />
									<a class="btn blue" id="savePrd" href="#">Tambah</a>
									<a class="btn green hide" id="chgPrd" href="#">Ubah</a>
									<a class="btn green" id="simpanPrd" href="#">Simpan</a>
								</div>
							</div>
						</div>
					</form>
				</div>
				
				<div class="row-fluid">
					<table id="jqProdukL"></table>
					<div id="jqProdukPagerL"></div>
				</div>
				<br/>
				<div class="row-fluid">
					<table id="jqProdukH"></table>
					<div id="jqProdukPagerH"></div>
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
		ProdukAdvanced.init();
	});
</script>


