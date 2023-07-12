let latitude = 38.0705, longitude = 145.2467
mapboxgl.accessToken = 'pk.eyJ1Ijoia2FydGhpa2F5dXZhcmFqIiwiYSI6ImNsanlicjAyYTAzbjUza2p5OXUwbHl6eG0ifQ.r4drwwpTLxtlC5VC5vkS_A'
var map = new mapboxgl.Map({
    
    container:'map',
    stlye:'mapbox://styles/mapbox/streets-v11',
    center:[longitude, latitude],
    zoom:0

})

map.addControl(
    new mapboxgl.GeolocateControl({
        positionOptions:{
            enableHighAccuracy:true
        },
        trackUserLocation:true
    })
)

map.addControl(
    new MapboxDirections({
        accessToken:mapboxgl.accessToken
    }),

    'top-left'
)