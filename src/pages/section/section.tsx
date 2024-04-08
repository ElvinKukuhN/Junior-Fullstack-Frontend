import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type SectionType = {
    productService?: string;
    pageHere?: string;
    pageHere1?: string;
    pageHere2?: string;
    storage?: string;
    pageHere3?: string;

    /** Style props */
    propPadding?: CSSProperties["padding"];
    propMinWidth?: CSSProperties["minWidth"];
    propMinWidth1?: CSSProperties["minWidth"];
    propMinWidth2?: CSSProperties["minWidth"];
    propAlignSelf?: CSSProperties["alignSelf"];
    propMinWidth3?: CSSProperties["minWidth"];
    propFlex?: CSSProperties["flex"];
    propWidth?: CSSProperties["width"];
    propMinWidth4?: CSSProperties["minWidth"];
};

const Section: NextPage<SectionType> = ({
    productService,
    pageHere,
    pageHere1,
    pageHere2,
    storage,
    pageHere3,
    propPadding,
    propMinWidth,
    propMinWidth1,
    propMinWidth2,
    propAlignSelf,
    propMinWidth3,
    propFlex,
    propWidth,
    propMinWidth4,
}) => {
    const linksStyle: CSSProperties = useMemo(() => {
        return {
            padding: propPadding,
        };
    }, [propPadding]);

    const pageHereStyle: CSSProperties = useMemo(() => {
        return {
            minWidth: propMinWidth,
        };
    }, [propMinWidth]);

    const pageHere1Style: CSSProperties = useMemo(() => {
        return {
            minWidth: propMinWidth1,
        };
    }, [propMinWidth1]);

    const pageHere2Style: CSSProperties = useMemo(() => {
        return {
            minWidth: propMinWidth2,
        };
    }, [propMinWidth2]);

    const footerLinkStyle: CSSProperties = useMemo(() => {
        return {
            alignSelf: propAlignSelf,
        };
    }, [propAlignSelf]);

    const storageStyle: CSSProperties = useMemo(() => {
        return {
            minWidth: propMinWidth3,
        };
    }, [propMinWidth3]);

    const chipStyle: CSSProperties = useMemo(() => {
        return {
            flex: propFlex,
            width: propWidth,
        };
    }, [propFlex, propWidth]);

    const pageHere3Style: CSSProperties = useMemo(() => {
        return {
            minWidth: propMinWidth4,
        };
    }, [propMinWidth4]);

    return (
        <div className="flex-1 flex flex-col items-start justify-start gap-[1rem] min-w-[14.125rem] max-w-[14.375rem] text-left text-[1rem] text-neutral-grey-02 font-nunit06">
            <div className="self-stretch relative leading-[120%] font-medium">
                {productService}
            </div>
            <div
                className="self-stretch h-[10.5rem] flex flex-col items-start justify-start py-[0rem] pr-[6.963rem] pl-[0rem] box-border gap-[0.75rem] text-neutral-grey-04"
                style={linksStyle}
            >
                <div className="rounded flex flex-row items-center justify-start py-[0.156rem] px-[0rem] gap-[0.5rem]">
                    <div
                        className="relative leading-[120%] inline-block min-w-[4rem]"
                        style={pageHereStyle}
                    >
                        {pageHere}
                    </div>
                    <div className="h-[1.5rem] rounded-45xl bg-primary-blue-50 box-border hidden flex-row items-center justify-center py-[0.25rem] px-[0.563rem] text-[0.75rem] text-primary-blue-700 font-body-caption-s-regular border-[1px] border-solid border-primary-blue-600">
                        <div className="self-stretch relative leading-[1rem]">New</div>
                    </div>

                </div>
                <div className="rounded flex flex-row items-center justify-start py-[0.156rem] px-[0rem] gap-[0.5rem]">
                    <div
                        className="relative leading-[120%] inline-block min-w-[3.75rem]"
                        style={pageHere1Style}
                    >
                        {pageHere1}
                    </div>
                    <div className="h-[1.5rem] rounded-45xl bg-primary-blue-50 box-border hidden flex-row items-center justify-center py-[0.25rem] px-[0.563rem] text-[0.75rem] text-primary-blue-700 font-body-caption-s-regular border-[1px] border-solid border-primary-blue-600">
                        <div className="self-stretch relative leading-[1rem]">New</div>
                    </div>

                </div>
                <div className="rounded flex flex-row items-center justify-start py-[0.156rem] px-[0rem] gap-[0.5rem]">
                    <div
                        className="relative leading-[120%] inline-block min-w-[5rem]"
                        style={pageHere2Style}
                    >
                        {pageHere2}
                    </div>
                    <div className="h-[1.5rem] rounded-45xl bg-primary-blue-50 box-border hidden flex-row items-center justify-center py-[0.25rem] px-[0.563rem] text-[0.75rem] text-primary-blue-700 font-body-caption-s-regular border-[1px] border-solid border-primary-blue-600">
                        <div className="self-stretch relative leading-[1rem]">New</div>
                    </div>

                </div>
                <div
                    className="self-stretch h-[1.5rem] rounded flex flex-row items-center justify-start py-[0rem] px-[0rem] box-border gap-[0.5rem]"
                    style={footerLinkStyle}
                >
                    <div
                        className="relative leading-[120%] inline-block min-w-[3.563rem]"
                        style={storageStyle}
                    >
                        {storage}
                    </div>

                    <button
                        className="cursor-pointer py-[0.25rem] px-[0.563rem] bg-oldlace flex-1 rounded-45xl flex flex-row items-center justify-center border-[1px] border-solid border-secondry hover:bg-antiquewhite hover:box-border hover:border-[1px] hover:border-solid hover:border-chocolate"
                        style={chipStyle}
                    >
                        <div className="relative text-[1rem] leading-[120%] font-nunit06 text-secondry text-left inline-block min-w-[2.125rem]">
                            New
                        </div>
                    </button>
                </div>
                <div className="flex-1 rounded flex flex-row items-center justify-start py-[0.156rem] px-[0rem] gap-[0.5rem]">
                    <div
                        className="relative leading-[120%] inline-block min-w-[3.813rem]"
                        style={pageHere3Style}
                    >
                        {pageHere3}
                    </div>
                    <div className="h-[1.5rem] rounded-45xl bg-primary-blue-50 box-border hidden flex-row items-center justify-center py-[0.25rem] px-[0.563rem] text-[0.75rem] text-primary-blue-700 font-body-caption-s-regular border-[1px] border-solid border-primary-blue-600">
                        <div className="self-stretch relative leading-[1rem]">New</div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Section;
