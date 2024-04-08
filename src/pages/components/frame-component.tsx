import type { NextPage } from "next";

const FrameComponent: NextPage = () => {
    return (
        <div className="self-stretch flex flex-col items-start justify-start gap-[2rem] max-w-full text-left text-[1.75rem] text-gray font-nunit06 mq750:gap-[1rem_2rem]">
            <div className="self-stretch flex flex-row items-center justify-between max-w-full gap-[1.25rem] mq1150:flex-wrap">
                <div className="w-[32.75rem] flex flex-col items-start justify-start gap-[0.5rem] max-w-full">
                    <h2 className="m-0 self-stretch relative text-inherit leading-[1.75rem] font-bold font-inherit mq450:text-[1.375rem] mq450:leading-[1.375rem]">
                        <span>{`Join Our `}</span>
                        <span className="text-primary">Newsletter</span>
                    </h2>
                    <div className="relative text-[1rem] leading-[1.5rem] font-medium text-neutral-grey-04">
                        Be the first to know about our latest updates, exclusive offers, and
                        more.
                    </div>
                </div>
                <div className="w-[27.125rem] flex flex-row items-start justify-start gap-[0.75rem] max-w-full text-[0.875rem] text-color-text-primary font-body-caption-s-regular mq450:flex-wrap">
                    <div className="flex-1 flex flex-col items-start justify-start min-w-[13rem]">
                        <div className="self-stretch rounded-lg flex flex-row items-center justify-start py-[0.75rem] px-[0.688rem] gap-[1rem] border-[1px] border-solid border-neutral-grey-08">
                            <div className="flex-1 flex flex-row items-center justify-start gap-[0.5rem]">
                                <img
                                    className="h-[1.25rem] w-[1.25rem] relative overflow-hidden shrink-0 hidden min-h-[1.25rem]"
                                    alt=""
                                    src="/iconoutlineverifyround.svg"
                                />
                                <div className="flex-1 flex flex-row items-center justify-start gap-[0.125rem]">
                                    <div className="self-stretch w-[4.25rem] relative leading-[1.25rem] hidden">
                                        Input Text
                                    </div>
                                    <div className="h-[1.25rem] w-[0.125rem] relative bg-primary-blue-700 overflow-hidden shrink-0 hidden" />
                                    <div className="flex-1 relative leading-[1.25rem] font-nunit06 text-neutral-grey-04">
                                        Enter your email address
                                    </div>
                                </div>
                            </div>
                            <img
                                className="h-[1.25rem] w-[1.25rem] relative overflow-hidden shrink-0 hidden min-h-[1.25rem]"
                                alt=""
                                src="/iconoutlinequestion.svg"
                            />
                        </div>
                    </div>
                    <button className="cursor-pointer [border:none] py-[0.75rem] px-[1.25rem] bg-primary rounded-lg flex flex-row items-center justify-center hover:bg-tomato-100">
                        <div className="relative text-[0.875rem] leading-[1.25rem] font-nunit06 text-text-50 text-left inline-block min-w-[3.875rem]">
                            Subscribe
                        </div>
                    </button>
                </div>
            </div>
            <div className="self-stretch h-[0.063rem] relative bg-neutral-200 overflow-hidden shrink-0" />
        </div>
    );
};

export default FrameComponent;
