jest.mock('./http')

const { loadTitle } = require('./utils');

test('Should print the upper case title', ()=>{
    //expect(printTitle()).toBe('DELECTUS AUT AUTEM');
    loadTitle().then(title =>{
        expect(title).toBe()
    });
});