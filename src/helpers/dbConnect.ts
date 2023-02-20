import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI; // get mongodb uri

declare const global: CustomNodeJsGlobal;

// Cached connection across hot reloads in dev mode. Prevent connections growing during API Route usage.
let cached = global.mongoose;

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
}

// connect to MongoDB
async function dbConnect() {
    if (cached.conn) {
        return cached.conn;
    }

    if (!cached.promise) {
        // check if mongodb uri exist
        if (!MONGODB_URI) {
            throw new Error(
                'Please define the MONGODB_URI environment variable.'
            );
        }

        const opts = {};

        cached.promise = mongoose
            .set('strictQuery', false)
            .connect(MONGODB_URI, opts)
            .then((mongoose) => {
                return mongoose;
            });
    }
    cached.conn = await cached.promise;
    return cached.conn;
}

export default dbConnect;
