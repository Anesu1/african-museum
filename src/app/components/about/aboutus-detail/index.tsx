const AboutusDetail = () => {
    return (
        <section className="py-10 md:py-20 xl:py-40 dark:bg-secondary">
            <div className='container'>
                <div className='flex flex-col xl:flex-row gap-8'>
                    <div className='max-w-xl w-full'>
                        <h2 className='text-56'>Museum of African Liberation</h2>
                    </div>
                    <div className='flex flex-col gap-12'>
                        <p className="text-secondary dark:text-white">
                            The Museum of African Liberation is a continental institution dedicated to documenting the
                            struggles for freedom across Africa. Anchored at Liberation City in Harare, we preserve
                            artifacts, testimonies, and archives that honor the people and movements that shaped
                            independence.
                        </p>
                        <p className='text-secondary dark:text-white'>
                            Through exhibitions, public programs, and research partnerships, the museum connects
                            visitors to the lived experiences of liberation. We welcome students, families, and
                            scholars to explore our galleries, join guided tours, and engage with a living archive
                            of Pan-African memory.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutusDetail
