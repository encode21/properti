<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Rabx extends CI_Controller {

	function __construct() {
        parent::__construct();
		$this->load->model('master/mrab');
	}
	
	public function index()	{
		echo "tes index";
	}
	
	public function rAllGRab()	{
		try {
			$jsonResult = array(
				'success' => true,
				'rows' => $this->mrab->get_all_group_rab()
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
	
	public function rtRab()	{
		try {
			$jsonResult = array(
				'success' => true,
				'rows' => $this->mrab->get_tpl_rab()
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
	
	public function xRab()	{
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
		
		//echo json_encode($jsonResult);
	}
	
	public function xtRab()	{
		try {
			
			$oper = $this->input->post("oper");
			$data = new stdClass();
			
			if ($oper==="add") 	{
				$data->default = ($this->input->post("def")==="on")?1:0;
				$data->default = ($this->input->post("def")==="Yes")?1:0;
				$data->ket = $this->input->post("ket");
				$data->grup = $this->input->post("nom");
				$data->nama = $this->input->post("nama");
				
				$hasil = $this->mrab->ctRab($data);
			}
			else if ($oper==="edit") 	{
				$data->default = ($this->input->post("def")==="on")?1:0;
				$data->default = ($this->input->post("def")==="Yes")?1:0;
				$data->ket = $this->input->post("ket");
				$data->grup = $this->input->post("nom");
				$data->nama = $this->input->post("nama");
				$id = $this->input->post("id");
				
				$hasil = $this->mrab->utRab($data, $id);
			}
			else if ($oper==="del") 	{
				$id = $this->input->post("id");
				$hasil = $this->mrab->dtRab($id);
			}
			
			$jsonResult = array(
				'success' => true,
				'rows' => $this->mrab->get_tpl_rab()
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

	public function RabGrJdl()	{
		try {
			//$sdt  = array();
			$sdt = "<select>";
			$dt = $this->mrab->get_all_jdl_group_rab();
			//print_r($dt);
			
			foreach($dt as $d)	{
				//array_push($sdt, $d->kode);
				$sdt .= "<option value='{$d->kode}'>{$d->kode}</option>";
			}
			
			$sdt .= "</select>";
			//echo implode(";",$sdt);
			echo $sdt;
			return;
		}
		catch (Exception $e){
			$jsonResult = array(
				'success' => false,
				'message' => $e->getMessage()
			);	
		}
		
		echo json_encode($jsonResult);
	}
}

/* End of file produk.php */
/* Location: ./application/controllers/jsproduksi/produk.php */
