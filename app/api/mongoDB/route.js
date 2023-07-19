//Avec Next, les règles changent, c'est pas mongoose ici

import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

export async function GET(request) {
    const uri = "mongodb+srv://" + process.env.DB_USER_PASS + "@cluster0.iodcc.mongodb.net/StockHausse"
    const client = new MongoClient(uri)
  
        try{
            const database = client.db("Eriuden")
            const items = database.collection("inventory")
            //requète classique pour chercher un objet
            const query = { }
            const item = await items.find(query).toArray()
            console.log(item)
            return NextResponse.json({"test" : 35})
        } finally /*s'assure de fermer le client en cas de fermeture/erreur*/ {
            await client.close()
        }   
}

