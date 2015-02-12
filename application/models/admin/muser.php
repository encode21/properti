<?php

class Muser extends CI_Model {

	function get_user_all()	{
		$this->db->select('u.id, u.idusr,u.nama,u.uname,u.tlp,u.almt,u.jabat,j.nama AS jnama');
		$this->db->select('u.div,d.nama AS dnama,u.t4lhr,u.tgllhr,u.email');
		$this->db->join('jabat j','j.id = u.jabat','left');
		$this->db->join('divisi d','d.id = u.div','left');
		$this->db->order_by('nama','asc');
		$query = $this->db->get('user u');
		
		return $query->result();
	}
	
	function get_jabat_all()	{
		$this->db->select('j.id, j.nama');
		$this->db->order_by('nama','asc');
		$query = $this->db->get('jabat j');
		
		return $query->result();
	}
	
	function get_divisi_all()	{
		$this->db->select('d.id, d.nama');
		$this->db->order_by('nama','asc');
		$query = $this->db->get('divisi d');
		
		return $query->result();
	}
	
	function upd_user($data,$idusr)		{
		//$this->db->set($data);
		$this->db->where('idusr', $idusr);
		return $this->db->update('user',$data);
	}
	
	function del_user($id)	{
		
		$this->db->where('idusr', $id);
		if ($this->db->delete('user'))	{
			return array('idusr' => $id);
		}
		return array('id' => -1);
	}
	
	function check_exist_user($data)	{
		$this->db->select('count(u.id) AS jml');
		$this->db->where('uname',$data->uname);
		$this->db->or_where('idusr',$data->idusr);
		//$this->db->or_where('email',$data->email);
		$query = $this->db->get('user u');
		return $query->result();
	}
	
	function set_user($data)	{
		$this->db->trans_start();
		$this->db->set($data);
		$this->db->insert('user');
		$insert_id = $this->db->insert_id();
		$this->db->trans_complete();
		
		return $insert_id;
	}
}

/* End of file option.php */
/* Location: ./application/models/option.php */
