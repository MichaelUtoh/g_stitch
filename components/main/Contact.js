import React from "react";
import { ImLocation2 } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { FaPhoneSquare } from "react-icons/fa";

const ContactPane = () => {
  return (
    <div className="flex h-full items-center justify-center w-full">
      <div className="flex h-[450px] items-center justify-between w-8/12">
        <section className="bg-white h-[450px] p-10 w-6/12">
          <p className="fnt1 font-bold text-[#5a5a5a] text-xl">Let&rsquo;s connect</p>
          <p className="fnt2 mt-3 mb-20 text-[#5a5a5a]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id
            tortor porttitor, aliquam lacus eget, sodales orci. Maecenas non
            ultricies tellus.
          </p>

          <div className="flex fnt2 items-center justify-start my-2 text-[#5a5a5a]">
            <MdEmail className="mr-4" />
            <p>stitches@gmail.com</p>
          </div>

          <div className="flex fnt2 items-center justify-start my-2 text-[#5a5a5a]">
            <FaPhoneSquare className="mr-4" />
            <p>09001110000</p>
          </div>

          <div className="flex fnt2 items-center justify-start my-2 text-[#5a5a5a]">
            <ImLocation2 className="mr-4" />
            <p>21, Nene Boulevard, Maryland.</p>
          </div>
        </section>

        <section className="border-l border-gray-100 bg-white flex h-[450px] justify-center p-10 w-6/12">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="fnt2 label-text text-[#5a5a5a]">Fullname</span>
            </label>
            <input
              type="text"
              placeholder=""
              className="border border-gray-300 input-sm input-bordered rounded-sm w-full max-w-xs"
            />

            <label className="label">
              <span className="fnt2 label-text text-[#5a5a5a]">Email</span>
            </label>
            <input
              type="text"
              placeholder=""
              className="border border-gray-300 input-sm input-bordered rounded-sm w-full max-w-xs"
            />

            <label className="label">
              <span className="fnt2 label-text text-[#5a5a5a]">Phone No.</span>
            </label>
            <input
              type="text"
              placeholder=""
              className="border border-gray-300 input-sm input-bordered rounded-sm w-full max-w-xs"
            />

            <label className="label">
              <span className="fnt2 label-text text-[#5a5a5a]">Comments</span>
            </label>
            <textarea className="border border-gray-300 input-md input-bordered w-full max-w-xs"></textarea>

            <input
              className="bg-[#070707] btn hover:bg-[#212121] my-6 p-2 rounded-full 
                shadow-lg sm:mt-8 text-white sm:w-[220px] w-[170px] sm:text-md text-sm"
              type="button"
              value="Connect with us"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactPane;
