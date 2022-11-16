// TODO: verify with Samourai wallet repo
// TODO: add unit test
export function formatSats(satStr: string): string {
  const sats = parseInt(satStr);

  if (satStr.length <= 3) {
    return satStr + (sats > 1 ? "  sats" : "  sat");
  }
  if (satStr.length <= 6) {
    return satStr.slice(0, -3) + "  " + satStr.slice(-3) + "  sats";
  }
  if (satStr.length <= 9) {
    return satStr.slice(0, -6) + "  " + formatSats(satStr.slice(-6));
  }
  if (satStr.length <= 12) {
    return satStr.slice(0, -9) + "  " + formatSats(satStr.slice(-9));
  }
  if (satStr.length <= 15) {
    return satStr.slice(0, -12) + "  " + formatSats(satStr.slice(-12));
  }
  if (sats > 2.1e15) return "∞  sats";
  return satStr + "  sats";
}
