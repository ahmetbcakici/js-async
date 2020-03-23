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

function postOlustur(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}

postOlustur({ baslik: 'Post 3', icerik: 'Üçüncü postun iceriği.' }, postlariCek);
//postlariCek();