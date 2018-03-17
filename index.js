import app from './app/src/server';

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`servidor rodando na porta ${PORT}`);
});
