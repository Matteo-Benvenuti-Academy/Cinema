import { Days } from "./days.interface"


export interface Event {
    EventId: number,
    Title : string,
    Description : string
    Actors:string,
    Director: string,
    Picture:string,
    Category:string,
    Days: Days[]
}