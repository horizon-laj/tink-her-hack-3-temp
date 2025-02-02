const contact = document.getElementById("contact");
contact.onclick = function () {
    window.location.href = "contact.html"
}

// Emergency Button functionality
document.getElementById('emergency').addEventListener('click', function () {
    alert('Emergency Alert Triggered!');
    // You could replace this alert with more advanced logic, such as sending an email, or redirecting to a phone number or emergency website.
    // For example, open an emergency contact URL
    window.location.href = "tel:+1122334455";  // Opens dialer with the phone number
});


// Share Location button functionality
document.getElementById('shareBtn').addEventListener('click', function () {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;

            // Create the message with location details
            const message = `I am at Latitude: ${lat}, Longitude: ${lon}. Here is my location: https://www.google.com/maps?q=${lat},${lon}`;

            // WhatsApp Link
            const phoneNumber = "1234567890";  // Replace with the phone number to send location (with country code)
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

            // Uncomment the following line to open WhatsApp
            window.open(whatsappUrl, '_blank'); // Opens WhatsApp with the message pre-filled
            
            // Optionally, send via Email-to-SMS gateway (if supported by the recipient's carrier)
            // Uncomment the next block to send the location via Email-to-SMS:

            // const carrierGateway = "vtext.com";  // Replace with the recipient's carrier SMS gateway (e.g., "vtext.com" for Verizon)
            // const smsUrl = `mailto:${phoneNumber}@${carrierGateway}?subject=Emergency%20Alert&body=${encodeURIComponent(message)}`;
            // window.location.href = smsUrl;  // Opens the default email client to send the SMS
        }, function (error) {
            alert('Error getting location. Please try again.');
        });
    } else {
        alert('Geolocation is not supported by your browser.');
    }
});