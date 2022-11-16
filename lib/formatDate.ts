function showDoubleDigits(num: number): string {
  return num < 10 ? "0" + num : num.toString();
}

export function formatTime(date: Date): string {
  return (
    showDoubleDigits(date.getHours()) +
    ":" +
    showDoubleDigits(date.getMinutes())
  );
}
