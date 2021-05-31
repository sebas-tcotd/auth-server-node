const mongoose = require("mongoose");

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.DB_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        console.log('¡Base de datos online! (⌐■_■)');
    }
    catch (error) {
        console.log(error);
        throw new Error('Hubo un error al momento de iniciar la base de datos. X﹏X');
    }
}

module.exports = {
    dbConnection
}