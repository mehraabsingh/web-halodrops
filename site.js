// Keep support accordions focused without adding a dependency.
document.querySelectorAll('.faq details').forEach(detail => {
  detail.addEventListener('toggle', () => {
    if (detail.open) {
      document.querySelectorAll('.faq details').forEach(other => {
        if (other !== detail) other.open = false;
      });
    }
  });
});
