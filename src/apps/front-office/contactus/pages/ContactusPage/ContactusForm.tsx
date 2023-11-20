import { trans } from "@mongez/localization";
import { Form, FormSubmitOptions } from "@mongez/react-form";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { SubmitButton } from "apps/front-office/design-system/components/Button";
import EmailInput from "apps/front-office/design-system/components/Form/EmailInput";
import TextInputV2 from "apps/front-office/design-system/components/Form/TextInputV2";
import TextareaInput from "apps/front-office/design-system/components/Form/TextareaInput";
import React from "react";
import { toast } from "react-toastify";
import { sumbitMessage } from "../../services/contactus-service";

export default function ContactusForm() {
  const submit = ({ values }: FormSubmitOptions) => {
    console.log(values);

    sumbitMessage(values)
      .then(response => {
        console.log(response);

        toast.success(trans("messageSentSuccessfully"));
      })
      .catch(error => {
        toast.error(error.data.error);
      });
  };
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "KEY",
  });

  const [map, setMap] = React.useState(null);
  console.log(map);

  const onLoad = React.useCallback(
    function callback(map) {
      // This is just an example of getting and using the map instance!!! don't just blindly copy!
      const bounds = new window.google.maps.LatLngBounds(center);
      map.fitBounds(bounds);

      setMap(map);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isLoaded],
  );

  const onUnmount = React.useCallback(function callback() {
    setMap(null);
  }, []);
  const containerStyle = {
    width: "400px",
    height: "400px",
  };

  const center = {
    lat: -3.745,
    lng: -38.523,
  };
  return (
    <div className="grid mt-10 border border-t-2 border-gray-100 border-solid sm:grid-cols-1 lg:grid-cols-2 md:gap-2 lg:gap-4">
      {isLoaded && (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
          onLoad={onLoad}
          onUnmount={onUnmount}
          id="map"
        />
      )}
      <div className="py-10 border-gray-500 border-solid wrapper">
        <Form onSubmit={submit}>
          <h2 className="text-[42px] font-bold mb-5 max-xl:mb-3 max-lg:text-[36px] max-md:text-[30px]">
            {trans("SendUsMessage")}
          </h2>
          <p className="w-[80%] text-[16px] text-primary-text leading-loose mb-10 max-xl:text-[15px] max-xl:w-[90%] max-xl:mb-6 max-lg:w-[100%] max-lg:leading-normal">
            {trans("Lorem")}
          </p>
          <TextInputV2 name="name" autoFocus placeholder={trans("yourName")} />
          <EmailInput name="email" placeholder={trans("email")} />
          <TextInputV2 name="subject" placeholder={trans("subject")} />
          <TextareaInput name="comment" placeholder={trans("comment")} />
          <SubmitButton className=" mt-5 flex rounded bg-primary-main px-8 pb-3 pt-3 text-xs font-medium uppercase leading-normal text-black hover:text-white shadow-[0_4px_9px_-4px_#e4a11b] transition duration-150 ease-in-out hover:bg-primary-hover hover:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.3),0_4px_18px_0_rgba(228,161,27,0.2)] focus:bg-warning-600 focus:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.3),0_4px_18px_0_rgba(228,161,27,0.2)] focus:outline-none focus:ring-0 active:bg-warning-700 active:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.3),0_4px_18px_0_rgba(228,161,27,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(228,161,27,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.2),0_4px_18px_0_rgba(228,161,27,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.2),0_4px_18px_0_rgba(228,161,27,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.2),0_4px_18px_0_rgba(228,161,27,0.1)]">
            {trans("submit")}
          </SubmitButton>
        </Form>
      </div>
    </div>
  );
}
