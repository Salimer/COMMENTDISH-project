import commentsCounter from "../modules/popup/commentsCounter.js";

describe('Comments counter function', () => {
    test('Elements count is = 0', () => {
        document.body.innerHTML =`
        <ul>
            
        </ul>
        `;
        const comments = document.querySelectorAll('.comment');
        expect(commentsCounter(comments)).toBe(0);
    });

    test('Elements count is 4', () => {
        document.body.innerHTML =`
        <ul>
            <li class="comment"></li>
            <li class="comment"></li>
            <li class="comment"></li>
            <li class="comment"></li>
        </ul>
        `;
        const comments = document.querySelectorAll('.comment');
        expect(commentsCounter(comments)).toBe(4);
    })
})