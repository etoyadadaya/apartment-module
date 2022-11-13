export type Apartment = {
  id: number;
  floor: number;
  pos_on_floor: number;
  price: number;
  rooms: number;
  area_total: number;
  area_kitchen: number;
  area_live: number;
  layout_image: string;
};

export type Sort =
  | "id"
  | "price"
  | "rooms"
  | "floor"
  | "area_total"
  | "pos_on_floor"
  | "area_kitchen"
  | "area_live";
