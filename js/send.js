var app=new Vue({
  el : '#app',
  data : {
    auth: {
      user: null,
      useremail: '',
      pass: '';
      message: '';
      username:'';
      hasErrors:false
    }
  },
})
methods: {
  //autheticate the user
  login: function(event){
    var person = this;
    person.auth.message= '';
    person.auth.hasErrors = false;
    if(person.auth.useremail === '')||person.auth.pass === ''){
      alert('Please provide the email and the password');
      return;
    }
    firebase.auth().signInWithEmailAndPassword(person.auth.useremail, person.auth.pass)
    .then(function(data){
      person.auth.user = firebase.auth().currentUser;
    }).catch(function(error){
      person.auth.message =error.message;
      person.auth.hasErrors = true;
    })
  }
}
