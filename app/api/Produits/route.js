//Avec Next, les règles changent, c'est pas mongoose ici

import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

export async function GET(request) {
    
    const uri = "mongodb+srv://" + process.env.DB_USER_PASS + "@cluster0.iodcc.mongodb.net/StockHausse"
    const client = new MongoClient(uri)
  
        try{
            const database = client.db("Eriuden")
            const products = database.collection("products")
            //requète classique pour chercher un objet
            const query = {}
            const product = await products.find(query).toArray()
            return NextResponse.json({success: true, product})
        } finally /*s'assure de fermer le client en cas de fermeture/erreur*/ {
            await client.close()
        }   
}

export async function POST(request) {
    
    let body = request.body

    const uri = "mongodb+srv://" + process.env.DB_USER_PASS + "@cluster0.iodcc.mongodb.net/StockHausse"
    const client = new MongoClient(uri)
  
        try{
            const database = client.db("stock")
            const products = database.collection("products")
            
            const product = await products.insertOne(body)
            return NextResponse.json({ product})
        } finally /*s'assure de fermer le client en cas de fermeture/erreur*/ {
            await client.close()
        }   
}