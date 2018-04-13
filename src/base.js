const config = {
    apiKey: "AIzaSyBGC8IrVyKQWfASKrVG_znSQN5cY5rBkbI",
    authDomain: "mercadodevpro.firebaseapp.com",
    databaseURL: "https://mercadodevpro.firebaseio.com",
    projectId: "mercadodevpro",
    storageBucket: "gs://mercadodevpro.appspot.com",
    messagingSenderId: "23778332459"
  }

  const Rebase = require ('re-base')
  const firebase = require ('firebase/app')
  require ('firebase/database')
  require ('firebase/storage')

  const app = firebase.initializeApp(config)
  const base = Rebase.createClass(app.database())

  export const storage = app.storage()

  export default base