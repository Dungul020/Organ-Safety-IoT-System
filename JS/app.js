// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyC89sK............................",
    authDomain: "raspberrypi-test-1e065.firebaseapp.com",
    databaseURL: "https://raspberrypi-test-1e065-default-rtdb.firebaseio.com",
    projectId: "raspberrypi-test-1e065",
    storageBucket: "raspberrypi-test-1e065.appspot.com",
    messagingSenderId: "677867547854",
    appId: "1:677867547854:web:6cd493c9d56bb2529db49f",
    measurementId: "G-LN589EZMP0"
  };



  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const database = firebaseApp.database();
  
  const dataList = document.getElementById('dataList');
  
  const dbRef = database.ref('/sensor_data'); // Update the reference to 'sensor_data'
  
  // Check for errors during the connection
  database.ref('.info/connected').on('value', (snap) => {
      if (snap.val() === true) {
          console.log('Connected to the database');
      } else {
          console.log('Disconnected from the database');
      }
  });
  
  // Listen for changes and update the HTML
  dbRef.on('value', (snapshot) => {
      dataList.innerHTML = ''; // Clear the list before re-populating
      snapshot.forEach((childSnapshot) => {
          const data = childSnapshot.val();
          const li = document.createElement('li');
          li.textContent = data.name + ': ' + data.value;
          dataList.appendChild(li);
      });
  });
