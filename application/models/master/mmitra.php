<?php

class Mmitra extends CI_Model {

	function get_detail_mitra()	{
		$this->db->select('*');
		$this->db->order_by('nama','asc');
		$query = $this->db->get('mitra');
		
		return $query->result();
	}
	
	function uMitra($data, $id)	{
		$this->db->where('id', $id);
		return $this->db->update('mitra',$data);
	}
	
	function cGRab($data)	{
		$this->db->trans_start();
		$this->db->insert('mitra', $data);
		$insert_id = $this->db->insert_id();
		$this->db->trans_complete();
		
		return $insert_id;
	}
	
	function dGRab($data)	{
		$this->db->where('id', $data->id);
		if ($this->db->delete('groupRab'))	{
			return array('id' => $id);
		}
		return array('id' => -1);
	}

}

/* End of file option.php */
/* Location: ./application/models/option.php */
