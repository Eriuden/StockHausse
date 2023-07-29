

import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

export async function GET(request) {
    
    const query = request.nextUrl.searchParams.query
    const uri = "mongodb+srv://" + process.env.DB_USER_PASS + "@cluster0.iodcc.mongodb.net/StockHausse"
    const client = new MongoClient(uri)
  
        try{
            //fonction de Next qui renvoie ce qui match la query
            //il s'agit donc de faire correpondre le params lors de l'appel de la fonction
            const database = client.db("Eriuden")
            const products = database.collection("products")

            const search = await products.aggregate([{
                $match: {
                    $or: [
                        { name: {$regex: query, $options:"i"}}         
                    ]
                }
            }]).toArray()
            
            return NextResponse.json({success: true, search})
        } finally  {
            await client.close()
        }   
}
