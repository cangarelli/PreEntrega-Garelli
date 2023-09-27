// Bases de datos
import data from "../data/data.json"

//Funcion de recuperación
export const pedirDatos = () => {

    setTimeout(() => {
        return new Promise((resolve, reject) => {
            resolve (data)
        });     
    }, 4000);
};

export const pedirProductoPorId = (id) => {
    return new Promise((resolve, reject) => {
        const item = data.find((pr) => pr.id === id)
        if (item) {
            resolve(item)
        } else {
            reject ({error: "no se a encontrado ese item"})
        }
    })
}