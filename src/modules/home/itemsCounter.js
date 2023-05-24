 export default async () => {
    const items = document.querySelectorAll('.items');
    const h3 = document.querySelector('h3');
    const totalIitems = items.length;
    h3.innerHTML = `We have ${totalIitems} Dishes`;
  };