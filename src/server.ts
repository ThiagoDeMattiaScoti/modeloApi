import app from "./app";
import { PORT } from "./config/env";

app.listen(PORT || 3333, ()=>{ //inicia o servidor com a porta do arquivo de enviroments ou a 3333
    console.log('Servidor ligado')
})

