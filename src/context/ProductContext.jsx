import { useEffect, useState } from "react";
import { createContext } from "react";

export const ProductPage = createContext();
const ProductContext = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const pageSize = 20;

  // Mock oyun verileri
  const mockGames = [
    {
      productID: 1,
      productName: "Cyberpunk 2077",
      productData: {
        productMainImage:
          "https://images.igdb.com/igdb/image/upload/t_cover_big/co2rpf.jpg",
        productInfo:
          "An open-world, action-adventure story set in Night City, a megalopolis obsessed with power, glamour and ceaseless body modification.",
      },
      marketPrice: 299,
      salePrice: 199,
      regionList: ["TR", "EU"],
      customerStoreProductID: "cp2077-001",
    },
    {
      productID: 2,
      productName: "The Witcher 3: Wild Hunt",
      productData: {
        productMainImage:
          "https://images.igdb.com/igdb/image/upload/t_cover_big/co1wyy.jpg",
        productInfo:
          "The Witcher 3: Wild Hunt is a story-driven, next-generation open world RPG set in a fantasy universe.",
      },
      marketPrice: 199,
      salePrice: 99,
      regionList: ["TR", "EU"],
      customerStoreProductID: "tw3-001",
    },
    {
      productID: 3,
      productName: "Red Dead Redemption 2",
      productData: {
        productMainImage:
          "https://images.igdb.com/igdb/image/upload/t_cover_big/co1tmu.jpg",
        productInfo:
          "America, 1899. The end of the wild west era has begun. After a robbery goes badly wrong in the western town of Blackwater, Arthur Morgan and the Van der Linde gang are forced to flee.",
      },
      marketPrice: 399,
      salePrice: 299,
      regionList: ["TR", "EU"],
      customerStoreProductID: "rdr2-001",
    },
    {
      productID: 4,
      productName: "Elden Ring",
      productData: {
        productMainImage:
          "https://images.igdb.com/igdb/image/upload/t_cover_big/co2rpf.jpg",
        productInfo:
          "A new fantasy action RPG. Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between.",
      },
      marketPrice: 499,
      salePrice: 399,
      regionList: ["TR", "EU"],
      customerStoreProductID: "er-001",
    },
    {
      productID: 5,
      productName: "God of War",
      productData: {
        productMainImage:
          "https://images.igdb.com/igdb/image/upload/t_cover_big/co1tmu.jpg",
        productInfo:
          "His vengeance against the Gods of Olympus years behind him, Kratos now lives as a man in the realm of Norse Gods and monsters.",
      },
      marketPrice: 299,
      salePrice: 199,
      regionList: ["TR", "EU"],
      customerStoreProductID: "gow-001",
    },
    {
      productID: 6,
      productName: "The Last of Us Part II",
      productData: {
        productMainImage:
          "https://images.igdb.com/igdb/image/upload/t_cover_big/co2rpf.jpg",
        productInfo:
          "Set five years after the events of the previous game, The Last of Us Part II follows Ellie, who has settled down in Jackson, Wyoming.",
      },
      marketPrice: 399,
      salePrice: 299,
      regionList: ["TR", "EU"],
      customerStoreProductID: "tlou2-001",
    },
    {
      productID: 7,
      productName: "Spider-Man: Miles Morales",
      productData: {
        productMainImage:
          "https://images.igdb.com/igdb/image/upload/t_cover_big/co1wyy.jpg",
        productInfo:
          "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
      },
      marketPrice: 299,
      salePrice: 199,
      regionList: ["TR", "EU"],
      customerStoreProductID: "smm-001",
    },
    {
      productID: 8,
      productName: "Horizon Zero Dawn",
      productData: {
        productMainImage:
          "https://images.igdb.com/igdb/image/upload/t_cover_big/co1tmu.jpg",
        productInfo:
          "Experience Aloy's legendary quest to unravel the mysteries of a world ruled by Machines.",
      },
      marketPrice: 199,
      salePrice: 99,
      regionList: ["TR", "EU"],
      customerStoreProductID: "hzd-001",
    },
    {
      productID: 9,
      productName: "Ghost of Tsushima",
      productData: {
        productMainImage:
          "https://images.igdb.com/igdb/image/upload/t_cover_big/co2rpf.jpg",
        productInfo:
          "In the late 13th century, the Mongol empire has laid waste to entire nations along their campaign to conquer the East.",
      },
      marketPrice: 299,
      salePrice: 199,
      regionList: ["TR", "EU"],
      customerStoreProductID: "got-001",
    },
    {
      productID: 10,
      productName: "Assassin's Creed Valhalla",
      productData: {
        productMainImage:
          "https://images.igdb.com/igdb/image/upload/t_cover_big/co1wyy.jpg",
        productInfo:
          "Become Eivor, a legendary Viking raider on a quest for glory. Explore England's Dark Ages as you raid your enemies, grow your settlement, and build your political power.",
      },
      marketPrice: 399,
      salePrice: 299,
      regionList: ["TR", "EU"],
      customerStoreProductID: "acv-001",
    },
    {
      productID: 11,
      productName: "Call of Duty: Modern Warfare",
      productData: {
        productMainImage:
          "https://images.igdb.com/igdb/image/upload/t_cover_big/co2rpf.jpg",
        productInfo:
          "Experience the ultimate online playground with classic multiplayer, an all-new Battle Royale, and Special Ops co-op experience.",
      },
      marketPrice: 599,
      salePrice: 499,
      regionList: ["TR", "EU"],
      customerStoreProductID: "cod-mw-001",
    },
    {
      productID: 12,
      productName: "FIFA 24",
      productData: {
        productMainImage:
          "https://images.igdb.com/igdb/image/upload/t_cover_big/co1tmu.jpg",
        productInfo:
          "Experience the beautiful game with FIFA 24. Play with over 19,000 licensed players, 700+ teams, and 100+ stadiums.",
      },
      marketPrice: 399,
      salePrice: 299,
      regionList: ["TR", "EU"],
      customerStoreProductID: "fifa24-001",
    },
    {
      productID: 13,
      productName: "Grand Theft Auto V",
      productData: {
        productMainImage:
          "https://images.igdb.com/igdb/image/upload/t_cover_big/co1wyy.jpg",
        productInfo:
          "Grand Theft Auto V for PC offers players the option to explore the award-winning world of Los Santos and Blaine County in resolutions of up to 4K and beyond.",
      },
      marketPrice: 199,
      salePrice: 99,
      regionList: ["TR", "EU"],
      customerStoreProductID: "gtav-001",
    },
    {
      productID: 14,
      productName: "Minecraft",
      productData: {
        productMainImage:
          "https://images.igdb.com/igdb/image/upload/t_cover_big/co2rpf.jpg",
        productInfo:
          "Minecraft is a game about placing blocks and going on adventures. Build anything you can imagine with unlimited resources in Creative mode.",
      },
      marketPrice: 299,
      salePrice: 199,
      regionList: ["TR", "EU"],
      customerStoreProductID: "minecraft-001",
    },
    {
      productID: 15,
      productName: "Fortnite",
      productData: {
        productMainImage:
          "https://images.igdb.com/igdb/image/upload/t_cover_big/co1tmu.jpg",
        productInfo:
          "Fortnite is a Battle Royale game where 100 players compete to be the last one standing. Build, fight, and survive in this free-to-play experience.",
      },
      marketPrice: 0,
      salePrice: 0,
      regionList: ["TR", "EU"],
      customerStoreProductID: "fortnite-001",
    },
    {
      productID: 16,
      productName: "Among Us",
      productData: {
        productMainImage:
          "https://images.igdb.com/igdb/image/upload/t_cover_big/co1wyy.jpg",
        productInfo:
          "An online and local party game of teamwork and betrayal for 4-15 players...in space! Complete tasks to prepare your spaceship for departure.",
      },
      marketPrice: 49,
      salePrice: 29,
      regionList: ["TR", "EU"],
      customerStoreProductID: "amongus-001",
    },
    {
      productID: 17,
      productName: "Valorant",
      productData: {
        productMainImage:
          "https://images.igdb.com/igdb/image/upload/t_cover_big/co2rpf.jpg",
        productInfo:
          "Valorant is a character-based 5v5 tactical shooter set on the global stage. Outwit, outplay, and outshine your competition with tactical abilities.",
      },
      marketPrice: 0,
      salePrice: 0,
      regionList: ["TR", "EU"],
      customerStoreProductID: "valorant-001",
    },
    {
      productID: 18,
      productName: "Apex Legends",
      productData: {
        productMainImage:
          "https://images.igdb.com/igdb/image/upload/t_cover_big/co1tmu.jpg",
        productInfo:
          "Apex Legends is the award-winning, free-to-play Hero Shooter from Respawn Entertainment. Master an ever-growing roster of legendary characters.",
      },
      marketPrice: 0,
      salePrice: 0,
      regionList: ["TR", "EU"],
      customerStoreProductID: "apex-001",
    },
    {
      productID: 19,
      productName: "Rocket League",
      productData: {
        productMainImage:
          "https://images.igdb.com/igdb/image/upload/t_cover_big/co1wyy.jpg",
        productInfo:
          "Rocket League is a high-powered hybrid of arcade-style soccer and vehicular mayhem with easy-to-understand controls and fluid, physics-driven competition.",
      },
      marketPrice: 199,
      salePrice: 99,
      regionList: ["TR", "EU"],
      customerStoreProductID: "rocketleague-001",
    },
    {
      productID: 20,
      productName: "Fall Guys",
      productData: {
        productMainImage:
          "https://images.igdb.com/igdb/image/upload/t_cover_big/co2rpf.jpg",
        productInfo:
          "Fall Guys is a massively multiplayer party game with up to 60 players online in a free-for-all struggle through round after round of escalating chaos.",
      },
      marketPrice: 0,
      salePrice: 0,
      regionList: ["TR", "EU"],
      customerStoreProductID: "fallguys-001",
    },
  ];

  const takeProducts = async () => {
    setLoading(true);
    try {
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Pagination logic for mock data
      const startIndex = (page - 1) * pageSize;
      const endIndex = startIndex + pageSize;
      const paginatedGames = mockGames.slice(startIndex, endIndex);

      setProducts(paginatedGames);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    takeProducts();
  }, [page]);
  return (
    <ProductPage.Provider
      value={{
        products,
        setProducts,
        search,
        setSearch,
        loading,
        setLoading,
        page,
        setPage,
      }}
    >
      {children}
    </ProductPage.Provider>
  );
};

export default ProductContext;
