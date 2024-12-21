// Fonction de récupération des données
async function fetchData() {
  const responseWorks = await fetch('http://localhost:5678/api/works');

  try {
    if (!responseWorks.ok) {
      throw new Error(`Erreur lors de la récupération des données des travaux: ${responseWorks.statusText}`);
    }
    const listWorks = await responseWorks.json();
    // console.log("données récupérées : ", listWorks);
    genererWorks(listWorks)
  }
  catch (error) {
    console.error("Erreur dans la récupération des données", error);
  }
}

// fonction pour générer la galerie des travaux
function genererWorks(works) {
  const gallery = document.querySelector('.gallery');
  if (!gallery) {
    console.error("La gallery n'éxiste pas !");
  }
  gallery.innerHTML = ''; // Réinitialisation de la gallerie

  works.forEach(work => {
    const workElement = document.createElement('figure');
    const workImage = document.createElement('img');
    const workTitle = document.createElement('figcaption');

    workImage.src = work.imageUrl;
    workImage.alt = work.title;
    workTitle.textContent = work.title;

    workElement.appendChild(workImage);
    workElement.appendChild(workTitle);
    gallery.appendChild(workElement);
  });
}

fetchData(); // Appel de la fonction fetchData pour récupérer les données