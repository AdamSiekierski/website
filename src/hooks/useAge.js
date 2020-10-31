export function useAge(birthYear) {
  return new Date().getFullYear() - birthYear;
}
