import { WebPlugin } from '@capacitor/core';
import { FusedLocationPlugin } from './definitions';

export class FusedLocationWeb extends WebPlugin implements FusedLocationPlugin {
  constructor() {
    super({
      name: 'FusedLocation',
      platforms: ['web']
    });
  }

  async echo(options: { value: string }): Promise<{value: string}> {
    console.log('ECHO', options);
    return Promise.resolve({ value: options.value });
  }
}

const FusedLocation = new FusedLocationWeb();

export { FusedLocation };
