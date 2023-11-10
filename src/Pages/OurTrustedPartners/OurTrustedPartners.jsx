import styles from "./OurTrustedPartner.module.css";

import partner1 from "../../assets/OurTrustedPartners/partner1.png";
import partner2 from "../../assets/OurTrustedPartners/partner3.svg.png";
import partner4 from "../../assets/OurTrustedPartners/partner1.png";
import partner5 from "../../assets/OurTrustedPartners/partner3.svg.png";

const OurTrustedPartners = () => {
  return (
    <div className="bg-blue-900 py-16 mb-8">
      <h2
        className={`${styles.trustedPartner} text-center text-2xl text-yellow-400 mb-32`}
      >
        Our Trusted Partners
      </h2>

      <div className="flex flex-wrap justify-center items-center gap-16">
        <img src={partner1} className="w-[180px] lg:w-[250px]" alt="image" />
        <img src={partner5} className="w-[180px] lg:w-[250px]" alt="image" />
        <img src={partner4} className="w-[180px] lg:w-[250px]" alt="image" />
        <img src={partner2} className="w-[180px] lg:w-[250px]" alt="image" />
      </div>
    </div>
  );
};

export default OurTrustedPartners;
