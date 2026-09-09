/**
 * Utility helper functions for assets resolution and srcset generation.
 */

export const getBaseUrl = (): string => {
  return import.meta.env.BASE_URL || '/';
};

/**
 * Resolves an asset path within the `public/aset/` folder.
 * Encodes special characters and spaces cleanly.
 */
export function importImage(name: string): string {
  const base = getBaseUrl().replace(/\/+$/, '');
  const encodedName = encodeURIComponent(name);
  return `${base}/aset/${encodedName}`;
}

/**
 * Resolves an asset path from any public subpath.
 */
export function resolvePublicAsset(subpath: string): string {
  const base = getBaseUrl().replace(/\/+$/, '');
  const cleanSub = subpath.replace(/^\/+/, '');
  return `${base}/${cleanSub}`;
}

/**
 * Generate srcset string for responsive images.
 */
export function generateSrcSet(imagePath: string, widths: number[] = [480, 768, 1200, 1920]): string {
  return widths.map((w) => `${imagePath} ${w}w`).join(', ');
}

export interface DAAsset {
  id: string;
  name: string;
  file: string;
  category: 'logo' | 'photo' | 'typography' | 'building' | 'merchandise' | 'graphic';
  title: string;
  subtitle: string;
  description: string;
  dimensions: { width: number; height: number };
}

