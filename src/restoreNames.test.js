'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  // write tests here
  it(`should be declared`, () => {
    expect(restoreNames).toBeInstanceOf(Function);
  });

  it(`should return nothing`, () => {
    expect(restoreNames([])).toBeUndefined();
  });

  it(`should throw Error if fullName not exist`, () => {
    const users = [
      {
        firstName: undefined,
        lastName: 'Holy',
      },
      {
        lastName: 'Adams',
      },
    ];

    expect(() => restoreNames(users)).toThrow();
  });

  it(`should restore firstName from fullName if it is undefined
     or property do not exist`, () => {
    const users = [
      {
        firstName: undefined,
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
      {
        lastName: 'Adams',
        fullName: 'Mike Adams',
      },
    ];

    restoreNames(users);

    expect(users).toEqual([
      {
        firstName: 'Jack',
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
      {
        firstName: 'Mike',
        lastName: 'Adams',
        fullName: 'Mike Adams',
      },
    ]);
  });

  it('should not change firtName it is already exist', () => {
    const users = [
      {
        firstName: 'Jack',
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
      {
        firstName: 'Mike',
        lastName: 'Adams',
        fullName: 'Mike Adams',
      },
    ];

    restoreNames(users);

    expect(users).toEqual([
      {
        firstName: 'Jack',
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
      {
        firstName: 'Mike',
        lastName: 'Adams',
        fullName: 'Mike Adams',
      },
    ]);
  });
});
