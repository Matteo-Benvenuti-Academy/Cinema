
export function getEvents(): Promise<Event[]>{

    return fetch("https://deploy.braintech.app/cinema/cinema.php?access_key=1dada2bece5869c689bf638a31b7f809").then(res => res.json())
}