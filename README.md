# UAS PEMROGRAMAN WEB LANJUT

## Pengembangan Aplikasi Web Kostera menggunakan Metode _Modified Iterative Waterfall_

## Anggota Kelompok

**Fachri Ahmad - 120140124**\
**Ilham Fadhlur Rahman - 120140125**\
**Duta Rega Rolindo Simorangkir - 120140135**\
**Rizqi Fiesta Febrianto - 1201401171**

## Daftar isi

1. [Requirements](#requirements)
2. [How to run](#how-to-run)
3. [Bonus Kinerja Web](#bonus-kinerja-web)
4. [Dependencies](#dependencies)

### Requirements

- Visual Studio Code
- Node.js v21.1.0
- npm 10.2.3

### How to run

Clone repository

```
git clone https://github.com/CaamVilvactDJavu/frontend_uas_pwl_kostera.git
```

Masuk ke dalam directory

```
cd frontend_uas_pwl_kostera
```

Install Dependencies

```
npm install
```

Jalankan Proyek

```
npm run dev
```

### Bonus Kinerja Web

#### Optimisasi Gambar: Memastikan gambar yang digunakan di situs web telah dioptimalkan untuk meminimalkan waktu muat halaman.

##### Contoh optimasasi gambar

- Komponen `DetailKostView` adalah salah satu komponen yang telah menyertakan fitur rendering gambar, dan pengoptimalan gambar untuk memastikan pemuatan yang efisien dan meminimalkan waktu buka halaman. Pengoptimalan ini menggunakan custom hook dari `ImageVerifier`, yang memeriksa apakah gambar sudah valid sebelum dilakukan rendering.

  - ImageVerifier Hook\
    `ImageVerifier` hook adalah hook yang menggunakan `imageUrl` sebagai parameter dan melakukan:

    - Menginisialisasi variabel state (`isLoaded` dan `hasError`) untuk melacak status pemuatan gambar.
    - Menggunakan `useEffect` untuk membuat objek `Image` dan menyiapkan handle untuk pemuatan gambar dan error.
    - Memuat gambar dengan URL yang disediakan dan memperbarui variabel state yang sesuai.
    - Membersihkan event handler pada pelepasan komponen.

  - Implementasinya pada Komponen DetailKostView\

    - `useEffect` digunakan untuk mengontrol otentikasi pengguna.
    - `useKost` digunakan untuk mengambil data terkait Kost.
    - `ImageVerifier` digunakan untuk memeriksa validitas URL gambar yang diperoleh dari data yang diambil.
    - Komponen merender tampilan berbeda berdasarkan status pemuatan dan error.

  - Rendering Gambar\
    Rendering gambar juga dioptimalkan menggunakan komponen `Img` dari library `react-image`, yang hanya merender gambar jika valid. Jika gambar tidak valid, gambar default (home.png) akan ditampilkan.

#### Penggunaan Caching: Menggunakan teknik caching untuk menyimpan data di sisi klien atau server guna mempercepat waktu muat halaman berikutnya.

##### Contoh penggunaan caching

- Pengambilan Data API dengan `useSWR`\
   Proyek ini menggunakan library `useSWR` untuk menangani pengambilan data dari API secara efisien. `useSWR` menyediakan cara mudah untuk menyimpan data dalam cache di sisi klien, mengelola loading states, dan menghandle kesalahan .

  - `useKosts` Hook\
    `useKosts` hook mengambil data dari API endpoint `/api/v1/kost/`. Fungsi `fetcher`, yang didukung oleh Axios, menghandle pengambilan data.

  - `useKost` Hook\
    `useKost` hook, juga menggunakan `useSWR`, mengambil data berdasarkan parameter `kostId` tertentu dari API endpoint `/api/v1/kost/`.

  - Global State Management menggunakan React Context\
    React Context digunakan untuk mengelola global state untuk list item. `ListContext` menyediakan fungsi untuk menambah, menghapus, dan menghapus item dari list.

  - Verifikasi Gambar pada `ImageVerifier`\
    Komponen `ImageVerifier` memastikan penanganan gambar yang tepat dengan memeriksa apakah pemuatan berhasil atau ada kesalahan. Juga menggunakan `onload` dan `onerror` dari objek `Image`.

#### Pengurangan Permintaan HTTP: Meminimalkan jumlah permintaan HTTP yang diperlukan untuk memuat halaman dengan menggabungkan atau mengurangi sumber daya.

##### Contoh pengurangan permintaan HTTP

- Pada komponen `EditKost`, pengurangan request HTTP digunakan untuk meminimalkan jumlah request yang diperlukan untuk memuat halaman secara efisien.

  - Pengambilan Data menggunakan SWR\
    Library `swr` digunakan untuk pengambilan data dan cache. Fungsi `mutate`, digunakan untuk memungkinkan pembaruan cache setelah request HTTP berhasil, yang mana dapat membuat request tambahan tanpa menambahkannya kembali ke server.

  - Batched Update\
    Fungsi `mutate` digunakan untuk memperbarui data daftar Kost (`"http://localhost:5173/api/v1/kost/"`) setelah membuat request PUT berhasil. Ini membantu mengurangi request yang tidak perlu dan meningkatkan kinerja aplikasi secara keseluruhan.

#### Meminimalkan Pemanggilan API: Menggabungkan atau meminimalkan pemanggilan API untuk mengurangi waktu respon dan mempercepat tampilan konten.

##### Contoh meminimalkan pemanggilan API

- Dalam project ini kami juga menerapkan strategi untuk meminimalkan panggilan API menggunakan `useSWR` dari library SWR. Hook ini berguna untuk mengambil data dari API endpoint (dalam hal ini `/api/v1/kost/`) dan secara otomatis mengambil ulang data saat komponen dipasang atau saat data tidak valid.

  - SWR Hook\
    `useSWR` digunakan untuk mengambil data dari API. `useSWR` menyediakan caching, re-fetching, dan pengelolaan state secara langsung. Data di-cache dan diambil ulang hanya jika diperlukan.

  - Rendering Bersyarat\
    Komponen dirender berdasarkan status `isLoading` dan `error`. Jika data masih dimuat (`isLoading` benar), loading spinner (`<Loading />`) akan ditampilkan. Jika ada error selama panggilan API, maka akan muncul tampilan pesan kesalahan (`<ErrorMessageView />`) dirender.

  - Mutasi Data\
    Ketika penghapusan data dilakukan (fungsi `confirmDelete`), fungsi `mutate` dari SWR digunakan untuk mengambil kembali data dan memperbarui cache. Dengan cara ini, UI mencerminkan perubahan tanpa perlu memuat ulang satu halaman penuh.

### Dependencies

| Library                          | Fungsi                                                   |
| -------------------------------- | -------------------------------------------------------- |
| @hookform/resolvers              | Resolvers untuk React Hook Form.                         |
| @radix-ui/react-alert-dialog     | Dialog alert yang menggunakan Radix UI.                  |
| @radix-ui/react-dropdown-menu    | Menu dropdown dengan Radix UI.                           |
| @radix-ui/react-icons            | Ikon dengan Radix UI.                                    |
| @radix-ui/react-label            | Label dengan Radix UI.                                   |
| @radix-ui/react-navigation-menu  | Menu navigasi dengan Radix UI.                           |
| @radix-ui/react-popover          | Popover dengan Radix UI.                                 |
| @radix-ui/react-select           | Pilihan dengan Radix UI.                                 |
| @radix-ui/react-slot             | Slot dengan Radix UI.                                    |
| @radix-ui/react-toast            | Toast dengan Radix UI.                                   |
| axios                            | Library untuk membuat HTTP request.                      |
| class-variance-authority         | Menangani variabel dengan class variance.                |
| clsx                             | Membantu mengelola kelas-kelas CSS.                      |
| date-fns                         | Library untuk manipulasi tanggal.                        |
| js-cookie                        | Memanipulasi cookies di JavaScript.                      |
| react                            | Library utama untuk membangun UI dengan React.           |
| react-day-picker                 | Komponen date picker untuk React.                        |
| react-dom                        | React DOM specific methods.                              |
| react-hook-form                  | Form handling dengan React.                              |
| react-image                      | Komponen untuk menampilkan gambar di React.              |
| react-router-dom                 | Navigasi dengan React Router.                            |
| sonner                           | Library untuk melakukan sonar analysis.                  |
| swr                              | React Hooks untuk remote data fetching.                  |
| tailwind-merge                   | Merges Tailwind CSS classes.                             |
| tailwindcss-animate              | Animasi dengan Tailwind CSS.                             |
| zod                              | Validation schema untuk TypeScript.                      |
| @iconify/react                   | Integrasi ikon dengan aplikasi.                          |
| @testing-library/jest-dom        | Testing utilities untuk Jest.                            |
| @testing-library/react           | Testing utilities untuk React.                           |
| @types/jest                      | Definisi tipe untuk Jest.                                |
| @types/node                      | Definisi tipe untuk Node.js.                             |
| @types/react                     | Definisi tipe untuk React.                               |
| @types/react-dom                 | Definisi tipe untuk React DOM.                           |
| @typescript-eslint/eslint-plugin | ESLint plugin untuk TypeScript.                          |
| @typescript-eslint/parser        | Parser untuk TypeScript dalam ESLint.                    |
| @vitejs/plugin-react             | Plugin untuk Vite dengan React.                          |
| @vitejs/plugin-react-swc         | Plugin untuk Vite dengan React (SWC).                    |
| autoprefixer                     | Plugin PostCSS untuk menambahkan vendor prefixes ke CSS. |
| daisyui                          | Utility library untuk Tailwind CSS.                      |
| eslint                           | Linter untuk JavaScript dan TypeScript.                  |
| eslint-plugin-react-hooks        | ESLint plugin untuk React Hooks.                         |
| eslint-plugin-react-refresh      | ESLint plugin untuk React Refresh.                       |
| identity-obj-proxy               | Helper untuk menggantikan object identity.               |
| jest                             | Testing framework untuk JavaScript.                      |
| jest-environment-jsdom           | Environment untuk Jest dengan jsdom.                     |
| jest-transform-stub              | Transform untuk Jest stub.                               |
| postcss                          | PostCSS processor.                                       |
| tailwindcss                      | Framework CSS utility-first.                             |
| ts-jest                          | Integrasi TypeScript untuk Jest.                         |
| typescript                       | Bahasa pemrograman TypeScript.                           |
| vite                             | Build tool untuk web development.                        |
