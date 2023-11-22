let map;

function initMap() {
    // Initialize the map
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 37.7749, lng: -122.4194 }, // Default to San Francisco
        zoom: 15,
    });

    // Add parking markers (this is a simplified example)
    addParkingMarker({ lat: 37.7749, lng: -122.4194, name: "Parking Spot 1" });
    addParkingMarker({ lat: 37.7751, lng: -122.4188, name: "Parking Spot 2" });
}

function addParkingMarker(location) {
    const marker = new google.maps.Marker({
        position: location,
        map: map,
        title: location.name,
    });

    // Add click listener to show details or navigate to the parking spot
    marker.addListener("click", () => {
        alert(`Parking Spot: ${location.name}\nLat: ${location.lat}\nLng: ${location.lng}`);
        // You can customize this to navigate or show more details
    });
}
