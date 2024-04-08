import type { NextPage } from "next";
import Section from "./section";

const Sections: NextPage = () => {
    return (
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[2rem] text-left text-[1rem] text-neutral-grey-02 font-nunit06 mq750:gap-[1rem]">
            <Section
                productService={`Product & Service`}
                pageHere="Products"
                pageHere1="Services"
                pageHere2="Appliances"
                storage="Storage"
                pageHere3="Lifestyle"
            />
            <Section
                productService="Shop Now"
                pageHere="Offers"
                pageHere1="Promos"
                pageHere2="Online Shop FAQ"
                storage="Business Offer"
                pageHere3="Student Offer"
                propPadding="0rem 3.9rem 0rem 0rem"
                propMinWidth="2.813rem"
                propMinWidth1="3.438rem"
                propMinWidth2="7.813rem"
                propAlignSelf="unset"
                propMinWidth3="6.625rem"
                propFlex="unset"
                propWidth="3.375rem"
                propMinWidth4="6.125rem"
            />
            <div className="flex-1 flex flex-col items-start justify-start gap-[1rem] min-w-[14.125rem] max-w-[14.375rem]">
                <div className="self-stretch relative leading-[120%] font-medium">
                    Support
                </div>
                <div className="self-stretch h-[10.5rem] flex flex-col items-start justify-start py-[0rem] pr-[6.463rem] pl-[0rem] box-border gap-[0.75rem] text-neutral-grey-04">
                    <div className="rounded flex flex-row items-center justify-start py-[0.156rem] px-[0rem] gap-[0.5rem]">
                        <div className="relative leading-[120%] inline-block min-w-[3.5rem]">
                            Contact
                        </div>
                        <div className="h-[1.5rem] rounded-45xl bg-primary-blue-50 box-border hidden flex-row items-center justify-center py-[0.25rem] px-[0.563rem] text-[0.75rem] text-primary-blue-700 font-body-caption-s-regular border-[1px] border-solid border-primary-blue-600">
                            <div className="self-stretch relative leading-[1rem]">New</div>
                        </div>

                    </div>
                    <div className="flex-1 rounded flex flex-row items-center justify-start py-[0.156rem] px-[0rem] gap-[0.5rem]">
                        <div className="relative leading-[120%] inline-block min-w-[6.438rem]">
                            Email Support
                        </div>
                        <div className="h-[1.5rem] rounded-45xl bg-primary-blue-50 box-border hidden flex-row items-center justify-center py-[0.25rem] px-[0.563rem] text-[0.75rem] text-primary-blue-700 font-body-caption-s-regular border-[1px] border-solid border-primary-blue-600">
                            <div className="self-stretch relative leading-[1rem]">New</div>
                        </div>

                    </div>
                    <div className="flex-1 rounded flex flex-row items-center justify-start py-[0.156rem] px-[0rem] gap-[0.5rem]">
                        <div className="relative leading-[120%] inline-block min-w-[4.25rem]">
                            Live Chat
                        </div>
                        <div className="h-[1.5rem] rounded-45xl bg-primary-blue-50 box-border hidden flex-row items-center justify-center py-[0.25rem] px-[0.563rem] text-[0.75rem] text-primary-blue-700 font-body-caption-s-regular border-[1px] border-solid border-primary-blue-600">
                            <div className="self-stretch relative leading-[1rem]">New</div>
                        </div>

                    </div>
                    <div className="rounded flex flex-row items-center justify-start py-[0.156rem] px-[0rem] gap-[0.5rem]">
                        <div className="relative leading-[120%] inline-block min-w-[6.75rem]">
                            Phone Support
                        </div>
                        <div className="h-[1.5rem] rounded-45xl bg-primary-blue-50 box-border hidden flex-row items-center justify-center py-[0.25rem] px-[0.563rem] text-[0.75rem] text-primary-blue-700 font-body-caption-s-regular border-[1px] border-solid border-primary-blue-600">
                            <div className="self-stretch relative leading-[1rem]">New</div>
                        </div>

                    </div>
                    <div className="flex-1 rounded flex flex-row items-center justify-start py-[0.156rem] px-[0rem] gap-[0.5rem]">
                        <div className="relative leading-[120%] inline-block min-w-[5.188rem]">
                            Community
                        </div>
                        <div className="h-[1.5rem] rounded-45xl bg-primary-blue-50 box-border hidden flex-row items-center justify-center py-[0.25rem] px-[0.563rem] text-[0.75rem] text-primary-blue-700 font-body-caption-s-regular border-[1px] border-solid border-primary-blue-600">
                            <div className="self-stretch relative leading-[1rem]">New</div>
                        </div>

                    </div>
                </div>
            </div>
            <Section
                productService="Account"
                pageHere="My Products"
                pageHere1="Orders"
                pageHere2="Wishlist"
                storage="Service"
                pageHere3="Rewards"
                propPadding="0rem 7.25rem 0rem 0rem"
                propMinWidth="5.625rem"
                propMinWidth1="3.125rem"
                propMinWidth2="3.813rem"
                propAlignSelf="stretch"
                propMinWidth3="3.313rem"
                propFlex="1"
                propWidth="unset"
                propMinWidth4="4rem"
            />
            <div className="flex-1 flex flex-col items-start justify-start gap-[1rem] min-w-[14.125rem] max-w-[14.375rem]">
                <div className="self-stretch relative leading-[120%] font-medium">
                    About
                </div>
                <div className="self-stretch h-[10.5rem] flex flex-col items-start justify-start py-[0rem] pr-[4.9rem] pl-[0rem] box-border gap-[0.75rem] text-neutral-grey-04">
                    <div className="rounded flex flex-row items-center justify-start py-[0.156rem] px-[0rem] gap-[0.5rem]">
                        <div className="relative leading-[120%] inline-block min-w-[6.25rem]">
                            Company Info
                        </div>
                        <div className="h-[1.5rem] rounded-45xl bg-primary-blue-50 box-border hidden flex-row items-center justify-center py-[0.25rem] px-[0.563rem] text-[0.75rem] text-primary-blue-700 font-body-caption-s-regular border-[1px] border-solid border-primary-blue-600">
                            <div className="self-stretch relative leading-[1rem]">New</div>
                        </div>

                    </div>
                    <div className="rounded flex flex-row items-center justify-start py-[0.156rem] px-[0rem] gap-[0.5rem]">
                        <div className="relative leading-[120%] inline-block min-w-[7.75rem]">
                            Brand Guidelines
                        </div>
                        <div className="h-[1.5rem] rounded-45xl bg-primary-blue-50 box-border hidden flex-row items-center justify-center py-[0.25rem] px-[0.563rem] text-[0.75rem] text-primary-blue-700 font-body-caption-s-regular border-[1px] border-solid border-primary-blue-600">
                            <div className="self-stretch relative leading-[1rem]">New</div>
                        </div>

                    </div>
                    <div className="rounded flex flex-row items-center justify-start py-[0.156rem] px-[0rem] gap-[0.5rem]">
                        <div className="relative leading-[120%] inline-block min-w-[3.5rem]">
                            Careers
                        </div>
                        <div className="h-[1.5rem] rounded-45xl bg-primary-blue-50 box-border hidden flex-row items-center justify-center py-[0.25rem] px-[0.563rem] text-[0.75rem] text-primary-blue-700 font-body-caption-s-regular border-[1px] border-solid border-primary-blue-600">
                            <div className="self-stretch relative leading-[1rem]">New</div>
                        </div>

                    </div>
                    <div className="h-[1.5rem] rounded flex flex-row items-center justify-start py-[0rem] px-[0rem] box-border gap-[0.5rem]">
                        <div className="relative leading-[120%] inline-block min-w-[4.125rem]">
                            Investors
                        </div>
                        <button className="cursor-pointer py-[0.25rem] px-[0.563rem] bg-oldlace w-[3.375rem] rounded-45xl box-border flex flex-row items-center justify-center border-[1px] border-solid border-secondry hover:bg-antiquewhite hover:box-border hover:border-[1px] hover:border-solid hover:border-chocolate">
                            <div className="relative text-[1rem] leading-[120%] font-nunit06 text-secondry text-left inline-block min-w-[2.125rem]">
                                New
                            </div>
                        </button>

                    </div>
                    <div className="flex-1 rounded flex flex-row items-center justify-start py-[0.156rem] px-[0rem] gap-[0.5rem]">
                        <div className="relative leading-[120%] inline-block min-w-[4.25rem]">
                            About Us
                        </div>
                        <div className="h-[1.5rem] rounded-45xl bg-primary-blue-50 box-border hidden flex-row items-center justify-center py-[0.25rem] px-[0.563rem] text-[0.75rem] text-primary-blue-700 font-body-caption-s-regular border-[1px] border-solid border-primary-blue-600">
                            <div className="self-stretch relative leading-[1rem]">New</div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sections;
