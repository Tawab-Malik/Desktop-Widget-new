import React from "react";
import { FaRegCopy } from "react-icons/fa";
import { CiStopwatch } from "react-icons/ci";
import { FaRegFilePdf } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
// import { MdOutlineFileDownload } from "react-icons/md";

import "../styles/cardlist.css";
const cardData = [
  {
    title: "Die Immobilie in der Scheidung",
    category: "Ratgeber, Scheidung, Eherecht",
    description:
      "Eine Erbimmobilie kann die familiäre und wirtschaftliche Situation verändern. In diesem Ratgeber verraten wir Ihnen, wie...",
    pageCount: "52 Seiten",
    lastUpdate: "18.06.2024",
    format: "PDF",
    image: "/images/cardimg.png",
  },
  {
    title: "Die Immobilienbewertung",
    category: "Ratgeber, Immobilien",
    description:
      "Wie man den richtigen Wert seiner Immobilie ermittelt. Alles, was Sie wissen müssen, um eine fundierte Entscheidung zu treffen.",
    pageCount: "30 Seiten",
    lastUpdate: "10.02.2024",
    format: "PDF",
    image: "/images/cardimg.png",
  },
  {
    title: "Verkaufstipps für Eigentümer",
    category: "Ratgeber, Verkauf",
    description:
      "Erfahren Sie, wie Sie Ihre Immobilie schnell und effizient verkaufen können.",
    pageCount: "45 Seiten",
    lastUpdate: "01.01.2024",
    format: "PDF",
    image: "/images/cardimg.png",
  },
  {
    title: "Immobilienfinanzierung",
    category: "Ratgeber, Finanzierung",
    description:
      "Alles, was Sie über die Finanzierung Ihrer Immobilie wissen müssen.",
    pageCount: "60 Seiten",
    lastUpdate: "25.03.2024",
    format: "PDF",
    image: "/images/cardimg.png",
  },
];

