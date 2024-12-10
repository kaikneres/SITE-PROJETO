

class Registro {
  static buttom = document .querySelector('button')
  static async httpRequest(nome, email){
    try {
      const httpRequest = await fetch(`http://localhost:8080/cadastrar`, {
        method: `POST`,
        body: JSON.stringify({ nome: nome, email: email }),
        headers: {
          "Content-Type": "application/json",
        },
      });
    
      const response = await httpRequest.json();
      if(httpRequest.ok){
        alert(`user cadastrado com sucesso.`)
      }
      
    } catch (error) {
      alert(JSON.stringify(error.message))
    }
  }


  static async userDados(){
    const nome = document.getElementById('InputName1').value;
    const email = document.getElementById('InputEmail1').value;
    await this.httpRequest(nome, email)
  } 

  static buttomevent () {
  this.buttom.addEventListener('click',this.userDados() )
  }
  
}  

Registro.buttomevent()
