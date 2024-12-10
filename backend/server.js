const MongooseDatabase = require("./routers/controllers/db/db");



class Express {
  static #api = require("express")();
  static bodyParser = require(`body-parser`)
  static router = require("./routers/router");
  static cors = require(`cors`)
  static configSwagger = require(`./swaggerConfig`)
  static swaggerUi = require('swagger-ui-express') 
  static expressConfig() {
    this.#api.use(this.bodyParser.json())
    this.#api.use(this.cors())
    this.#api.use(this.router)

    const port = 8080 || process.env.PORT;
    this.#api.use(`/doc`, this.swaggerUi.serve, this.swaggerUi.setup(this.configSwagger.configSwagger()))
    this.#api.listen(port, async () => {
      await MongooseDatabase.ConnectDatabase();
      console.log(`Servidor rodando na porta ${port}`);
    });
  }
}


Express.expressConfig();