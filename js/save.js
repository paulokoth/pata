//create firebase reference
var dbRef = new storageBucket("https://test-58e4b.firebaseio.com");
var contactsRef = dbRef.child('contacts')

//load older conatcts as well as any newly added one...
contactsRef.on("child_added", function(snap) {
  console.log("added", snap.key(), snap.val());
  document.querySelector('#contacts').innerHTML += (contactHtmlFromObject(snap.val()));
});

//save contact
document.querySelector('.addValue').addEventListener("click", function( event ) {
  event.preventDefault();
  if( document.querySelector('#names').value != '' || document.querySelector('#useremail').value != '' ){
    contactsRef
      .push({
        name: document.querySelector('#names').value,
        email: document.querySelector('#useremail').value,
          username: document.querySelector('#username').value,
          password: document.querySelector('#pass').value,
      })
      contactForm.reset();
  } else {
    alert('Please fill atlease name or email!');
  }
}, false);

//prepare conatct object's HTML
function contactHtmlFromObject(contact){
  console.log( contact );
  var html = '';
  html += '<li class="list-group-item contact">';
    html += '<div>';
      html += '<p class="lead">'+contact.name+'</p>';
      html += '<p>'+contact.email+'</p>';
      html += '<p><small title="'+contact.usernam+'">'+'</small></p>';
    html += '</div>';
  html += '</li>';
  return html;
}
