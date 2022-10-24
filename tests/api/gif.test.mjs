import { getGifs } from '../../src/api/gif';


describe("pruebas en API - GIF", () => {

  test('debe de retornar un arreglo de gifs', async () => {
    const gifs = await getGifs('zombie');

    expect(gifs?.length).toBeGreaterThan(0);
    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    })
  });

});