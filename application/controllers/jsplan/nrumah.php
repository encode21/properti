<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Nrumah extends CI_Controller {

	function __construct() {
        parent::__construct();
		$this->load->model('produksi/mproduk');
		$this->load->model('plan/mtplrab');
	}
	
	public function rproyNR()	{
		try {
			$id = $this->input->get("id");
			$jsonResult = array(
				'success' => true,
				'rows' => $this->mproduk->get_detail_proyek($id)
				,'nrRab' => $this->mtplrab->get_rab_nrumah($id)
			);
		}
		catch (Exception $e){
			$jsonResult = array(
				'success' => false,
				'message' => $e->getMessage()
			);	
		}
		
		echo json_encode($jsonResult);
	}
	
	public function rrabNR()	{
		try {
			$id = $this->input->get("id");

			$jsonResult = array(
				'success' => true,
				//'rows' => $this->mproduk->get_detail_proyek($id)
				'rows' => $id?$this->mtplrab->get_rab_nrumah($id):""
			);
		}
		catch (Exception $e){
			$jsonResult = array(
				'success' => false,
				'message' => $e->getMessage()
			);	
		}
		
		echo json_encode($jsonResult);
	}
	
	public function rjobNR()	{
		try {
			$rab = $this->input->get("r");
			//$pekan = $this->input->get("p");

			$jsonResult = array(
				'success' => true,
				'rows' => $rab?$this->mtplrab->get_job_nrumah($rab):""
			);
		}
		catch (Exception $e){
			$jsonResult = array(
				'success' => false,
				'message' => $e->getMessage()
			);	
		}
		
		echo json_encode($jsonResult);
	}

	
	public function cproduk()	{
		try {
			$data = json_decode(trim(file_get_contents('php://input')), true);
			//print_r($data);
			$ids = array();
			foreach($data as $d)	{
				//print_r($d);
				//*
				$i = new stdClass;
				//$i->jqid = $d["id"];
				$i->id = $d["hid"];
				$i->lok = $d["lok"];
				$i->model = $d["mdl"];
				$i->jenis = $d["jenis"];
				$i->tipe = $d["tipe"];
				$i->lbang = $d["lbang"];
				$i->ltnh = $d["ltnh"];
				$i->jml = $d["jml"];
				$i->blok = $d["blok"];
				$i->tipe1 = $d["tipe1"];
				$i->tipe2 = $d["tipe2"];
				$i->tipe3 = $d["tipe3"];
				$i->klt = $d["klt"];
				$i->harga = $d["harga"];
				$i->hklt = $d["hklt"];
				$i->stbg = $d["stbg"];
				$i->st = $d["st"];
				//*/
				//print_r($i);
				//echo "TABEL: {$i->id}";
				if ((int)($i->id)==0)	{
					$id = $this->mproduk->set_produk($i, ($d["mdl"]==='1')?"house":"high");
				}
				else {
					//echo "update {$i->id}<br/>";
					$id = $i->id;
					$this->mproduk->upd_produk($i, $id, ($d["mdl"]==='1')?"house":"high");
				}
				array_push($ids,$id);
				//echo "id: $id<br/>";
			}
			//$id = $this->input->get("id");
			$jsonResult = array(
				'success' => true,
				//'rows' => $this->mproduk->get_detail_proyek($id)
			);
		}
		catch (Exception $e){
			$jsonResult = array(
				'success' => false,
				'message' => $e->getMessage()
			);	
		}
		
		//echo json_encode($jsonResult);
	}
	
	public function dsproduk()	{
		
	}

}

/* End of file produk.php */
/* Location: ./application/controllers/jsproduksi/produk.php */
