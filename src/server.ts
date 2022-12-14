import dotenv from 'dotenv';
import app from './app';
dotenv.config();

const PORT = process.env.PORT || 5009;

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
