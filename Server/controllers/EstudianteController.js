const EstudianteDAO = require('../DAOs/EstudianteDAO');
const EstudianteModel = require('../models/EstudianteModel');
const XLSX = require('xlsx');

class EstudianteController {
    static async getAllEstudiantes(req, res) {
        const { id } = req.params;
        try {
            const estudiantes = await EstudianteDAO.getAll(id);
            res.status(200).json(estudiantes);
        } catch (error) {
            res.status(500).json({ error: 'Error getting estudiantes' });
        }
    }

    static async getEstudianteById(req, res) {
        const {id} = req.params;
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
       const id = parseInt(req.params.id);
        const {carnet, nombre, apellido1, apellido2, correo, telefono, Sede } = req.body;
        const estudiante = new EstudianteModel(id, carnet,nombre, apellido1, apellido2, correo, telefono, Sede);
        try {
            const result = await EstudianteDAO.update(estudiante, id);
            res.status(200).json({ message: 'Estudiante updated successfully', result});
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
        console.log(req.file);
        if (!req.file) {
            return res.status(400).json({ error: 'No file uploaded' });
        }
        //validate file extension excel
        if (req.file.mimetype !== 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
            return res.status(400).json({ error: 'Invalid file type' });
        }
        try{
            const file = req.file.buffer;
            
            const workbook = XLSX.read(file, { type: 'buffer' });
            const sheetName = workbook.Sheets[workbook.SheetNames[0]];
            const data = XLSX.utils.sheet_to_json(sheetName);
            //loop enter data to estudianteDAO one by one
            for (const estudiante of data) {
                const { carnet, nombre, apellido1, apellido2, correo, telefono, sede } = estudiante;
                const estudianteModel = new EstudianteModel(1, carnet, nombre, apellido1, apellido2, correo, telefono, Sede, 1, 1);
                await EstudianteDAO.create(estudianteModel, 1);
            }
            res.status(200).json({ message: 'Estudiantes created successfully', data });
        }catch (error){
            console.error(error);
            res.status(500).json({ error: 'Error reading file' });
        }
        
    }

    static async createFileFromEstudiantes(req, res){
        try{
            const {sede, modo} = req.body;
            const estudiantes = await EstudianteDAO.getAll(1)
            const workbook = XLSX.utils.book_new();
            let excelBuffer = null;
            let nombreArchivo = '';
            if (modo === 0) {
                let listaFiltrados = []
                estudiantes.forEach(async (estudiante) =>{
                    const sedeEstudiante = estudiante.Sede
                    if (sedeEstudiante == sede){
                        listaFiltrados.push(estudiante)
                    }
                })
                const worksheet = XLSX.utils.json_to_sheet(listaFiltrados);
                XLSX.utils.book_append_sheet(workbook, worksheet, 'Estudiantes');
                excelBuffer = XLSX.write(workbook,  { bookType: 'xlsx', type: 'buffer' });
                res.setHeader('Content-Disposition', 'attachment; filename=EstudiantesSede.xlsx');
                nombreArchivo = "EstudiantesSede.xlsx"
            }else{
                const sedes = ['Cartago', 'Limon', 'San Jose', 'San Carlos', 'Alajuela'];
                sedes.forEach(async (sedeFiltro) =>{
                    let listaFiltrados = []
                    estudiantes.forEach(async (estudiante) =>{
                        const sedeEstudiante = estudiante.Sede
                        if (sedeEstudiante == sedeFiltro){
                            listaFiltrados.push(estudiante)
                        }
                    })
                    const worksheet = XLSX.utils.json_to_sheet(listaFiltrados);
                    XLSX.utils.book_append_sheet(workbook, worksheet, sedeFiltro);
                })
                excelBuffer = XLSX.write(workbook,  { bookType: 'xlsx', type: 'buffer' });
                res.setHeader('Content-Disposition', 'attachment; filename=Estudiantes.xlsx');
                nombreArchivo = "Estudiantes.xlsx"

            }
            res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
            return res.send({archivo: excelBuffer, nombre: nombreArchivo});
            
        }catch (error){
            console.error(error);
            res.status(500).json({ error: 'Error creating file' });
        }
    }
    
}

module.exports = EstudianteController;
