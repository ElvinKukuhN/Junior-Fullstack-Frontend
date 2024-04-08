import type { NextPage } from "next";

const CircleMarker: NextPage = () => {
    return (
        <div className="self-stretch flex flex-col items-start justify-start gap-[1.5rem] text-left text-[0.75rem] text-text-400 font-body-caption-s-regular">
            <div className="self-stretch h-[0.063rem] relative bg-neutral-200 overflow-hidden shrink-0" />
            <div className="self-stretch flex flex-row items-center justify-between gap-[1.25rem] mq750:flex-wrap">
                <div className="h-[2.5rem] w-[7.813rem]" />
                <div className="w-[11.375rem] flex flex-row items-start justify-start gap-[2rem]">
                    <div className="flex-1 rounded flex flex-row items-center justify-start gap-[0.5rem]">
                        <div className="relative leading-[1rem] inline-block min-w-[2.625rem]">
                            English
                        </div>
                        <div className="h-[1.5rem] rounded-45xl bg-primary-blue-50 box-border hidden flex-row items-center justify-center py-[0.25rem] px-[0.563rem] text-primary-blue-700 border-[1px] border-solid border-primary-blue-600">
                            <div className="self-stretch relative leading-[1rem]">New</div>
                        </div>
                        <img
                            className="h-[1rem] w-[1rem] relative overflow-hidden shrink-0 hidden min-h-[1rem]"
                            alt=""
                            src="/iconoutlinearrowupright.svg"
                        />
                    </div>
                    <div className="flex-1 rounded flex flex-row items-center justify-start gap-[0.5rem]">
                        <div className="relative leading-[1rem] inline-block min-w-[2.75rem]">
                            Privacy
                        </div>
                        <div className="h-[1.5rem] rounded-45xl bg-primary-blue-50 box-border hidden flex-row items-center justify-center py-[0.25rem] px-[0.563rem] text-primary-blue-700 border-[1px] border-solid border-primary-blue-600">
                            <div className="self-stretch relative leading-[1rem]">New</div>
                        </div>
                        <img
                            className="h-[1rem] w-[1rem] relative overflow-hidden shrink-0 hidden min-h-[1rem]"
                            alt=""
                            src="/iconoutlinearrowupright.svg"
                        />
                    </div>
                    <div className="rounded flex flex-row items-center justify-start gap-[0.5rem]">
                        <div className="relative leading-[1rem] inline-block min-w-[2rem]">
                            Legal
                        </div>
                        <div className="h-[1.5rem] rounded-45xl bg-primary-blue-50 box-border hidden flex-row items-center justify-center py-[0.25rem] px-[0.563rem] text-primary-blue-700 border-[1px] border-solid border-primary-blue-600">
                            <div className="self-stretch relative leading-[1rem]">New</div>
                        </div>
                        <img
                            className="h-[1rem] w-[1rem] relative overflow-hidden shrink-0 hidden min-h-[1rem]"
                            alt=""
                            src="/iconoutlinearrowupright.svg"
                        />
                    </div>
                </div>
                <div className="flex flex-col items-start justify-center text-text-300">
                    <div className="relative leading-[1rem]">
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CircleMarker;
