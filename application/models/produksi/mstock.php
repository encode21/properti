<?php

class Mstock extends CI_Model {

	function get_tipe_stock($id)	{
		$sql =	"SELECT CONCAT(model,'d',id) AS id,CONCAT('LANDED HOUSE ',IFNULL(CONCAT('tipe ',tipe),'')) jdl 
					FROM house WHERE lok=$id
				UNION all 
				SELECT CONCAT(model,'d',id) AS id,CONCAT('HIGHRISE ',IFNULL(CONCAT('tipe',tipe),'')) AS jdl 
					FROM high WHERE lok=$id";
		$query = $this->db->query($sql);
		return $query->result();
	}

	function get_ndr($id, $pr)	{
		if ($id==1)	{
			$this->db->select('n.id,n.ndr,n.lbang,n.ltnh,n.klt,n.tipe1,n.harga,n.hklt,n.stbg,n.st');
			$this->db->order_by('ndr','desc');
			$this->db->where('n.house',$pr);
			$query = $this->db->get('ndr_house n');
		}
		if ($id==2)	{
			
		}

		return $query->result();
	}
	
	function get_ndr_house($pr,$tp,$ndr)	{
		//echo "pr: $pr, tp: $tp, ndr: $ndr<br/>";
		$sf = $pr?"WHERE nh.house in (SELECT id FROM house h WHERE h.lok=$pr)":"";
		$sf = (intval($tp)>0)?"WHERE nh.house in ($tp)":$sf;	
		$sf = ($ndr!=='')?"WHERE nh.ndr like '%$ndr%'":$sf;

		$sql =	"SELECT * FROM ndr_house nh $sf";
		
		//echo "sql: $sql<br/>";
		$query = $this->db->query($sql);
		return $query->result();
	}
	
	function get_ndr_judul($pr,$tp,$ndr)	{
		//echo "pr: $pr, tp: $tp, ndr: $ndr<br/>";
		$sf = $pr?"WHERE nh.house in (SELECT id FROM house h WHERE h.lok=$pr)":"";
		$sf = (intval($tp)>0)?"WHERE nh.house in ($tp)":$sf;	
		$sf = ($ndr!=='')?"WHERE nh.ndr like '%$ndr%'":$sf;

		$sql =	"SELECT id,ndr FROM ndr_house nh $sf";
		
		//echo "sql: $sql<br/>";
		$query = $this->db->query($sql);
		return $query->result();
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
	
	function set_proyek($data)	{
		$this->db->trans_start();
		$this->db->set($data);
		$this->db->insert('proyek');
		$insert_id = $this->db->insert_id();
		$this->db->trans_complete();
		
		return $insert_id;
	}
}

/* End of file option.php */
/* Location: ./application/models/option.php */
