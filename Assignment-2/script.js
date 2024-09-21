// Tuşa basıldığında animasyon ve ses eklemek için
document.addEventListener('keydown', function (event) {
    const key = event.key.toUpperCase();
    playKey(key); // Klavyeden tuşa basıldığında animasyonu tetikleme
});

// Mouse tıklaması için olay dinleyicisi ekleyelim
document.querySelectorAll('.key').forEach(keyElement => {
    keyElement.addEventListener('click', function () {
        const key = this.getAttribute('data-key');
        playKey(key); // Mouse ile tuşa tıklanıldığında tetikleme
    });
});

// Tuşa basıldığında ilgili ses ve animasyonu tetikleme
function playKey(key) {
    const keyElement = document.querySelector(`.key[data-key="${key}"]`);

    if (keyElement) {
        playSound(keyElement);  // Ses çalma
        playAnimation(keyElement);  // Animasyonu tetikler
    }
}

// Ses dosyasını çalma
function playSound(keyElement) {
    const sound = keyElement.getAttribute('data-sound');
    if (sound) {
        const audio = new Audio(sound);
        audio.play();
    }
}

// Tuşa basıldığında ilgili animasyonu tetikleme
function playAnimation(keyElement) {
    const animationType = keyElement.getAttribute('data-animation');

    // Farklı animasyonları tetikleme
    keyElement.classList.add(animationType);

    // Bir süre sonra animasyonu temizlemek için
    setTimeout(() => {
        keyElement.classList.remove(animationType);
    }, 500); // Animasyon süresi 0.5 saniye
}