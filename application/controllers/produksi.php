<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Produksi extends CI_Controller {
	
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
		$this->load->model('produksi/mproyek');
		//$this->load->model('produksi/mproduk');
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
	
	public function produk()		{
		$data['base_url'] = $this->config->base_url();
		$data['dproyek'] = $this->mproyek->get_proyek_all();

		$this->load->view('template/breadcrumb',$data);
		$this->load->view('produksi/produk',$data);
		//$this->load->view('dashboard/menuutama2',$data);
		
	}
	
	public function proyek()		{
		$data['base_url'] = $this->config->base_url();
		$data['dcab'] = $this->mproyek->get_cabang_all();
		//$data['dproyek'] = $this->mproyek->get_proyek_nama();

		$this->load->view('template/breadcrumb',$data);
		$this->load->view('produksi/proyek',$data);
		//$this->load->view('dashboard/menuutama2',$data);
		
	}
	
	public function stock()		{
		$data['base_url'] = $this->config->base_url();
		$data['dproyek'] = $this->mproyek->get_proyek_nama();

		$this->load->view('template/breadcrumb',$data);
		$this->load->view('produksi/stock',$data);
	}
}

/* End of file produksi.php */
/* Location: ./application/controllers/produksi.php */

