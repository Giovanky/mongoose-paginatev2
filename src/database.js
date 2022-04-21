const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/paginate-app', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log(db.connection.host))
    .catch(err => console.error(err))