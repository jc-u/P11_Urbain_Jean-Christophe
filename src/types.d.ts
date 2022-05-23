/* Defining the interface of the data that will be returned from the API. */
interface IAccomodation

{id: string,
  title: string,
  cover: string,
  pictures: string[],
  description: string,
  host: {
      name: string,
      picture: string
    },
    rating: string,
    location: string,
    equipments: string[],
    tags: string[]}

/* Extending the Array interface to include the IAccomodation interface. */
interface IAccomodations extends Array<IAccomodation>{}

export { IAccomodations }