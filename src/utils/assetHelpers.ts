/**
 * Utility helper functions for assets resolution and srcset generation.
 */

export const getBaseUrl = (): string => {
  const base = import.meta.env.BASE_URL;
  if (!base || base === './' || base === '/') return '.';
  return base.replace(/\/+$/, '');
};

/**
 * Universal safe asset URL resolver.
 * Handles both development, local preview, and GitHub Pages paths.
 */
export function assetUrl(path: string): string {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
    return path;
  }
  const clean = path.replace(/^\/+/, '');
  const base = getBaseUrl();
  return `${base}/${clean}`;
}

/**
 * Resolves an asset path within the `public/aset/` folder.
 */
export function importImage(name: string): string {
  const clean = name.replace(/^\/?(aset\/)?/, '');
  return assetUrl(`aset/${clean}`);
}

/**
 * Resolves an asset path within the `public/referensi/` folder.
 */
export function importRef(name: string): string {
  const clean = name.replace(/^\/?(referensi\/)?/, '');
  return assetUrl(`referensi/${clean}`);
}

export interface DAAsset {
  id: string;
  name: string;
  file: string;
  category: 'logo' | 'guideline' | 'photo' | 'typography' | 'color' | 'merchandise';
  title: string;
  subtitle: string;
  description: string;
  dimensions: { width: number; height: number };
}

