import { a as attr } from "./renderer.js";
const arrowup = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAACL0lEQVR4nO3awU7bQBCH8VHos4R7UrR9b8o5vFCLb4A4TJVqV+IAEraD85+Z75O4kdjsT2sba8yIiIiIiIiIiC5d6z8k0NHM/prZZGa/rn0y1Tt2DO8/oAhhOCh6GA6KHoaDoofhoOhhOCh6GA6KHoaDoofhoKyv9QX86kLP+V1es3zjzpj6Ah/M7A87RQNjBIoQxggUIYwRKEIYI1CEMEagCGGMQBHCGIEihDECRQhjBIoQxggUIYxReRQlDKuOoohRFmXuK/S24jhrPlvi1f1WO+N4gcnF9Dtlawy/wGKlRbkWhoOih+Gg6GE4KHoYXhlFFcMroqhjeCWUKBheASUahmdG2fJ1yDTjOIrn1CrujGnjyUWZnaKMMSqDEgGjDEokjPQoETHSotya2VPwJ5cm+PR1XtP9koM8iP0h08LjKKL8nvvlN2b2GvAyFeXy9dLX+Mv9MLO3JBiKKG99jWf1mPC/3SZy+Tot+dI7M3v+5KYUEeMaKB89FJ3X9OfC7/yPcupb7Hzdu1/6hCCCsfW57PsN/KWv4WkNxvvON6Ddis8rYVzjnHZzb+LfGZOLQiljlEOJgFEGJRJGepSIGGlRImOkQ8mAkQYlE0Z4lIwYYVEyY4RDqYARBqUShjxKRQxZlMoYcihgCKGAUXByMWJpJxcjd8g2uZihlmVyMVMt+uRixg5RJxczd4g2uVihFmVysVJNfXKxYnvVycXq7ZQmF4mIiIiIiIiIiMjy9Q/rlW3WAWH4PQAAAABJRU5ErkJggg==";
function Arrowup($$renderer) {
  $$renderer.push(`<a href="#" class="btn svelte-9za6k"><img${attr("src", arrowup)} alt="" class="svelte-9za6k"/></a>`);
}
export {
  Arrowup as A
};
