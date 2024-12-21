import React, { useState } from "react";
import { motion } from "framer-motion";

const List: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedArtist, setSelectedArtist] = useState<any>(null);

    const artists = [
        {
            id: 1,
            title: "Beyoncé",
            image: "https://m.media-amazon.com/images/S/pv-target-images/0fd1501a41d4f23dcc2957383e58a6fc28ac6c8ca5bc12eb961af948f9fd2d8e._SX1080_FMjpg_.jpg",
            genre: "Pop",
            description:
                "Beyoncé is a legendary pop and R&B artist, known for her powerful vocals and groundbreaking performances.",
        },
        {
            id: 2,
            title: "Ed Sheeran",
            image: "https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/esensi/2023/12/Apple-Music-Live-Ed-Sheeran-with-guitar_big.jpg.slideshow-xlarge_2x.jpg",
            genre: "Pop/Folk",
            description:
                "Ed Sheeran is a singer-songwriter known for his heartfelt lyrics and chart-topping hits.",
        },
        {
            id: 3,
            title: "Ariana Grande",
            image: "https://portaljtv.com/_next/image?url=https%3A%2F%2Fcms.portaljtv.com%2Fassets%2Fupload-gambar%2Fjtv_1727803121.jpg&w=1920&q=75",
            genre: "Pop/R&B",
            description:
                "Ariana Grande is a pop sensation with an incredible vocal range and a massive global fan base.",
        },
        {
            id: 4,
            title: "Drake",
            image: "https://elcomercio.pe/resizer/v2/7ULOUEMDUNBFFGUKPXIYFTU7NA.jpg?auth=848f78820662e9781822c8f497e12c9b46b53224ff50a1e6345067d64941b031&width=1200&height=810&quality=90&smart=true",
            genre: "Hip-Hop",
            description:
                "Drake is a multi-talented artist known for his influence in hip-hop, R&B, and pop music.",
        },
        {
            id: 5,
            title: "Taylor Swift",
            image: "https://cdn0-production-images-kly.akamaized.net/jnojdPBheV5admUZgIBZ_pN7w8I=/800x450/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/704433/original/taylor-swift-49.jpg",
            genre: "Pop/Country",
            description:
                "Taylor Swift is a pop and country music icon, known for her storytelling and evolution as an artist.",
        },
        {
            id: 6,
            title: "The Weeknd",
            image: "https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/esensi/2023/11/02-the-weeknd-press-2019-cr-Nabil-Elderkin-billboard-1548.png",
            genre: "R&B/Pop",
            description:
                "The Weeknd is an R&B and pop artist, known for his unique voice and chart-topping hits.",
        },
        {
            id: 7,
            title: "Adele",
            image: "https://akcdn.detik.net.id/visual/2022/07/05/penyanyi-adele-4_169.jpeg?w=650",
            genre: "Pop/Soul",
            description:
                "Adele is a Grammy-winning artist known for her deep, soulful voice and emotional ballads.",
        },
        {
            id: 8,
            title: "Bruno Mars",
            image: "https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/esensi/2023/12/apakah-bruno-mars-pernah-konser-di-indonesia-SaUMexRjJp.jpeg",
            genre: "Pop/Funk",
            description:
                "Bruno Mars is a multi-talented artist known for his energetic performances and catchy hits.",
        },
        {
            id: 9,
            title: "Lady Gaga",
            image: "https://people.com/thmb/GMVxiZXIITMgNu-j3ZsYrU9l5ec=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(745x126:747x128)/lady-gaga-make-up-082123-1-cae7808315074117914e06155e5d3bc8.jpg",
            genre: "Pop",
            description:
                "Lady Gaga is a pop icon known for her versatility, theatrical performances, and chart-topping songs.",
        },
        {
            id: 10,
            title: "Justin Bieber",
            image: "https://cdn0-production-images-kly.akamaized.net/FG9R4vcMvvXjOaIAQSut5EOB1iE=/800x450/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/709417/original/justin-bieber-2.jpg",
            genre: "Pop/R&B",
            description:
                "Justin Bieber is a global pop star known for his evolution as an artist and numerous hits.",
        },
    ];

    const openModal = (artist: any) => {
        setSelectedArtist(artist);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="bg-gray-100 py-10">
            <div className="container mx-auto px-6">
                <motion.h1
                    className="text-4xl font-bold text-center text-gray-800 mb-8"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Featured Artists
                </motion.h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {artists.map((artist) => (
                        <motion.div
                            key={artist.id}
                            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: artist.id * 0.1 }}
                        >
                            <img
                                src={artist.image}
                                alt={artist.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h2 className="text-xl font-bold text-gray-800 mb-2">
                                    {artist.title}
                                </h2>
                                <p className="text-sm text-gray-600 mb-4">{artist.genre}</p>
                                <p className="text-gray-700 text-sm mb-4">
                                    {artist.description}
                                </p>
                                <button
                                    onClick={() => openModal(artist)}
                                    className="px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded hover:bg-blue-700 transition duration-200"
                                >
                                    Learn More
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {isModalOpen && selectedArtist && (
                <motion.div
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.div
                        className="bg-white p-8 rounded-lg shadow-lg w-96"
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">
                            {selectedArtist.title}
                        </h2>
                        <img
                            src={selectedArtist.image}
                            alt={selectedArtist.title}
                            className="w-full h-48 object-cover rounded-lg mb-4"
                        />
                        <p className="text-gray-700 mb-4">{selectedArtist.description}</p>
                        <p className="text-sm text-gray-600 mb-4">Genre: {selectedArtist.genre}</p>
                        <button
                            onClick={closeModal}
                            className="px-4 py-2 bg-gray-600 text-white text-sm font-semibold rounded hover:bg-gray-700 transition duration-200"
                        >
                            Close
                        </button>
                    </motion.div>
                </motion.div>
            )}
        </div>
    );
};

export default List;
