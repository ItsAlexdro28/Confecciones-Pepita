export const getApiData = async (endpoint = '') => {
    const url = `https://6657c5835c3617052645d233.mockapi.io/${endpoint}`;
    try {
        const response = await fetch(url, {
            method: 'GET',
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