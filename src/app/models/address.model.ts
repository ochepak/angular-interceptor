import {Geo} from './geo.model';

export class Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  'geo': Geo;
}
