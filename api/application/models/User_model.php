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
	Public function save_user($datas)
	{	

		$response = array('success' => 'User saved successfully !');
		$data = array(
					'firstName' => $datas->firstName,
					'lastName' => $datas->lastName,
					'email' => $datas->email,
					'mobileNumber' => $datas->mobileNumber
					);
		if(isset($datas->_id)){
			$where =array('_id' => $datas->_id);
			$this->db->update('user_details',$data,$where);
		}else{
			$this->db->insert('user_details',$data);
		}	
		return $response;
		
	}

}

/* End of file  */
/* Location: ./application/models/ */