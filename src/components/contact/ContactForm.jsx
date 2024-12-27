import { useState } from "react";
import arrow from "../navfoot/icons/icon-arrow.svg";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.name) newErrors.name = "Can't be empty";
    if (!formData.email) newErrors.email = "Can't be empty";
    if (!formData.message) newErrors.message = "Can't be empty";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Submit the form
    }
  };

  return (
    <div className="lg:w-[1110px] lg:h-[270px] md:w-[573px] md:h-[450px] w-[311px] h-[400px] mt-[100px] md:mb-0 mb-[100px] mx-auto">
      <div className="h-full flex lg:flex-row flex-col justify-between lg:items-start items-center">
        <div>
          <h1 className="md:text-[72px] md:leading-[64px] md:tracking-[-2px] text-[48px] leading-[52px] tracking-[-1.71px] font-bold">
            Connect <span className="block mx-5">with us</span>
          </h1>
        </div>

        <div className="w-full lg:w-1/2">
          <form onSubmit={handleSubmit}>
            <div className="mb-4 relative">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full p-2 border-b-2 ${
                  errors.name ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:border-black`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm absolute left-0 -bottom-5">
                  {errors.name}
                </p>
              )}
            </div>
            <div className="mb-4 relative">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full p-2 border-b-2 ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:border-black`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm absolute left-0 -bottom-5">
                  {errors.email}
                </p>
              )}
            </div>
            <div className="mb-4 relative">
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                className={`w-full p-2 border-b-2 ${
                  errors.message ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:border-black`}
              />
              {errors.message && (
                <p className="text-red-500 text-sm absolute left-0 -bottom-5">
                  {errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="flex items-center justify-center ml-auto w-[80px] h-[80px] bg-black text-white font-bold hover:bg-[#60636D]"
            >
              <img
                src={arrow}
                alt="arrow"
                className="object-cover w-[24px] h-[18px]"
              />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
