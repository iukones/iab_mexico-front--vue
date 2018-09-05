import * as firebase from 'firebase/app';
// import * as firebase from 'firebase/app';
import 'firebase/database';
var fire_config = {
  // apiKey: "AIzaSyDvucRchv8F9a-9eCUTCMnl6t7kUBZUanA",
  apiKey: "AIzaSyBnEH1XunP-8xaefYTH9BUgBsAPEu81_z8",
  databaseURL: "https://thedojo-45790.firebaseio.com/",
  // databaseURL: "https://directorio-agencias.firebaseio.com",
  projectId: "directorio-agencias",
};
var firebaseApp = firebase.initializeApp(fire_config);
export default {
  db: firebaseApp.database()
}