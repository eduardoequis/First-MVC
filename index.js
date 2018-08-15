
// * Nuestra informacion se encuentra aislada
const m = {
  dataText: 'mi primer mvc',
  dataHead: '¡¡Buen trabajo!!',
  vistasAlert: 0,  //Agregué un conteo de visitas.
  sumarVistasAlert: function() { 
    m.vistasAlert++
    window.localStorage.setItem("vistasAlert", m.vistasAlert)  // Y acá, en teoría, guardo en LocalStorage.
  }
}

// * nuestra vista se encarga de mostrar en panalla lo que requerimos
// * tambien se va a encargar de las interacciones desde el cliente
const v = {
  renderAlert: function(data){
      swal(data.dataHead, data.dataText, "success");
  },
  renderBody: function(data){
    const newContentText = document.getElementById('textContent')
    newContentText.innerHTML= ` <h1 class="title">${data.dataHead}</h1><h2 class="subtitle">
    ${data.dataText}</h2> `;
  },

 }

// * El controlador se ecncarga de las acciones y respuestas.
const c = {
  updateDataOnload: function(data){
    v.renderAlert(data);
    v.renderBody(data);
    m.sumarVistasAlert()
  },

  // Agregué esta función, para llamar alert con botón.
  mostrarAlert: function(data){
  let vecesVistoAlert = parseInt(window.localStorage.getItem("vistasAlert")) 
  if (vecesVistoAlert < 3) {
      v.renderAlert(data);
      m.sumarVistasAlert()
    } 
  },
};

window.onload = c.updateDataOnload(m);

// BOTON QUE LLAMA AL ALERT:
const botonAlerta = document.getElementById("alertCta")
botonAlerta.addEventListener("click", function(){c.mostrarAlert(m)})
