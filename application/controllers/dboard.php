<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Dboard extends CI_Controller {
	
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
		//$this->load->model('tplrab');
	}
	
	public function index()		{
		$data['base_url'] = $this->config->base_url();
		$data['dinfo'] =  $this->mdashboard->get_info_dashb();
		$data['dfile'] =  $this->mdashboard->get_files_dashb();

		$this->load->view('template/breadcrumb',$data);
		$this->load->view('dashboard/menuutama2',$data);
		$this->load->view('dashboard/info',$data);
		$this->load->view('dashboard/file',$data);
	}
}

/* End of file dboard.php */
/* Location: ./application/controllers/dboard.php */
