const mongoose = require('mongoose');

// Подключение к MongoDB
mongoose.connect('mongodb+srv://Username:Password@cluster0.iqnp7qd.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

// Обработчики событий подключения
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('MongoDB connection success');
});

module.exports = db;

