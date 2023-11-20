import { trans } from "@mongez/localization";
import Helmet from "@mongez/react-helmet";
import Breadcrumb from "apps/front-office/design-system/layouts/Breadcrumb";
import React from "react";
import ContactusData from "../../components/ContactusData";
import ContactusForm from "./ContactusForm";

function _ContactusPage() {
  return (
    <>
      <Helmet title={trans("contactUs")} />
      <Breadcrumb title="contactUs" navItems={[{ name: "contactUs" }]} />
      <div className="container my-16 ">
        <h2 className="text-[42px] font-bold mb-5 max-xl:mb-3 max-lg:text-[36px] max-md:text-[30px]">
          {trans("contactUsTitle")}
        </h2>
        <p className="w-[80%] text-[16px] text-primary-text leading-loose mb-10 max-xl:text-[15px] max-xl:w-[90%] max-xl:mb-6 max-lg:w-[100%] max-lg:leading-normal">
          {trans("Lorem")}
        </p>
        <ContactusData />
        <ContactusForm />
      </div>
    </>
  );
}

const ContactusPage = React.memo(_ContactusPage);
export default ContactusPage;
