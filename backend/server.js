
import express from 'express';

const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Hello from Backend');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;
