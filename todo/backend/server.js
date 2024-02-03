import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';

const app = express();

const PORT = process.env.PORT || 3000;

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.get('/', (req, res) => {
  res.send('Server is ready');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
