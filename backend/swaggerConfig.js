class SwaggerApiDocs {
  static #swaggerJsdoc = require("swagger-jsdoc");

  static configSwagger() {
    const options = {
      definition: {
        openapi: "3.0.0",
        info: {
          title: "Sistema de energia solar",
          version: "1.0.0",
          description: "Documentação de como utilizar api da real solar.",
        },
      },
      apis: ["./routers/*.js"],
    };

    return this.#swaggerJsdoc(options)
  }
}


module.exports = SwaggerApiDocs