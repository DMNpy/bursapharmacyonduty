import PharmacyTable from './PharmacyTable'





export default function Pharmacy({searchTerm}) {
  return (
    <>
    <div>
    <h1 className='text-center text-5xl m-4'>Eczaneler</h1>
    </div>
    <div className="lg:col-span-3">
             
    <PharmacyTable  searchTerm={searchTerm} />
 
    </div>
    </>
  )
}
