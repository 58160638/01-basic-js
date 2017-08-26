const hello = require('./hello')

test('hello fucntion', () =>{
  //Arrange
  let nickname = 'Bew'

  //Act
  let result = hello(nickname)

  //Assert
  expect(result).toBe('Hello Bew')
})
