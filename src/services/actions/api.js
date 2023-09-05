const clientHttp = require('../utils/clientHttp')
const { get } = clientHttp

// Search - University
const getSearchUniversity = (body) => get(`hit/${body}`)
const getDetailUniversity = (body) => get(`v2/detail_pt/${body}`)
const getDataUniversity = (body) => get(`v2/detail_pt_jumlah/${body}`)
const getProdiAtUniversity = (body) => get(`v2/detail_pt_prodi/${body}`)
const getDetailProdi = (body) => get(`detail_prodi/${body}`)
const getSearchProdi = (body) => get(`hit/${body}`)

// const SEARCHUniversity = (data) => GET(`hit/${data}`)
// const SEARCHProdi = (data) => GET(`hit/${data}`)
// const GETDetailUniversity = (data) => GET(`v2/detail_pt/${data}`)
// const GETDataUniversity = (data) => GET(`v2/detail_pt_jumlah/${data}`)
// const GETProdiAtUniversity = (data) => GET(`v2/detail_pt_prodi/${data}`)
// const GETDetailProdiByIdSms = (data) => GET(`detail_prodi/${data}`)

module.exports = {
	getSearchUniversity,
	getDataUniversity,
	getDetailUniversity,
	getProdiAtUniversity,
	getDetailProdi,
	getSearchProdi,
}
