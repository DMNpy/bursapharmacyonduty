import React, {useState, useEffect} from 'react'
import { v4 as uuidv4 } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker } from '@fortawesome/free-solid-svg-icons';


function PharmacyOnDutyTable() {

  const [data, setData] = useState([]);
  const apiUrl = 'https://www.beo.org.tr/nobet-belediye';
  const fetchData = () => {
    fetch(apiUrl)
      .then(res => res.json())
      .then(apiData => {
       
        if (apiData && typeof apiData === 'object') {
        
          const dataArray = Object.values(apiData);
          setData(dataArray);
        } else {
          throw new Error("Veri bir dizi değil");
        }
      })
      .catch(error => {
        console.log("Bir hata oluştu : ", error);
        setData([]); 
      });
  }

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Eczane Adı
              </th>
              <th scope="col" className="px-9 py-3">
                İlçe
              </th>
              <th scope="col" className="px-9 py-3">
                Adres
              </th>
              <th>
                Tel no
              </th>
              <th scope="col" className="px-9 py-3">
                Tarih
              </th>
            </tr>
          </thead>
          <tbody>
          {data.map(nobetbelediye => (
              <tr key={uuidv4()}  className="bg-white border-b dark:bg-gray-900 dark:border-gray-700 px-5 py-4 text-center">
                <td className="font-medium text-gray-900 whitespace-nowrap dark:text-white">
                
                {nobetbelediye.eczane}
                </td>
                <td className='px-5 py-3'>
                {nobetbelediye.ilce}
                </td>
                <td>
               {nobetbelediye.adres}
                <br/>
                <a className='underline text-gray-200 ' href={`https://www.google.com/maps/@${nobetbelediye.enlem},${nobetbelediye.boylam},18z?entry=ttu`} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faMapMarker} style={{ marginRight: '5px' }} />
                    KONUM İÇİN TIKLA
                  </a>
                </td>
                <td>
              {nobetbelediye.tel}
                </td>
              Başlangıç: {nobetbelediye.baslangic}
              <br />
               Bitiş:  {nobetbelediye.bitis}
                <td>

                </td>
              </tr>
               ))}
          </tbody>
         
        </table>
      
        </div>
  )
}

export default PharmacyOnDutyTable