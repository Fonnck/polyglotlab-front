export const scrollWithOffset = (element, offsetRem = 10) => {
  if (!element) return;

  const remInPx = parseFloat(
    getComputedStyle(document.documentElement).fontSize,
  );

  const offsetPx = offsetRem * remInPx;

  const elementTop = element.getBoundingClientRect().top + window.pageYOffset;

  const targetPosition = elementTop - offsetPx;

  window.scrollTo({
    top: targetPosition,
    behavior: "smooth",
  });
};

export async function obtenerIP() {
  const res = await fetch("https://api.ipify.org?format=json");
  const data = await res.json();
  return data.ip;
}
