"use client";

import * as Accordion from "@radix-ui/react-accordion";
import Plus from "../../public/assets/Plus.svg";
import Image from "next/image";

const items = [
  {
    question: "Ut aliquam purus sit amet nulla",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro iure architecto consectetur similique, consequuntur tenetur blanditiis harum quis obcaecati dicta?",
  },
  {
    question: "Ut aliquam purus sit amet nulla",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro iure architecto consectetur similique, consequuntur tenetur blanditiis harum quis obcaecati dicta?",
  },
  {
    question: "Ut aliquam purus sit amet nulla",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro iure architecto consectetur similique, consequuntur tenetur blanditiis harum quis obcaecati dicta?",
  },
  {
    question: "Ut aliquam purus sit amet nulla",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro iure architecto consectetur similique, consequuntur tenetur blanditiis harum quis obcaecati dicta?",
  },
  {
    question: "Ut aliquam purus sit amet nulla",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro iure architecto consectetur similique, consequuntur tenetur blanditiis harum quis obcaecati dicta?",
  },
];

export function Faq() {
  return (
    <div className="flex flex-col w-full py-[48px] lg:py-[60px] lg:flex-row lg:gap-x-6">
      <div className="lg:w-1/3 lg:py-[32px] lg:pr-[56px]">
        <h3 className="text-[#EB2891] text-[14px] font-medium lg:text-base">
          Frequently Asked Questions
        </h3>
        <h1 className="py-4 text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]">
          Lats clarify some of your question
        </h1>
        <p className="text-[#36485C] pb-[24px]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
          perferendis repellendus expedita.
        </p>
      </div>

      <div className="lg:w-2/3">
        <Accordion.Root
          type="single"
          defaultValue="item-1"
          collapsible
          className="flex flex-col gap-y-4"
        >
          {items.map((item, index) => (
            <div key={index}>
              <Accordion.Item
                value={`item-${index + 1}`}
                className="bg-[#E3F1FF] p-[16px] rounded-[8px]"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="flex w-full items-center justify-between">
                    <p className="text-left font-medium text-[#172026] lg:text-[18px]">
                      {item.question}
                    </p>
                    <span>
                      <Image
                        src={Plus}
                        alt="See More"
                        className="h-5 w-5 lg:w-6 lg:h-6"
                      />
                    </span>
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content>
                  <p className="pt-2 text-[#36485C]">{item.answer}</p>
                </Accordion.Content>
              </Accordion.Item>
            </div>
          ))}
        </Accordion.Root>
      </div>
    </div>
  );
}
