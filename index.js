import express from "express";
import path from "path";
//import {requestTime, logger} from "./middlewares.js";

const __dirname = path.resolve();
const app = express();

//to create server on port 3000, listen 
const PORT = process.env.PORT ?? 3000; //разные порты требуются для продакшена и разработки. process.env. - встоенная глобальная переменная - проверяет есть ли переменная порт - если есть - берем ее, если нет - ставит 3000 

//вариант создания сатичной папки из которой берем файлы - чtоб не прописывать везде путь (все, что ниже закомментировано)
app.use(express.static(path.resolve(__dirname, "public")))
//использование миддлвэра
//app.use(requestTime);
//app.use(logger);

//переход/возврат на главную страницу
//app.get ("/", (req,res)=>{
    //res.send ("<h1>Hello Express!</h1>");
 //   res.sendFile(path.resolve(__dirname, "public", "index.html"))
//});

//переход на страницу фич
//app.get ("/features", (req,res)=>{
//    res.sendFile(path.resolve(__dirname, "public", "features.html"))
//});


//сохрaнить страницу в загрузки
app.get ("/download", (req,res)=>{
    console.log (req.requestTime);
    res.download(path.resolve(__dirname, "public", "index.html"))
});


app.listen(PORT, ()=>{
    console.log (`Server has been started on port ${PORT}...`);
}); 

