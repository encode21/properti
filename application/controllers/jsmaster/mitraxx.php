<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Mitraxx extends CI_Controller {

	function __construct() {
        parent::__construct();
		$this->load->model('master/mmitra');
	}
	
	function index()	{
		echo "diarang masuk";
	}
	
	public function rMitra()	{
		try {
			$jsonResult = array(
				'success' => true,
				'rows' => $this->mmitra->get_detail_mitra()
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
	
	public function xMitra()	{
		try {
			
			$oper = $this->input->post("oper");
			$data = new stdClass();
			//$data->uid = $this->input->post("id");
			
			
			if (!isset($data))	{
				throw new Exception("Data Tidak ada !!");
			}
			
			if ($oper === 'add')	{
				$data->kode = $this->input->post("kode");
				$data->ket = $this->input->post("ket");
				$data->nama = $this->input->post("nama");
				$hasil = $this->mrab->cGRab($data);
			}
			else if ($oper === 'del')	{
				$data->id = $this->input->post("id");
				$data->kode = $this->input->post("kode");
				$hasil = $this->mrab->dGRab($data);
			}
			
			//print_r($hasil);
			$jsonResult = array(
				'success' => true,
				'tasks' => $hasil
			);
			
			$jsonResult = array(
				'success' => true
				//,'rows' => $this->mrab->get_all_group_rab()
				//,'house' => $this->mproduk->get_produk_house($id)
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
	
	public function umitra()	{
		try {
			$data = new stdClass();
			$id = $this->input->post("id");
			$data->nama = $this->input->post("nama");
			$data->alamat = $this->input->post("alamat");
			$data->email = $this->input->post("email");
			$data->tlp = $this->input->post("tlp");
			$data->npwp = $this->input->post("npwp");
			$data->tgl = $this->input->post("tgl");
			$data->dir = $this->input->post("dir");
			$data->usaha = $this->input->post("usaha");
			$data->ubah = $this->input->post("ubah");
			$data->domi = $this->input->post("domi");
			$data->lain = $this->input->post("lain");
			
			$hasil = $this->mmitra->uMitra($data,$id);
			
			$jsonResult = array(
				'success' => true,
				'tasks' => $hasil
			);
			
			$jsonResult = array(
				'success' => true
				//,'rows' => $this->mrab->get_all_group_rab()
				//,'house' => $this->mproduk->get_produk_house($id)
			);
		}
		catch (Exception $e){
			$jsonResult = array(
				'success' => false,
				'message' => $e->getMessage()
			);	
		}
	}
	
	public function cmitra()	{
		try {
			$data = new stdClass();
			$data->nama = $this->input->post("nama");
			$data->alamat = $this->input->post("alamat");
			$data->email = $this->input->post("email");
			$data->tlp = $this->input->post("tlp");
			$data->npwp = $this->input->post("npwp");
			$data->tgl = $this->input->post("tgl");
			$data->dir = $this->input->post("dir");
			$data->usaha = $this->input->post("usaha");
			$data->ubah = $this->input->post("ubah");
			$data->domi = $this->input->post("domi");
			$data->lain = $this->input->post("lain");
			
			$hasil = $this->mmitra->cMitra($data);
			
			$jsonResult = array(
				'success' => true,
				'tasks' => $hasil
			);
			
			$jsonResult = array(
				'success' => true
				//,'rows' => $this->mrab->get_all_group_rab()
				//,'house' => $this->mproduk->get_produk_house($id)
			);
		}
		catch (Exception $e){
			$jsonResult = array(
				'success' => false,
				'message' => $e->getMessage()
			);	
		}
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
