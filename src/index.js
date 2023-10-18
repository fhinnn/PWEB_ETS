export const API_URL_alcohol = 'https://it-its.id/api/books';
import './styles/style.css';
import './component/header';
import './component/footer';
import './component/main';
import axios from 'axios';

const showContent = document.getElementById('alcoholSection');

const getAlcoholData = async (url) => {
  axios
    .get(url)
    .then((response) => {
      return alcoholShowData(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};
getAlcoholData(API_URL_alcohol);

const alcoholShowData = (data) => {
  showContent.innerHTML = '';

  data.map((drinks) => {
    const { title, author, year } = drinks;
    const drinksElement = document.createElement('div');
    drinksElement.classList.add('drinks-element');
    drinksElement.innerHTML = `
        <div>
        <div class="drinks-element">
        </div>
            <div class="overview" id="info">
                    <h1>${title} (${year})</h1>
                    <p>${author}</p>
            </div>
    </div>
        </div>
        `;

    showContent.appendChild(drinksElement);
  });
};
