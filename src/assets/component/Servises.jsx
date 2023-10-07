import React, { useEffect, useState } from 'react';
import { NavLink, useLoaderData } from 'react-router-dom';
import ServiceCard from './ServiceCard';


const Servises = () => {
    const data = useLoaderData();
   

    const [selectCategory, setSelectCategory] = useState('All');
    console.log(selectCategory);

    const handleCategory = (name) => {
        console.log(name);
        setSelectCategory(name)
    }
    const handleAll = () =>{
        setCardData(data)

    }

    const [cardData, setCardData]= useState(data)
    console.log(cardData);



    useEffect( () => {
       


      


         const findCategory = data?.filter((data) => data?.category === selectCategory)
        console.log(findCategory);
        setCardData(findCategory);
    },[selectCategory,data])

    return (
        <div>
          <div className='flex justify-center flex-wrap items-center gap-4'>
          <button onClick={handleAll}> All</button>
            <button onClick={()=>handleCategory('Wedding')}> Wedding</button>
            <button onClick={()=>handleCategory('Engagement')}> Engegement</button>
            <button onClick={()=>handleCategory('Anniversary')}> Aniversary</button>
            <button onClick={()=>handleCategory('Birthday Party')}> Birthday</button>
            <button onClick={()=>handleCategory('Retirement')}> Retiremnt</button>

          </div>


           <div className='mt-10 grid grid-cols-2'>
            {
                
                cardData.map((data) =>( <ServiceCard key={data.id} cardData={data} ></ServiceCard>))
            }
          </div> 
            
        </div>
    );
};

export default Servises;