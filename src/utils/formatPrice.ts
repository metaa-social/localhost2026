export function formatPrice(price: number) {
  return formatCHF(price);
}

function formatCHF(value: number) {
  const whole = Math.round(value);

  if (value === whole) {
    return `${whole}.–`; 
  }

  return new Intl.NumberFormat("de-CH", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

export default formatPrice;
