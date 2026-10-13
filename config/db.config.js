import mongoose from "mongoose";


const DB_Connect = () => {
    mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Database connected successfully');
  })
  .catch((err) => {
    console.error('Failed to connect to the database', err.message);
  });
}

export default DB_Connect;