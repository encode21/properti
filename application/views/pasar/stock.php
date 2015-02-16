
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
									<select class="span6 m-wrap" name="proyek" id="pilProyekM">
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
						<div class="span7">
							<div class="control-group">
								<label class="control-label" >Cabang</label>
								<div class="controls">
									<input type="text" class="m-wrap span12" readonly name="cab" />
								</div>
							</div>
						</div>
					</div>
					<div class="row-fluid">
						<div class="span12">
							<div class="control-group">
								<label class="control-label" >Tipe Produk<span class="required">*</span></label>
								<div class="controls">
									<select class="span6 m-wrap" name="produk" id="stProdukM">
										<option value="-1">Semua Tipe Produk ...</option>
									</select>
								</div>
							</div>
						</div>
					</div>
					<div class="row-fluid">
						<div class="span12">
							<div class="control-group">
								<label class="control-label" >NDR<span class="required">*</span></label>
								<div class="controls">
									<select class="span6 m-wrap" name="ndr" id="stNDRM">
										<option value="-1">Semua NDR ...</option>
									</select>
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
				<div class="caption"><i class="icon-cogs"></i>Informasi Produk</div>
				<div class="tools">
					<a href="javascript:;" class="collapse"></a>
				</div>
			</div>
			<div class="portlet-body">
				<div class="row-fluid">
					<table id="jqStockML"></table>
					<div id="jqStockPagerML"></div>
				</div>
				<br/>
				<div class="row-fluid">
					<table id="jqStockMH"></table>
					<div id="jqStockPagerMH"></div>
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
		StockMAdvanced.init();
	});
</script>


