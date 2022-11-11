export interface Content {
  _id?: string;
  _type?: string;
  _createdAt?: string;
  _updatedAt?: string;
}

export interface SlugContent extends Content {
  slug?: string;
}