export const ALL_ASSETS: DAAsset[] = [
  // ── 1. LOGOS & EMBLEMS ──
  {
    id: 'logo-wave',
    name: 'logo-da-wave-transparent.png',
    file: 'aset/logo-da-wave-transparent.png',
    category: 'logo',
    title: 'Logo Ornamen Bentuk Ombak DA',
    subtitle: 'Lambang Utama Pagelaran Seni Akbar',
    description: 'Stilisasi simetris The Great Wave of Kanagawa dan ornamen floral arabesque Islam yang membentuk huruf D & A secara harmonis.',
    dimensions: { width: 620, height: 560 },
  },
  {
    id: 'logo-monogram',
    name: 'logo-da-monogram-transparent.png',
    file: 'aset/logo-da-monogram-transparent.png',
    category: 'logo',
    title: 'Logo Monogram Interlocking DA',
    subtitle: 'Monogram Gothic Berkarakter Tegas',
    description: 'Monogram huruf D dan A bertekstur vintage yang saling mengunci, menggambarkan keteguhan ikatan persaudaraan santri 5102.',
    dimensions: { width: 620, height: 560 },
  },
  {
    id: 'typo-main',
    name: 'typography-drama-arena-main.png',
    file: 'aset/typography-drama-arena-main.png',
    category: 'typography',
    title: 'Tipografi Utama Drama Arena Est.2027',
    subtitle: 'Lettering Dimensi Vintage Klasik',
    description: 'Tipografi dimensional bayangan ukir berpadu stempel segel floral arabesque yang menjadi tajuk visual pagelaran.',
    dimensions: { width: 980, height: 680 },
  },
  {
    id: 'typo-stamps',
    name: 'typography-stamps.png',
    file: 'aset/typography-stamps.png',
    category: 'typography',
    title: 'Secondary Typography: Stamp Letters',
    subtitle: 'Koleksi Huruf Prangko Perangko Kuno',
    description: 'Setiap huruf DRAMA ARENA dirancang sebagai prangko filateli unik dengan ornamen bunga dan kode angkatan 5102.',
    dimensions: { width: 1120, height: 660 },
  },

  // ── 2. OFFICIAL BRAND GUIDELINE SLIDES (REFERENSI) ──
  {
    id: 'guide-01',
    name: 'slide-01-main-concept.jpg',
    file: 'referensi/slide-01-main-concept.jpg',
    category: 'guideline',
    title: '01. Main Concept Folder Tab',
    subtitle: 'Slide Panduan Identitas Visual 01',
    description: 'Folder tab arsip klasik yang memuat struktur navigasi konsep utama, mesin tik vintage DA5102, dan segel emas.',
    dimensions: { width: 2560, height: 1440 },
  },
  {
    id: 'guide-02',
    name: 'slide-02-ide-pokok.jpg',
    file: 'referensi/slide-02-ide-pokok.jpg',
    category: 'guideline',
    title: '02. Ide Pokok & Mahfudzot',
    subtitle: 'Slide Panduan Identitas Visual 02',
    description: 'Kertas koyak vintage dengan penjepit binder hijau, memuat kalam hikmah Sebesar keinsyafanmu sebesar itu pula keuntunganmu dan kaligrafi Biqadril Kaddi.',
    dimensions: { width: 2560, height: 1440 },
  },
  {
    id: 'guide-03',
    name: 'slide-03-tema.jpg',
    file: 'referensi/slide-03-tema.jpg',
    category: 'guideline',
    title: '03. Tema Acara Penyadaran',
    subtitle: 'Slide Panduan Identitas Visual 03',
    description: 'Teks tema acara Sadar Ke Pondok apa yang kau cari, nilai perjuangan dan kebersamaan di atas tekstur kertas kuno berstempel.',
    dimensions: { width: 2560, height: 1440 },
  },
  {
    id: 'guide-04',
    name: 'slide-04-moto.jpg',
    file: 'referensi/slide-04-moto.jpg',
    category: 'guideline',
    title: '04. Tiga Moto Perjuangan',
    subtitle: 'Slide Panduan Identitas Visual 04',
    description: 'Tiga tiket perforasi dengan barcode DA5102, kamera vintage Leica emas, dan pita seluloid film.',
    dimensions: { width: 2560, height: 1440 },
  },
  {
    id: 'guide-05',
    name: 'slide-05-main-branding.jpg',
    file: 'referensi/slide-05-main-branding.jpg',
    category: 'guideline',
    title: '05. Main Branding Monitor CRT',
    subtitle: 'Slide Panduan Identitas Visual 05',
    description: 'Komputer klasik monokromatik bergaya Macintosh dengan tumpukan monitor TV menampilkan mockup, element, font, palette, logo.',
    dimensions: { width: 2560, height: 1440 },
  },
  {
    id: 'guide-06',
    name: 'slide-06-logo.jpg',
    file: 'referensi/slide-06-logo.jpg',
    category: 'guideline',
    title: '06. Dua Varian Logo Resmi',
    subtitle: 'Slide Panduan Identitas Visual 06',
    description: 'Presentasi Logo Ombak DA dan Monogram DA di atas meja kerja kuno dengan lampu banker hijau dan prangko.',
    dimensions: { width: 2560, height: 1440 },
  },
  {
    id: 'guide-07',
    name: 'slide-07-philosophy-wave.jpg',
    file: 'referensi/slide-07-philosophy-wave.jpg',
    category: 'guideline',
    title: '07. Filosofi Ombak & Arabesque',
    subtitle: 'Slide Panduan Identitas Visual 07',
    description: 'Penjelasan filosofis The Great Wave of Kanagawa dan Ornamen Floral Arabesque pada latar hijau toska (Green Teal).',
    dimensions: { width: 2560, height: 1440 },
  },
  {
    id: 'guide-08',
    name: 'slide-08-philosophy-monogram.jpg',
    file: 'referensi/slide-08-philosophy-monogram.jpg',
    category: 'guideline',
    title: '08. Filosofi Monogram DA',
    subtitle: 'Slide Panduan Identitas Visual 08',
    description: 'Penjelasan stilisasi huruf D & A implementasi perhelatan Drama Arena di Pondok Modern Darussalam Gontor pada latar Navy Blue.',
    dimensions: { width: 2560, height: 1440 },
  },
  {
    id: 'guide-09',
    name: 'slide-09-typografi.jpg',
    file: 'referensi/slide-09-typografi.jpg',
    category: 'guideline',
    title: '09. Tipografi & Stamp Tiles',
    subtitle: 'Slide Panduan Identitas Visual 09',
    description: 'Sistem tipografi utama Drama Arena Est.2027 dan tipografi sekunder prangko huruf dengan list ukiran arabesque.',
    dimensions: { width: 2560, height: 1440 },
  },
  {
    id: 'guide-10',
    name: 'slide-10-color-palette.jpg',
    file: 'referensi/slide-10-color-palette.jpg',
    category: 'guideline',
    title: '10. Palet Warna & Segel Lilin',
    subtitle: 'Slide Panduan Identitas Visual 10',
    description: 'Spesifikasi resmi HEX, RGB, CMYK untuk Navy Blue, Green Teal, Bone White, dan Golden Metal lengkap dengan segel lilin 3D.',
    dimensions: { width: 2560, height: 1440 },
  },
  {
    id: 'guide-11',
    name: 'slide-11-font.jpg',
    file: 'referensi/slide-11-font.jpg',
    category: 'guideline',
    title: '11. Font System (Naveid, Mileast, Alverata)',
    subtitle: 'Slide Panduan Identitas Visual 11',
    description: 'Spesifikasi font Arab Naveid, Headline Mileast pada mesin tik, dan teks tubuh Alverata dengan pena tinta klasik.',
    dimensions: { width: 2560, height: 1440 },
  },
  {
    id: 'guide-12',
    name: 'slide-12-key-visual.jpg',
    file: 'referensi/slide-12-key-visual.jpg',
    category: 'guideline',
    title: '12. Key Visual Amplop & Segel Emas',
    subtitle: 'Slide Panduan Identitas Visual 12',
    description: 'Kunci visual perhelatan: amplop hijau toska DA5102 terbuka menyembulkan surat bermeterai dengan 3 segel lilin dan cap kuningan.',
    dimensions: { width: 2560, height: 1440 },
  },

  // ── 3. COLOR SWATCHES & MERCHANDISE ──
  {
    id: 'color-navy',
    name: 'color-card-navy.png',
    file: 'aset/color-card-navy.png',
    category: 'color',
    title: 'Navy Blue Palette Card',
    subtitle: 'HEX: #192E41 · RGB: 25, 46, 65',
    description: 'Kartu prangko segel lilin biru malam melambangkan kedalaman kesadaran dan keteguhan jiwa santri.',
    dimensions: { width: 410, height: 710 },
  },
  {
    id: 'color-teal',
    name: 'color-card-teal.png',
    file: 'aset/color-card-teal.png',
    category: 'color',
    title: 'Green Teal Palette Card',
    subtitle: 'HEX: #325956 · RGB: 50, 89, 86',
    description: 'Kartu prangko segel lilin hijau toska melambangkan ketenangan, spiritualitas, dan keanggunan seni Islam.',
    dimensions: { width: 410, height: 710 },
  },
  {
    id: 'color-bone',
    name: 'color-card-bone.png',
    file: 'aset/color-card-bone.png',
    category: 'color',
    title: 'Bone White Palette Card',
    subtitle: 'HEX: #EDE8E2 · RGB: 237, 232, 226',
    description: 'Kartu prangko segel lilin putih tulang melambangkan kanvas kejujuran dan kemurnian niat dalam berjuang.',
    dimensions: { width: 410, height: 710 },
  },
  {
    id: 'color-gold',
    name: 'color-card-gold.png',
    file: 'aset/color-card-gold.png',
    category: 'color',
    title: 'Golden Metal Palette Card',
    subtitle: 'HEX: #B58A3C · RGB: 181, 138, 60',
    description: 'Kartu prangko segel lilin emas logam melambangkan kemuliaan hasil perjuangan dan keagungan mahakarya 5102.',
    dimensions: { width: 410, height: 710 },
  },
  {
    id: 'merch-workshirt',
    name: 'workshirt.png',
    file: 'aset/workshirt.png',
    category: 'merchandise',
    title: 'Official Committee Workshirt',
    subtitle: 'Seragam Resmi Dinas Panitia DA 5102',
    description: 'Desain kemeja dinas resmi panitia dengan saku ganda, emblem bordir logo DA 5102, dan aksen warna navy-gold.',
    dimensions: { width: 1400, height: 1400 },
  },

  // ── 4. ARSIP HISTORIS & FOTO RESMI ──
  {
    id: 'photo-arena-1',
    name: 'photo 1.png',
    file: 'aset/photo 1.png',
    category: 'photo',
    title: 'Panggung Utama Perhelatan Seni',
    subtitle: 'Dokumentasi Panggung Megah Pagelaran',
    description: 'Arsip visual tata panggung megah karya santri kelas 5 dengan tata pencahayaan spektakuler dan dekorasi arsitektural.',
    dimensions: { width: 1920, height: 1080 },
  },
  {
    id: 'photo-arena-2',
    name: 'photo 2.png',
    file: 'aset/photo 2.png',
    category: 'photo',
    title: 'Riuh Penonton & Kebersamaan Umat',
    subtitle: 'Lautan Santri & Tamu Undangan',
    description: 'Suasana semarak ribuan santri, guru, dan wali santri yang memadati area pementasan dengan antusiasme tinggi.',
    dimensions: { width: 1920, height: 1080 },
  },
  {
    id: 'photo-building',
    name: 'building.png',
    file: 'aset/building.png',
    category: 'photo',
    title: 'Balai Pertemuan Pondok Modern',
    subtitle: 'Gedung Bersejarah Pusaka Gontor',
    description: 'Arsip bangunan bersejarah tempat berlangsungnya agenda perhelatan akbar sejak era Trimurti pendiri pondok.',
    dimensions: { width: 1920, height: 1200 },
  },
  {
    id: 'visual-typewriter',
    name: 'vintage-typewriter-da5102.png',
    file: 'aset/vintage-typewriter-da5102.png',
    category: 'merchandise',
    title: 'Mesin Tik Vintage DA5102',
    subtitle: 'Kunci Visual Konsep Arsip (Slide 01)',
    description: 'Mesin tik mekanik antik yang mengetikkan manifesto acara Drama Arena di atas kertas bersurat resmi.',
    dimensions: { width: 1600, height: 1200 },
  },
  {
    id: 'visual-retro-mac',
    name: 'retro-mac-branding.png',
    file: 'aset/retro-mac-branding.png',
    category: 'merchandise',
    title: 'Monitor Retro CRT Branding Stacks',
    subtitle: 'Mockup Monitor Komputer Klasik (Slide 05)',
    description: 'Instalasi tumpukan monitor TV tabung CRT monokrom yang menampilkan elemen identitas, font, palet, dan logo DA.',
    dimensions: { width: 1600, height: 1200 },
  },
];
