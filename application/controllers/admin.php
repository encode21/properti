<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Admin extends CI_Controller {
	
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
		$this->load->model('mdashboard');
		$this->load->model('admin/muser');
	}
	
	public function ruser()	{
		try {
			$jsonResult = array(
				'success' => true,
				'user' => $this->muser->get_user_all()
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
	
	public function index()		{
		$data['base_url'] = $this->config->base_url();
		$data['dinfo'] =  $this->mdashboard->get_info_dashb();
		$data['dfile'] =  $this->mdashboard->get_files_dashb();
		
		//print_r($data);
		$this->load->view('template/breadcrumb',$data);
		$this->load->view('dashboard/menuutama2',$data);
		$this->load->view('dashboard/info',$data);
		$this->load->view('dashboard/file',$data);
		//$this->load->view('admin/user3.html',$data);
	}
	
	public function user()		{
		$data['base_url'] = $this->config->base_url();
		$data['js'] =  "assets/scripts/admin/User.js";
		
		
		//print_r($data);
		$this->load->view('template/breadcrumb',$data);
		$this->load->view('template/js',$data);
		//$this->load->view('dashboard/menuutama2',$data);
		
	}
	
	public function users()		{
		$data['base_url'] = $this->config->base_url();
		$data['js'] =  "assets/scripts/admin/UserSing.js";

		$this->load->view('template/headsingle',$data);
		$this->load->view('template/breadcrumb',$data);
		$this->load->view('template/jsingle',$data);
		//$this->load->view('dashboard/menuutama2',$data);
		
	}
	
	public function user3()		{
		$data['base_url'] = $this->config->base_url();
		$data['duser'] = $this->muser->get_user_all();
		$data['djabat'] = $this->muser->get_jabat_all();
		$data['ddiv'] = $this->muser->get_divisi_all();

		/*
		print_r($this->muser->get_user_all());	echo "<br/>";
		print_r($this->muser->get_jabat_all());	echo "<br/>";
		print_r($this->muser->get_divisi_all());	echo "<br/>";
		//*/

		$this->load->view('template/breadcrumb',$data);
		$this->load->view('admin/user',$data);
		//$this->load->view('dashboard/menuutama2',$data);
		
	}
	
	public function useradd()	{
		$data['base_url'] = $this->config->base_url();
		//$data['duser'] = $this->muser->get_user_all();
		$data['djabat'] = $this->muser->get_jabat_all();
		$data['ddiv'] = $this->muser->get_divisi_all();

		/*
		print_r($this->muser->get_jabat_all());	echo "<br/>";
		print_r($this->muser->get_divisi_all());	echo "<br/>";
		//*/

		$this->load->view('template/breadcrumb',$data);
		$this->load->view('admin/useradd',$data);
	}
}

/* End of file dboard.php */
/* Location: ./application/controllers/dboard.php */

