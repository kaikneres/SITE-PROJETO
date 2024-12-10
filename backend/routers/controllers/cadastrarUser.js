class Usuario {
  static db = require("./model/modelUser");
  static async cadastrarusuario(req, res) {
    try {
      const { nome, email } = req.body;
      console.log(req.body);

      Usuario.verificarEmail(email);
      Usuario.verificarValoresInput(nome, email);
      await Usuario.verificarEmailExiste(email);
      await Usuario.insertDadosUsuario(nome, email, res);
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  }

  static async verificarEmailExiste(email) {
    const emailExiste = await this.db.findOne({ email: email });

    if (emailExiste) {
      await this.db.db.close();
      throw new Error("O email ja existe em nosso banco de dados, informe outro email." );
    }
    
  }

  static verificarValoresInput(nome, email) {
    if (!nome || !email) {
      throw new Error("Por favor informe os inputs acima.");
    }
  }

  static verificarEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!regex.test(email)) {
      throw new Error("Informe um email valido.");
    }
  }

  static async insertDadosUsuario(nome, email, res) {
    try {
      const inserirDados = new this.db({ nome: nome, email: email });
      await inserirDados.save();
      res.status(201).send({ sucess: `Usuario cadastrado com sucesso!` });
    } catch (error) {
      throw new Error("falha ao cadastrar usuario, tente novamente mais tarde." );
    } finally {
      await this.db.db.close();
    }
  }
}

module.exports = Usuario;
