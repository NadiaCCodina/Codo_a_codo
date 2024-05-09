const toggleButton = document.getElementById('button-menu')
const navWrapper = document.getElementById('nav')

toggleButton.addEventListener('click',() => {
  toggleButton.classList.toggle('close')
  navWrapper.classList.toggle('show')
})

navWrapper.addEventListener('click',e => {
  if(e.target.id === 'nav'){
    navWrapper.classList.remove('show')
    toggleButton.classList.remove('close')
  }
})


function getResult() {
    // Obtener las respuestas seleccionadas
    const answers = document.querySelectorAll('input[type="radio"]:checked');
    // Contadores para cada tipo de respuesta
    let countA = 0, countB = 0, countC = 0, countD = 0;

    // Contar respuestas
    answers.forEach(answer => {
        switch(answer.value) {
            case 'A':
                countA++;
                break;
            case 'B':
                countB++;
                break;
            case 'C':
                countC++;
                break;
            case 'D':
                countD++;
                break;
        }
    });

    // Determinar el tipo de piel basado en la mayoría
    let skinType = '';
    if (countA > countB && countA > countC && countA > countD) {
        skinType = "Piel normal";
    } else if (countB > countA && countB > countC && countB > countD) {
        skinType = "Piel seca";
    } else if (countC > countA && countC > countB && countC > countD) {
        skinType = "Piel grasa";
    } else {
        skinType = "Piel mixta";
    }

    // Mostrar resultado
    const resultDiv = document.getElementById('result');
   
    
    // Redirigir a la página correspondiente según el tipo de piel
    switch (skinType) {
  case "Piel seca":
      window.location.href = './Piel_Seca/index.html';
      break;
  case "Piel normal":
      window.location.href = './Piel_Normal/index.html';
      break;
  case "Piel grasa":
      window.location.href = './Piel_Grasa/index.html';
      break;
 case "Piel mixta":
        window.location.href = './Piel_Mixta/index.html';
        break;
  default:
      // En caso de un resultado desconocido, redirigir a una página de error
      window.location.href = 'error.html';
}
}