import { CarModel, CarDetail } from '@/types/car';

// Base API URL
const API_BASE_URL = 'https://challenge.egodesign.dev/api';

/*
  DECISION: Error messages are in Spanish
  Since this is a user-facing application with a Spanish UI, all error messages are in Spanish for consistency with the interface.
  Proper implementation would include some sort of internationalization, with errors in english an a translation via adapter/dictionary or the mechanism that would be considered best approach at the moment.
 */

export async function fetchModels(): Promise<CarModel[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/models/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Error al cargar los modelos: ${response.status} ${response.statusText}`);
    }

    const data: CarModel[] = await response.json();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Error al obtener los modelos: ${error.message}`);
    }
    throw new Error('Ocurrió un error desconocido al cargar los modelos');
  }
}

export async function fetchModelById(id: number): Promise<CarDetail> {
  try {
    const response = await fetch(`${API_BASE_URL}/models/${id}/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      if (response.status === 404) {
        throw new Error(`Modelo con ID ${id} no encontrado`);
      }
      throw new Error(`Error al cargar el detalle del modelo: ${response.status} ${response.statusText}`);
    }

    const data: CarDetail = await response.json();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Error al obtener el detalle del modelo: ${error.message}`);
    }
    throw new Error('Ocurrió un error desconocido al cargar el detalle del modelo');
  }
}
