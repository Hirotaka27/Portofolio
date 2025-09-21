declare global {
  interface Window {
    adsbygoogle: unknown[] | undefined; // Menggunakan 'unknown[] | undefined' lebih aman
  }
}
export {}; 