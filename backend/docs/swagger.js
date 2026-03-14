import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";

const options = {

 definition:{
  openapi:"3.0.0",
  info:{
   title:"Scalable REST API",
   version:"1.0.0"
  }
 },

 apis:["./routes/*.js"]

};

const swaggerSpec = swaggerJsdoc(options);

export const setupSwagger = (app)=>{
 app.use("/api-docs",swaggerUi.serve,swaggerUi.setup(swaggerSpec));
};