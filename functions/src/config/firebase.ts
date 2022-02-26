import * as admin  from 'firebase-admin';
import * as functions from 'firebase-functions';

const pjid = process.env.PROJECT_ID

admin.initializeApp({
    credential: admin.credential.cert({
        //this is accessing to firebase environment variable code line
        privateKey: functions.config().private.key.replace(/\\n/g, '\n'),
        projectId: functions.config().project.id,
        clientEmail: functions.config().client.email,
    }),
    databaseURL: `https://${pjid}.firebaseio.com`,
})
const db = admin.firestore();


export { admin, db};