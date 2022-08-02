# Book-Rent
Step :
1. Buat Database MySql "book_rent"
2. Copy .env.example. dan ganti sesuai konfigurasi database dan ubah menjadi .env 
3. npm install
4. jalankan "generate_model.txt" dengan meng copy isinya dan dijalankan dalam terminal (sesuaikan bila terdapat password, dokumentasi : https://www.npmjs.com/package/sequelize-auto) 
5. npm run start

Routes API:
1. Members can borrow books with conditions:
localhost:{PORT}/member/borrow/:member/:book
2. Member returns the book with conditions:
localhost:{PORT}/member/return/:borrow
3. Check the book:
localhost:{PORT}/book/get
4. Member check:
localhost:{PORT}/member/get

Other Routes on 'routes' folder

