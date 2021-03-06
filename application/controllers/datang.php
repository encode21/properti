<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Datang extends CI_Controller {

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
	public function index()
	{
		$data['base_url'] = $this->config->base_url();
		$this->load->view('template/header',$data);
			$this->load->view('template/notif',$data);
			$this->load->view('template/dropbox',$data);
			$this->load->view('template/login',$data);
		$this->load->view('template/nav_top_end',$data);
			$this->load->view('template/menu',$data);
		$this->load->view('template/isi_awal');
		$this->load->view('template/footer',$data);
	}
}

/* End of file welcome.php */
/* Location: ./application/controllers/welcome.php */
