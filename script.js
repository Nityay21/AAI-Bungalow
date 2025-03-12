function sendToWhatsApp(isWeb) {
  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let checkin = document.getElementById("checkin").value;
  let checkout = document.getElementById("checkout").value;
  let people = document.getElementById("people").value;

  if (!name || !phone || !checkin || !checkout || !people) {
    alert("Please fill in all the details.");
    return;
  }

  let message = `Booking Request:%0AName: ${name}%0AContact: ${phone}%0ACheck-in: ${checkin}%0ACheck-out: ${checkout}%0ANumber of People: ${people}`;
  let baseUrl = isWeb
    ? "https://web.whatsapp.com/send?phone="
    : "https://api.whatsapp.com/send?phone=";
  let phoneNumber = "917977693718"; // Replace with your actual WhatsApp number

  let whatsappUrl = `${baseUrl}${phoneNumber}&text=${message}`;
  window.open(whatsappUrl, "_blank");
}

function sendToWhatsAppApp() {
  sendToWhatsApp(false);
}

function sendToWhatsAppWeb() {
  sendToWhatsApp(true);
}
