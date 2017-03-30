export interface Sprite {
  name: string;
  sprite: HTMLImageElement;
}

const loadSprite = (name: string): Promise<Sprite> => {
  return new Promise<Sprite>((resolve, reject) => {
    const sprite = new Image();
    sprite.onload = () => resolve({ name, sprite });
    sprite.onerror = (err) => reject(err);
    sprite.src = `../assets/${name}.png`;
  });
};

export const loadSprites = (sources: string[]): Promise<Sprite[]> => {
  const sprites = sources.map(loadSprite);
  return Promise.all(sprites);
};
