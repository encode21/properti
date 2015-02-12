<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Tplrab extends CI_Controller {
	function __construct() {
        parent::__construct();
		$this->load->model('plan/mtplrab');
		//$this->load->model('tplrab');
	}

	public function index()	{
		$this->load->view('welcome_message');
	}
	
	public function rTplRab()	{
		try {
			$jsonResult = array(
				'success' => true,
				'tplrab' => $this->mtplrab->get_tplrab_all()
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
