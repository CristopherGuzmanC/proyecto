const scriptURL = 'https://script.google.com/macros/s/AKfycbwu1PzE-aVUEdliRcH2WdCSImGF5LfJJaFEfH3rFr-dhzFGskjH_hCfR0mYPmnKv8x4/exec'
const form = document.forms['product']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => alert("Gracias por enviar el reclute espere a que se contacten con usted" ))
        .then(() => {  window.location.reload(); })
        .catch(error => console.error('Error!', error.message))
})