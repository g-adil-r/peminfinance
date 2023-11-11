const Maintenance = require('../models/maintenance.model');

async function createMaintenance(req, res) {
    const maintenance = new Maintenance({
        datetime: req.body.datetime,
        day_duration: req.body.day_duration,
        cost: req.body.cost
    })

    try {
        const newMaintenance = await maintenance.save();
        res.status(200).json({
            message: 'Membuat data maintenance baru berhasil',
            data: newMaintenance
        })
    } catch (error) {
        res.status(500).json({
            message: 'kesalahan saat menambah data',
            error: error.message,
        })
    }
}

async function getAllMaintenance(req, res) {
    try {
        const maintenances = await Maintenance.find();
        res.status(200).json({
            message: 'Mendapat semua data berhasil',
            maintenances
        })
    } catch (error) {
        res.status(500).json({
            message: 'kesalahan saat mendapat data',
            error: error.message,
        })
    }
}

async function getMaintenanceById(req, res) {
    const id = req.params.id

    try {
        const maintenance = await Maintenance.findById(id);
        res.status(200).json({
            message: `Mendapat data dari id ${id} berhasil`,
            maintenance
        })
    } catch (error) {
        res.status(500).json({
            message: 'kesalahan saat mendapat data',
            error: error.message,
        })
    }
}

async function updateMaintenance(req, res) {
    const id = req.params.id

    try {
        const newMaintenance = await Maintenance.findByIdAndUpdate(
            id, req.body, { new: true }
        )
        res.status(200).json({
            message: 'Memperbarui satu data',
            newMaintenance,
        })
    } catch (error) {
        res.status(500).json({
            message: 'kesalahan saat memperbarui data',
            error: error.message,
        })
    }
}

async function deleteMaintenance(req, res) {
    const id = req.params.id

    try {
        await Maintenance.findByIdAndDelete(id)
        res.status(200).json({
            message: `Menghapus data dengan id ${id}`
        })
    } catch (error) {
        res.status(500).json({
            message: 'kesalahan saat menghapus data',
            error: error.message,
        })
    }
}

module.exports = {
    createMaintenance,
    getAllMaintenance,
    getMaintenanceById,
    updateMaintenance,
    deleteMaintenance,
}