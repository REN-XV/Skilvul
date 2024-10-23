function handleGetFormData() {
    const name = document.getElementById('name').value;
    const city = document.getElementById('city').value;
    const email = document.getElementById('email').value;
    const zipCode = document.getElementById('zip-code').value;
    const status = document.getElementById('status').checked;

    return {
        name,
        city,
        email,
        zipCode,
        status
    };
}

function isNumber(string) {
    return !isNaN(string); // Mengembalikan true jika string hanya mengandung angka
}

function checkboxIsChecked() {
    return document.getElementById('status').checked;
}

function validateFormData(formData) {
    return formData !== null && isNumber(formData.zipCode) && checkboxIsChecked() === true;
}

function submit() {
    console.log("ke submit");
    const data = handleGetFormData(); // Mengambil data dari form
    const checkValid = validateFormData(data); // Memeriksa validasi form
    console.log("check", checkValid);
    const errEl = document.getElementById("warning");

    if (!checkValid) {
        if (errEl) {
            errEl.innerHTML = "Periksa form anda sekali lagi"; // Menampilkan pesan kesalahan
        }
    } else {
        if (errEl) {
            errEl.innerHTML = ""; // Menghapus pesan kesalahan jika valid
        }
    }
}

document.addEventListener("DOMContentLoaded", function () {
    function logSubmit(event) {
        event.preventDefault(); // Mencegah halaman di-refresh
        submit(); // Memanggil fungsi submit
        console.log("wowoywywy"); // Log tambahan untuk debugging
    }

    const form = document.getElementById("form");
    form.addEventListener("submit", logSubmit); // Menambahkan event listener submit
});


// Menambahkan event listener untuk form submit
document.getElementById('form').addEventListener('submit', submit);


function showReforestation() {
    alert("Reforestation map coming soon!");
}

function calculateCarbon() {
    alert("Carbon footprint calculator is under development.");
}

function showForestMap() {
    alert("Endangered forests map will be available soon!");
}
