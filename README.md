# Sistema di gestione prenotazioni

Per la direzione di un cinema, si richiede lo sviluppo di un sistema di prenotazione di biglietti. Nella home page del cinema sarà presente un elenco di film proveniente dall'API del sistema di cassa.
L'API è disponibile all'indirizzo:

```
https://deploy.braintech.app/cinema/cinema.php?access_key=1dada2bece5869c689bf638a31b7f809
//Metodo di accesso GET

Per l'accesso all'immagine usare la base URL: https://secure.webtic.it/angwt/
```

**Punto 1:**

- Analizzare la risposta della API alla ricerca di un sistema di informazioni chiave da mostrare ai clienti in visita del sito.
- Le informazioni base sono estrapolabili direttamente dalla richiesta.

**Punto 2:**

- Ad ogni film è associato un codice  performance chiamato "PerformanceId", tramite questo identificativo permettere ad un utente di prenotarsi ad uno spettacolo.
- Per effettuare la prenotazione ogni utente dovrà essersi prima registrato all'interno del sistema.
- Nella sua area personale un utente potrà consultare tutte le prenotazioni effettuate in precedenza, per ogni prenotazione sarà presente un codice univoco da cui verrà generato dinamicamente un QR Code.

**Punto 3:**

- Un amministratore potrà consultare l'elenco giornaliero dei prenotati.
- Un amministratore potrà scaricare l'elenco dei prenotati sotto forma di CSV o XLS

- Verifica della prenotazione, dire se entrato nella sala cinema (leggere il QR Code)