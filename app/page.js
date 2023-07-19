import { Header } from "@/components/Header";


export default function Home() {
  return (
    <>
      <Header/>

      <div className="container">*
        <h2>Ajouter un produit</h2>

        <form>
          <div className="mb-4">
            <label htmlFor="productName" className="block mb-2"> Nom de produit </label>
            <input type="text" id="productName" className="w-full border border-slate-950"></input>
          </div>

          <div className="mb-4">
            <label htmlFor="productQty" className="block mb-2"> Quantité initiale </label>
            <input type="number" id="productQty" className="w-full border border-slate-950"></input>
          </div>

          <div className="mb-4">
            <label htmlFor="productPrice" className="block mb-2"> Prix </label>
            <input type="number" id="productPrice" className="w-full border border-slate-950"></input>
          </div>
        </form>
        <h2>Stock actuel</h2>
      </div>
    </>
    
  )
}
