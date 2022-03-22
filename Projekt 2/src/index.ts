import express from 'express'
import {Request, Response} from 'express'
import {Note} from './note'


const app = express()
const notes: Note[] = [];

app.use(express.json())

app.get('/note/:id', function (req: Request, res: Response) {
  notes.forEach(element => {
    if(element.id == null)
    {
      res.status(404).send("Brak elementu");
    }
    else {
      res.status(200).send(element);
    }
  });
})
app.post('/note', function (req: Request, res: Response) {

  
  const date = new Date
  const dateISO = date.toISOString()

  const note = {title: '',content:'witam',id:Date.now()}

  if(note.title === "" || note.title== null)
  {
    res.status(400).send('Nie podano danych')
  }

  notes.push(note)
  res.status(200).send('Dodano z id:'+note.id)
})

app.listen(3000)