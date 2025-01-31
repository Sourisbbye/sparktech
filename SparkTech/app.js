// Fotoğraf tıklanınca modal'ı aç
function openModal(imgId) {
    var modal = document.getElementById("modal");
    var modalImg = document.getElementById("modal-img");
    var img = document.getElementById(imgId);

    modal.style.display = "block";
    modalImg.src = img.src; // Tıklanan fotoğrafın kaynağını modal içinde göster
}

// Modal'ı kapat
function closeModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}

// Modal dışına tıklanınca kapatma
window.onclick = function(event) {
    var modal = document.getElementById("modal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
// app.js'e ekle
function openModal(imgId) {
    const products = {
        img1: {name: "Smart Buzdolabı", desc: "A++ Enerji Sınıfı, 450L Kapasite"},
        img2: {name: "Dijital Fırın", desc: "8 Program, Pişirme Sensörü"}
    };
    
    const product = products[imgId];
    document.getElementById("modal-title").textContent = product.name;
    document.getElementById("modal-desc").textContent = product.desc;
    // ...diğer modal kodları
}