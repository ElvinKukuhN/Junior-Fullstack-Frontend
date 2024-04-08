import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type FrameComponent2Type = {
    frame45?: string;
    breakfastFood?: string;

    /** Style props */
    propPadding?: CSSProperties["padding"];
    propMinWidth?: CSSProperties["minWidth"];
};

const FrameComponent2: NextPage<FrameComponent2Type> = ({
    frame45,
    breakfastFood,
    propPadding,
    propMinWidth,
}) => {
    const frameDiv1Style: CSSProperties = useMemo(() => {
        return {
            padding: propPadding,
        };
    }, [propPadding]);

    const breakfastFoodStyle: CSSProperties = useMemo(() => {
        return {
            minWidth: propMinWidth,
        };
    }, [propMinWidth]);

    return (
        <div
            className="w-[26.063rem] rounded-lg bg-neutral-grey-10 shadow-[0px_2px_4px_rgba(0,_0,_0,_0.08)] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[3rem] box-border gap-[1.875rem] max-w-full text-left text-[1.938rem] text-black font-nunit06 mq750:pb-[1.938rem] mq750:box-border"
            style={frameDiv1Style}
        >
            <img
                className="self-stretch h-[18.563rem] relative max-w-full overflow-hidden shrink-0 object-cover"
                loading="lazy"
                alt=""
                src={frame45}
            />
            <div className="self-stretch flex flex-col items-center justify-start py-[0rem] px-[1.25rem] gap-[1.625rem]">
                <div className="self-stretch flex flex-row items-center justify-center gap-[1.625rem] mq450:flex-wrap">
                    <h2
                        className="m-0 flex-1 relative text-inherit leading-[120%] font-medium font-inherit inline-block min-w-[8.875rem] mq450:text-[1.188rem] mq450:leading-[1.375rem] mq1025:text-[1.563rem] mq1025:leading-[1.875rem]"
                        style={breakfastFoodStyle}
                    >
                        {breakfastFood}
                    </h2>
                    <button className="cursor-pointer [border:none] py-[0.625rem] px-[1.5rem] bg-primary rounded-19xl flex flex-row items-center justify-center whitespace-nowrap hover:bg-tomato-100">
                        <div className="relative text-[1.25rem] leading-[120%] font-medium font-nunit06 text-neutral-grey-10 text-left inline-block min-w-[5.25rem]">
                            Buy Now
                        </div>
                    </button>
                </div>
                <div className="self-stretch flex flex-row items-center justify-between gap-[1.25rem] text-[2.125rem] mq450:flex-wrap mq450:justify-center">
                    <div className="h-[1.5rem] flex flex-row items-start justify-start gap-[0.375rem]">
                        <img
                            className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0 min-h-[1.5rem]"
                            loading="lazy"
                            alt=""
                            src="src/images/Image 24.png"
                        />
                        <img
                            className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0 min-h-[1.5rem]"
                            alt=""
                            src="src/images/Image 24.png"
                        />
                        <img
                            className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0 min-h-[1.5rem]"
                            alt=""
                            src="src/images/Image 24.png"
                        />
                        <img
                            className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0 min-h-[1.5rem]"
                            alt=""
                            src="src/images/Image 24.png"
                        />
                        <img
                            className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0 min-h-[1.5rem]"
                            alt=""
                            src="src/images/Image 24.png"
                        />
                    </div>
                    <b className="relative leading-[2.563rem] inline-block min-w-[5.125rem] whitespace-nowrap mq450:text-[1.25rem] mq450:leading-[1.5rem] mq1025:text-[1.688rem] mq1025:leading-[2.063rem]">
                        $230
                    </b>
                </div>
            </div>
        </div>
    );
};

export default FrameComponent2;
