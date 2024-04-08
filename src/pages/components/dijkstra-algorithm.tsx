import type { NextPage } from "next";
import DeliveryInfo from "./DeliveryInfo";

const DijkstraAlgorithm: NextPage = () => {
    return (
        <div className="self-stretch flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[0.375rem] box-border gap-[2.25rem] max-w-full text-center text-[3.813rem] text-grey-grey-700 font-nunit06 mq750:gap-[2.25rem_1.125rem] mq1150:flex-wrap">
            <div className="w-[35.488rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0rem] box-border gap-[2.313rem] min-w-[35.488rem] max-w-full z-[1] mq750:gap-[1.125rem_2.313rem] mq750:min-w-full mq1150:flex-1">
                <div className="self-stretch flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0rem] box-border gap-[1.375rem] max-w-full">
                    <div className="flex flex-col items-start justify-start py-[0rem] pr-[1.25rem] pl-[0rem] box-border max-w-full">
                        <div className="flex flex-row items-center justify-center py-[1.688rem] px-[0rem] gap-[0.625rem] mq450:flex-wrap">
                            <h1 className="m-0 w-[11.375rem] relative text-inherit leading-[120%] font-bold font-inherit inline-block mq450:text-[2.313rem] mq450:leading-[2.75rem] mq1025:text-[3.063rem] mq1025:leading-[3.688rem]">
                                Desire
                            </h1>
                            <img
                                className="h-[8.169rem] w-[14.225rem] rounded-35xl object-contain mq450:flex-1"
                                loading="lazy"
                                alt=""
                                src="src/images/Frame 9.png"
                            />
                        </div>
                        <h1 className="m-0 w-[24.563rem] relative text-inherit leading-[120%] font-bold font-inherit inline-block max-w-full z-[1] mt-[-1.25rem] mq450:text-[2.313rem] mq450:leading-[2.75rem] mq1025:text-[3.063rem] mq1025:leading-[3.688rem]">
                            for Your Taste
                        </h1>
                    </div>
                    <h3 className="m-0 self-stretch relative text-[1.563rem] leading-[120%] font-normal font-inherit text-grey-grey-400 text-left mq450:text-[1.25rem] mq450:leading-[1.5rem]">
                        Food is what we eat to stay alive and healthy. It comes in many
                        different forms and flavors, from fruits and vegetables to meats and
                        grains.
                    </h3>
                </div>
                <button className="cursor-pointer [border:none] py-[1.063rem] px-[2.688rem] bg-primary rounded-19xl flex flex-row items-center justify-center whitespace-nowrap hover:bg-tomato-100">
                    <div className="w-[6.563rem] relative text-[1.25rem] leading-[120%] font-extrabold font-nunit06 text-neutral-grey-10 text-center inline-block min-w-[6.563rem]">{`Order Now `}</div>
                </button>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start pt-[4.056rem] px-[0rem] pb-[0rem] box-border min-w-[30.563rem] max-w-full text-left text-[1.375rem] text-grey-grey-500 mq750:pt-[2.625rem] mq750:box-border mq750:min-w-full">
                <div className="self-stretch flex flex-col items-start justify-start gap-[15.688rem] mq450:gap-[3.938rem_15.688rem] mq1025:gap-[7.813rem_15.688rem]">
                    <div className="flex flex-row items-start justify-start py-[0rem] px-[1.75rem]">
                        <DeliveryInfo
                            image23="src/images/Image 23.png"
                            delivery="Delivery"
                            in30Mint="in 30 mint"
                        />
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem] text-[1.563rem] mq750:flex-wrap">
                        <div className="h-[7.5rem] w-[18.288rem] flex flex-col items-start justify-start pt-[2.188rem] px-[0rem] pb-[0rem] box-border min-w-[18.288rem] mq750:flex-1">
                            <div className="self-stretch flex-1 rounded-sm bg-neutral-grey-10 shadow-[0px_2px_4px_rgba(0,_0,_0,_0.08)] flex flex-row items-center justify-center py-[0.75rem] px-[1.313rem] gap-[1.125rem] z-[3]">
                                <button className="cursor-pointer [border:none] p-0 bg-[transparent] h-[3.6rem] flex flex-row items-center justify-center">
                                    <img
                                        className="h-[3.6rem] w-[3.6rem] relative rounded-12xl object-cover"
                                        alt=""
                                        src="src/images/Frame 18.png"
                                    />
                                </button>
                                <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[0.438rem]">
                                    <h3 className="m-0 relative text-inherit leading-[120%] font-bold font-inherit inline-block min-w-[7.75rem] mq450:text-[1.25rem] mq450:leading-[1.5rem]">
                                        Ali Ahmad
                                    </h3>
                                    <div className="flex-1 flex flex-row items-start justify-start gap-[1.188rem] text-[1.25rem] text-grey-grey-400">
                                        <div className="self-stretch flex flex-row items-center justify-center gap-[0.5rem]">
                                            <img
                                                className="h-[1.313rem] w-[1.313rem] relative object-cover"
                                                loading="lazy"
                                                alt=""
                                                src="src/images/Image 24.png"
                                            />
                                            <div className="relative leading-[120%] font-medium inline-block min-w-[1.813rem] mq450:text-[1rem] mq450:leading-[1.188rem]">
                                                4.5
                                            </div>
                                        </div>
                                        <div className="self-stretch flex flex-row items-center justify-center gap-[0.5rem]">
                                            <img
                                                className="h-[1rem] w-[1rem] relative overflow-hidden shrink-0"
                                                alt=""
                                                src="src/images/Vector.png"
                                            />
                                            <div className="relative leading-[120%] font-medium inline-block min-w-[4.625rem] mq450:text-[1rem] mq450:leading-[1.188rem]">
                                                1k Likes
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <DeliveryInfo
                            image23="src/images/image 23 (1).png"
                            delivery="Location"
                            in30Mint="at destination"
                            propMinWidth="5.5rem"
                            propMinWidth1="7.75rem"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DijkstraAlgorithm;
