import React from 'react';
import image from '../assets/Designer.png'

const Team: React.FC = () => {
  const teamMembers = [
    {
      name: 'John Smith',
      designation: 'Designation here',
      review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis nam dolorem doloribus incidunt fuga. Possimus, suscipit iste. Cum fugiat velit voluptate deserunt soluta nemo, optio maxime ipsum itaque animi incidunt'
      
    },
    {
      name: 'Elina Williams',
      designation: 'Designation here',
      review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis nam dolorem doloribus incidunt fuga. Possimus, suscipit iste. Cum fugiat velit voluptate deserunt soluta nemo, optio maxime ipsum itaque animi incidunt'

    },
    {
      name: 'John Smith',
      designation: 'Designation here',
      review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis nam dolorem doloribus incidunt fuga. Possimus, suscipit iste. Cum fugiat velit voluptate deserunt soluta nemo, optio maxime ipsum itaque animi incidunt'

    },
  ];

  return (
    <>
    <h1 className='text-4xl pl-12 mt-6'>Team</h1>
    <div  className='pl-14 mt-6'><p>Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare vestibulum
        nunc dignissim vel <br/> consequat. Leo etiam nascetur bibendum amet enim sit eget leo
        amet. At metus orci augue fusce eleifend</p></div>
        <div className='gap-4 ml-5 mt-5'>
    
    <div className='flex-col pl-8'>
        <div className='flex bg-blue-400 pl-5 pr-5 pt-5 pb-5 w-fit rounded-lg'>
            <div> <img src={image} className='w-24 rounded-lg pl-'/>
                <h2 className='pl-2'>{teamMembers[0].name}</h2>
                <p className='text-sm'>{teamMembers[0].designation}</p>
            </div>
            <div>
                
                <p className='ml-12'>Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare vestibulum
        nunc dignissim vel <br/> consequat. Leo etiam nascetur bibendum amet enim sit eget leo
        amet. At metus orci augue fusce eleifend  <br/>lectus eu fusce adipiscing. Volutpat
        ultrices nibh sodales massa habitasse urna felis augue.
        Gravida aliquam <br/>fermentum augue eu. Imperdiet bibendum amet aliquam donec. Eget
        justo dui metus odio rutrum. Vel ipsum <br/> eget in at curabitur.</p>
            </div>
        </div>
        <div className='flex bg-blue-400 pl-5 pr-5 pt-5 pb-5 w-fit rounded-lg mt-8'>
        <div> <img src={image} className='w-24 rounded-lg'/>
              <h2>{teamMembers[1].name}</h2>
              <p className='text-sm'>{teamMembers[1].designation}</p>
                </div>
            <div> 
                <p className='ml-12'>Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare vestibulum
        nunc dignissim vel <br/> consequat. Leo etiam nascetur bibendum amet enim sit eget leo
        amet. At metus orci augue fusce eleifend  <br/>lectus eu fusce adipiscing. Volutpat
        ultrices nibh sodales massa habitasse urna felis augue.
        Gravida aliquam <br/>fermentum augue eu. Imperdiet bibendum amet aliquam donec. Eget
        justo dui metus odio rutrum. Vel ipsum <br/> eget in at curabitur.</p>
            </div>
        </div>
        <div className='flex bg-blue-400 pl-5 pr-5 pt-5 pb-5 w-fit rounded-lg mt-8'>
        <div> <img src={image} className='w-24 rounded-lg'/>
        <h2 className='pl-2'>{teamMembers[2].name}</h2>
            <p className='text-sm'>{teamMembers[2].designation}</p>
        </div>
            <div>
                
                <p className='ml-12'>Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare vestibulum
        nunc dignissim vel <br/> consequat. Leo etiam nascetur bibendum amet enim sit eget leo
        amet. At metus orci augue fusce eleifend  <br/>lectus eu fusce adipiscing. Volutpat
        ultrices nibh sodales massa habitasse urna felis augue.
        Gravida aliquam <br/>fermentum augue eu. Imperdiet bibendum amet aliquam donec. Eget
        justo dui metus odio rutrum. Vel ipsum <br/> eget in at curabitur. </p>
            </div>
        </div>
    </div>
    </div>
    </>
  );
};

export default Team;
