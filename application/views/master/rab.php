
<style type="text/css">
    input.ui-pg-input { width: auto; }
</style>

<div class="row-fluid awalTabel">
	<!--div class="span12 responsive" data-tablet="span12 fix-offset" data-desktop="span12"-->
	<div class="span12">
		<!-- BEGIN EXAMPLE TABLE PORTLET-->
		<div class="portlet pdTabelnya box blue">
			<div class="portlet-title">
				<div class="caption"><i class="icon-cogs"></i>Informasi Group Aktivitas</div>
				<div class="tools">
					<a href="javascript:;" class="collapse"></a>
				</div>

				<div class="actions">
					<!--a href="#" class="btn green mini dTabelnya"><i class="icon-plus"></i> Tambah Group </a-->
				</div>
			</div>
			<div class="portlet-body">
				<table id="jqRab"></table>
				<div id="jqRabPager"></div>
			</div>
		</div>
		<!-- END EXAMPLE TABLE PORTLET-->
	</div>
</div>

<div class="row-fluid">
	<!--div class="span12 responsive" data-tablet="span12 fix-offset" data-desktop="span12"-->
	<div class="span12">
		<!-- BEGIN EXAMPLE TABLE PORTLET-->
		<div class="portlet pdTabelnya box blue">
			<div class="portlet-title">
				<div class="caption"><i class="icon-cogs"></i>Template Detail Aktivitas</div>
				<div class="tools">
					<a href="javascript:;" class="collapse"></a>
				</div>

				<div class="actions">
					<!--a href="#" class="btn black mini dTabelnya"><i class="icon-plus"></i> Tambah Group </a-->
				</div>
			</div>
			<div class="portlet-body">
				<table id="jqRabDet"></table>
				<div id="jqRabDetPager"></div>
			</div>
		</div>
		<!-- END EXAMPLE TABLE PORTLET-->
	</div>
</div>

<!-- END PAGE CONTENT-->


<script>
	jQuery(document).ready(function() {
		//UIJQueryUI.init();
		RabAdvanced.init();
	});
</script>


