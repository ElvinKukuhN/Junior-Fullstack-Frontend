import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type FoodCartType = {
    prop?: string;

    /** Style props */
    propColor?: CSSProperties["color"];
};

const FoodCart: NextPage<FoodCartType> = ({
    prop,
    propColor,
}) => {
    const learnMoreStyle: CSSProperties = useMemo(() => {
        return {
            color: propColor,
        };
    }, [propColor]);

    return (
        <div className="flex-1 rounded-xl bg-neutral-grey-10 shadow-[0px_2px_4px_rgba(0,_0,_0,_0.08)] flex flex-col items-center justify-start py-[1.375rem] px-[0.938rem] box-border gap-[1.125rem] min-w-[14.375rem] max-w-[19.188rem] text-left text-[1.875rem] text-black font-nunit06">
            <div className="self-stretch h-[15.25rem] flex flex-col items-center justify-center gap-[1rem]">
                <div className="flex-1 flex flex-col items-center justify-center gap-[1.25rem]">
                    <img
                        className="w-[6.25rem] h-[6.25rem] relative object-cover"
                        loading="lazy"
                        alt=""
                        src={prop}
                    />
                    <div className="flex flex-col items-center justify-start">
                        <h2 className="m-0 relative text-inherit leading-[120%] font-semibold font-inherit mq450:text-[1.125rem] mq450:leading-[1.375rem] mq1025:text-[1.5rem] mq1025:leading-[1.813rem]">
                            Quality Food
                        </h2>
                    </div>
                </div>
                <div className="self-stretch relative text-[1.25rem] leading-[120%] font-medium text-grey-grey-400 text-center mq450:text-[1rem] mq450:leading-[1.188rem]">
                    Contrary to popular belief, Lorem Ipsum is not simply random text
                </div>
            </div>
            <b
                className="w-[6.625rem] relative text-[1.25rem] leading-[120%] inline-block text-grey-grey-700 text-center min-w-[6.625rem] whitespace-nowrap mq450:text-[1rem] mq450:leading-[1.188rem]"
                style={learnMoreStyle}
            >
                Learn More
            </b>
        </div>
    );
};

export default FoodCart;
