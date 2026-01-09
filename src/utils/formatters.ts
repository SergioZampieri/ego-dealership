export function formatPrice(price: number): string {
  return `$ ${price.toLocaleString('es-AR')}`;
}

export function formatYear(year: number): string {
  return year.toString();
}

export function formatVehicleInfo(year: number, price: number): string {
  return `${formatYear(year)} | ${formatPrice(price)}`;
}
