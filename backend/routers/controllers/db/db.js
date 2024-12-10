class MongooseDatabase {
  static #mongoose = require("mongoose");
  static #url = "mongodb+srv://admin:admin1234@dados.7d94myt.mongodb.net/cadastrousuariosatenas";
  static async ConnectDatabase() {
    try {
      await this.#mongoose.connect(this.#url);
      console.log("db connect Mongodb");
    } catch (error) {
      console.error(error);
    }
  }
}


module.exports = MongooseDatabase