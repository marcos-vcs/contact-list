export class Contact{
  name!: string;
  email!: string;
  number!: string;
  nickname!: string;
}

export class ContactWithId extends Contact{
  id!: number;
}
