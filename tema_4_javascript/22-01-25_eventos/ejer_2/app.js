let newPersonas = []
personas.forEach((person) => {
    newPersonas +=
    {
        nombre: person.name,
        imagen: person.picture
    }
})

console.log(newPersonas)