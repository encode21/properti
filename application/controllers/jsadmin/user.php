<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class User extends CI_Controller {
	
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
		$this->load->model('admin/muser');
		//$this->load->model('tplrab');
	}
	
	public function ruser()	{
		try {
			$jsonResult = array(
				'success' => true,
				'rows' => $this->muser->get_user_all()
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
	public function duser()	{
		$oper = $this->input->post("oper");
		$uid = $this->input->post("id");
		
		if (isset($uid) && $oper==="del")	{
			//echo "User :: duser >>> $uid<br/>";
			$this->muser->del_user($uid);
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
	public function cuser()	{
		//echo "masuk cuser<br/>";
		$data = new stdClass();
		$data->idusr = $this->input->post('idusr');
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
		
		//print_r($data);
		if (strlen($data->nama)>0 && strlen($data->uname)>0)	{
			$jdata = $this->muser->check_exist_user($data);
			//echo $jdata->num_rows();
			if ($jdata[0]->jml==0)	{
				$id = $this->muser->set_user($data);
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
