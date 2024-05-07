const mailer = require('nodemailer');

class EmailSender {
    constructor() {
        this.transporter = mailer.createTransport({
            host: 'smtp-mail.outlook.com',
            port: 587,
            secure: false,
            auth: {
                user: 'proyecto.ds.grupo5@hotmail.com',
                pass: 'ProyectoDS2024'
            }
        });
        this._from = 'proyecto.ds.grupo5@hotmail.com';
    }

    // Método para enviar correo de recuperación de contraseña
    static async sendEmailRestorePassword(email, token){
        try {
            const sender = new EmailSender(); // Crear una instancia de EmailSender
            await sender.transporter.sendMail({
                from: sender._from,
                to: email,
                subject: 'Recuperación de contraseña',
                text: `Para restablecer tu contraseña, ingresa el siguiente token en la aplicación (expira en 15 minutos): ${token}`
            });
        } catch (error) {
            console.log('Error sending email recover password: ', error);
        }
    }

    // Método para enviar correo genérico
    static async sendEmail(email, subject, text){
        try {
            const sender = new EmailSender(); // Crear una instancia de EmailSender
            await sender.transporter.sendMail({
                from: sender._from,
                to: email,
                subject: subject,
                text: text
            });
        } catch (error) {
            console.log('Error sending email: ', error);
        }
    }
    /* Implementación de función para enviar correos de archivos */
}

module.exports = EmailSender;