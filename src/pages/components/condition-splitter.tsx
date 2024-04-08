import type { NextPage } from "next";

const ConditionSplitter: NextPage = () => {
    return (
        <header className="self-stretch flex flex-row items-start justify-end pt-[0rem] pb-[3.475rem] pr-[4.281rem] pl-[4.438rem] box-border max-w-full text-center text-[2.5rem] text-primary font-nunit06 mq750:pl-[2.188rem] mq750:pr-[2.125rem] mq750:box-border">
            <div className="flex-1 flex flex-row items-center justify-between gap-[1.25rem] max-w-full z-[1]">
                <div className="h-[3.438rem] w-[11.75rem] flex flex-row items-center justify-center gap-[1.125rem]">
                    <img
                        className="h-[2.75rem] w-[2.75rem] relative"
                        loading="lazy"
                        alt=""
                        src="src/images/Frame2.png"
                    />
                    <h1 className="m-0 h-[3.438rem] flex-1 relative text-inherit font-bold font-inherit inline-block min-w-[7.875rem] whitespace-nowrap">
                        <span>Foo</span>
                        <span className="text-secondry">die</span>
                    </h1>
                </div>
                <div className="w-[55.125rem] flex flex-row items-center justify-start gap-[4.938rem] max-w-full text-[1.25rem] text-grey-grey-600 mq450:gap-[4.938rem_1.25rem] mq1025:gap-[4.938rem_2.438rem]">
                    <div className="flex-1 flex flex-row items-center justify-between max-w-full gap-[1.25rem]">
                        <div className="h-[2rem] w-[3.5rem] flex flex-col items-center justify-center pt-[0rem] px-[0rem] pb-[0rem] box-border gap-[0.5rem] text-primary">
                            <b className="self-stretch relative leading-[120%] inline-block min-w-[3.5rem]">
                                Home
                            </b>
                            <img
                                className="w-[2.563rem] h-[0.125rem] relative"
                                alt=""
                                src="src/images/vector 1.svg"
                            />
                        </div>
                        <div className="w-[5.625rem] relative leading-[120%] font-medium inline-block min-w-[5.625rem] whitespace-nowrap">
                            Our Menu
                        </div>
                        <div className="w-[3.438rem] relative leading-[120%] font-medium inline-block min-w-[3.438rem]">
                            Foods
                        </div>
                        <div className="w-[5.188rem] relative leading-[120%] font-medium inline-block min-w-[5.188rem] whitespace-nowrap">
                            About us
                        </div>
                        <div className="w-[6rem] relative leading-[120%] font-medium inline-block min-w-[6rem] whitespace-nowrap">
                            Contact us
                        </div>
                    </div>
                    <button className="cursor-pointer py-[1.063rem] px-[2.563rem] bg-[transparent] w-[8.688rem] rounded-19xl box-border flex flex-row items-center justify-center border-[2px] border-solid border-primary hover:bg-tomato-200 hover:box-border hover:border-[2px] hover:border-solid hover:border-tomato-100">
                        <div className="w-[3.313rem] relative text-[1.25rem] leading-[120%] font-extrabold font-nunit06 text-primary text-center inline-block min-w-[3.313rem]">
                            Login
                        </div>
                    </button>
                </div>
            </div>
        </header>
    );
};
export default ConditionSplitter;