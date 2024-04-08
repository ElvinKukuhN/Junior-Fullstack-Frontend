import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type DeliveryInfoType = {
    image23?: string;
    delivery?: string;
    in30Mint?: string;

    /** Style props */
    propMinWidth?: CSSProperties["minWidth"];
    propMinWidth1?: CSSProperties["minWidth"];
};

const DeliveryInfo: NextPage<DeliveryInfoType> = ({
    image23,
    delivery,
    in30Mint,
    propMinWidth,
    propMinWidth1,
}) => {
    const deliveryStyle: CSSProperties = useMemo(() => {
        return {
            minWidth: propMinWidth,
        };
    }, [propMinWidth]);

    const in30MintStyle: CSSProperties = useMemo(() => {
        return {
            minWidth: propMinWidth1,
        };
    }, [propMinWidth1]);

    return (
        <div className="rounded-sm bg-neutral-grey-10 shadow-[0px_2px_4px_rgba(0,_0,_0,_0.08)] flex flex-row items-start justify-start py-[0.75rem] px-[1.5rem] gap-[1rem] z-[3] text-left text-[1.375rem] text-grey-grey-500 font-nunit06">
            <div className="h-[3.156rem] flex flex-col items-start justify-start pt-[0.094rem] px-[0rem] pb-[0rem] box-border">
                <img
                    className="w-[3.063rem] h-[3.063rem] relative object-cover"
                    loading="lazy"
                    alt=""
                    src={image23}
                />
            </div>
            <div className="flex flex-col items-start justify-start gap-[0.125rem]">
                <h3
                    className="m-0 relative text-inherit leading-[120%] font-bold font-inherit inline-block min-w-[5.375rem] mq450:text-[1.125rem] mq450:leading-[1.313rem]"
                    style={deliveryStyle}
                >
                    {delivery}
                </h3>
                <div
                    className="relative text-[1.25rem] leading-[120%] font-medium text-grey-grey-400 inline-block min-w-[5.75rem] mq450:text-[1rem] mq450:leading-[1.188rem]"
                    style={in30MintStyle}
                >
                    {in30Mint}
                </div>
            </div>
        </div>
    );
};

export default DeliveryInfo;