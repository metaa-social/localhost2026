export function formatTime(dateInput: Date | string | number): string {
  let swissTime = dateInput;
  if (
    typeof dateInput === "string" &&
    !dateInput.includes("Z") &&
    !dateInput.includes("+")
  ) {
    // Treat as Swiss local time by appending offset
    // dateInput += "+01:00"; // or handle DST dynamically
    swissTime = dateInput + "+01:00";
  }

  const date = new Date(swissTime);

  if (isNaN(date.getTime())) return "";
  return date.toLocaleTimeString("en-GB", {
    timeZone: "Europe/Zurich",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default formatTime;
