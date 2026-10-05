Portfolio.icon = function (name, className = '') {
  const paths = {
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    pin: '<path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 6 9 7 9-7"/>',
    phone: '<path d="m7 3 3 5-3 3a15 15 0 0 0 6 6l3-3 5 3-2 4C10 22 2 14 3 5Z"/>',
    education: '<path d="m2 9 10-5 10 5-10 5Z"/><path d="M6 11v6c4 3 8 3 12 0v-6M22 9v8"/>',
    growth: '<path d="M4 20h16M6 16v-5M12 16V8M18 16V4M4 8l7-4 4 2 5-4"/>',
    community: '<circle cx="12" cy="7" r="3"/><path d="M6 21v-3a6 6 0 0 1 12 0v3M3 10a3 3 0 0 0 0 6M21 10a3 3 0 0 1 0 6M2 21v-2M22 21v-2"/>',
    health: '<path d="M9 3h6v6h6v6h-6v6H9v-6H3V9h6Z"/>',
    leaf: '<path d="M20 3C8 2 3 8 5 15s14 7 15-12Z"/><path d="M3 21 15 9"/>',
    calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4M17 3v4M3 11h18M8 15h2M14 15h2"/>',
    quote: '<path d="M10 5H3v8h4l-3 6h4l3-6V5Zm12 0h-7v8h4l-3 6h4l3-6V5Z"/>',
    menu: '<path d="M4 6h16M4 12h16M4 18h16"/>'
  };
  return `<svg class="icon ${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name] || paths.arrow}</svg>`;
};
