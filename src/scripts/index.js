// import { qs, qsa, $on, $delegate } from './utils';
import '../stylesheets/style.scss';
// import html2pdf from 'html2pdf.js';
import domtoimage from 'dom-to-image';
import saveAs from 'file-saver';
document.getElementById('downloader').addEventListener('click', () => {
  const curriculum = document.getElementById('curriculum__wrapper');
  domtoimage
    .toBlob(curriculum, {
      height: 1055,
      width: 920,
      style: {
        position: 'relative',
        margin: '0',
        padding: '0',
        right: '0',
        left: '0',
      },
    })
    .then((blob) => {
      saveAs(blob, 'curriculum.png');
    });
  //html2pdf(curriculum).save();
});
// console.log('Hello!');