export const ALL_ASSETS: DAAsset[] = [
  {
    id: 'building',
    name: 'building.png',
    file: 'building.png',
    category: 'building',
    title: 'Arsitektur Panggung Utama PMDG',
    subtitle: 'Mahakarya Panggung Teatrikal Drama Arena 5102',
    description: 'Siluet dan struktur megah bangunan sentral Pondok Modern Darussalam Gontor sebagai latar panggung akbar santri kelas 5.',
    dimensions: { width: 2587, height: 1726 },
  },
  {
    id: 'assets-1',
    name: 'assets 1.png',
    file: 'assets 1.png',
    category: 'graphic',
    title: 'Visual Identity & Master Art',
    subtitle: 'Grafis Sentral Pagelaran 5102',
    description: 'Komposisi ornamen visual utama yang memadukan elemen klasik, ukiran filigri, dan lambang perjuangan.',
    dimensions: { width: 1224, height: 2052 },
  },
  {
    id: 'logo-main',
    name: 'logo.png',
    file: 'logo.png',
    category: 'logo',
    title: 'Logo Resmi Drama Arena 5102',
    subtitle: 'Lambang Otentik Identitas Angkatan',
    description: 'Logo utama berformat vertikal dengan ornamen klasik prangko, monogram D&A, dan aksen emas kemewahan.',
    dimensions: { width: 606, height: 931 },
  },
  {
    id: 'logo-2',
    name: 'logo 2.png',
    file: 'logo 2.png',
    category: 'logo',
    title: 'Logo Varian Stempel & Cap',
    subtitle: 'Monogram Klasik Minimalis',
    description: 'Varian logo monokromatik dan cap stempel untuk kebutuhan administrasi resmi dan dokumen kepanitiaan.',
    dimensions: { width: 419, height: 643 },
  },
  {
    id: 'logo-3',
    name: 'logo 3.png',
    file: 'logo 3.png',
    category: 'logo',
    title: 'Logo Horizontal Banner',
    subtitle: 'Tipografi Lambang Mendatar',
    description: 'Tata letak lanskap optimal untuk header navigasi, backdrop digital, dan banner promosi publikasi.',
    dimensions: { width: 713, height: 313 },
  },
  {
    id: 'logo-5102',
    name: 'logo 5102.png',
    file: 'logo 5102.png',
    category: 'logo',
    title: 'Insignia & Angka Sakral 5102',
    subtitle: 'Identitas Angkatan ke-102 PMDG',
    description: 'Simbol angka 5102 dengan ornamen floral ukiran emas, menandakan kelas 5 generasi 102 Pondok Modern.',
    dimensions: { width: 1025, height: 565 },
  },
  {
    id: 'photo-1',
    name: 'photo 1.png',
    file: 'photo 1.png',
    category: 'photo',
    title: 'Dokumentasi Latihan Santri I',
    subtitle: 'Gairah & Disiplin Menuju Panggung Akbar',
    description: 'Momen kebersamaan para santri kelas 5 dalam persiapan artistik panggung, tata musik, dan penghayatan peran.',
    dimensions: { width: 1066, height: 1896 },
  },
  {
    id: 'photo-2',
    name: 'photo 2.png',
    file: 'photo 2.png',
    category: 'photo',
    title: 'Dokumentasi Latihan Santri II',
    subtitle: 'Kekuatan Kolaborasi Tanpa Batas',
    description: 'Kebersamaan antardivisi kepanitiaan yang membuktikan sinergi santri dari berbagai penjuru Nusantara.',
    dimensions: { width: 1408, height: 1877 },
  },
  {
    id: 'workshirt',
    name: 'workshirt.png',
    file: 'workshirt.png',
    category: 'merchandise',
    title: 'Official Committee Workshirt',
    subtitle: 'Seragam Resmi Panitia Drama Arena 5102',
    description: 'Pakaian dinas harian (PDH) panitia dengan bordir emas lambang 5102, kain navy kokoh, dan aksen kancing eksklusif.',
    dimensions: { width: 2231, height: 1557 },
  },
  {
    id: 'typography-main',
    name: 'typography.png',
    file: 'typography.png',
    category: 'typography',
    title: 'Kaligrafi Tipografi Utama',
    subtitle: 'Masterpiece Kaligrafi Drama Arena',
    description: 'Karya seni huruf manual yang memadukan gaya khat kufi kontemporer dan tipografi serif klasik.',
    dimensions: { width: 1997, height: 1109 },
  },
  {
    id: 'typography-2',
    name: 'typography 2.png',
    file: 'typography 2.png',
    category: 'typography',
    title: 'Tipografi Filosofi Perjuangan',
    subtitle: 'Goresan Makna Naluri & Nurani',
    description: 'Komposisi vertikal sarat pesan moral dan spirit santri pondok modern dalam mengabdi.',
    dimensions: { width: 1376, height: 2063 },
  },
  {
    id: 'typography-3',
    name: 'typography 3.png',
    file: 'typography 3.png',
    category: 'typography',
    title: 'Emblem Tipografi Medali',
    subtitle: 'Lencana Seni Visual',
    description: 'Simbol lingkaran tipografi untuk cap perangko, segel surat undangan resmi, dan plakat kenang-kenangan.',
    dimensions: { width: 614, height: 967 },
  },
  {
    id: 'typography-4',
    name: 'typography 4.png',
    file: 'typography 4.png',
    category: 'typography',
    title: 'Pita & Banner Tipografi',
    subtitle: 'Ornamen Header & Pembatas Halaman',
    description: 'Tipografi mendatar yang elegan sebagai garis pembatas estetis antarbab dan pilar filosofis.',
    dimensions: { width: 1018, height: 572 },
  },
  {
    id: 'typography-5',
    name: 'typography 5.png',
    file: 'typography 5.png',
    category: 'typography',
    title: 'Gubahan Huruf Estetik Santri',
    subtitle: 'Aksen Sudut & Ornamen Margin',
    description: 'Eksplorasi bentuk tipografi artistik yang memperkaya detail setiap publikasi visual.',
    dimensions: { width: 502, height: 766 },
  },
  {
    id: 'typography-6',
    name: 'typography 6.png',
    file: 'typography 6.png',
    category: 'typography',
    title: 'Meterai Tipografi Angka 102',
    subtitle: 'Segel Keaslian Dokumen',
    description: 'Segel persegi berornamen klasik yang menandakan orisinalitas karya drama arena generasi ke-102.',
    dimensions: { width: 521, height: 485 },
  },
];
