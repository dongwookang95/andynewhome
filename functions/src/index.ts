import * as functions from "firebase-functions";
import * as express from 'express';
import { addEntry, getAllEntries, deleteEntry, addEntryWithDupCheck} from "./entryController";;
// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript
const app = express();

app.get('/', (req,res)=> res.status(200).send('Hey there!'))
app.post('/subscribe',addEntry)
app.post('/subscribe/:address',addEntryWithDupCheck)
app.get('/entries',getAllEntries)
app.delete('/unsubscribe',deleteEntry)

exports.app = functions.https.onRequest(app);
