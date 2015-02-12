<?php

class Mrab extends CI_Model {

	function get_all_group_rab()	{
		$this->db->select('g.id,g.nama,g.kode,g.ket');
		$this->db->order_by('kode','asc');
		$query = $this->db->get('groupRab g');
		
		return $query->result();
	}
	
	function cGRab($data)	{
		$this->db->trans_start();
		$this->db->insert('groupRab', $data);
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
	
	function get_all_jdl_group_rab()	{
		$sql = "SELECT kode 
				FROM groupRab ORDER BY kode asc";
		$query = $this->db->query($sql);
		/*
		$this->db->select("CONCAT(g.kode,:,kode) as kode");
		$this->db->order_by('kode','asc');
		$query = $this->db->get('groupRab g');
		//*/
		return $query->result();
	}
	
	function get_tpl_rab()	{
		/*
		$this->db->select('id,grup,kode,CONCAT(grup,`-`,LPAD(kode, 4, `0`)) AS nom,nama,ket');
		$this->db->order_by('group','asc');
		$this->db->order_by('kode','asc');
		$query = $this->db->get('lrab g');
		//*/
		
		$sql = "SELECT lr.id,grup,CONCAT(grup,' - ',gb.nama) as klp, lr.kode,CONCAT(grup,'-',LPAD(lr.kode, 4, '0')) AS nom
				,lr.nama,lr.ket,lr.default as def
				FROM lrab lr
				LEFT JOIN groupRab gb ON gb.kode = lr.grup
				ORDER BY grup ASC, lr.kode ASC";
		$query = $this->db->query($sql);
		return $query->result();
	}
	
	function ctRab($data)	{
		$this->db->trans_start();
		$sql = "SELECT IFNULL(MAX(kode),0)+1 AS no FROM lrab WHERE grup='{$data->grup}'";
		$query = $this->db->query($sql);
		//print_r($query->result());
		$no = $query->result()[0]->no;
		//echo "no: $no";
		
		$sql = "INSERT INTO lrab (grup,kode,`default`,nama,ket) 
					VALUES ('{$data->grup}','$no','{$data->default}','{$data->nama}','{$data->ket}')";
		//echo "sql: $sql";
		$query = $this->db->query($sql);

		$this->db->trans_complete();
	}
	
	
	function utRab($data,$id)	{
		$this->db->trans_start();
		$sql = "SELECT kode AS no, grup FROM lrab WHERE grup='{$id}'";
		$query = $this->db->query($sql);
		$hsl = $query->result()[0];
		
		
		
		
		if ($hsl->grup===$data->grup)	{
			$sql = "SELECT kode AS no FROM lrab WHERE id='{$id}'";
			$query = $this->db->query($sql);
			$data->kode = $query->result()[0]->not;
		}
		else {
			$sql = "SELECT IFNULL(MAX(kode),0)+1 AS no FROM lrab WHERE grup='{$data->grup}'";
			$query = $this->db->query($sql);
			$data->kode = $query->result()[0]->no;
		}
		
		$this->db->where('id', $id);
		$this->db->update('lrab', $data); 

		$this->db->trans_complete();
	}
	
	function dtRab($id)	{
		$this->db->where('id', $id);
		if ($this->db->delete('lrab'))	{
			return array('id' => $id);
		}
		return array('id' => -1);
	}
}

/* End of file option.php */
/* Location: ./application/models/option.php */
