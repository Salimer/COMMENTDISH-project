import footerImg from '../../assets/2.jpg';

export default () => {
  const footer = document.querySelector('footer');
  footer.classList.add('footer');
  footer.innerHTML = `<div class="img-container">
<img id="footer-img" src="" alt="footer-img">
</div>
<p>Created by Sumeya Ibrahim and Salim Bamahfoodh. All rights reserved</p>  `;
  document.querySelector('#footer-img').setAttribute('src', footerImg);
};
