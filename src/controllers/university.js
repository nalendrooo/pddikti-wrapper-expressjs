const {
	getSearchUniversity,
	getDataUniversity,
	getDetailUniversity,
	getProdiAtUniversity,
	getDetailProdi,
	getSearchProdi,
} = require('../services/actions/api')

const searchUniversity = async (req, res) => {
	const { universitas } = req.body
	if (!req.body || !universitas) {
		return res.status(400).json({
			status: 'failed',
			message: 'Tidak ada universitas dicari',
		})
	}
	try {
		const response = await getSearchUniversity(universitas)
		if (
			response.pt.length === 1 &&
			response.pt[0].text === `Cari kata kunci ${universitas} pada Data Perguruan Tinggi`
		) {
			return res.status(400).json({
				status: 'failed',
				message: 'Univeristas tidak ditemukan',
			})
		}
		const result = response.pt.map((index) => {
			const data = index.text.split(', ')
			const university = data[0].split(': ')
			const npsn = data[1].split(':       ')
			const singkatan = data[2].split(': ')
			const alamat = data[3].split(': ')
			const id = index['website-link'].substring(index['website-link'].lastIndexOf('/') + 1)
			return {
				id: id,
				university: university[1],
				npsn: npsn[1],
				singkatan: singkatan[1],
				alamat: alamat[1],
			}
		})
		res.json({
			status: 'success',
			message: 'Semua data universitas',
			data: result,
		})
	} catch (error) {
		console.error(error)
		return res.status(400).json({
			status: 'failed',
			message: 'Univeristas tidak ditemukan',
		})
	}
}

const searchProdi = async (req, res) => {
	const { prodi } = req.body

	if (!req.body || !prodi) {
		res.status(400).json({
			status: 'failed',
			message: 'Prodi tidak ditemukan',
		})
	}

	try {
		const response = await getSearchProdi(prodi)
		const result = response.prodi.map((index) => {
			const data = index.text.split(', ')
			const prodi = data[0].split(': ')
			const jenjang = data[1].split(': ')
			const universitas = data[2].split(': ')
			const id = index['website-link'].substring(index['website-link'].lastIndexOf('/') + 1)
			return {
				id: id,
				prodi: prodi[1],
				jenjang: jenjang[1],
				universitas: universitas[1],
			}
		})

		res.json(result)
	} catch (error) {
		console.error(error)
		res.status(500).json({
			status: 'failed',
			message: 'Prodi tidak ditemukan',
		})
	}
}

const universityDetail = async (req, res) => {
	const { id } = req.body

	if (!req.body || !id) {
		res.status(400).json({
			status: 'failed',
			message: 'Id universitas tidak ditemukan',
		})
	}

	try {
		const response = await getDataUniversity(id)
		const response2 = await getDetailUniversity(id)

		const result = {
			id: response2.id_sp,
			status: response.stat_sp,
			universitas: response2.nm_lemb,
			tanggalBerdiri: response2.tgl_berdiri.slice(0, 10),
			jalan: response2.jln,
			wilayah: response2.nama_wil,
			telephone: response2.no_tel,
			fax: response2.no_fax,
			email: response2.email,
			website: response2.website,
			kodePos: response2.kode_pos,
			rektor: response2.nama_rektor,
			npsn: response2.npsn,
			status: response2.stat_sp,
			jumlahFakultas: response.jumlalah_fakultas,
			jumlahProdi: response.jumlah_prodi,
			jumlahProdiAkreditasi: response.jumlah_prodi_akreditasi,
		}

		res.status(200).json({
			status: 'success',
			message: 'Data universitas',
			data: result,
		})
	} catch (error) {
		console.error(error)
		res.status(400).json({
			status: 'failed',
			message: 'Universitas tidak ditemukan',
		})
	}
}

const prodiAtUniversity = async (req, res) => {
	const { id } = req.body

	if (!req.body || !id) {
		res.status(400).json({
			status: 'failed',
			message: 'Id universitas tidak ditemukan',
		})
	}
	try {
		const response = await getProdiAtUniversity(id)

		const result = response.map((index) => {
			return {
				idProdi: index.id_sms,
				kode: index.kode_prodi,
				prodi: index.nm_lemb,
				status: index.stat_prodi,
				jenjang: index.jenjang,
				akreditas: index.akreditas,
			}
		})
		res.json({
			status: 'success',
			message: 'Data universitas',
			data: result,
		})
	} catch (error) {
		console.error(error)
		res.status(400).json({
			status: 'failed',
			message: 'Universitas tidak ditemukan',
		})
	}
}
const prodiDetail = async (req, res) => {
	const { idProdi } = req.body

	if (!req.body || !idProdi) {
		res.status(400).json({
			status: 'failed',
			message: 'Id prodi tidak ditemukan',
		})
	}
	try {
		const response = await getDetailProdi(idProdi)
		const id_sp = response.detailumum.linkpt.split('/')[2]
		const data = response.detailumum
		const result = {
			id: data.id_sms,
			npsn: data.npsn,
			status: data.stat_prodi,
			universitas: data.namapt,
			kode: data.kode_prodi,
			idUniversitas: id_sp,
			prodi: data.nm_lemb,
			jenjang: data.namajenjang,
			tanggal_berdiri: data.tgl_berdiri,
			sk_selenggara: data.sk_selenggara,
			jalan: data.jln,
			kode_pos: data.kode_pos,
			telephone: data.no_tel,
			fax: data.no_fax,
			email: data.email,
			website: data.website,
			deskripsi: data.deskripsi,
			visi: data.visi,
			misi: data.misi,
			kompetensi: data.kompetensi,
			capaian: data.capaian,
			akreditas: data.akreditas,
		}
		res.json({
			status: 'success',
			message: 'Data prodi',
			data: result,
		})
	} catch (error) {
		console.error(error)
		res.status(400).json({
			status: 'failed',
			message: 'Prodi tidak ditemukan',
		})
	}
}

module.exports = { searchUniversity, universityDetail, prodiAtUniversity, prodiDetail, searchProdi }
