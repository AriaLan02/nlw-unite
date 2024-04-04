//objeto js
const participante={
  nome: "Mayk Brito",
  email: "mayk@gmail.com",
  dataInscricao: new Date(2024,2,22,19,20),
  dataCheckIn: new Date(2024,2,25,22,00)
}

//array
let participantes =[
  {
  nome: "Mayk Brito",
  email: "mayk@gmail.com",
  dataInscricao: new Date(2024,2,22,19,20),
  dataCheckIn: new Date(2024,2,25,22,00)
  },
]

 //estrutura de repetição
  for(let participante of participantes){
     output = output + criarNovoParticipante(participante)
  }