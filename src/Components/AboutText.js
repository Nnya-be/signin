import React from "react";
//import SecondaryHeader from './SecondaryHeader'
import TertiaryHeader from "./TertiaryHeader";
import LineGreen from "./LineGreen";
import SectionParagraph from "./SectionParagraph";
import SecondaryHeader from "./SecondaryHeader";
import Button from "./Button";
import Developers from "./Developers";

const text = "Readwise is collection of electronic resources that can be access online. It's like having a library at your fingertips, anytime anywhere. Readwise libraru is made up of digitalized books, articles, and organizing them into a searchable database. It has features like advance search options bookmarking and even virtual bookshelves. It's convinient and mordern way to access information and expand your knowledge.";

function AboutText() {
  return (
    <div className="flex flex-col justify-between lg:h-full xl:pr-20 items-center lg:px-1 md:px-12 h-full lg:items-start">
      <SecondaryHeader title="About Us"></SecondaryHeader>
      <TertiaryHeader title="Know more about ReadWise"></TertiaryHeader>
      <LineGreen></LineGreen>
      <div className="pr-8">
        <SectionParagraph paragraph={text}></SectionParagraph>
      </div>
      <Button text='Read More'></Button>
    </div>
  );
}

export default AboutText;
