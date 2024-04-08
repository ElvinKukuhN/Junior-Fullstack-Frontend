import type { NextPage } from "next";
import FoodCart from "./FoodCart";
import FrameComponent4 from "./frame-component4";

const FrameComponent3: NextPage = () => {
    return (
        <div className="w-[82.563rem] flex flex-col items-start justify-start py-[0rem] pr-[1.25rem] pl-[0rem] box-border gap-[5rem] max-w-full text-center text-[3.813rem] text-grey-grey-700 font-nunit06 mq750:gap-[2.5rem_5rem] mq450:gap-[1.25rem_5rem]">
            <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
                <div className="h-[55.25rem] w-[52.063rem] absolute !m-[0] top-[-47.75rem] right-[-4.281rem]">
                    <div className="absolute h-full top-[0rem] bottom-[0rem] left-[0rem] rounded-[50%] bg-orange [filter:blur(474px)] w-[55.25rem]" />
                    <img
                        className="absolute top-[12.344rem] left-[11.888rem] rounded-48xl-7 w-[34.544rem] h-[29.156rem] overflow-hidden object-cover z-[1]"
                        alt=""
                        src="src/images/Frame 12.png"
                    />
                    <img
                        className="absolute top-[6.188rem] left-[11.888rem] w-[36.7rem] h-[34.544rem] object-contain z-[2]"
                        alt=""
                        src="src/images/Image 22.png"
                    />
                </div>
                <div className="flex-1 flex flex-col items-start justify-start gap-[2.438rem] max-w-full z-[1] mq750:gap-[1.188rem_2.438rem]">
                    <b className="w-[31.313rem] h-[4.563rem] relative leading-[120%] hidden max-w-full mq450:text-[2.313rem] mq450:leading-[2.75rem] mq1025:text-[3.063rem] mq1025:leading-[3.688rem]">
                        How does it work
                    </b>
                    <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[1.5rem] text-left text-[1.875rem] text-black">
                        <FoodCart prop="src/images/01.png" />
                        <FoodCart prop="src/images/02.png" propColor="#f03328" />
                        <FoodCart prop="src/images/4.png" propColor="#2d2d2d" />
                        <FoodCart prop="src/images/Image 26.png" propColor="#2d2d2d" />
                    </div>
                </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[5.25rem] max-w-full text-left text-[3.125rem] mq750:gap-[5.25rem_2.625rem] mq1150:flex-wrap mq450:gap-[5.25rem_1.313rem]">
                <img
                    className="h-[32.875rem] w-[36.125rem] relative rounded-10xl overflow-hidden shrink-0 object-cover max-w-full z-[1] mq1150:flex-1"
                    loading="lazy"
                    alt=""
                    src="src/images/left.png"
                />
                <div className="flex-1 flex flex-col items-start justify-start gap-[2.188rem] min-w-[25.938rem] max-w-full mq750:gap-[1.063rem_2.188rem] mq750:min-w-full">
                    <h1 className="m-0 self-stretch relative text-inherit leading-[120%] font-bold font-inherit mq450:text-[1.875rem] mq450:leading-[2.25rem] mq1025:text-[2.5rem] mq1025:leading-[3rem]">
                        Why People Choose us?
                    </h1>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[2.563rem] max-w-full text-[1.938rem] text-black mq750:gap-[1.25rem_2.563rem]">
                        <FrameComponent4
                            icons02="src/images/011.png"
                            convenientAndReliable="Convenient and Reliable"
                            whetherYouDineInTakeOutOr="Whether you dine in, take out, or order delivery, our service
                            is convenient, fast, and reliable, making mealtime
                            hassle-free."
                        />
                        <FrameComponent4
                            icons02="src/images/022.png"
                            convenientAndReliable="Variety of Options"
                            whetherYouDineInTakeOutOr="From hearty meals to light snacks, we offer a wide range of options to suit every taste and craving."
                        />
                        <FrameComponent4
                            icons02="src/images/033.png"
                            convenientAndReliable="Eat Burger"
                            whetherYouDineInTakeOutOr="Our burgers are grilled to perfection, with juicy patties and flavorful toppings that make every bite a delicious experience."
                            propPadding="1.031rem 0rem 0rem"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FrameComponent3;
