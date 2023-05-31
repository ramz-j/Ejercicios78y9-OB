export class Contact {
  name = '';
  lastName = '';
  connected = false;

  constructor(name, lastName, connected){
    this.name = name;
    this.lastName = lastName;
    this.connected = connected;
  }
}
