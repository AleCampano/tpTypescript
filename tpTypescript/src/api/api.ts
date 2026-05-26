import axios from 'axios';
const URL = 'https://api.thecatapi.com/v1/images/search';

export async function obtenerImagenes(cantidad: number): Promise<[]> {
  const respuesta = await axios.get<[]>(URL, {
    params: { limit: cantidad },
  });
  return respuesta.data;
}

