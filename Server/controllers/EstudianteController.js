const EstudianteDAO = require('../DAOs/EstudianteDAO');
const EstudianteModel = require('../models/EstudianteModel');
const XLSX = require('xlsx');

class EstudianteController {
    static async getAllEstudiantes(req, res) {
        try {
            const estudiantes = await EstudianteDAO.getAll();
            res.status(200).json(estudiantes);
        } catch (error) {
            res.status(500).json({ error: 'Error getting estudiantes' });
        }
    }

    static async getEstudianteById(req, res) {
        const id = req.params.id;
        try {
            const estudiante = await EstudianteDAO.getById(id);
            res.status(200).json(estudiante);
        } catch (error) {
            res.status(500).json({ error: 'Error getting estudiante by id' });
        }
    }

    static async createEstudiante(req, res) {
        const { carnet, nombre, apellido1, apellido2, correo, telefono, sede, estado, equipo } = req.body;
        const estudiante = new EstudianteModel(carnet, nombre,apellido1,apellido2, correo, telefono, sede, estado, equipo);
        try {
            const result = await EstudianteDAO.create(estudiante);
            res.status(201).json({ message: 'Estudiante created successfully', result });
        } catch (error) {
            res.status(500).json({ error: 'Error creating estudiante' });
        }
    }

    static async updateEstudiante(req, res) {
        const id = req.params.id;
        const { nombre, apellido1, apellido2, correo, telefono, sede, estado, equipo } = req.body;
        const estudiante = new EstudianteModel(id, nombre, apellido1, apellido2, correo, telefono, sede, estado, equipo);
        try {
            const result = await EstudianteDAO.update(estudiante);
            res.status(200).json({ message: 'Estudiante updated successfully', result });
        } catch (error) {
            res.status(500).json({ error: 'Error updating estudiante' });
        }
    }

    static async deleteEstudiante(req, res) {
        const id = req.params.id;
        try {
            const result = await EstudianteDAO.delete(id);
            res.status(200).json({ message: 'Estudiante deleted successfully', result });
        } catch (error) {
            res.status(500).json({ error: 'Error deleting estudiante' });
        }
    }
    /**
     * Method to create an estudiante from xlsx file and save it in the database
     * @param {*} req 
     * @param {*} res 
     * 
     */
    static async createEstudianteFromFile(req, res) {
        /**Decide to handle excelfile here or other class for SRP (SOLID) */
        console.log(req.body);
        if (!req.file) {
            res.status(400).json({ error: 'No file uploaded' });
            return;
        }
        try{
            const file = req.file.buffer;
            
            const workbook = XLSX.read(file, { type: 'buffer' });
            const sheetName = workbook.Sheets(workbook.SheetNames[0]);
            const data = XLSX.utils.sheet_to_json(sheetName);
            console.log(data);
            //loop enter data to estudianteDAO one by one
            data.forEach(async (estudiante) => {
                const { carnet, nombre, apellido1, apellido2, correo, telefono, sede, estado, equipo } = estudiante;
                const estudianteModel = new EstudianteModel(carnet, nombre, apellido1, apellido2, correo, telefono, sede, estado, equipo);
                await EstudianteDAO.create(estudianteModel);
            });
            res.status(200).json({ message: 'Estudiantes created successfully' });
        }catch (error){
            console.error(error);
            res.status(500).json({ error: 'Error reading file' });
        }
        
    }

    
}

module.exports = EstudianteController;