const CheckListen = () => {
  return (
    <div className="card-list">
      {cardData.map((card, index) => (
        <div className="card" key={index}>
          <img
            src={card.image}
            alt={card.title}
            className="card-image"
            height="266"
            width="188"
          />
          <div className="card-content">
            <h2 className="card-title">{card.title}</h2>
            <p className="card-category">{card.category}</p>
            <p className="card-description">{card.description}</p>

            <div className="card-details">
              <span className="card-pageCount">
                <svg
                  width="61"
                  height="9"
                  viewBox="0 0 61 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.27332 8.5158C2.68982 8.5158 2.1632 8.44212 1.69345 8.29475C1.22265 8.14002 0.815039 7.91896 0.47168 7.63159L0.777131 6.93685C1.13524 7.21053 1.51018 7.41369 1.9041 7.54738C2.29696 7.68106 2.75302 7.74738 3.27332 7.74738C3.90527 7.74738 4.37186 7.63159 4.67415 7.40001C4.98275 7.16106 5.13758 6.84948 5.13758 6.46317C5.13758 6.15475 5.02487 5.90843 4.80053 5.72633C4.58251 5.54422 4.21387 5.40001 3.69462 5.29475L2.59925 5.0737C1.93886 4.9337 1.44383 4.70527 1.11416 4.38948C0.790815 4.06632 0.629677 3.63895 0.629677 3.10527C0.629677 2.66316 0.741313 2.27686 0.966708 1.94738C1.19842 1.61791 1.51756 1.36106 1.92517 1.17895C2.33172 0.996847 2.80252 0.905273 3.33652 0.905273C3.8347 0.905273 4.29814 0.986322 4.72681 1.14737C5.15443 1.30211 5.51675 1.52632 5.81166 1.82106L5.5062 2.49474C5.19023 2.20737 4.85635 2.00001 4.50562 1.87369C4.15384 1.74001 3.76098 1.67369 3.32599 1.67369C2.77093 1.67369 2.32855 1.80317 1.99889 2.06317C1.66817 2.31581 1.50386 2.65264 1.50386 3.07369C1.50386 3.41053 1.60498 3.67684 1.80931 3.87369C2.01996 4.07053 2.36016 4.21369 2.83096 4.30527L3.92633 4.53685C4.63517 4.68422 5.15864 4.90843 5.49568 5.21053C5.83904 5.50527 6.01178 5.90844 6.01178 6.42107C6.01178 6.83475 5.89907 7.20001 5.67473 7.5158C5.45671 7.83159 5.14074 8.07685 4.72681 8.25264C4.3192 8.42843 3.8347 8.5158 3.27332 8.5158ZM9.54225 8.5158C8.73441 8.5158 8.09615 8.28106 7.62535 7.81053C7.15455 7.33369 6.91967 6.68738 6.91967 5.8737C6.91967 5.34738 7.02499 4.88421 7.23564 4.48421C7.44629 4.07685 7.73383 3.76527 8.09931 3.54737C8.4711 3.32316 8.89978 3.21054 9.38427 3.21054C10.0794 3.21054 10.6239 3.43475 11.0168 3.88422C11.4097 4.32633 11.6066 4.93684 11.6066 5.71579V6.04212H7.75173C7.78017 6.62423 7.94869 7.07053 8.25729 7.37895C8.56589 7.68106 8.99456 7.83159 9.54225 7.83159C9.85085 7.83159 10.1458 7.78632 10.427 7.69474C10.7082 7.59685 10.9747 7.43896 11.2275 7.22106L11.5224 7.82105C11.2906 8.03895 10.9957 8.21053 10.6376 8.33685C10.2795 8.4558 9.91405 8.5158 9.54225 8.5158ZM9.40534 3.84211C8.92085 3.84211 8.53851 3.99264 8.25729 4.29475C7.97607 4.59685 7.81176 4.99265 7.76226 5.48423H10.8694C10.8483 4.96528 10.7114 4.56106 10.4586 4.27369C10.2132 3.98632 9.8614 3.84211 9.40534 3.84211ZM12.7357 2.03158V1.0737H13.7889V2.03158H12.7357ZM12.841 8.42106V3.30527H13.6942V8.42106H12.841ZM17.3437 8.5158C16.7391 8.5158 16.2862 8.3579 15.985 8.04211C15.6827 7.71896 15.5321 7.25581 15.5321 6.65265V3.96844H14.5315V3.30527H15.5321V1.73685H16.3852V3.30527H18.0072V3.96844H16.3852V6.56844C16.3852 6.96844 16.4695 7.27369 16.638 7.48422C16.8065 7.68738 17.0804 7.78948 17.4595 7.78948C17.5712 7.78948 17.6839 7.7758 17.7965 7.74738C17.9082 7.71896 18.0104 7.69159 18.102 7.66317L18.2495 8.31579C18.1578 8.36527 18.0241 8.41053 17.8492 8.45264C17.6733 8.49475 17.5048 8.5158 17.3437 8.5158ZM21.227 8.5158C20.4192 8.5158 19.7809 8.28106 19.3101 7.81053C18.8393 7.33369 18.6044 6.68738 18.6044 5.8737C18.6044 5.34738 18.7097 4.88421 18.9204 4.48421C19.131 4.07685 19.4186 3.76527 19.7841 3.54737C20.1558 3.32316 20.5845 3.21054 21.069 3.21054C21.7642 3.21054 22.3087 3.43475 22.7015 3.88422C23.0944 4.32633 23.2914 4.93684 23.2914 5.71579V6.04212H19.4365C19.4649 6.62423 19.6334 7.07053 19.942 7.37895C20.2506 7.68106 20.6793 7.83159 21.227 7.83159C21.5356 7.83159 21.8305 7.78632 22.1117 7.69474C22.3929 7.59685 22.6594 7.43896 22.9122 7.22106L23.2071 7.82105C22.9754 8.03895 22.6805 8.21053 22.3224 8.33685C21.9643 8.4558 21.5988 8.5158 21.227 8.5158ZM21.0901 3.84211C20.6056 3.84211 20.2233 3.99264 19.942 4.29475C19.6608 4.59685 19.4965 4.99265 19.447 5.48423H22.5541C22.533 4.96528 22.3961 4.56106 22.1433 4.27369C21.8979 3.98632 21.5461 3.84211 21.0901 3.84211ZM24.5258 8.42106V3.30527H25.3578V4.17896C25.5264 3.8558 25.7654 3.61369 26.074 3.45264C26.3826 3.29159 26.7302 3.21054 27.1167 3.21054C28.3311 3.21054 28.9389 3.88422 28.9389 5.23159V8.42106H28.0857V5.28422C28.0857 4.80738 27.991 4.46001 27.8014 4.24211C27.6192 4.0179 27.3243 3.90528 26.9167 3.90528C26.4459 3.90528 26.0709 4.05265 25.7897 4.34738C25.5158 4.63475 25.3789 5.02106 25.3789 5.50527V8.42106H24.5258ZM32.1239 8.5158C31.7721 8.5158 31.4561 8.44948 31.176 8.31579C30.9021 8.17579 30.6841 7.98633 30.523 7.74738C30.3608 7.50843 30.2807 7.24212 30.2807 6.94738C30.2807 6.57581 30.3755 6.28106 30.5651 6.06316C30.761 5.84527 31.0812 5.6916 31.5236 5.60002C31.9722 5.50212 32.5831 5.45263 33.3562 5.45263H33.6932V5.12632C33.6932 4.69158 33.6016 4.37895 33.4194 4.18948C33.2435 3.99264 32.9591 3.89474 32.5663 3.89474C32.2566 3.89474 31.9585 3.94001 31.671 4.03159C31.3824 4.1158 31.0875 4.25579 30.7863 4.45264L30.4914 3.83159C30.7578 3.64211 31.0812 3.4916 31.4604 3.37896C31.8458 3.26633 32.2145 3.21054 32.5663 3.21054C33.2256 3.21054 33.7143 3.37158 34.0303 3.69474C34.3526 4.0179 34.5148 4.51896 34.5148 5.20001V8.42106H33.7143V7.53686C33.5805 7.83896 33.373 8.07685 33.0929 8.25264C32.819 8.42843 32.4957 8.5158 32.1239 8.5158ZM32.2608 7.87369C32.6821 7.87369 33.0255 7.72949 33.293 7.44212C33.5595 7.14739 33.6932 6.77579 33.6932 6.32632V6.01054H33.3667C32.798 6.01054 32.3482 6.03895 32.0186 6.09474C31.6952 6.14421 31.4667 6.23475 31.334 6.36843C31.2076 6.49475 31.1444 6.67054 31.1444 6.89475C31.1444 7.18212 31.2423 7.41791 31.4393 7.60001C31.6426 7.78212 31.9164 7.87369 32.2608 7.87369ZM36.0967 8.42106V3.30527H36.9288V4.17896C37.0973 3.8558 37.3364 3.61369 37.645 3.45264C37.9547 3.29159 38.3023 3.21054 38.6877 3.21054C39.9032 3.21054 40.5098 3.88422 40.5098 5.23159V8.42106H39.6567V5.28422C39.6567 4.80738 39.5619 4.46001 39.3724 4.24211C39.1901 4.0179 38.8952 3.90528 38.4876 3.90528C38.0179 3.90528 37.6419 4.05265 37.3606 4.34738C37.0868 4.63475 36.9499 5.02106 36.9499 5.50527V8.42106H36.0967ZM41.8622 8.42106V7.85265L44.7902 3.96844H41.8622V3.30527H45.7382V3.87369L42.8102 7.7579H45.854V8.42106H41.8622ZM48.5187 8.5158C48.168 8.5158 47.8521 8.44948 47.5708 8.31579C47.297 8.17579 47.079 7.98633 46.9178 7.74738C46.7567 7.50843 46.6756 7.24212 46.6756 6.94738C46.6756 6.57581 46.7704 6.28106 46.96 6.06316C47.1569 5.84527 47.476 5.6916 47.9184 5.60002C48.3681 5.50212 48.979 5.45263 49.7511 5.45263H50.0881V5.12632C50.0881 4.69158 49.9965 4.37895 49.8143 4.18948C49.6384 3.99264 49.354 3.89474 48.9611 3.89474C48.6525 3.89474 48.3534 3.94001 48.0659 4.03159C47.7783 4.1158 47.4834 4.25579 47.1811 4.45264L46.8862 3.83159C47.1527 3.64211 47.476 3.4916 47.8552 3.37896C48.2417 3.26633 48.6104 3.21054 48.9611 3.21054C49.6215 3.21054 50.1092 3.37158 50.4251 3.69474C50.7485 4.0179 50.9096 4.51896 50.9096 5.20001V8.42106H50.1092V7.53686C49.9754 7.83896 49.769 8.07685 49.4878 8.25264C49.2139 8.42843 48.8905 8.5158 48.5187 8.5158ZM48.6557 7.87369C49.077 7.87369 49.4214 7.72949 49.6879 7.44212C49.9543 7.14739 50.0881 6.77579 50.0881 6.32632V6.01054H49.7616C49.1928 6.01054 48.7431 6.03895 48.4134 6.09474C48.0901 6.14421 47.8626 6.23475 47.7288 6.36843C47.6024 6.49475 47.5392 6.67054 47.5392 6.89475C47.5392 7.18212 47.6372 7.41791 47.8341 7.60001C48.0374 7.78212 48.3113 7.87369 48.6557 7.87369ZM52.4927 8.42106V1.00001H53.3458V4.14738C53.5143 3.83896 53.7492 3.60738 54.0515 3.45264C54.3601 3.29159 54.7045 3.21054 55.0836 3.21054C56.298 3.21054 56.9058 3.88422 56.9058 5.23159V8.42106H56.0527V5.28422C56.0527 4.80738 55.9578 4.46001 55.7683 4.24211C55.586 4.0179 55.2911 3.90528 54.8835 3.90528C54.4127 3.90528 54.0378 4.05265 53.7565 4.34738C53.4827 4.63475 53.3458 5.02106 53.3458 5.50527V8.42106H52.4927ZM60.0476 8.5158C59.5284 8.5158 59.1355 8.36528 58.868 8.06317C58.6089 7.75475 58.4783 7.30843 58.4783 6.72633V1.00001H59.3314V6.66317C59.3314 7.4137 59.6305 7.78948 60.2267 7.78948C60.4025 7.78948 60.5605 7.76843 60.7006 7.72632L60.6796 8.44212C60.4626 8.49159 60.2519 8.5158 60.0476 8.5158Z"
                    fill="#C0C0C0"
                  ></path>
                </svg>
                <div className="copy">
                  <FaRegCopy />
                  <i className="fas fa-file-alt"></i> {card.pageCount}
                </div>
              </span>
              <span className="card-lastUpdate">
                <svg
                  width="71"
                  height="10"
                  viewBox="0 0 71 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.699219 7.42106V0H1.56289V6.66316H5.34405V7.42106H0.699219ZM8.5575 7.51579C7.74966 7.51579 7.11036 7.28105 6.64061 6.81053C6.16981 6.33369 5.93492 5.68737 5.93492 4.87369C5.93492 4.34737 6.04027 3.88421 6.25092 3.48421C6.46157 3.07684 6.74908 2.76526 7.11456 2.54737C7.48635 2.32316 7.91503 2.21053 8.39952 2.21053C9.09466 2.21053 9.63816 2.43474 10.0321 2.88422C10.4249 3.32632 10.6219 3.93684 10.6219 4.71579V5.04211H6.767C6.79438 5.62422 6.96291 6.07052 7.27257 6.37894C7.58117 6.68105 8.00981 6.83158 8.5575 6.83158C8.8661 6.83158 9.16104 6.78632 9.44226 6.69474C9.72242 6.59684 9.98993 6.43895 10.2427 6.22106L10.5376 6.82105C10.3059 7.03894 10.011 7.21053 9.65289 7.33684C9.29478 7.45579 8.9293 7.51579 8.5575 7.51579ZM8.42061 2.8421C7.93611 2.8421 7.55273 2.99264 7.27257 3.29474C6.99135 3.59685 6.82599 3.99264 6.77754 4.48422H9.8846C9.86354 3.96527 9.72663 3.56105 9.47386 3.27368C9.2274 2.98632 8.87666 2.8421 8.42061 2.8421ZM13.9101 7.51579C13.3066 7.51579 12.8537 7.3579 12.5514 7.04211C12.2492 6.71895 12.0985 6.2558 12.0985 5.65264V2.96843H11.098V2.30527H12.0985V0.736839H12.9517V2.30527H14.5737V2.96843H12.9517V5.56843C12.9517 5.96843 13.0359 6.27369 13.2045 6.48421C13.373 6.68737 13.6468 6.78947 14.026 6.78947C14.1387 6.78947 14.2503 6.77579 14.363 6.74737C14.4757 6.71895 14.5768 6.69158 14.6684 6.66316L14.8159 7.31579C14.7243 7.36526 14.5916 7.41053 14.4157 7.45263C14.2398 7.49474 14.0713 7.51579 13.9101 7.51579ZM15.3172 7.42106V6.85264L18.2453 2.96843H15.3172V2.30527H19.1932V2.87368L16.2652 6.75789H19.3091V7.42106H15.3172ZM22.4678 7.51579C21.8642 7.51579 21.4114 7.3579 21.1091 7.04211C20.8068 6.71895 20.6562 6.2558 20.6562 5.65264V2.96843H19.6556V2.30527H20.6562V0.736839H21.5093V2.30527H23.1313V2.96843H21.5093V5.56843C21.5093 5.96843 21.5936 6.27369 21.7621 6.48421C21.9306 6.68737 22.2045 6.78947 22.5836 6.78947C22.6963 6.78947 22.808 6.77579 22.9207 6.74737C23.0334 6.71895 23.1345 6.69158 23.2261 6.66316L23.3736 7.31579C23.2819 7.36526 23.1492 7.41053 22.9733 7.45263C22.7974 7.49474 22.6289 7.51579 22.4678 7.51579ZM26.3511 7.51579C25.5432 7.51579 24.905 7.28105 24.4342 6.81053C23.9634 6.33369 23.7285 5.68737 23.7285 4.87369C23.7285 4.34737 23.8338 3.88421 24.0445 3.48421C24.2551 3.07684 24.5427 2.76526 24.9081 2.54737C25.2799 2.32316 25.7086 2.21053 26.1931 2.21053C26.8883 2.21053 27.4328 2.43474 27.8256 2.88422C28.2185 3.32632 28.4154 3.93684 28.4154 4.71579V5.04211H24.5606C24.589 5.62422 24.7575 6.07052 25.0661 6.37894C25.3747 6.68105 25.8034 6.83158 26.3511 6.83158C26.6597 6.83158 26.9546 6.78632 27.2358 6.69474C27.517 6.59684 27.7835 6.43895 28.0363 6.22106L28.3312 6.82105C28.0995 7.03894 27.8046 7.21053 27.4465 7.33684C27.0884 7.45579 26.7229 7.51579 26.3511 7.51579ZM26.2142 2.8421C25.7297 2.8421 25.3473 2.99264 25.0661 3.29474C24.7849 3.59685 24.6206 3.99264 24.5711 4.48422H27.6782C27.6571 3.96527 27.5202 3.56105 27.2674 3.27368C27.022 2.98632 26.6702 2.8421 26.2142 2.8421ZM31.3772 7.51579C30.977 7.51579 30.5978 7.46 30.2397 7.34736C29.8816 7.23473 29.5867 7.07684 29.3549 6.87368L29.6288 6.27369C29.8816 6.47685 30.1596 6.62842 30.4609 6.72632C30.7705 6.81789 31.0823 6.86316 31.3982 6.86316C31.7985 6.86316 32.1008 6.78947 32.3041 6.6421C32.5084 6.49473 32.6095 6.29474 32.6095 6.04211C32.6095 5.84527 32.5431 5.69158 32.4094 5.57895C32.2767 5.46 32.066 5.36843 31.7774 5.30527L30.819 5.09473C29.949 4.90526 29.513 4.45579 29.513 3.74737C29.513 3.28421 29.6962 2.91263 30.0606 2.63158C30.4335 2.35053 30.918 2.21053 31.5141 2.21053C31.8659 2.21053 32.1987 2.26633 32.5147 2.37896C32.838 2.48422 33.1045 2.64211 33.3152 2.85264L33.0308 3.45263C32.8275 3.26316 32.5884 3.11896 32.3146 3.02106C32.0481 2.9158 31.7816 2.86316 31.5141 2.86316C31.1213 2.86316 30.8232 2.94 30.6189 3.09474C30.4156 3.24948 30.3134 3.45264 30.3134 3.70527C30.3134 4.0979 30.5736 4.35053 31.0928 4.46316L32.0513 4.66317C32.501 4.76106 32.8412 4.91895 33.0729 5.13685C33.3046 5.34737 33.4205 5.63473 33.4205 6C33.4205 6.47052 33.2351 6.84212 32.8623 7.1158C32.4905 7.38212 31.9954 7.51579 31.3772 7.51579ZM40.4699 7.51579C39.4946 7.51579 38.7531 7.26 38.2475 6.74737C37.742 6.22843 37.4892 5.47369 37.4892 4.48422V0H38.3528V4.44211C38.3528 5.97895 39.0585 6.74737 40.4699 6.74737C41.8675 6.74737 42.5658 5.97895 42.5658 4.44211V0H43.4295V4.48422C43.4295 5.47369 43.1767 6.22843 42.6712 6.74737C42.173 7.26 41.4389 7.51579 40.4699 7.51579ZM45.0894 9.3158V2.30527H45.9215V3.22105C46.0753 2.90526 46.3038 2.66 46.6061 2.48421C46.9147 2.30211 47.2728 2.21053 47.6804 2.21053C48.1365 2.21053 48.5336 2.31895 48.8706 2.53685C49.214 2.74737 49.4773 3.05263 49.6605 3.45263C49.8501 3.84526 49.9449 4.3158 49.9449 4.86317C49.9449 5.40317 49.8501 5.87369 49.6605 6.27369C49.4773 6.66632 49.214 6.97158 48.8706 7.18948C48.5336 7.40737 48.1365 7.51579 47.6804 7.51579C47.2865 7.51579 46.9358 7.42842 46.6272 7.25263C46.3175 7.07684 46.09 6.83473 45.9426 6.52631V9.3158H45.0894ZM47.5014 6.83158C47.9785 6.83158 48.3608 6.66317 48.6494 6.32633C48.9369 5.98212 49.0812 5.49475 49.0812 4.86317C49.0812 4.22422 48.9369 3.73684 48.6494 3.4C48.3608 3.06315 47.9785 2.89474 47.5014 2.89474C47.0232 2.89474 46.6409 3.06315 46.3533 3.4C46.0647 3.73684 45.9215 4.22422 45.9215 4.86317C45.9215 5.49475 46.0647 5.98212 46.3533 6.32633C46.6409 6.66317 47.0232 6.83158 47.5014 6.83158ZM53.1784 7.51579C52.7213 7.51579 52.321 7.40737 51.9777 7.18948C51.6406 6.97158 51.3773 6.66632 51.1877 6.27369C51.0045 5.87369 50.9139 5.40317 50.9139 4.86317C50.9139 4.3158 51.0045 3.84526 51.1877 3.45263C51.3773 3.05263 51.6406 2.74737 51.9777 2.53685C52.321 2.31895 52.7213 2.21053 53.1784 2.21053C53.5786 2.21053 53.9293 2.2979 54.2316 2.47369C54.5402 2.64948 54.7688 2.89159 54.9162 3.20001V0H55.7694V7.42106H54.9373V6.48421C54.7898 6.80737 54.5613 7.06001 54.2527 7.24211C53.943 7.42422 53.5849 7.51579 53.1784 7.51579ZM53.3574 6.83158C53.8345 6.83158 54.2169 6.66317 54.5055 6.32633C54.793 5.98212 54.9373 5.49475 54.9373 4.86317C54.9373 4.22422 54.793 3.73684 54.5055 3.4C54.2169 3.06315 53.8345 2.89474 53.3574 2.89474C52.8729 2.89474 52.4864 3.06315 52.1989 3.4C51.9177 3.73684 51.7775 4.22422 51.7775 4.86317C51.7775 5.49475 51.9177 5.98212 52.1989 6.32633C52.4864 6.66317 52.8729 6.83158 53.3574 6.83158ZM58.9818 7.51579C58.63 7.51579 58.314 7.44947 58.0338 7.31579C57.76 7.17579 57.542 6.98632 57.3808 6.74737C57.2186 6.50843 57.1386 6.24212 57.1386 5.94738C57.1386 5.5758 57.2334 5.28105 57.423 5.06316C57.6189 4.84526 57.9391 4.69159 58.3814 4.60001C58.8301 4.50212 59.441 4.45263 60.2141 4.45263H60.5511V4.12631C60.5511 3.69158 60.4595 3.37895 60.2773 3.18947C60.1014 2.99263 59.817 2.89474 59.4241 2.89474C59.1145 2.89474 58.8164 2.94001 58.5289 3.03158C58.2403 3.11579 57.9454 3.25579 57.6441 3.45263L57.3492 2.83158C57.6157 2.64211 57.9391 2.49159 58.3182 2.37896C58.7037 2.26633 59.0723 2.21053 59.4241 2.21053C60.0835 2.21053 60.5722 2.37158 60.8882 2.69473C61.2105 3.01789 61.3727 3.51895 61.3727 4.20001V7.42106H60.5722V6.53685C60.4384 6.83895 60.2309 7.07684 59.9508 7.25263C59.6769 7.42842 59.3536 7.51579 58.9818 7.51579ZM59.1187 6.87368C59.54 6.87368 59.8834 6.72949 60.1509 6.44212C60.4174 6.14738 60.5511 5.77579 60.5511 5.32631V5.01054H60.2246C59.6559 5.01054 59.2061 5.03894 58.8765 5.09473C58.5531 5.14421 58.3245 5.23474 58.1918 5.36843C58.0654 5.49474 58.0022 5.67053 58.0022 5.89474C58.0022 6.18211 58.1002 6.4179 58.2972 6.6C58.5004 6.78211 58.7743 6.87368 59.1187 6.87368ZM65.0085 7.51579C64.4049 7.51579 63.952 7.3579 63.6498 7.04211C63.3485 6.71895 63.1969 6.2558 63.1969 5.65264V2.96843H62.1963V2.30527H63.1969V0.736839H64.05V2.30527H65.672V2.96843H64.05V5.56843C64.05 5.96843 64.1343 6.27369 64.3028 6.48421C64.4713 6.68737 64.7451 6.78947 65.1243 6.78947C65.237 6.78947 65.3497 6.77579 65.4613 6.74737C65.574 6.71895 65.6762 6.69158 65.7668 6.66316L65.9142 7.31579C65.8237 7.36526 65.6899 7.41053 65.514 7.45263C65.3392 7.49474 65.1707 7.51579 65.0085 7.51579ZM68.8928 7.51579C68.085 7.51579 67.4457 7.28105 66.9759 6.81053C66.5051 6.33369 66.2702 5.68737 66.2702 4.87369C66.2702 4.34737 66.3756 3.88421 66.5862 3.48421C66.7969 3.07684 67.0844 2.76526 67.4499 2.54737C67.8217 2.32316 68.2504 2.21053 68.7348 2.21053C69.43 2.21053 69.9735 2.43474 70.3674 2.88422C70.7603 3.32632 70.9572 3.93684 70.9572 4.71579V5.04211H67.1023C67.1297 5.62422 67.2982 6.07052 67.6079 6.37894C67.9165 6.68105 68.3451 6.83158 68.8928 6.83158C69.2014 6.83158 69.4963 6.78632 69.7775 6.69474C70.0577 6.59684 70.3252 6.43895 70.578 6.22106L70.8729 6.82105C70.6412 7.03894 70.3463 7.21053 69.9882 7.33684C69.6301 7.45579 69.2646 7.51579 68.8928 7.51579ZM68.7559 2.8421C68.2714 2.8421 67.888 2.99264 67.6079 3.29474C67.3266 3.59685 67.1613 3.99264 67.1128 4.48422H70.2199C70.1989 3.96527 70.062 3.56105 69.8092 3.27368C69.5627 2.98632 69.212 2.8421 68.7559 2.8421Z"
                    fill="#C0C0C0"
                  ></path>
                </svg>
                <div>
                  <CiStopwatch />
                  <i className="fas fa-calendar-alt"></i> {card.lastUpdate}
                </div>
              </span>
              <span className="card-format">
                <svg
                  width="57"
                  height="9"
                  viewBox="0 0 57 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.899414 8.4209V0.999839H3.40615C4.60685 0.999839 5.53373 1.31879 6.18674 1.95774C6.83975 2.58932 7.16625 3.50511 7.16625 4.70511C7.16625 5.90511 6.83975 6.82405 6.18674 7.463C5.53373 8.10194 4.60685 8.4209 3.40615 8.4209H0.899414ZM1.76309 7.68406H3.34296C5.28093 7.68406 6.24993 6.69142 6.24993 4.70511C6.24993 2.72616 5.28093 1.73668 3.34296 1.73668H1.76309V7.68406ZM10.2123 8.51563C9.86049 8.51563 9.54449 8.44931 9.26433 8.31563C8.99048 8.17563 8.77247 7.98616 8.61132 7.74721C8.44912 7.50826 8.36909 7.24195 8.36909 6.94722C8.36909 6.57564 8.46384 6.28089 8.65343 6.06299C8.84933 5.8451 9.16955 5.69143 9.61192 5.59985C10.0606 5.50196 10.6715 5.45247 11.4446 5.45247H11.7816V5.12615C11.7816 4.69142 11.69 4.37879 11.5078 4.18931C11.3319 3.99247 11.0475 3.89458 10.6546 3.89458C10.345 3.89458 10.0469 3.93984 9.75932 4.03142C9.47073 4.11563 9.17586 4.25563 8.87463 4.45247L8.57969 3.83142C8.84616 3.64195 9.16956 3.49143 9.54873 3.3788C9.93421 3.26617 10.3028 3.21037 10.6546 3.21037C11.314 3.21037 11.8027 3.37142 12.1187 3.69457C12.4409 4.01773 12.6031 4.51879 12.6031 5.19985V8.4209H11.8026V7.53669C11.6689 7.83879 11.4614 8.07668 11.1812 8.25247C10.9074 8.42826 10.5841 8.51563 10.2123 8.51563ZM10.3491 7.87352C10.7704 7.87352 11.1138 7.72932 11.3814 7.44196C11.6478 7.14722 11.7816 6.77563 11.7816 6.32615V6.01038H11.4551C10.8863 6.01038 10.4366 6.03878 10.1069 6.09457C9.78357 6.14405 9.55505 6.23458 9.42234 6.36827C9.29595 6.49458 9.2327 6.67037 9.2327 6.89458C9.2327 7.18195 9.33068 7.41774 9.52764 7.59984C9.73092 7.78195 10.0047 7.87352 10.3491 7.87352ZM16.2389 8.51563C15.6354 8.51563 15.1825 8.35774 14.8802 8.04195C14.579 7.71879 14.4273 7.25564 14.4273 6.65248V3.96827H13.4268V3.30511H14.4273V1.73668H15.2805V3.30511H16.9025V3.96827H15.2805V6.56827C15.2805 6.96827 15.3648 7.27353 15.5333 7.48405C15.7018 7.68721 15.9756 7.78931 16.3548 7.78931C16.4675 7.78931 16.5802 7.77563 16.6918 7.74721C16.8045 7.71879 16.9067 7.69142 16.9973 7.663L17.1447 8.31563C17.0541 8.3651 16.9204 8.41037 16.7445 8.45247C16.5696 8.49458 16.4011 8.51563 16.2389 8.51563ZM20.1233 8.51563C19.3155 8.51563 18.6761 8.28089 18.2064 7.81037C17.7356 7.33353 17.5007 6.68721 17.5007 5.87353C17.5007 5.34721 17.606 4.88405 17.8167 4.48405C18.0273 4.07668 18.3149 3.7651 18.6804 3.54721C19.0522 3.323 19.4808 3.21037 19.9653 3.21037C20.6604 3.21037 21.204 3.43458 21.5979 3.88406C21.9907 4.32616 22.1877 4.93668 22.1877 5.71562V6.04195H18.3328C18.3602 6.62406 18.5287 7.07036 18.8383 7.37878C19.1469 7.68089 19.5756 7.83142 20.1233 7.83142C20.4319 7.83142 20.7269 7.78616 21.0081 7.69458C21.2882 7.59668 21.5557 7.43879 21.8085 7.2209L22.1034 7.82089C21.8717 8.03878 21.5768 8.21037 21.2187 8.33668C20.8606 8.45563 20.4951 8.51563 20.1233 8.51563ZM19.9864 3.84194C19.5019 3.84194 19.1185 3.99248 18.8383 4.29458C18.5571 4.59669 18.3918 4.99248 18.3433 5.48406H21.4504C21.4293 4.96511 21.2924 4.56089 21.0396 4.27352C20.7932 3.98616 20.4424 3.84194 19.9864 3.84194ZM23.3167 2.03141V1.07353H24.37V2.03141H23.3167ZM23.4221 8.4209V3.30511H24.2752V8.4209H23.4221ZM26.1437 8.4209V3.96827H25.1325V3.30511H26.1437V3.12616C26.1437 2.44511 26.3122 1.92932 26.6492 1.57879C26.9936 1.22826 27.5203 1.03142 28.2291 0.989319L28.6399 0.968262L28.7136 1.62089L28.2291 1.65248C27.7941 1.68722 27.4782 1.81774 27.2812 2.04195C27.0916 2.26616 26.9968 2.59247 26.9968 3.02089V3.30511H28.4714V3.96827H26.9968V8.4209H26.1437ZM31.3604 8.51563C30.8622 8.51563 30.4304 8.40721 30.0649 8.18932C29.7005 7.97142 29.4161 7.66616 29.2118 7.27353C29.0159 6.87353 28.9169 6.40301 28.9169 5.86301C28.9169 5.32301 29.0159 4.85564 29.2118 4.46301C29.4161 4.06301 29.7005 3.75458 30.0649 3.53669C30.4304 3.31879 30.8622 3.21037 31.3604 3.21037C31.8523 3.21037 32.2809 3.31879 32.6454 3.53669C33.0182 3.75458 33.3026 4.06301 33.4985 4.46301C33.7028 4.85564 33.804 5.32301 33.804 5.86301C33.804 6.40301 33.7028 6.87353 33.4985 7.27353C33.3026 7.66616 33.0182 7.97142 32.6454 8.18932C32.2809 8.40721 31.8523 8.51563 31.3604 8.51563ZM31.3604 7.83142C31.8386 7.83142 32.2209 7.66301 32.5084 7.32617C32.797 6.98196 32.9403 6.49459 32.9403 5.86301C32.9403 5.22406 32.797 4.73668 32.5084 4.39984C32.2209 4.06299 31.8386 3.89458 31.3604 3.89458C30.8759 3.89458 30.4904 4.06299 30.2018 4.39984C29.9216 4.73668 29.7806 5.22406 29.7806 5.86301C29.7806 6.49459 29.9216 6.98196 30.2018 7.32617C30.4904 7.66301 30.8759 7.83142 31.3604 7.83142ZM35.0857 8.4209V3.30511H35.9178V4.22089C36.1916 3.60299 36.7531 3.26299 37.603 3.19984L37.9084 3.16826L37.9716 3.90511L37.4345 3.96827C36.95 4.01037 36.5814 4.16511 36.3286 4.43143C36.0758 4.69143 35.9494 5.04931 35.9494 5.5051V8.4209H35.0857ZM38.8817 8.4209V3.30511H39.7137V4.16827C39.8685 3.85985 40.0824 3.62405 40.3562 3.46299C40.6301 3.29457 40.9492 3.21037 41.3147 3.21037C42.1151 3.21037 42.6281 3.55773 42.8524 4.25247C43.0073 3.92931 43.2347 3.67669 43.537 3.49459C43.8393 3.30511 44.1868 3.21037 44.5797 3.21037C45.7172 3.21037 46.286 3.88405 46.286 5.23142V8.4209H45.4328V5.27352C45.4328 4.80299 45.3486 4.45984 45.1801 4.24195C45.0189 4.01774 44.7483 3.90511 44.3691 3.90511C43.9552 3.90511 43.6245 4.05248 43.379 4.34722C43.1336 4.64195 43.0104 5.03458 43.0104 5.52616V8.4209H42.1572V5.27352C42.1572 4.80299 42.073 4.45984 41.9045 4.24195C41.7433 4.01774 41.4726 3.90511 41.0935 3.90511C40.6722 3.90511 40.3383 4.05248 40.0929 4.34722C39.8538 4.64195 39.7348 5.03458 39.7348 5.52616V8.4209H38.8817ZM49.4931 8.51563C49.1414 8.51563 48.8254 8.44931 48.5452 8.31563C48.2714 8.17563 48.0533 7.98616 47.8922 7.74721C47.73 7.50826 47.65 7.24195 47.65 6.94722C47.65 6.57564 47.7447 6.28089 47.9343 6.06299C48.1302 5.8451 48.4504 5.69143 48.8928 5.59985C49.3415 5.50196 49.9523 5.45247 50.7254 5.45247H51.0625V5.12615C51.0625 4.69142 50.9708 4.37879 50.7886 4.18931C50.6127 3.99247 50.3284 3.89458 49.9355 3.89458C49.6258 3.89458 49.3278 3.93984 49.0403 4.03142C48.7517 4.11563 48.4567 4.25563 48.1555 4.45247L47.8606 3.83142C48.1271 3.64195 48.4504 3.49143 48.8296 3.3788C49.2151 3.26617 49.5837 3.21037 49.9355 3.21037C50.5948 3.21037 51.0835 3.37142 51.3995 3.69457C51.7218 4.01773 51.884 4.51879 51.884 5.19985V8.4209H51.0836V7.53669C50.9498 7.83879 50.7423 8.07668 50.4621 8.25247C50.1883 8.42826 49.8649 8.51563 49.4931 8.51563ZM49.6301 7.87352C50.0514 7.87352 50.3947 7.72932 50.6622 7.44196C50.9287 7.14722 51.0625 6.77563 51.0625 6.32615V6.01038H50.736C50.1672 6.01038 49.7174 6.03878 49.3878 6.09457C49.0644 6.14405 48.8359 6.23458 48.7032 6.36827C48.5768 6.49458 48.5136 6.67037 48.5136 6.89458C48.5136 7.18195 48.6115 7.41774 48.8085 7.59984C49.0118 7.78195 49.2857 7.87352 49.6301 7.87352ZM55.5198 8.51563C54.9163 8.51563 54.4634 8.35774 54.1611 8.04195C53.8599 7.71879 53.7083 7.25564 53.7083 6.65248V3.96827H52.7077V3.30511H53.7083V1.73668H54.5614V3.30511H56.1834V3.96827H54.5614V6.56827C54.5614 6.96827 54.6456 7.27353 54.8142 7.48405C54.9827 7.68721 55.2565 7.78931 55.6357 7.78931C55.7484 7.78931 55.8611 7.77563 55.9727 7.74721C56.0854 7.71879 56.1876 7.69142 56.2782 7.663L56.4256 8.31563C56.335 8.3651 56.2012 8.41037 56.0254 8.45247C55.8505 8.49458 55.682 8.51563 55.5198 8.51563Z"
                    fill="#C0C0C0"
                  ></path>
                </svg>
                <div className="iconss">
                  <FaRegFilePdf height="16" width="16" />
                  <p className="fas fa-file-pdf iconname"></p> {card.format}
                </div>
              </span>
              <div className="heartbtnmain">
               
              <button className="download-button">Download anfordern</button>
              <CiHeart className="heartbtn"/>
                </div>
              
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CheckListen;
