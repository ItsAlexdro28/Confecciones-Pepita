
export const getApiData = async (endpoint = '',key = '') => {
    const url = `https://6657c5835c3617052645d233.mockapi.io/${endpoint}`;
    let storedUserData = sessionStorage.getItem(key); //este valor exportar
    let userData = JSON.parse(storedUserData); //este valor exportar
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

        if (!response.ok) {
            throw new Error('Error al obtener datos del MockAPI');
        }

        const responseData = await response.json();
        console.log('Datos obtenidos de la API:', responseData);
        return responseData; // Export or use the data as needed
    } catch (error) {
        console.error('Error al obtener datos de la API:', error);
    }
}

// aqui toca poner otra variable de entrada donde sea la llave de el objeo en el localstorage
// y necesita que sea con el post como en el repo de cuanto cuesta mi app
// 