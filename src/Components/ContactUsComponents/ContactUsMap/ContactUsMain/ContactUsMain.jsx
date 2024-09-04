import React from 'react';

function ContactUsMain() {
    const locations = [
        {
            id: 1,
            name: "Manhattan",
            address: "71 Madison Ave",
            phone: "914-309-7011, 914-329-2131",
            email: "reservations@laurent.com"
        },
        {
            id: 2,
            name: "Brooklyn",
            address: "88 Atlantic Ave",
            phone: "718-555-1234, 718-555-5678",
            email: "brooklyn@laurent.com"
        },
        {
            id: 3,
            name: "Queens",
            address: "23-45 Astoria Blvd",
            phone: "347-555-9876, 347-555-4321",
            email: "queens@laurent.com"
        },
        {
            id: 4,
            name: "The Bronx",
            address: "2466 Grand Concourse",
            phone: "718-555-8765, 718-555-3456",
            email: "bronx@laurent.com"
        }
    ];

    return (
        <div className='bg-[#0B1315] text-[#9C7C57] p-1 sm:p-2'>
            {/* <h3 className='text-xl font-miniver text-center mb-2'>Write to us</h3>
            <div className='flex justify-center items-center mb-24'>
                <svg xmlns="http://www.w3.org/2000/svg" width="41" height="9" className="mr-4">
                    <path fill="none" stroke="#9C7C57" strokeMiterlimit="10" d="M40.5 8L20.5 1 0.5 8M40.5 1L20.5 8 0.5 1" />
                </svg>
                <h2 className="text-4xl sm:text-5xl font-bold tracking-widest text-center">CONTACT US</h2>
                <svg xmlns="http://www.w3.org/2000/svg" width="41" height="9" className="ml-4">
                    <path fill="none" stroke="#9C7C57" strokeMiterlimit="10" d="M40.5 8L20.5 1 0.5 8M40.5 1L20.5 8 0.5 1" />
                </svg>
            </div> */}
            <div className='flex flex-col lg:flex-row justify-between'>
                <div className='w-full lg:w-1/2 mb-8 lg:mb-0 pr-0 lg:pr-8'>
                    <h3 className='text-xl font-miniver text-center mb-2'>Write to us</h3>
                    <div className='flex justify-center items-center mb-10'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="41" height="9" className="mr-4">
                            <path fill="none" stroke="#9C7C57" strokeMiterlimit="10" d="M40.5 8L20.5 1 0.5 8M40.5 1L20.5 8 0.5 1" />
                        </svg>
                        <h2 className="text-3xl sm:text-5xl font-bold tracking-widest text-center">CONTACT US</h2>
                        <svg xmlns="http://www.w3.org/2000/svg" width="41" height="9" className="ml-4">
                            <path fill="none" stroke="#9C7C57" strokeMiterlimit="10" d="M40.5 8L20.5 1 0.5 8M40.5 1L20.5 8 0.5 1" />
                        </svg>
                    </div>
                    <form className="w-full">
                        <div className="flex flex-col gap-6">
                            <input
                                type="text"
                                id="name"
                                className="bg-transparent border border-[#9C7C57] text-[#9C7C57] text-sm focus:border-[#9C7C57] block w-full p-2.5"
                                placeholder="Name"
                                required
                            />
                            <input
                                type="email"
                                id="email"
                                className="bg-transparent border border-[#9C7C57] text-[#9C7C57] text-sm focus:border-[#9C7C57] block w-full p-2.5"
                                placeholder="E-mail"
                                required
                            />
                            <textarea
                                id="message"
                                className="bg-transparent border border-[#9C7C57] text-[#9C7C57] text-sm focus:border-[#9C7C57] block w-full p-2.5 h-32"
                                placeholder="Message"
                                required
                            />
                            <button className=' flex justify-center border border-gold py-3 px-16 text-center text-white w-24 mx-auto '>SEND</button>
                        </div>
                    </form>
                </div>
                <div className='w-full mt-20 lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-8'>
                    {locations.map((location) => (
                        <div key={location.id} className='flex flex-col items-center'>
                            <h2 className='text-[#9C7C57] text-2xl font-semibold tracking-widest mb-3'>{location.name}</h2>
                            <p className='text-white mb-1 text-xl font-thin'>{location.address}</p>
                            <p className='text-white mb-1 font-thin'>{location.phone}</p>
                            <p className='text-white font-thin'>{location.email}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ContactUsMain;