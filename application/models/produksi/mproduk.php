<?php

class Mproduk extends CI_Model {

	function get_detail_proyek($id)	{
		$this->db->select('p.id,p.nama,p.almt,p.jangka,UPPER(c.nama) AS cab,UPPER(p.lahan) AS lahan,p.jml AS jml');
		//$this->db->order_by('nama','asc');
		$this->db->where('p.id', $id);
		$this->db->join('cabang c','c.id = p.cab','left');
		$query = $this->db->get('proyek p');
		
		return $query->result();
	}
	
	function get_produk_house($lok)	{
		$sql =	"SELECT h.lok,h.id AS hid,1 AS mdl,'LANDED HOUSE' AS model,h.ltnh,h.lbang,h.jml,h.blok,
				h.harga,h.hklt,h.stbg,h.st,h.tipe,h.tipe1,h.tipe2,h.tipe3,h.klt,h.jenis
				FROM house h
				WHERE h.lok = $lok";
		$query = $this->db->query($sql);
		return $query->result();
		
		/*
		$this->db->select('1 AS mdl,1 AS model,h.ltnh,h.lbang,h.jml,h.blok,h.tipe1,h.tipe2,h.tipe3,h.klt');
		$this->db->select('h.harga,h.hklt,h.stbg,h.st');
		//$this->db->order_by('h.mdl','asc');
		$query = $this->db->get('house h');
		
		return $query->result();
		//*/
	}
	
	function set_produk($data,$tabel)	{
		$this->db->trans_start();
		$this->db->set($data);
		$this->db->insert($tabel);
		$insert_id = $this->db->insert_id();
		$this->db->trans_complete();
		
		return $insert_id;
	}
	
	function upd_produk($data,$id,$tabel)		{
		$this->db->where('id', $id);
		return $this->db->update($tabel,$data);
	}

	function get_proyek_all()	{
		$this->db->select('p.id,p.nama,p.almt,p.cab,UPPER(c.nama) AS cnama,p.jangka,p.lbang,p.ltaman,p.linfra');
		$this->db->select('p.lbang,p.ltaman,p.linfra,p.lklt,UPPER(p.lahan) AS lahan');
		$this->db->join('cabang c','c.id = p.cab','left');
		$this->db->order_by('nama','asc');
		$query = $this->db->get('proyek p');
		
		return $query->result();
	}
	
	function get_proyek_nama()	{
		$this->db->select('p.id,p.nama');
		$this->db->order_by('nama','asc');
		$query = $this->db->get('proyek p');
		
		return $query->result();
	}
	
	function get_cabang_all()	{
		$this->db->select('c.id, c.nama');
		$this->db->order_by('nama','asc');
		$query = $this->db->get('cabang c');
		
		return $query->result();
	}
	
	function get_divisi_all()	{
		$this->db->select('d.id, d.nama');
		$this->db->order_by('nama','asc');
		$query = $this->db->get('divisi d');
		
		return $query->result();
	}
	
	function upd_proyek($data,$id)		{
		//$this->db->set($data);
		$this->db->where('id', $id);
		return $this->db->update('proyek',$data);
	}
	
	function del_proyek($id)	{
		
		$this->db->where('id', $id);
		if ($this->db->delete('proyek'))	{
			return array('id' => $id);
		}
		return array('id' => -1);
	}
	
	function check_exist_proyek($data)	{
		$this->db->select('count(p.id) AS jml');
		$this->db->where('nama',$data->nama);
		$this->db->where('cab',$data->cab);
		$query = $this->db->get('proyek p');
		return $query->result();
	}
	
	
}

/* End of file option.php */
/* Location: ./application/models/option.php */
