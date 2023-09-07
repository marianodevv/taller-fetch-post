const formulario= document.querySelector("#mi-formulario");
const url= "https://jsonplaceholder.typicode.com/users";

formulario.addEventListener('submit', event => {
    event.preventDefault();
    const datosForm= new FormData(formulario);
    const data= Object.fromEntries(datosForm);
    console.log(data);

    fetch(url, {
        method: 'POST',
        body: JSON.stringify(data)
    })
    .then(resp => resp.json())
    .then(Response => console.log(data, Response))
    .catch(error => console.log(error));
});


