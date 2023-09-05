const express = require('express')
const router = express.Router()

const Controller = require('../controllers/university')

router.get('/cari', Controller.searchUniversity)
router.get('/detail', Controller.universityDetail)
router.get('/prodi', Controller.prodiAtUniversity)
router.get('/prodi/detail', Controller.prodiDetail)
router.get('/cari/prodi', Controller.searchProdi)

module.exports = router
