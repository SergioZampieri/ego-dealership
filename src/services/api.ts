import { Vehicle, VehicleDetails } from '@/types/vehicle';

const API_BASE_URL = 'https://challenge.egodesign.dev/api';

/*
  Since this is a user-facing application with a Spanish UI, all error messages are in Spanish for consistency with the interface.
  Proper implementation would include some sort of internationalization, with errors in english an a translation via adapter/dictionary or the mechanism that would be considered best approach at the moment.
 */

export async function fetchVehicles(): Promise<Vehicle[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/models/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      // Next.js cache strategy: revalidate every hour
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      throw new Error(`Error al cargar los vehículos: ${response.status} ${response.statusText}`);
    }

    const data: Vehicle[] = await response.json();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Error al obtener los vehículos: ${error.message}`);
    }
    throw new Error('Ocurrió un error desconocido al cargar los vehículos');
  }
}

export async function fetchVehicleById(id: number): Promise<VehicleDetails> {
  try {
    const response = await fetch(`${API_BASE_URL}/models/${id}/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      // Next.js cache strategy: revalidate every hour
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      if (response.status === 404) {
        throw new Error(`Vehículo con ID ${id} no encontrado`);
      }
      throw new Error(`Error al cargar el detalle del vehículo: ${response.status} ${response.statusText}`);
    }

    const data: VehicleDetails = await response.json();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Error al obtener el detalle del vehículo: ${error.message}`);
    }
    throw new Error('Ocurrió un error desconocido al cargar el detalle del vehículo');
  }
}
