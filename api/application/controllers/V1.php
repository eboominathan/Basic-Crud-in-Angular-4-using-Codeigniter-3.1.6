<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class V1 extends CI_Controller {

	public function __construct()
	{
		parent::__construct();
		if (isset($_SERVER['HTTP_ORIGIN'])){
			header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
			header('Access-Control-Allow-Credentials: true');
			header('Access-Control-Max-Age: 86400');    // cache for 1 day
		}
		$this->load->model('user_model','user'); // Loading model 
	}

	public function users()
	{

		
		switch($_SERVER['REQUEST_METHOD']){
			case 'GET':
			$data = $this->user->get_users();
			echo json_encode($data);
			break;
			case 'POST':
			// $var_array=$this->input->post();      
			break;
			case 'PUT':
			// parse_str(file_get_contents("php://input"),$var_array);
			// $postdata = file_get_contents("php://input");
			// print_r($postdata);						
			break;
			case 'DELETE':
			//parse_str(file_get_contents("php://input"),$var_array);

			break;
			default:

		}



		// parse_str(file_get_contents('php://input'),$_PUT);

		// //$data = http_build_query('php://input');
		
		// print_r($_SERVER['QUERY_STRING']);


	}

}

/* End of file  */
/* Location: ./application/controllers/ */