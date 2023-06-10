users = [
    {
        id: 1,
        nombre: "Damian",
        apellido: "Lobos",
        email: "damianlobos24@gmail.com",
        pass: "yo24101994",
        esAdmin: true
    },
    {
        id: 2,
        nombre: "Zoe",
        apellido: "Lobos",
        email: "zoeLobos1@gmail.com",
        pass: "09052018Zoe",
        esAdmin: false
    }
]

const cargarUsers = () =>{
    localStorage.setItem("users", JSON.stringify(users))
} 

cargarUsers()