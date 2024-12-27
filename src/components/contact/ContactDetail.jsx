const ContactDetail = () => {
  return (
    <div className="lg:w-[1110px] lg:h-[281px] md:w-[573px] md:h-[450px] w-[311px] h-[500px] md:my-[100px] mt-[400px] mx-auto ">
      <div className=" h-full flex lg:flex-row flex-col justify-between  lg:items-center md:items-start ">
        <h1
          data-aos="fade-down"
          className="md:text-[72px] md:leading-[64px] md:tracking-[-2px] text-[48px] leading-[52px] tracking-[-1.71px]   font-bold"
        >
          Contact <span className="block">Details</span>
        </h1>
        <div
          data-aos="fade-up"
          className="lg:w-[350px] lg:h-[121px] text-[#60636D] flex flex-col justify-between "
        >
          <h4 className="font-bold">Main Office</h4>
          <p>
            Mail : archone@mail.com
            <span className="block">Address : 1892 Chenoweth Drive TN</span>
            Phone : 123-456-3451
          </p>
        </div>
        <div
          data-aos="fade-up"
          className="lg:w-[350px] lg:h-[121px] text-[#60636D] flex flex-col justify-between "
        >
          <h4 className="font-bold">Office II</h4>
          <p>
            Mail : archtwo@mail.com
            <span className="block">Address : 3399 Wines Lane TX</span>
            Phone : 832-123-4321
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactDetail;
