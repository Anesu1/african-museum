
"use client";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../../ui/accordian";


function Faq() {
    const faqData = {
        data: [
            {
                faq_que: "Where is the museum located?",
                faq_ans: "We are anchored at Liberation City in Harare, Zimbabwe."
            },
            {
                faq_que: "What are the opening hours?",
                faq_ans: "Open Tuesday to Sunday, 9:00 AM to 5:00 PM, with last entry at 4:30 PM. Closed Mondays and major public holidays."
            },
            {
                faq_que: "Are guided tours available?",
                faq_ans: "Yes, we offer educational programs and guided tours for groups and individuals."
            },
            {
                faq_que: "Can I donate artifacts?",
                faq_ans: "We actively preserve artifacts tied to liberation history. Please contact our collections department."
            },
            {
                faq_que: "Is there research support?",
                faq_ans: "Yes, we support research and documentation of liberation heritage."
            }
        ]
    };
    return (
        <section className="bg-white dark:bg-darkblack py-20 md:py-40">
            <div className="flex flex-col gap-24">
                <div className="container">
                    <div className="flex flex-col gap-20">
                        <div className="flex flex-col gap-14 xl:gap-24">
                            <div className="flex flex-col xl:flex xl:flex-row items-start gap-8">
                                <div className="flex items-center py-3 gap-4 md:gap-8 w-full max-w-xl">
                                    <span className="bg-primary dark:text-secondary py-1.5 px-2.5 text-base font-medium rounded-full">08</span>
                                    <div className="h-px w-16 bg-black/12 dark:bg-white/12" />
                                    <p className="section-bedge py-1.5 px-4 rounded-full">FAQs</p>
                                </div>
                                <div className="flex flex-col gap-11">
                                    <div className="flex flex-col gap-5 ">
                                        <h2 className="max-w-3xl">Frequently asked questions</h2>
                                        <p className="max-w-2xl text-black/70 dark:text-white/70">Find practical information for planning your visit, research, and educational programs at the Museum of African Liberation.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col items-end">
                                <Accordion type="single" collapsible className="flex flex-col 2xl:max-w-5xl w-full">
                                    {faqData.data.map((item: any, index: any) => (
                                        <AccordionItem
                                            key={index}
                                            value={`item-${index}`}
                                        >
                                            <AccordionTrigger>
                                                <h4>{item.faq_que}</h4>
                                            </AccordionTrigger>
                                            <AccordionContent>
                                                <p>{item.faq_ans}</p>
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Faq;
