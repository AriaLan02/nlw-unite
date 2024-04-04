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

  {
  nome: "Diego Fernandes",
  email: "diego@gmail.com",
  dataInscricao: new Date(2024,2,22,19,20),
  dataCheckIn: new Date(2024,2,25,22,00)
  },
   {
    nome: "Fernanda Lima",
    email: "fernanda@gmail.com",
    dataInscricao: new Date(2024, 2, 23, 10, 30),
    dataCheckIn: null
  },
  {
    nome: "Carlos Silva",
    email: "carlos@gmail.com",
    dataInscricao: new Date(2024, 2, 23, 14, 45),
    dataCheckIn: new Date(2024, 2, 26, 10, 30)
  },
  {
    nome: "Ana Souza",
    email: "ana@gmail.com",
    dataInscricao: new Date(2024, 2, 24, 8, 0),
    dataCheckIn: new Date(2024, 2, 27, 9, 45)
  },
  {
    nome: "Lucas Oliveira",
    email: "lucas@gmail.com",
    dataInscricao: new Date(2024, 2, 24, 12, 15),
    dataCheckIn: null
  },
  {
    nome: "Juliana Santos",
    email: "juliana@gmail.com",
    dataInscricao: new Date(2024, 2, 25, 9, 30),
    dataCheckIn: new Date(2024, 2, 28, 11, 15)
  },
  {
    nome: "Roberto Almeida",
    email: "roberto@gmail.com",
    dataInscricao: new Date(2024, 2, 25, 16, 45),
    dataCheckIn: null
  },
  {
    nome: "Patrícia Santos",
    email: "patricia@gmail.com",
    dataInscricao: new Date(2024, 2, 26, 11, 0),
    dataCheckIn: new Date(2024, 2, 29, 9, 30)
  },
  {
    nome: "Gustavo Oliveira",
    email: "gustavo@gmail.com",
    dataInscricao: new Date(2024, 2, 26, 15, 30),
    dataCheckIn: new Date(2024, 2, 29, 17, 45)
  }
];


const criarNovoParticipante = (participante) => {
const dataInscricao = dayjs (Date.now()).to(participante.dataInscricao)
let dataCheckIn = dayjs (Date.now()).to(participante.dataCheckIn)

//condicional
if(participante.dataCheckIn == null){
  dataCheckIn= `<button 
  data-email = "${participante.email}"
  onclick = "fazerCheckIn(event)"> Confirmar Check-in </button>`
}

return `
     <tr>
       <td>
         <strong>${participante.nome}</strong>
         <br>
         <small>${participante.email}</small>
         </td>
       <td>${dataInscricao}</td>
       <td>${dataCheckIn}</td>
     </tr>
     `
}
const atualizarLista = (participantes) => {
  let output =""
  //estrutura de repetição
  for(let participante of participantes){
     output = output + criarNovoParticipante(participante)
  }
//substituir informação HTML
document.querySelector('tbody').innerHTML = output
}

atualizarLista(participantes)

const adicionarParticipante = (event) =>{
  event.preventDefault()

  const formsData = new FormData(event.target)
  //alert(formsData.get('email'))
  const participante = {
    nome: formsData.get('nome'),
    email: formsData.get('email'),
    dataInscricao: new Date(),
    dataCheckIn: null
  }

  //verificar se o participante ja existe
  const participanteExiste = participantes.find((p) => {
    return p.email = participante.email
  })
  if (participanteExiste){
    alert('E-mail já cadastrado!')
    return
  }

  participantes = [participante,...participantes]
  atualizarLista(participantes)

  //limpar formulario
  event.target.querySelector('[name="nome"]').value = ""
  event.target.querySelector('[name="email"]').value = ""
}

const fazerCheckIn = (event) => {
  //confirmar se realmente quer o check-in
const mensagemConfirmacao = 'Tem certeza que deseja realizar o check-in?'

if (confirm(mensagemConfirmacao) == false){
  return
}

  //encontrar o participante dentro da lista
  const participante = participantes.find((p) =>{
    return p.email == event.target.dataset.email
  })
  //atualizar o check-in do participante
  participante.dataCheckIn = new Date()
  //atualizar a lista de participantes
  atualizarLista(participantes)
}