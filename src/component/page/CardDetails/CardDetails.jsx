
import { useLoaderData } from "react-router-dom";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

const CardDetails = () => {
    const data = useLoaderData()
    // console.log(data)
    const { admissionDates, admissionProcess, collegeImage, collegeName, eventsDetails, researchWorks, sportsCategories } = data;
    console.log(data)
    return (
        <div className=" bg-base-200">
            <div className="hero min-h-screen  ">
                <div className="hero-content flex-col lg:flex-row ">
                    <img src={collegeImage} className=" rounded-lg shadow-2xl h-96" />
                    <div>
                        <h1 className="text-5xl font-bold">{collegeName}</h1>
                        <h1 className="text-2xl font-semibold mt-2">Admission Last Date:  {admissionDates}</h1>


                        <Accordion>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <u className="text-2xl font-semibold hover:text-blue-600">Admission Process</u>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>

                                    <div>
                                        {Object.entries(admissionProcess).map(([key, value]) => {
                                            return (
                                                <div key={key}>
                                                    <h2>
                                                    <p className="font-semibold">{key}</p>: {`${value},`}
                                                    </h2>

                                                    <hr />
                                                </div>
                                            );
                                        })}
                                    </div>


                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <u className="text-2xl font-semibold hover:text-blue-600">Event details</u>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <div>
                                        {Object.entries(eventsDetails).map(([key, value]) => {
                                            return (
                                                <div key={key}>
                                                    <h2 className="">
                                                        <p className="font-semibold">{key}</p>: {`${value},`}
                                                    </h2>

                                                    <hr />
                                                </div>
                                            );
                                        })}
                                    </div>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <u className="text-2xl font-semibold hover:text-blue-600">research Works</u>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <div>
                                        {Object.entries(researchWorks).map(([key, value]) => {
                                            return (
                                                <div key={key}>
                                                    <h2 className="">
                                                        <p className="font-semibold">{key}</p>: {value}
                                                    </h2>

                                                    <hr />
                                                </div>
                                            );
                                        })}
                                    </div>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <u className="text-2xl font-semibold hover:text-blue-600">Sports Categories</u>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <div>
                                        {Object.entries(sportsCategories).map(([key, value]) => {
                                            return (
                                                <div key={key}>
                                                    <h2 className="">
                                                        <p className="font-semibold">{key}</p>: {`${value},`}
                                                    </h2>

                                                    <hr />
                                                </div>
                                            );
                                        })}
                                    </div>
                                </AccordionItemPanel>
                            </AccordionItem>
                        </Accordion>










                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardDetails;