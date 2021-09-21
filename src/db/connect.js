import mongoose from 'mongoose';

import config from '../config/index.js';

function connect() {
    return mongoose.connect(config.db.url);
}

export default connect;
