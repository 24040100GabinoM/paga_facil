// Only Licencias de Conducir should work
const goLicencias = document.getElementById('goLicencias');
const cardLicencias = document.getElementById('cardLicencias');

function navigateLicencias() {
  window.location.href = 'licencias.html';
}

if (goLicencias) goLicencias.addEventListener('click', navigateLicencias);
if (cardLicencias) cardLicencias.addEventListener('click', navigateLicencias);

// Prevent default on disabled nav links for clarity (optional)
document.querySelectorAll('[aria-disabled="true"], .btn[disabled]').forEach(el => {
  el.addEventListener('click', (e) => e.preventDefault());
});
