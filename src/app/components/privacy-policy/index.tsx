"use client";

function PrivacyPolicy() {
    return (
        <section>
            <div className="relative w-full dark:bg-darkblack">
                <div className="container">
                    <div className='flex flex-col gap-6 py-10 md:py-20'>
                        <p>
                            The Museum of African Liberation respects your privacy. This statement explains how we
                            collect, use, and protect personal information when you interact with our website, visit
                            our museum, or contact us for programs and research.
                        </p>

                        <div className="my-4">
                            <h4 className="font-semibold">Information we collect</h4>
                            <p className="mt-4">
                                We collect contact details you provide, such as name, email address, phone number, and
                                messages submitted through our contact forms. We also collect basic website analytics
                                that help us understand traffic and improve visitor experience.
                            </p>
                        </div>

                        <div className="my-4">
                            <h4 className="font-semibold">How we use information</h4>
                            <p className="mt-4">
                                We use your information to respond to inquiries, coordinate visits and tours, share
                                program updates you request, and improve museum services. We do not sell personal data.
                            </p>
                        </div>

                        <div className="my-4">
                            <h4 className="font-semibold">Sharing and retention</h4>
                            <p className="mt-4">
                                We share information only with trusted service providers who help operate our website
                                or support visitor services, and only as needed. We retain records for as long as
                                necessary to fulfill the purpose for which they were collected.
                            </p>
                        </div>

                        <div className="my-4">
                            <h4 className="font-semibold">Your choices</h4>
                            <p className="mt-4">
                                You may request access, correction, or deletion of your personal information by
                                contacting the museum. We will respond within a reasonable timeframe.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PrivacyPolicy;
