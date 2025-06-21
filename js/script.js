//Toggle Class active
const navbarNav = document.querySelector('.navbar-nav');

// Ketika hamburger menu di klik
document.querySelector('#hamburger-menu'). onclick = () => {
    navbarNav.classList.toggle('active');
};

// klik di luar sidebar untuk menghilangkan nav
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e) {
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.taget)) {
        navbarNav.classList.remove('active');
    }
});

// Dapatkan elemen form kontak
const contactForm = document.getElementById('contactForm');

// Tambahkan event listener untuk pengiriman form
contactForm.addEventListener('submit', function(event) {
    // Cegah perilaku default pengiriman form
    event.preventDefault();

    // Dapatkan nilai input
    const name = document.getElementById('nameInput').value;
    const email = document.getElementById('emailInput').value;
    const phone = document.getElementById('phoneInput').value;

    // Definisikan nomor WhatsApp 
    const whatsappNumber = '6285813136729'; //  nomor WhatsApp 

    // Buat pesan 
    const message = `Halo Assalamu’alaikum, selamat pagi/siang. Saya ingin memesan batu nisan untuk almarhum/almarhumah. ${name}. Email: ${email}. No. HP: ${phone}. Terima kasih!`;

    // Encode pesan untuk URL
    const encodedMessage = encodeURIComponent(message);

    // Buat tautan WhatsApp
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Buka WhatsApp di tab baru
    window.open(whatsappLink, '_blank');

    // Opsional: kosongkan kolom form setelah pengiriman
    contactForm.reset();
});