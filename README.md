# Mapper

### About

Mapper is a map-based travel planner.

<div style="width:100%;height:0;padding-bottom:71%;position:relative;"><iframe src="https://giphy.com/embed/h6f9pfrsDAkVMlnuhW" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div>

### How To Use / Requirements

You'll need a Mapbox account and Mapbox Access Token to use Mapper. <a href='https://www.mapbox.com/signup'>Click here to create an account</a>.

1. Fork/clone the repo, then in terminal enter "npm --install" to set up dependencies.
2. Follow the instructions in the config.env file (add your key and update the file name to .env)
3. In the terminal, enter "npm run start" to start Mapper.

### Tech Stack

Mapper was built with ReactJS, Mapbox, and Bootstrap.

<img src="https://lh3.googleusercontent.com/ZIHOUCCxFaB7NirPhEX4K8cyTPIMvxvdJxpuhjb_qJ_dk-z7qEgD8riaR0ODXzXQZYn23zHpFiwGzxTDT88FTLeUMoPqlIjyLKoL1am8MH5pCoJExjL8SUC8uaeeiAjvQB0_vym6" width="100"/>
<img src="https://lh3.googleusercontent.com/xcong6Yn8NoueMYWPhEfO76dw0Nt70kiDVOCOygTFEQWpysHxcT-5jYzq9XWIgD3lvCGnGrjlhddm7WEOw9V1FlHivqFjZCXF9IDsfd7uQ2SxlI80roSJcnHvb0O7POvlYOPNvRG" width="100" />
<img src="https://miro.medium.com/max/1666/0*ok6yuDnTx4o2PSFx.png" width="100" />

### Technical Challenges / Research

Some challenges I ran into while building this app:

1. Mapbox depends on HTML5 canvas and WebGL, which React is not a fan of since it directly manipulates the DOM. Even with a well supported library (thanks<a href='https://github.com/uber/react-map-gl'> react-map-gl</a>!), getting them to play nice together was especially challenging for responsiveness. This was also a big reason for animations not being implemented in the MVP.

2. Making geoSpatial data / map view contextually relevant. I had hoped to be able to display a list of top points of interest/locations based on the current map view but it would have been a significant undertaking.

3. Spelling -- "itinerary", "latitude", "longitude" are very prone to typos when they're variable names.

### User Stories

Initial MVP User Stories were as follows:

- As a user, I set a list of locations to be displayed on the map.
- The application should draw a line between every 2 points and show the Itinerary on the map.
- Mark the Start Point with the Red dot.

Bonus:

- The user will be able to create a list of locations on the web page

### How the App Works

Behind the scenes, when a user selects a location on the map, a marker is added to map and it's latitude and longitude are used to get additional information via the Mapbox Geosearch API. That additional information is then converted into the "common" name for the selected location and added to the itinerary.

### Future Features

- Improved test coverage
- Implement searching for a location via text
- Implement re-ordering of itinerary
- Implement route animations
