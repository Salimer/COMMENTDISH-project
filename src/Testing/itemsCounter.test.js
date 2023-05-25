import itemsCounter from '../modules/home/itemsCounter.js';

describe('Items counter function', () => {
  test('Elements count is = 0', () => {
    document.body.innerHTML = `
        <div>
            
        </div>
        `;
    const items = document.querySelectorAll('.items');
    expect(itemsCounter(items)).toBe(0);
  });
});

describe('Items counter function', () => {
  test('Elements count is = 8', () => {
    document.body.innerHTML = `
        <div>
            <div class="items"></div>
            <div class="items"></div>
            <div class="items"></div>
            <div class="items"></div>
            <div class="items"></div>
            <div class="items"></div>
            <div class="items"></div>
            <div class="items"></div>
        </div>
        `;
    const items = document.querySelectorAll('.items');
    expect(itemsCounter(items)).toBe(8);
  });
});