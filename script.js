const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let current = 0;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");
}

nextBtn.addEventListener("click", () => {
    current = (current + 1) % slides.length;
    showSlide(current);
});

prevBtn.addEventListener("click", () => {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
});

// Auto slide every 3 seconds
setInterval(() => {
    current = (current + 1) % slides.length;
    showSlide(current);
}, 3000);



 function say() {
    alert("ترک پورن و خود ارضایی موجب سلامت روح و روان است از دیدن این ویدیو خودداری کنید  ارشیا دوست زنکنه")
    
}

function violet() {
    alert("این ویدیو آنقدر ارزش دیدن دارد که ناخودآگاه شما را ارضای روحی و واقعی میکند ")
}

