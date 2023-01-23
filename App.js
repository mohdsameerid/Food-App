/**
 *  Header
 *    - Logo 
 *    - nav items ( Right side )
 *    - cart
 *  Body 
 *    - Search bar 
 *    - Resturant_card
 *       - Img
 *       - Name
 *       - Rating
 *       - Cusines
 *  Footer
 *     - link
 *     - CopyRight
 * 
 */
 import React from "react";
 import ReactDOM from "react-dom/client";

 const resturantList = [
    {
      type: "restaurant",
      data: {
        type: "F",
        id: "549334",
        name: "Punjabi Angithi",
        uuid: "3f580e02-b84d-43f8-a2e7-d29c395ccf68",
        city: "10459",
        area: "Sector 72",
        totalRatingsString: "1000+ ratings",
        cloudinaryImageId: "blj0wgwbliwovpk85vcm",
        cuisines: ["North Indian", "Punjabi", "Chinese", "Thalis"],
        tags: [],
        costForTwo: 40000,
        costForTwoString: "₹400 FOR TWO",
        deliveryTime: 30,
        minDeliveryTime: 30,
        maxDeliveryTime: 30,
        slaString: "30 MINS",
        lastMileTravel: 2.9000000953674316,
        slugs: {
          restaurant: "punjabi-angithi-sector-18-sector-18-2",
          city: "noida-1",
        },
        cityState: "10459",
        address:
          "Shop 5, Village- Sarfabad, Sector 72, Noida, ear royal avenue, next to Just Desi",
        locality: "near royal avenue lane",
        parentId: 4464,
        unserviceable: false,
        veg: true,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "50% off",
          shortDescriptionList: [
            {
              meta: "50% off | Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "50% OFF",
          shortDescriptionList: [
            {
              meta: "Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        ribbon: [
          {
            type: "PROMOTED",
          },
        ],
        chain: [],
        feeDetails: {
          fees: [],
          totalFees: 0,
          message: "",
          title: "",
          amount: "",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "cid=5687245~p=1~eid=00000185-8b5c-3f94-0f4e-b16b0031011b",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "2.9 kms",
        hasSurge: false,
        sla: {
          restaurantId: "549334",
          deliveryTime: 30,
          minDeliveryTime: 30,
          maxDeliveryTime: 30,
          lastMileTravel: 2.9000000953674316,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: true,
        avgRating: "4.0",
        totalRatings: 1000,
        new: false,
      },
      subtype: "basic",
    },
    {
      type: "restaurant",
      data: {
        type: "F",
        id: "555911",
        name: "Gopala",
        uuid: "9775597c-229a-4a52-9316-1154666864d2",
        city: "10459",
        area: "Sector 50",
        totalRatingsString: "50+ ratings",
        cloudinaryImageId: "gjdklaytow9yc3db4myv",
        cuisines: ["Sweets", "Desserts", "Bakery", "Snacks"],
        tags: [],
        costForTwo: 20000,
        costForTwoString: "₹200 FOR TWO",
        deliveryTime: 20,
        minDeliveryTime: 20,
        maxDeliveryTime: 20,
        slaString: "20 MINS",
        lastMileTravel: 1.7999999523162842,
        slugs: {
          restaurant: "gopala-sector-50-sector-50-3",
          city: "noida-1",
        },
        cityState: "10459",
        address:
          "B - 1/7 central market sector 50 noida, NOIDA CITY ZONE-4, Gautam Buddha Nagar , Uttar Pradesh-201301",
        locality: "Central Market",
        parentId: 281052,
        unserviceable: false,
        veg: true,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "50% off",
          shortDescriptionList: [
            {
              meta: "50% off | Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "50% OFF",
          shortDescriptionList: [
            {
              meta: "Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        chain: [],
        feeDetails: {
          fees: [],
          totalFees: 0,
          message: "",
          title: "",
          amount: "",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "1.7 kms",
        hasSurge: false,
        sla: {
          restaurantId: "555911",
          deliveryTime: 20,
          minDeliveryTime: 20,
          maxDeliveryTime: 20,
          lastMileTravel: 1.7999999523162842,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "4.6",
        totalRatings: 50,
        new: false,
      },
      subtype: "basic",
    },
    {
      type: "restaurant",
      data: {
        type: "F",
        id: "244228",
        name: "Annapurna Kitchen",
        uuid: "12c9015a-1d40-458c-9824-cd3e795c7a97",
        city: "10459",
        area: "Sector 62",
        totalRatingsString: "20+ ratings",
        cloudinaryImageId: "o4qyfbp3npswfswxopen",
        cuisines: ["North Indian", "Thalis", "Combo"],
        tags: [],
        costForTwo: 10000,
        costForTwoString: "₹100 FOR TWO",
        deliveryTime: 21,
        minDeliveryTime: 21,
        maxDeliveryTime: 21,
        slaString: "21 MINS",
        lastMileTravel: 0.5,
        slugs: {
          restaurant: "annapurna-kitchen-sector-64-sector-64",
          city: "noida-1",
        },
        cityState: "10459",
        address:
          "Chauhan Hotel, Captain Shashi Kant Marg, Hoshiyarpur, JJ Colony, Sector 52, Noida, Uttar Pradesh 201301",
        locality: "Sector 64",
        parentId: 13881,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "50% off",
          shortDescriptionList: [
            {
              meta: "50% off | Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "50% OFF",
          shortDescriptionList: [
            {
              meta: "Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        chain: [],
        feeDetails: {
          fees: [],
          totalFees: 0,
          message: "",
          title: "",
          amount: "",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "0.5 kms",
        hasSurge: false,
        sla: {
          restaurantId: "244228",
          deliveryTime: 21,
          minDeliveryTime: 21,
          maxDeliveryTime: 21,
          lastMileTravel: 0.5,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "4.0",
        totalRatings: 20,
        new: false,
      },
      subtype: "basic",
    },
    {
      type: "restaurant",
      data: {
        type: "F",
        id: "591764",
        name: "Imperfecto",
        uuid: "8d8e8927-d813-4ed6-94bb-38b6aa2c2109",
        city: "10459",
        area: "Near Noida City Center Metro",
        totalRatingsString: "100+ ratings",
        cloudinaryImageId: "pmby7ghk7ituecpxgwyv",
        cuisines: ["North Indian", "Biryani", "Chinese"],
        tags: [],
        costForTwo: 40000,
        costForTwoString: "₹400 FOR TWO",
        deliveryTime: 34,
        minDeliveryTime: 34,
        maxDeliveryTime: 34,
        slaString: "34 MINS",
        lastMileTravel: 1.399999976158142,
        slugs: {
          restaurant: "ruin-pub-golf-course-golf-course",
          city: "noida-1",
        },
        cityState: "10459",
        address:
          "Logix City Center Noida. Plot No. BW-58, Sector 32, Near Noida City Center Metro, Noida,Uttar Pradesh 201301.",
        locality: "Sector 32",
        parentId: 239216,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "50% off",
          shortDescriptionList: [
            {
              meta: "50% off | Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "50% OFF",
          shortDescriptionList: [
            {
              meta: "Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        ribbon: [
          {
            type: "PROMOTED",
          },
        ],
        chain: [],
        feeDetails: {
          fees: [],
          totalFees: 0,
          message: "",
          title: "",
          amount: "",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "cid=5618094~p=4~eid=00000185-8b5c-3f94-0f4e-b16c0031042e",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "1.3 kms",
        hasSurge: false,
        sla: {
          restaurantId: "591764",
          deliveryTime: 34,
          minDeliveryTime: 34,
          maxDeliveryTime: 34,
          lastMileTravel: 1.399999976158142,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: true,
        avgRating: "4.0",
        totalRatings: 100,
        new: false,
      },
      subtype: "basic",
    },
    {
      type: "restaurant",
      data: {
        type: "F",
        id: "154755",
        name: "Mr. Brown",
        uuid: "6909c51d-b213-406d-89ba-792525dcfb2f",
        city: "10459",
        area: "Gautam Buddha Nagar",
        totalRatingsString: "20+ ratings",
        cloudinaryImageId: "etzvbwop5vt9npwn79xd",
        cuisines: ["Desserts", "Beverages", "Bakery"],
        tags: [],
        costForTwo: 20000,
        costForTwoString: "₹200 FOR TWO",
        deliveryTime: 23,
        minDeliveryTime: 23,
        maxDeliveryTime: 23,
        slaString: "23 MINS",
        lastMileTravel: 1.7999999523162842,
        slugs: {
          restaurant: "mr-brown-raj-nagar",
          city: "noida-1",
        },
        cityState: "10459",
        address:
          "3D-18M, Marigold Court, HSSC, Wave City,Center, Plot No. CC001, Sector 32, Noida,NOIDA CITY ZONE-3, Gautam Buddha Nagar,Uttar Pradesh-201307",
        locality: "NOIDA CITY ZONE-3,Sector 32",
        parentId: 2262,
        unserviceable: false,
        veg: true,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "50% off",
          shortDescriptionList: [
            {
              meta: "50% off | Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "50% OFF",
          shortDescriptionList: [
            {
              meta: "Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        chain: [],
        feeDetails: {
          fees: [],
          totalFees: 0,
          message: "",
          title: "",
          amount: "",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "1.7 kms",
        hasSurge: false,
        sla: {
          restaurantId: "154755",
          deliveryTime: 23,
          minDeliveryTime: 23,
          maxDeliveryTime: 23,
          lastMileTravel: 1.7999999523162842,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "4.4",
        totalRatings: 20,
        new: false,
      },
      subtype: "basic",
    },
  ];

 const Title = () => {
    return (
        <img className="logo" 
         src= "https://seeklogo.com/images/F/foodie-goodie-logo-7E97467E9A-seeklogo.com.gif"
         alt="Logo_image "/>
    );
 }

const Header = () => {
    return (
        <div className="header">
        <Title />
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>cart</li>
            </ul>
        </div>
        </div>
    );
}

const ResturantCard = ( {name, lastMileTravelString, cloudinaryImageId, cuisines} ) => {
    // {console.log(name)}
    return (
        
        <div className="card">
            <img 
            src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${cloudinaryImageId} `} 
            alt="Img" />
            <h2> {name}</h2> 
            <h3> {cuisines.join(", ")} </h3>
            <h4> {lastMileTravelString} </h4>
        </div>
    );
}

const Body = () => {
    return (
        <div className="restrauntant-list">
        {
         resturantList.map( (rest) => {
            return <ResturantCard {...rest.data} key={rest.data.id} />;
        })}

        </div>
    );
}
const Footer = () => {
    return (
        <h1> Footer </h1>
    );
}
const App = () => {
    return (
        <>
           <Header />
           <Body />
           <Footer />
        </>
    );
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);