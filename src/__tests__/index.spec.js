import zeplo from '..'

describe('index.spec.js', () => {
  test('exports http api', () => {
    expect(zeplo.http).toEqual(expect.any(Function))
    expect(zeplo.http.json).toEqual(expect.any(Function))
    expect(zeplo.http.text).toEqual(expect.any(Function))
    expect(zeplo.http.buffer).toEqual(expect.any(Function))
    expect(zeplo.http.send).toEqual(expect.any(Function))
  })
})
