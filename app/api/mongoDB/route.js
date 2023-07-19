//Avec Next, les règles changent, c'est pas mongoose ici

import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

export async function GET(request) {
    return NextResponse.json({"a" : 34})
}

const uri = "mongodb+srv://" + process.env.DB_USER_PASS + "@cluster0.iodcc.mongodb.net/StockHausse"