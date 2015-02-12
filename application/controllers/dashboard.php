<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Dashboard extends CI_Controller {
	function __construct() {
        parent::__construct();
		$this->load->model('mdashboard');
		//$this->load->model('tplrab');
	}

	public function index()	{
		//$this->load->view('welcome_message');
		try {
			$jsonResult = array(
				'success' => true,
				'dinfo' => $this->mdashboard->get_info_dashb(),
				'dfile' => $this->mdashboard->get_files_dashb()
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
	
	public function rInfo()	{
		try {
			$jsonResult = array(
				'success' => true,
				'dinfo' => $this->mdashboard->get_info_dashb()
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
	
	public function rFile()	{
		try {
			$jsonResult = array(
				'success' => true,
				'dfile' => $this->mdashboard->get_files_dashb()
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
}

/* End of file tplrab.php */
/* Location: ./application/controllers/tplrab.php */
