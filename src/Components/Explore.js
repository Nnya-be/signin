import React from "react";
import ExploreCard from "./ExploreCard";
import SecondaryHeader from "./SecondaryHeader";
import TertiaryHeader from "./TertiaryHeader";

const card_details = [
  {
    rating: "4.6",
    reviews: "356",
    title: "Do you know the psychology behind Money?",
    read: "2,345",
    image: "https://plus.unsplash.com/premium_photo-1682125773446-259ce64f9dd7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ym9vayUyMGNvdmVyfGVufDB8fDB8fHww" 
  },
  {
    rating: "4.5",
    reviews: "524",
    title: "Milk and honey",
    read: "3,532",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ym9vayUyMGNvdmVyfGVufDB8fDB8fHww"
  },
  {
    rating: "3.4",
    reviews: "392",
    title: "The picture of Dorian Gray",
    read: "437",
    image: "https://images.unsplash.com/photo-1633477189729-9290b3261d0a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJvb2slMjBjb3ZlcnxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    rating: "5.0",
    reviews: "590",
    title: "What's christianity",
    read: "1,064",
    image: "https://plus.unsplash.com/premium_photo-1683120846116-1bd974ad8976?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Ym9vayUyMGNvdmVyfGVufDB8fDB8fHww"
  },
  {
    rating: "4.5",
    reviews: "378",
    title: "how innovation started",
    read: "8,546",
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ym9vayUyMGNvdmVyfGVufDB8fDB8fHww"
  },
  {
    rating: "4.7",
    reviews: "824",
    title: "Two Towers",
    read: "4,532",
    image: "https://images.unsplash.com/photo-1621351183012-e2f9972dd9bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJvb2slMjBjb3ZlcnxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    rating: "4.7",
    reviews: "524",
    title: "The Company Of One",
    read: "8,754",
    image: "https://images.unsplash.com/photo-1641154748135-8032a61a3f80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJvb2slMjBjb3ZlcnxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    rating: "4.4",
    reviews: "344",
    title: "Mere Christianity",
    read: "3,899",
    image:"https://images.unsplash.com/photo-1639690283395-b62444cf9a76?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJvb2slMjBjb3ZlcnxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    rating: "4.0",
    reviews: "334",
    title: "A storytelling workbook for beginners",
    read: "37,680",
    image: "https://images.unsplash.com/photo-1612969308146-066d55f37ccb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJvb2slMjBjb3ZlcnxlbnwwfHwwfHx8MA%3D%3D"
  },
];

function Explore() {
  return (
    <div className="pt-20">
      <div className="flex flex-col justify-between items-center h-20">
        <SecondaryHeader title="Explore"></SecondaryHeader>
        <TertiaryHeader  title='Books that people read most'></TertiaryHeader>
      </div>
      <div className="h-min w-full px-20 py-10 grid grid-cols-3 gap-y-8">
      {
        card_details.map((value, index)=>{
          return (<ExploreCard key={index} value={value}></ExploreCard>)
        })
      }
      </div>
    </div>
  );
}

export default Explore;
