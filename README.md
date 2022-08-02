# Book-Rent
Step :
1. Buat Database MySql "book_rent" dengan mengimport "book_rent_create.sql" pada database
2. Copy .env.example. dan ganti sesuai konfigurasi database dan ubah menjadi .env 
3. npm install 
4. npm run start

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

