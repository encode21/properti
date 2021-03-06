<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Proyek extends CI_Controller {
	
	/**
	 * Index Page for this controller.
	 *
	 * Maps to the following URL
	 * 		http://example.com/index.php/welcome
	 *	- or -  
	 * 		http://example.com/index.php/welcome/index
	 *	- or -
	 * Since this controller is set as the default controller in 
	 * config/routes.php, it's displayed at http://example.com/
	 *
	 * So any other public methods not prefixed with an underscore will
	 * map to /index.php/welcome/<method_name>
	 * @see http://codeigniter.com/user_guide/general/urls.html
	 */
	
	function __construct() {
        parent::__construct();
		$this->load->model('produksi/mproyek');
		//$this->load->model('tplrab');
	}
	
	public function rproyek()	{
		try {
			$jsonResult = array(
				'success' => true,
				'rows' => $this->mproyek->get_proyek_all()
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
	
	// duser: delete user >> untuk menghapus user
	public function dproyek()	{
		$oper = $this->input->post("oper");
		$uid = $this->input->post("id");
		
		if (isset($uid) && $oper==="del")	{
			echo "User :: dproyek >>> $uid<br/>";
			$this->mproyek->del_proyek($uid);
		}
		
	}
	
	public function guser()	{
		$data = new stdClass();
		$idusr = $this->input->post('idusr');
		//$data->idusr = $this->input->post('idusr');
		$data->nama = $this->input->post('nama')?:"";
		$data->uname = $this->input->post('uname')?:"";
		$data->passw = $this->input->post('passw');
		$data->tlp = $this->input->post('tlp');
		$data->jabat = $this->input->post('jabat');
		$data->div = $this->input->post('div');
		$data->t4lhr = $this->input->post('t4lhr');
		$data->tgllhr = $this->input->post('tgllhr')?:date('Y-m-d');
		$data->email = $this->input->post('email')?:"";
		$data->almt = $this->input->post('almt')?:"";
		$data->aktif = $this->input->post('aktif')?:0;
		
		if (isset($idusr))	{
			echo "User :: guser >>> {$idusr}<br/>";
			//$this->muser->upd_user($data,$data->idusr);
			$this->muser->upd_user($data,$idusr);
		}
		echo $this->db->last_query();
		
	}
	
	public function cek_user()	{
		$data = new stdClass();
		$data->idusr = "DB2345";
		$data->uname = "afrendy";
		
		$jdata = $this->muser->check_exist_user($data);
		
		print_r($jdata[0]->jml);
		//echo $jdata->num_rows();
	}
	
	// cuser: create user >> untuk menambahkan user
	public function cproyek()	{
		//echo "masuk cuser<br/>";
		$data = new stdClass();
		$data->nama = $this->input->post('nama')?:"";
		$data->almt = $this->input->post('almt')?:"";
		$data->jangka = $this->input->post('jangka')?:0;
		$data->lahan = $this->input->post('lahan');
		$data->cab = $this->input->post('cab');
		$data->ltot = $this->input->post('ltot')?:0;
		$data->lsale = $this->input->post('lsale')?:0;
		$data->lbang = $this->input->post('lbang')?:0;
		$data->lklt = $this->input->post('lklt')?:0;
		$data->linfra = $this->input->post('linfra')?:0;
		$data->ltaman = $this->input->post('ltaman')?:0;
		$data->lfasos = $this->input->post('lfasos')?:0;
		$data->kondTanah = $this->input->post('kondTanah')?:0;
		$data->sertTanah = $this->input->post('sertTanah')?:0;
		
		
		//print_r($data);
		if (strlen($data->nama)>0)	{
			$jdata = $this->mproyek->check_exist_proyek($data);
			//echo $jdata->num_rows();
			if ($jdata[0]->jml==0)	{
				$id = $this->mproyek->set_proyek($data);
				echo $this->db->last_query();
				$json = array(
					'success' => true,
					'id' => $id
				);
			}
			else {
				$id = -2;		// duplicate data
			}
		}
		else {
			$id = -1;			// 
			$json = array(
				'success' => false,
				'id' => -1
			);
		}
		//echo json_encode($json);
		echo json_encode($id);
		
	}
	
	public function index()		{
		$data['base_url'] = $this->config->base_url();
		$data['dinfo'] =  $this->mdashboard->get_info_dashb();
		$data['dfile'] =  $this->mdashboard->get_files_dashb();
		
		//print_r($data);
		$this->load->view('template/breadcrumb',$data);
		$this->load->view('dashboard/menuutama2',$data);
		$this->load->view('dashboard/info',$data);
		$this->load->view('dashboard/file',$data);
	}
	
	public function user()		{
		$data['base_url'] = $this->config->base_url();
		$data['js'] =  "assets/scripts/admin/User.js";
		
		
		//print_r($data);
		$this->load->view('template/breadcrumb',$data);
		$this->load->view('template/js',$data);
		//$this->load->view('dashboard/menuutama2',$data);
		
	}
}

/* End of file dboard.php */
/* Location: ./application/controllers/dboard.php */
