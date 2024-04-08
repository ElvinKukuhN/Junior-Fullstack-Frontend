import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type FrameComponent4Type = {
    icons02?: string;
    convenientAndReliable?: string;
    whetherYouDineInTakeOutOr?: string;

    /** Style props */
    propPadding?: CSSProperties["padding"];
};

const FrameComponent4: NextPage<FrameComponent4Type> = ({
    icons02,
    convenientAndReliable,
    whetherYouDineInTakeOutOr,
    propPadding,
}) => {
    const frameDivStyle: CSSProperties = useMemo(() => {
        return {
            padding: propPadding,
        };
    }, [propPadding]);

    return (
        <div className="self-stretch rounded-lg bg-neutral-grey-10 shadow-[0px_2px_4px_rgba(0,_0,_0,_0.08)] flex flex-row items-start justify-start py-[1.125rem] px-[1rem] box-border gap-[1.625rem] max-w-full text-left text-[1.938rem] text-black font-nunit06 mq750:flex-wrap">
            <div
                className="flex flex-col items-start justify-start pt-[0.219rem] px-[0rem] pb-[0rem]"
                style={frameDivStyle}
            >
                <button className="cursor-pointer [border:none] p-0 bg-neutral-grey-10 w-[5.625rem] h-[5.625rem] relative rounded-[165.35px] shadow-[0px_2.1px_4.19px_rgba(0,_0,_0,_0.08)] overflow-hidden shrink-0">
                    <img
                        className="absolute top-[1.438rem] left-[1.375rem] w-[2.869rem] h-[2.756rem] object-cover"
                        alt=""
                        src={icons02}
                    />
                </button>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[0.5rem] min-w-[19.813rem] max-w-full">
                <h2 className="m-0 self-stretch relative text-inherit leading-[120%] font-semibold font-inherit mq450:text-[1.188rem] mq450:leading-[1.375rem] mq1025:text-[1.563rem] mq1025:leading-[1.875rem]">
                    {convenientAndReliable}
                </h2>
                <div className="self-stretch relative text-[1.25rem] leading-[130%] font-medium text-grey-grey-500 mq450:text-[1rem] mq450:leading-[1.313rem]">
                    {whetherYouDineInTakeOutOr}
                </div>
            </div>
        </div>
    );
};

export default FrameComponent4;
