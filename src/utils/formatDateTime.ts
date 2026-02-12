export function formatDateTime(dateInput: Date | string | number): string {
  const date = new Date(dateInput);

  if (isNaN(date.getTime())) return "";

  const pad = (n: number) => n.toString().padStart(2, "0");

  const day = pad(date.getDate());
  const month = pad(date.getMonth() + 1); // months are 0-indexed
  const hours = pad(date.getHours());
  const minutes = pad(date.getMinutes());

  return `${day}.${month}, ${hours}:${minutes}`;
}

export default formatDateTime;
