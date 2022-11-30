
export class City {
    constructor(
        public id: number,
        public nameAr: String,
        public nameEn: string
    ) { }
}



export class Services {
    constructor(
        public id: number,
        public name: String
    ) { }
}

export class User {
    constructor(
        public userName: String,
        public mobile: String,

        public userFirstName: string,
        public userLastName: String,
        public userPassword: string
    ) { }
}

export class Foundation1 {
  public active : boolean;

       public city : City;
      constructor(
        public user: User,
        public service : Services,
        public id: Number,
        public nameAr: string,
        public nameEn: string,
        public phone: string,
        public photo: string,
        public description: string,
        public advantages: string,
        public communication: string,
        public logo: string,
        public photoName:string
        )
        { }
    }

    export class Orders {

        public city : City;
        constructor(
          public id : number,
          public service : Services,
          public phone: string,
          public name: string,
          public communication: string,
          public information: string,
          public created : any
        )

        { }
        }
    // export class Foundation {

    //     public services: Services;
    //     constructor( public id: Number,
    //       public nameAr: string,
    //       public nameEn: string,
    //       public phone: string,
    //       public photo: string,
    //       public description: string,
    //       public advantages: string,
    //       public communication: string,
    //       public logo: string
    //       )
    //       { }
    //   }

