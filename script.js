function prikaziSadrzaj(tip) {
    const pocetniPrikaz = document.getElementById('pocetni-prikaz');
    const dinamickiSadrzaj = document.getElementById('dinamicki-sadrzaj');
    const sadrzajUnutra = document.getElementById('sadrzaj-unutra');

    pocetniPrikaz.style.display = 'none';
    dinamickiSadrzaj.classList.add('aktivan');

    if (tip === 'blog') {
        sadrzajUnutra.innerHTML = `
            <h2>BLOG</h2>
            <p>Dobrodošli na moj blog. Ovde ću deliti svoje misli, ideje i zanimljivosti. Sadržaj uskoro stiže...</p>
        `;
    } else if (tip === 'news') {
        sadrzajUnutra.innerHTML = `
            <h2>NEWS</h2>
            <div class="video-okvir">
                <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0" 
                    title="YouTube video" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            </div>
        `;
    }
}

function zatvoriSadrzaj() {
    const pocetniPrikaz = document.getElementById('pocetni-prikaz');
    const dinamickiSadrzaj = document.getElementById('dinamicki-sadrzaj');

    dinamickiSadrzaj.classList.remove('aktivan');
    pocetniPrikaz.style.display = 'flex';
    
    document.getElementById('sadrzaj-unutra').innerHTML = '';
}
