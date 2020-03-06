$(document).ready(() =>{
  // Reference Data Base
  const db = firebase.firestore();
  const listsContent = document.getElementById("price-lists");

  console.log(listsContent);

  // Read DataBase Documents
  db.collection("lists").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
          listsContent.innerHTML += `<div class="price-file" onclick="window.open('${doc.data().url}')">
                                        <p><i class="fas fa-folder"></i> ${doc.data().name}</p>
                                     </div>`
      });
  });
});
