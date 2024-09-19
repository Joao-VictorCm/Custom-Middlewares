import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3001;

// Obter o diretório corretamente no ES Modules
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Middleware para servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Servir o arquivo index.html
app.get("/", (req, res) => {
  res.setHeader('Content-Type', 'text/html'); // Força o tipo MIME para HTML
  res.removeHeader('Content-Disposition'); // Remove cabeçalhos que forçam download
  res.sendFile(path.join(__dirname, "public", "test.html"));
});


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
