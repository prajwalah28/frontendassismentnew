import React from 'react';
import PieChartComponent from './PieChartComponent';

const Tokenomics: React.FC = () => {

    const initialData = [
        { name: 'Foundation', value: 20, color: '#F7931A' },
        { name: 'Crowdsale investors', value: 80, color: '#177DD5' },
    ];

    return (
        <div className="bg-white mt-4 rounded-lg p-6">
            <div>
                <h1 className="text-4xl font-bold mb-4 pl-8 pt-4">Tokenomics</h1>
                <h2 className="text-2xl font-bold mb-2 pl-8 pt-4">Initial Distribution</h2>
                <div className='flex flex-col md:flex-row'>
                    <div className='w-full md:w-1/2'>
                        <PieChartComponent data={initialData} />
                    </div>
                    <div className='w-full md:w-1/2 mt-4 md:mt-0'>
                        <h3 className="text-xl font-bold mb-2">
                            <span className='w-2 h-2 bg-blue-700 inline-block mr-2'></span>Crowdsale investors: 80%
                        </h3>
                        <h3 className="text-xl font-bold mb-2">Foundation: 20%</h3>
                    </div>
                </div>
                <p className="mb-4 pl-8">
                    Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare vestibulum
                    nunc dignissim vel <br /> consequat. Leo etiam nascetur bibendum amet enim sit eget leo
                    amet. At metus orci augue fusce eleifend  <br /> lectus eu fusce adipiscing. Volutpat
                    ultrices nibh sodales massa habitasse urna felis augue.
                    Gravida aliquam <br /> fermentum augue eu. Imperdiet bibendum amet aliquam donec. Eget
                    justo dui metus odio rutrum. Vel ipsum <br /> eget in at curabitur sem posuere facilisis
                    vitae. Sed lorem sit mauris id eget arcu ut. Vulputate ipsum aliquet <br /> odio nisi eu ac
                    risus.
                </p>
            </div>
        </div>
    );
};

export default Tokenomics;
