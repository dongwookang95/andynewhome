import { Response } from 'express';
import { db } from './config/firebase';


type EntryType = {
    address: string,
    coverImageUrl : string
}

type Request = {
    body : EntryType,
    params : { entryId : string }
}

type ResponseError = {
    code : string,
    message: string,
}

const addEntry = async (req:Request, res:Response) => {
    res.header("Access-Control-Allow-Origin","*");
    const { address } = req.body;
    try{
        const entry = db.collection('entries').doc()
        const entryObject = {
            id: entry.id,
            address
        }
        entry.set(entryObject)
        res.status(200).send({
          status: 'success',
          message: 'entry added successfully',
          data: entryObject
        })
      } catch(error) {
          const err = error as ResponseError;
          res.status(500).json(err.message)
      }
}

const addEntryWithDupCheck = async(req:Request, res:Response) => {
    res.header("Access-Control-Allow-Origin","*");
    const { address } = req.body;
    const entryRef = db.collection('entries');
    const entryObj = {
        id: entryRef.id,
        address
    }
    const queryRef = await entryRef.where('email', '==', {address}).get();
    if(queryRef.empty){
        entryRef.doc.set(entryObj);
    }else{
        console.log("The provided email address is already existing");
    }
    } catch(error){
        const err = error as ResponseError;
        res.status(500).json(err.message);
    }
}

const getAllEntries = async(req:Request, res:Response) => {
    res.header("Access-Control-Allow-Origin","*");
    try{
        const allEntries: EntryType[] = []
        const querySnapshot = await db.collection('entries').get()
        querySnapshot.forEach((doc:any) => allEntries.push(doc.data()))
        return res.status(200).json(allEntries)
    }catch(error){
        const err = error as ResponseError
        return res.status(500).json(err.message);
    }
}

const updateEntry = async (req: Request, res: Response) => {
    const { body: {address}, params: { entryId } } = req

    try{
        const entry = db.collection('entries').doc(entryId)
        const currentData = (await entry.get()).data() || {}
        const entryObject = {
            address: address || currentData.address,
        }

        await entry.set(entryObject).catch(error=>{
            return res.status(400).json({
                status:'error',
                message: error.message
            })
    })
    return res.status(200).json({
        status: 'success',
        message: 'entry updated successfully',
        data: entryObject
    })
}
    catch(error){
        const err = error as ResponseError
        return res.status(500).json(err.message)
    }
}

const deleteEntry = async(req: Request, res: Response) => {
    res.header("Access-Control-Allow-Origin","*");
    const { entryId } = req.params
    try {
        const entry = db.collection('entries').doc(entryId)

        await entry.delete().catch(error => {
            return res.status(400).json({
                status: 'error',
                message: error.message
            })
        })
        return res.status(200).json({
            status: 'success',
            message: 'entry deleted successfully'
        })
    }
    catch(error){
        const err = error as ResponseError
        return res.status(500).json(err.message)
    }

}

export { addEntry, getAllEntries, updateEntry, deleteEntry, addEntryWithDupCheck}