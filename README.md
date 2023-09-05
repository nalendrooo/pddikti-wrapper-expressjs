# API PDDIKTI WRAPPER EXPRESS JS

Ini adalah api wrapper dari website PDDIKTI.

## Instalasi

Gunakan [npm](https://www.npmjs.com/) untuk menginstall semua dependensi.

```bash
npm install
```

## Menjalankan

Menggunakan [nodemon](https://nodemon.io/) untuk menjalankan aplikasi di project lokal.

```bash
npm run dev
```

## Penggunaan

Untuk mencari universitas menggunakan keyword:

```javascript
/api/universitas/cari

```

body:

```json
{
	"universitas": "Universitas Bina Sarana Informatika"
}
```

##

Untuk mendapatkan detail universitas menggunakan id:

```javascript
/api/universitas/detail

```

body:

```json
{
	"id": "Awokawokawokawokawokawokawok"
}
```

##

Untuk mendapatkan daftar prodi pada universitas:

```javascript
/api/universitas/prodi

```

body:

```json
{
	"id": "Awokawokawokawokawokawokawok"
}
```

##

Untuk mencari prodi menggunakan keyword:

```javascript
/api/universitas/cari/prodi

```

body:

```json
{
	"prodi": "Sistem Informasi"
}
```

##

Untuk mendapatkan detail dari prodi menggunakan idProdi:

```javascript
/api/universitas/prodi/detail

```

body:

```json
{
	"idProdi": "Awokawokawokawokawokawokawok"
}
```

## Kontribusi

Silakan clone project jika anda membutuhkan. Untuk kontribusi atau perubahan, anda bisa menghubungi saya dan mendiskusikannya.
Silakan hubungi [linkedin](https://www.linkedin.com/in/nalendroadilsatyadi/) saya untuk mendapatkan file .env

Harap pastikan untuk memperbarui pengujian sebagaimana mestinya.

Terimakasih

## License

no license
