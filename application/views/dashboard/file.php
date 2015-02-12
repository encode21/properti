				<div class="row-fluid">
					<div class="span12">
						<!-- BEGIN SAMPLE TABLE PORTLET-->
						<div class="portlet box blue">
							<div class="portlet-title">
								<div class="caption"><i class="icon-comments"></i>File Download</div>
								<div class="tools">
									<a href="javascript:;" class="collapse"></a>
									<a href="#portlet-config" data-toggle="modal" class="config"></a>
									<a href="javascript:;" class="reload"></a>
									<a href="javascript:;" class="remove"></a>
								</div>
							</div>
							<div class="portlet-body">
								<table class="table table-striped table-hover">
									<thead>
										<tr>
											<th>#</th>
											<th>Waktu</th>
											<th>User</th>
											<th class="hidden-480">Nama File</th>
											<th>Keterangan</th>
										</tr>
									</thead>
									<tbody>
										<?php $it = 1; ?>
										<?php foreach ($dfile as $d):?>
										
										<tr>
											<td><?php echo $it++; ?></td>
											<td><?php echo $d->tgl?:"&nbsp;" ?></td>
											<td><?php echo $d->nama?:"&nbsp;" ?></td>
											<td class="hidden-480"><a href="<?php echo $d->url?>" target="_blank"><?php echo $d->file ?></a></td>
											<td><?php echo $d->ket?:"&nbsp;" ?></td>
										</tr>
										<?php endforeach;?>
									</tbody>
								</table>
							</div>
						</div>
						<!-- END SAMPLE TABLE PORTLET-->
					</div>
				</div>
