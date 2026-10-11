// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");

// ketika choose di klik
document.querySelector("#choose").onclick = () => {
    navbarNav.classList.toggle("active")
};

// Klik di luar slidebar untuk menghilangkan nav
const choose = document.querySelector("#choose");

document.addEventListener("click", function (e) {
    if (!choose.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove("active");
    }
})

// Form Jawaban Tantangan
const scriptURL = 'https://script.google.com/macros/s/AKfycbxgDBKlVkYa3yhD9HGzi-RfUiFBn4V1MTSVoDFW4wNE2M6X4i6gBsfniaSLARJXX-jY/exec';
const form = document.getElementById('formTantangan');
const btnKirim = document.getElementById('btn-kirim');

if (form) {
    form.addEventListener('submit', e => {
        e.preventDefault();

        if (btnKirim) {
            btnKirim.disabled = true;
            btnKirim.innerText = "Mengirim...";
        }

        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            .then(response => {
                alert('Jawaban kamu berhasil terkirim!');
                form.reset();
                if (btnKirim) {
                    btnKirim.disabled = false;
                    btnKirim.innerText = "Kirim Jawaban";
                }
            })
            .catch(error => {
                alert('Gagal mengirim jawaban. Coba lagi!');
                if (btnKirim) {
                    btnKirim.disabled = false;
                    btnKirim.innerText = "Kirim Jawaban";
                }
            });
    });
}