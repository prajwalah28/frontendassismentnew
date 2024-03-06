import img1 from '../assets/image.png';
import img2 from '../assets/img2.png';

export default function About() {
  return (
    <div className="mx-3 md:ml-3 md:mr-10 w-full md:w-2/3">
      <section className="rounded-lg bg-white p-6 md:p-8">
        <div className="flex flex-col md:flex-row items-start justify-start md:items-center md:justify-between">
          <h2 className="text-3xl md:text-5xl text-black font-semibold">About Bitcoin</h2>
        </div>
        <div className="mt-4">
          <div className="text-black">
            <b className="text-lg">What is Bitcoin?</b>
            <p>
              Bitcoin’s price today is US$16,951.82, with a 24-hour trading volume of $19.14 B. BTC is +0.36% in the last 24 hours. It is currently -7.70% from its 7-day all-time high of $18,366.66, and 3.40% from its 7-day all-time low of $16,394.75. BTC has a circulating supply of 19.24 M BTC and a max supply of 21 M BTC.
            </p>
          </div>
          <div className="mt-4 text-black">
            <b className="text-lg">Lorem ipsum dolor sit amet</b>
            <p className="whitespace-pre-wrap">Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis tristique pharetra. Diam id et lectus urna et tellus aliquam dictum at. Viverra diam suspendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus. Ultricies urna volutpat pendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus.</p>
            <p>&nbsp;</p>
            <p>Diam praesent massa dapibus magna aliquam a dictumst volutpat. Egestas vitae pellentesque auctor amet. Nunc sagittis libero adipiscing cursus felis pellentesque interdum. Odio cursus phasellus velit in senectus enim dui. Turpis tristique placerat interdum sed volutpat. Id imperdiet magna eget eros donec cursus nunc. Mauris faucibus diam mi nunc praesent massa turpis a. Integer dignissim augue viverra nulla et quis lobortis phasellus. Integer pellentesque enim convallis ultricies at.</p>
            <p>&nbsp;</p>
            <p>Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper dui</p>
          </div>
        </div>
        <div className="mt-6">
          <h1 className="text-xl font-semibold">Already Holding Bitcoin?</h1>
          <div className="flex flex-col md:flex-row">
            <img className="w-full md:w-1/2 h-40 md:h-auto md:mr-4 mt-4 md:mt-0" src={img1} alt="Image 1" />
            <img className="w-full md:w-1/2 h-40 md:h-auto mt-4 md:mt-0" src={img2} alt="Image 2" />
          </div>
          <p className="mt-4 text-black">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem porro at, nihil dolorem, itaque tempore, ad quasi beatae distinctio eaque vitae asperiores illo ab facilis dolorum. Vero quasi harum iste repellendus eos nulla voluptatum animi saepe asperiores itaque facere accusantium quo ducimus, repudiandae beatae ut corporis optio, eum minima ullam.
          </p>
        </div>
      </section>
    </div>
  );
}
