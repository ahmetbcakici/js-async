const posts = [
    { baslik: 'Post 1', icerik: 'Birinci postun iceriği.' },
    { baslik: 'Post 2', icerik: 'İkinci postun iceriği.' },
]

function postlariCek() {
    setTimeout(() => {
        let cikti = '';
        posts.forEach(post => {
            cikti += `<li>${post.baslik}</li>`;
        })
        document.body.innerHTML = cikti;
    }, 1000);
}

function postOlustur(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);

            const hata = true;
            if (!hata) resolve();
            else reject('Bir aksilik meydana geldi!');

        }, 2000);
    })
}

postOlustur({ baslik: 'Post 3', icerik: 'Üçüncü postun iceriği.' }).then(postlariCek).catch(err => {
    console.log(err)
})

/* Promise.all */
const promise1 = Promise.resolve('olumlu');
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 1000, 'mesaj'));
const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())

Promise.all([promise1, promise2, promise3, promise4]).then(values => console.log(values))



/*
postOlustur > postlariCek

kodlar.then(() => {})

success = resolve
error = reject

mongoose => MongoDB ile işlem yapmamı sağlayan npm paketi
axios => HTTP istek yönetimini sağlayan npm paketi 

fetch

*/