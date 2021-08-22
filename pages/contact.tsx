/////////////// HTML EMBED METHOD ///////////////
// import React from "react";
// import styles from "../styles/restpages/Main.module.scss";

// const Contact = () => {
//   return (
//     <div className={styles.container}>
//       <div className={styles.mapouter}>
//         <iframe
//           className="gmap_iframe"
//           scrolling="no"
//           src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=lahore&amp;t=p&amp;z=4&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
//         ></iframe>
//         <a href="https://www.fnfgo.com/">Friday Night </a>
//       </div>
//     </div>
//   );
// };

// export default Contact;

/////////////// react-google-maps -> LoadScript/LoadScriptNext (Working) ///////////////
import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import emailjs from "emailjs-com";
import mapstyle from "../components/mapstyle";
import mapstyle2 from "../components/mapstyle2";
import style from "../styles/restpages/Main.module.scss";
import { AiFillMessage, AiFillPhone, AiOutlineMail } from "react-icons/ai";
import { MdPhoneIphone } from "react-icons/md";
import { ImLocation2 } from "react-icons/im";

const containerStyle = {
  width: "82rem",
  height: "500px",
};

const center = {
  lat: 31.5204,
  lng: 74.3587,
};

function MyComponent() {
  const doSomething = (e) => {
    e.preventDeafault();
    console.log("working!");
  };

  function sendEmail(e: any) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0p7lzm7",
        "template_7q9oitu",
        e.target,
        "user_FHbcqX6JOmsI9MAZPLWvs"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
  return (
    <div className={style.container}>
      <div className="contactpagemap">
        <LoadScript googleMapsApiKey="AIzaSyC1M8xDqp9OAAX3i0fKDigmMc96sr47QWo">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={4}
            options={{ styles: mapstyle2 }}
          >
            {/* Child components, such as markers, info windows, etc. */}
            <Marker position={center} />
          </GoogleMap>
        </LoadScript>
      </div>
      <div className={style.contactinfocontainer}>
        <div className={style.contactinfoinner}>
          <div className={style.contacttextdetail}>
            <h4>CONTACT</h4>
            <h1>
              Get in touch - Let's <br />
              work together
            </h1>
            <br />
            {/* <p>Address</p> */}
            <address>
              {" "}
              <ImLocation2 /> Pakistan Mint G.T. Road Lahore, Pakistan{" "}
            </address>
            <p>
              <MdPhoneIphone /> +92-349-4373207
            </p>
            <p>
              <AiOutlineMail />{" "}
              <a href="mailto:abdulmuqeet521@gmail.com">
                abdulmuqeet521@gmail.com
              </a>
            </p>
          </div>
          <div className={style.contactform}>
            <form action="POST" onSubmit={sendEmail}>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="name"
                className={style.forminputfield}
              />{" "}
              <br />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="email"
                className={style.forminputfield}
              />
              <br />
              <input
                type="textarea"
                name="msg"
                id="msg"
                placeholder="message"
                className={style.forminputfield}
              />
              <br />
              <br />
              <input
                type="Submit"
                onClick={sendEmail}
                className={style.formbtn}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(MyComponent);

///////////////// react-google-maps -> useLoadScript (Working) ///////////////
// import React from "react";
// import { GoogleMap, useLoadScript } from "@react-google-maps/api";
// import mapstyle2 from "../components/mapstyle2";

// const options = {
//   // zoomControlOptions: {
//   //   position: google.maps.ControlPosition.RIGHT_CENTER // ,
//   //   // ...otherOptions
//   // }
// };

// const containerStyle = {
//   width: "1200px",
//   height: "500px",
// };

// const center = {
//   lat: 31.5204,
//   lng: 74.3587,
// };

// export default function MyComponent() {
//   const { isLoaded, loadError } = useLoadScript({
//     googleMapsApiKey: "AIzaSyCX5mk9fYPeZZmDGtaa3D59c2IB70SCTec", // ,
//     // ...otherOptions
//   });

//   const renderMap = () => {
//     // wrapping to a function is useful in case you want to access `window.google`
//     // to eg. setup options or create latLng object, it won't be available otherwise
//     // feel free to render directly if you don't need that
//     // const onLoad = React.useCallback(function onLoad(mapInstance) {
//     //   // do something with map Instance
//     // }, []);
//     function onLoad(mapInstance) {
//       // do something with map Instance
//     }
//     return (
//       <GoogleMap
//         onLoad={onLoad}
//         mapContainerStyle={containerStyle}
//         center={center}
//         zoom={4}
//         options={{ styles: mapstyle2 }}
//       >
//         {
//           // ...Your map components
//         }
//       </GoogleMap>
//     );
//   };

//   if (loadError) {
//     return <div>Map cannot be loaded right now, sorry.</div>;
//   }

//   return isLoaded ? renderMap() : <p>Loading...</p>;
// }

// import React, { Component } from "react";
// import GoogleMapReact, { Marker } from "google-map-react";
// import mapstyle2 from "../components/mapstyle2";

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

// const containerStyle = {
//   width: "800px",
//   height: "400px",
// };

// const center = {
//   lat: 31.5204,
//   lng: 74.3587,
// };

// class SimpleMap extends Component {
//   static defaultProps = {
//     center: {
//       lat: 59.95,
//       lng: 30.33,
//     },
//     zoom: 11,
//   };

//   render() {
//     return (
//       // Important! Always set the container height explicitly
//       <div style={{ height: "60vh", width: "90%" }}>
//         <GoogleMapReact
//           bootstrapURLKeys={{ key: "AIzaSyCX5mk9fYPeZZmDGtaa3D59c2IB70SCTec" }}
//           defaultCenter={center}
//           defaultZoom={4}
//           options={{ styles: mapstyle2 }}
//         >
//           {/* <AnyReactComponent
//             lat={59.955413}
//             lng={30.337844}
//           /> */}
//         </GoogleMapReact>
//       </div>
//     );
//   }
// }

// export default SimpleMap;

/////////////////// LEAFLET ///////////////////
// import React, { useEffect, Component } from "react";
// import style from "../styles/restpages/Main.module.scss";
// import mapstyle2 from "../components/mapstyle2";
// import L from "leaflet";
// import "leaflet/dist/leaflet.css";
// import styled from "styled-components";
// import dynamic from "next/dynamic";

// const Wrapper = styled.div`
//   width: 70rem;
//   height: 40rem;
//   //
// `;

// const DynamicComponentWithNoSSR = dynamic(
//   () => import("../components/hello1"),
//   {
//     loading: () => <p>loading...</p>,
//     ssr: false,
//   }
// );
// const DynamicComponentWithNoSSR2 = dynamic(
//   () => import("../components/hello2"),
//   {
//     loading: () => <p>loading...</p>,
//     ssr: false,
//   }
// );

// const Contact = () => {
//   let map = L.map("map", {
//     center: [58, 16],
//     zoom: 4,
//   });

//   return (
//     <div className={style.container}>
//       Map:
//       <div id="map"></div>
//       <DynamicComponentWithNoSSR />
//       <DynamicComponentWithNoSSR2 />
//     </div>
//   );
// };

// export default Contact;

////////////////////// REACT - LEAFLET ////////////////////
