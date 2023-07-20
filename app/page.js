import { Header } from "@/components/Header";
import { useState, useEffect } from "react";


export default function Home() {
  const [product, setProduct] = useState({})

  const addProduct = async(e)=>{
    e.preventDefault()

    try {
      const response = await fetch("/api/product", {
        method:"POST",
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(product)
      })

      if(response.ok) {
        console.log("ca marche")
      } else {
        console.log("ca marche pas")
      }
    }
    catch(err) {
      window.alert(err)
    }
  }

  return (
    <>
      <Header/>

      <div>
        <input type="text" placeholder="Entrez un nom de produit" 
        className="flex-1 border border-gray-300"/>

        <select className=" border border-gray-300 px-4 py-2 rounded-r-md">
          <option value="">Tous</option>
          <option value="categorie1">1ère catégorie</option>
          <option value="categorie2">2nde catégorie</option>
        </select>
      </div>

      <div className="container">
        <h2>Ajouter un produit</h2>

        <form>
          <div className="mb-4">
            <label htmlFor="productName" className="block mb-2"> Nom de produit </label>
            <input onChange={(e)=> (e.target.value)} type="text" id="productName" className="w-full border border-slate-950"></input>
          </div>

          <div className="mb-4">
            <label htmlFor="productQty" className="block mb-2"> Quantité initiale </label>
            <input onChange={(e)=> (e.target.value)} type="number" id="productQty" className="w-full border border-slate-950"></input>
          </div>

          <div className="mb-4">
            <label htmlFor="productPrice" className="block mb-2"> Prix </label>
            <input onChange={(e)=> (e.target.value)} type="number" id="productPrice" className="w-full border border-slate-950"></input>
          </div>

          <button onClick={addProduct} type="submit" className="bg-blue-500 text-white px-4 py-2">Ajouter</button>
        </form>
        <h2>Stock actuel</h2>
      </div>
    </>
    
  )
}
