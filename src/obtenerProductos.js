const obtenerProductos = async () => {
    try {
        const response = await fetch("./src/data/stock.js");
        const data = await response.json();

        return data;
    } catch (error) {
        console.log('Hubo un error', error)
    };
};

export { obtenerProductos };