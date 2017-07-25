'use strict';

describe('pos', () => {
  let inputs;

  beforeEach(() => {
    inputs = [
      'ITEM000000',
      'ITEM000000',
      'ITEM000000',
      'ITEM000000',
      'ITEM000002-3',
      'ITEM000005-4'
    ];
  });

  xit('should print correct text', () => {

    printReceipt(inputs);

    const expectText = `可口可乐`;

    expect(console.log).toHaveBeenCalledWith(expectText);
  });

  it('should return counted', ()=> {
    const counted = [
      {
        item: {
          barcode: 'ITEM000000',
          name: '可口可乐',
          unit: '瓶',
          price: 3.00
        },
        count: 4
      },
      {
        item: {
          barcode: 'ITEM000002',
          name: '苹果',
          unit: '斤',
          price: 5.50
        },
        count: 3
      },
      {
        item: {
          barcode: 'ITEM000005',
          name: '方便面',
          unit: '袋',
          price: 4.50
        },
        count: 4
      }
    ];
    expect(count(inputs)).toEqual(counted);
  });

});
