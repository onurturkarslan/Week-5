// Kullanıcıdan isim alma
let userName = prompt("Adınızı girin:");

// İsim boş veya geçersizse default bir isim atama
if (userName === null || userName.trim() === "") {
  userName = "Misafir";
}

// İsmi HTML'e yerleştirme
document.getElementById("myName").innerText = userName;

// Saat ve tarih gösterme fonksiyonu
function showTime() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  // Tarihi al
  const days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
  const dayName = days[now.getDay()];
  const day = String(now.getDate()).padStart(2, "0");
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const year = now.getFullYear();

  // Zaman formatı: hh:mm:ss
  const timeString = `${hours}:${minutes}:${seconds}`;
  // Tarih formatı: Gün, dd.mm.yyyy
  const dateString = `${dayName}, ${day}.${month}.${year}`;

  // Saat ve tarih bilgilerini HTML'e yerleştirme
  document.getElementById("myClock").innerHTML = `${timeString} - ${dateString}`;

  // Fonksiyonu her saniye yenile
  setTimeout(showTime, 1000);
}

// Sayfa yüklendiğinde zamanı göster
showTime();
