import type { NextPage } from "next";
import FrameComponent2 from "./frame-component2";

const FrameComponent1: NextPage = () => {
    return (
        <div className="self-stretch flex flex-col items-start justify-start py-[0rem] pr-[1.563rem] pl-[0rem] box-border gap-[3.5rem] max-w-full text-center text-[3.438rem] text-neutral-grey-02 font-nunit06 mq750:gap-[1.75rem_3.5rem]">
            <div className="flex flex-row items-start justify-start relative max-w-full">
                <div className="h-[69.25rem] w-[69.25rem] absolute !m-[0] top-[2.313rem] right-[-27.219rem] rounded-[50%] bg-orange [filter:blur(474px)]" />
                <div className="w-[81.188rem] flex flex-col items-center justify-start py-[0rem] px-[0rem] box-border gap-[4.25rem] max-w-full z-[1] mq750:gap-[2.125rem_4.25rem] mq450:gap-[1.063rem_4.25rem]">
                    <div className="w-[53.25rem] flex flex-col items-center justify-center gap-[1.125rem] max-w-full">
                        <h1 className="m-0 w-[46.625rem] relative text-inherit leading-[120%] font-bold font-inherit inline-block max-w-full mq450:text-[2.063rem] mq450:leading-[2.5rem] mq1025:text-[2.75rem] mq1025:leading-[3.313rem]">
                            Our best Seller Dishes🔥🔥
                        </h1>
                        <h3 className="m-0 self-stretch relative text-[1.563rem] leading-[120%] font-normal font-inherit text-neutral-grey-04 mq450:text-[1.25rem] mq450:leading-[1.5rem]">
                            Our fresh garden salad is a light and refreshing option. It
                            features a mix of crisp lettuce, juicy tomatoe all tossed in your
                            choice of dressing.
                        </h3>
                    </div>
                    <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[4rem_1.438rem] min-h-[64.75rem] max-w-full text-left text-[1.938rem] text-black">
                        <FrameComponent2
                            frame45="src/images/Frame 45 (1).png"
                            breakfastFood="Breakfast Food"
                        />
                        <FrameComponent2
                            frame45="src/images/Frame 45 (2).png"
                            breakfastFood="Health Breakfast"
                            propPadding="0rem 0rem 1.125rem"
                            propMinWidth="6.563rem"
                        />
                        <FrameComponent2
                            frame45="src/images/Frame 45 (3).png"
                            breakfastFood="Breakfast Food"
                            propPadding="0rem 0rem 3rem"
                            propMinWidth="8.875rem"
                        />
                        <FrameComponent2
                            frame45="src/images/Frame 45 (4).png"
                            breakfastFood="Breakfast Food"
                            propPadding="0rem 0rem 3rem"
                            propMinWidth="8.875rem"
                        />
                        <FrameComponent2
                            frame45="src/images/Frame 45 (5).png"
                            breakfastFood="Breakfast Food"
                            propPadding="0rem 0rem 3rem"
                            propMinWidth="8.875rem"
                        />
                        <FrameComponent2
                            frame45="src/images/Frame 45.png"
                            breakfastFood="Breakfast Food"
                            propPadding="0rem 0rem 3rem"
                            propMinWidth="8.875rem"
                        />
                    </div>
                </div>
            </div>
            <div className="self-stretch flex flex-row items-end justify-start gap-[6.563rem] max-w-full text-left text-[3.125rem] text-black mq750:gap-[6.563rem_3.25rem] mq1150:flex-wrap mq450:gap-[6.563rem_1.625rem]">
                <div className="flex-1 flex flex-col items-start justify-start min-w-[25.813rem] min-h-[30.188rem] max-w-full mq750:min-w-full mq1150:min-h-[auto]">
                    <div className="self-stretch flex flex-col items-end justify-start gap-[2.125rem] max-w-full mq750:gap-[1.063rem_2.125rem]">
                        <div className="self-stretch flex flex-col items-start justify-start py-[0rem] pr-[0rem] pl-[0.25rem] box-border gap-[0.938rem] max-w-full">
                            <h1 className="m-0 relative text-inherit leading-[120%] font-bold font-inherit inline-block max-w-full mq450:text-[1.875rem] mq450:leading-[2.25rem] mq1025:text-[2.5rem] mq1025:leading-[3rem]">
                                <span>{`Customer `}</span>
                                <span className="text-primary">Feedback</span>
                            </h1>
                            <h3 className="m-0 self-stretch relative text-[1.563rem] leading-[130%] font-normal font-inherit text-neutral-grey-03 mq450:text-[1.25rem] mq450:leading-[1.625rem]">
                                I recently dined at your restaurant and wanted to share my
                                experience. The food was absolutely delicious, and I was
                                impressed by the freshness of the ingredients. Each dish was
                                bursting with flavor, and the portion sizes were perfect. The
                                service was quick and efficient, and the staff was incredibly
                                friendly and welcoming.
                            </h3>
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-start gap-[1.125rem] max-w-full text-[1.5rem] text-primary mq750:flex-wrap">
                            <img
                                className="h-[4.625rem] w-[4.625rem] relative rounded-[39.81px] object-cover"
                                alt=""
                                src="src/images/Ellipse 2.png"
                            />
                            <div className="flex-1 flex flex-col items-start justify-start pt-[0.5rem] px-[0rem] pb-[0rem] box-border min-w-[18.438rem] max-w-full">
                                <div className="flex flex-col items-start justify-start gap-[0.25rem]">
                                    <h3 className="m-0 relative text-inherit leading-[130%] font-bold font-inherit mq450:text-[1.188rem] mq450:leading-[1.563rem]">
                                        Tayyab Sohail
                                    </h3>
                                    <div className="relative text-[1.125rem] leading-[130%] font-medium text-black inline-block min-w-[7.938rem]">
                                        UX/UI Designer
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col items-start justify-start pt-[1.75rem] px-[0rem] pb-[0rem]">
                                <div className="flex flex-row items-start justify-start gap-[0.563rem]">
                                    <div className="h-[1.125rem] w-[1.125rem] relative rounded-[50%] box-border border-[0px] border-solid border-primary" />
                                    <div className="h-[1.125rem] w-[1.125rem] relative rounded-[50%] bg-primary" />
                                    <div className="h-[1.125rem] w-[1.125rem] relative rounded-[50%] box-border border-[0px] border-solid border-primary" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[36.875rem] flex flex-row items-start justify-start relative min-w-[36.875rem] max-w-full mq750:min-w-full mq1150:flex-1">
                    <div className="h-[40rem] w-[31.875rem] absolute !m-[0] right-[-2.344rem] bottom-[-14.594rem]">
                        <div className="absolute top-[2.188rem] left-[1.625rem] rounded-[50%] bg-orange [filter:blur(474px)] w-[33.875rem] h-[33.875rem]" />
                        <div className="absolute h-full top-[0rem] bottom-[0rem] left-[0rem] rounded-[50%] bg-orange [filter:blur(474px)] w-[36.875rem] z-[1]" />
                    </div>
                    <div className="h-[36.906rem] flex-1 relative max-w-full z-[2]">
                        <img
                            className="absolute top-[11.5rem] left-[2.438rem] rounded w-[31.5rem] h-[25.406rem]"
                            loading="lazy"
                            alt=""
                            src="src/images/Vector 2.png"
                        />
                        <img
                            className="absolute top-[0rem] left-[0rem] w-[36.875rem] h-[36.813rem] object-cover z-[1]"
                            alt=""
                            src="src/images/chef.png"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FrameComponent1;
