<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class User_model extends CI_Model {

	public $variable;

	public function __construct()
	{
		parent::__construct();
		
	}

	Public function get_users()
	{	
		$where  = array('status' => 1);	
		if(isset($_GET['id'])!=''){
			$where +=array('_id' => $_GET['id']);
			return $this->db->get_where('user_details',$where)->row_array();
		}else{
			return $this->db->get_where('user_details',$where)->result_array();
		}	
		
	}
	

}

/* End of file  */
/* Location: ./application/models/ */