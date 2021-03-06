'use strict';

describe('pos_v1', () => {
  let inputs;

  beforeEach(() => {
    inputs = [
      'ITEM000000',
      'ITEM000000',
      'ITEM000000',
      'ITEM000000',
      'ITEM000002-3',
      'ITEM000005-3'
    ];
  });


  it('should return counted', ()=> {
    const output = [
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
        count: 3
      }
    ];
    expect(counted(inputs)).toEqual(output);
  });
  it('should return sumed', ()=> {
    let c = [
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
        count: 3
      }
    ];
    const sum = [
      {
        item: {
          barcode: 'ITEM000000',
          name: '可口可乐',
          unit: '瓶',
          price: 3.00
        },
        count: 4,
        sum: 9,
        save: 3
      },

      {
        item: {
          barcode: 'ITEM000002',
          name: '苹果',
          unit: '斤',
          price: 5.50
        },
        count: 3,
        sum: 16.5,
        save: 0
      },
      {
        item: {
          barcode: 'ITEM000005',
          name: '方便面',
          unit: '袋',
          price: 4.50
        },
        count: 3,
        sum: 9,
        save: 4.5
      }
    ];
    expect(sumPrice(c)).toEqual(sum);
  });

});
