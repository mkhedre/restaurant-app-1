import { trans } from "@mongez/localization";
import { BiPhone } from "react-icons/bi";
import { FaAddressBook } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";

const data = [
  {
    name: "phone",
    info: "+ 44 123 456 78 90 <br /> + 844 123 444 77 88",
    icon: <BiPhone size="70" color={"#FFC222"} />,
  },
  {
    name: "Address",
    info: "Box 565, Pinney's Beach, Charlestown, <br />Nevis, West Indies, Caribbean",
    icon: <FaAddressBook size="70" color={"#FFC222"} />,
  },
  {
    name: "email",
    info: "contact@example.com <br /> info@example.com",
    icon: <MdMarkEmailRead size="70" color={"#FFC222"} />,
  },
];
export default function ContactusData() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 md:gap-2 lg:gap-4">
      {data.map((item, index: any) => (
        <div key={index}>
          {item.icon}
          <h2 className="mt-5 text-[20px] font-bold mb-3 max-xl:mb-3 max-lg:text-[36px] max-md:text-[30px]">
            {trans(item.name)}:
          </h2>
          <div
            className="w-[80%] text-[16px] text-primary-text leading-loose mb-10 max-xl:text-[15px] max-xl:w-[90%] max-xl:mb-6 max-lg:w-[100%] max-lg:leading-normal"
            dangerouslySetInnerHTML={{
              __html: item.info,
            }}></div>
        </div>
      ))}
    </div>
  );
}
