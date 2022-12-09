import Header from './components/header.js';
import Main from './pages/main.js';
import Footer from './components/footer.js';

const mainPage = {};
const header = new Header(document.body);
const main = new Main(document.body);
const footer = new Footer(document.body);
Object.assign(mainPage, { header, main, footer });
