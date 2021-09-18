export interface Properties {
  address: Address;
  listPrice: number;
  listDate: string;
  mlsId: number;
  photos: Photos;
  property: Property;
}

interface Property {
  area: number;
  bathsFull: number;
  bathsHalf: number;
  bedrooms: number;
}

interface Address {
  streetNumber: number;
  streetName: string;
  city: string;
  state: string;
}

interface Photos {
  [index: string]: string;
}
