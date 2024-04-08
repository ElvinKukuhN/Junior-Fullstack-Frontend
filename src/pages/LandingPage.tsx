import type { NextPage } from "next";
import CircleMarker from "./components/circle-marker";
import ConditionSplitter from "./components/condition-splitter";
import DijkstraAlgorithm from "./components/dijkstra-algorithm";
import FrameComponent from "./components/frame-component";
import FrameComponent1 from "./components/frame-component1";
import FrameComponent3 from "./components/frame-component3";
import Sections from "./section/sections";

const Desktop: NextPage = () => {
    return (
        <div className="w-full relative bg-neutral-grey-10 overflow-hidden flex flex-col items-end justify-start pt-[2.375rem] px-[0rem] pb-[0rem] box-border gap-[3.469rem] tracking-[normal] mq750:gap-[1.75rem_3.469rem]">
            <div className="w-[40.25rem] h-[40.25rem] absolute !m-[0] top-[88rem] left-[-13.75rem] rounded-[50%] bg-orange [filter:blur(474px)]" />
            <div className="w-[41.625rem] h-[41.625rem] absolute !m-[0] top-[-6.562rem] left-[-14.25rem] rounded-[50%] bg-orange [filter:blur(474px)]" />
            <ConditionSplitter />
            <main className="w-[86.325rem] flex flex-row items-start justify-end py-[0rem] pr-[0.794rem] pl-[0.813rem] box-border max-w-full">
                <section className="flex-1 flex flex-col items-start justify-start gap-[5rem] max-w-full mq750:gap-[2.5rem_5rem] mq450:gap-[1.25rem_5rem]">
                    <DijkstraAlgorithm />
                    <FrameComponent3 />
                    <FrameComponent1 />
                </section>
            </main>
            <footer className="self-stretch bg-neutral-grey-10 box-border flex flex-col items-start justify-start py-[4rem] px-[5rem] gap-[4rem] max-w-full z-[2] border-t-[1px] border-solid border-tomato-300 mq750:gap-[2rem_4rem] mq750:py-[2.625rem] mq750:px-[2.5rem] mq750:box-border mq450:gap-[1rem_4rem]">
                <FrameComponent />
                <Sections />
                <CircleMarker />
            </footer>
        </div>
    );
};

export default Desktop;
