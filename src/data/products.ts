// Shared product data for the entire application
export interface Product {
  id: number;
  title: string;
  category: string;
  slug: string;
  image: string;
  description: string;
}

export const products: Product[] = [
  {
    id: 1,
    title: 'Nước Giặt OMO',
    category: 'Nước Giặt',
    slug: 'nuoc-giat-omo',
    image: 'https://placehold.co/400x400/2e3b63/ffffff?text=OMO',
    description: 'Nước giặt OMO Thái Lan với công thức mạnh mẽ, giúp loại bỏ vết bẩn hiệu quả và bảo vệ màu sắc quần áo.',
  },
  {
    id: 2,
    title: 'Nước Giặt Attack',
    category: 'Nước Giặt',
    slug: 'nuoc-giat-attack',
    image: 'https://placehold.co/400x400/2e3b63/ffffff?text=Attack',
    description: 'Nước giặt Attack từ Thái Lan với công nghệ tiên tiến, làm sạch vượt trội, thơm lâu suốt cả ngày.',
  },
  {
    id: 3,
    title: 'Nước Giặt Pao',
    category: 'Nước Giặt',
    slug: 'nuoc-giat-pao',
    image: 'https://placehold.co/400x400/2e3b63/ffffff?text=Pao',
    description: 'Nước giặt Pao Thái Lan chất lượng cao, giá cả phải chăng, phù hợp với mọi gia đình Việt.',
  },
  {
    id: 4,
    title: 'Nước Giặt Breeze',
    category: 'Nước Giặt',
    slug: 'nuoc-giat-breeze',
    image: 'https://placehold.co/400x400/2e3b63/ffffff?text=Breeze',
    description: 'Nước giặt Breeze hương thơm quyến rũ, giúp quần áo sạch sâu và mềm mại tự nhiên.',
  },
  {
    id: 5,
    title: 'Nước Giặt Ariel',
    category: 'Nước Giặt',
    slug: 'nuoc-giat-ariel',
    image: 'https://placehold.co/400x400/2e3b63/ffffff?text=Ariel',
    description: 'Nước giặt Ariel công nghệ đột phá, loại bỏ vết bẩn cứng đầu chỉ sau một lần giặt.',
  },
  {
    id: 6,
    title: 'Nước Xả Comfort',
    category: 'Nước Xả',
    slug: 'nuoc-xa-comfort',
    image: 'https://placehold.co/400x400/2e3b63/ffffff?text=Comfort',
    description: 'Nước xả vải Comfort với hương thơm quyến rũ, giúp quần áo mềm mại và dễ ủi hơn.',
  },
  {
    id: 7,
    title: 'Nước Xả Downy',
    category: 'Nước Xả',
    slug: 'nuoc-xa-downy',
    image: 'https://placehold.co/400x400/2e3b63/ffffff?text=Downy',
    description: 'Nước xả Downy chính hãng từ Thái Lan, giữ hương thơm lâu dài suốt 48 giờ.',
  },
  {
    id: 8,
    title: 'Nước Xả Essence',
    category: 'Nước Xả',
    slug: 'nuoc-xa-essence',
    image: 'https://placehold.co/400x400/2e3b63/ffffff?text=Essence',
    description: 'Nước xả Essence hương hoa tươi mát, bảo vệ sợi vải và giữ màu sắc tươi mới.',
  },
  {
    id: 9,
    title: 'Nước Xả Hygiene',
    category: 'Nước Xả',
    slug: 'nuoc-xa-hygiene',
    image: 'https://placehold.co/400x400/2e3b63/ffffff?text=Hygiene',
    description: 'Nước xả Hygiene kháng khuẩn, bảo vệ gia đình bạn khỏi vi khuẩn gây hại.',
  },
  {
    id: 10,
    title: 'Nước Rửa Chén Sunlight',
    category: 'Nước Tẩy Rửa',
    slug: 'nuoc-rua-chen-sunlight',
    image: 'https://placehold.co/400x400/2e3b63/ffffff?text=Sunlight',
    description: 'Nước rửa chén Sunlight loại bỏ dầu mỡ hiệu quả, an toàn cho da tay và môi trường.',
  },
  {
    id: 11,
    title: 'Nước Tẩy Toilet Duck',
    category: 'Nước Tẩy Rửa',
    slug: 'nuoc-tay-toilet-duck',
    image: 'https://placehold.co/400x400/2e3b63/ffffff?text=Duck',
    description: 'Nước tẩy nhà vệ sinh Duck với công thức mạnh mẽ diệt khuẩn 99.9%, làm sạch và thơm mát.',
  },
  {
    id: 12,
    title: 'Nước Rửa Chén Vim',
    category: 'Nước Tẩy Rửa',
    slug: 'nuoc-rua-chen-vim',
    image: 'https://placehold.co/400x400/2e3b63/ffffff?text=Vim',
    description: 'Nước rửa chén Vim công thức đặc biệt, khử mỡ nhanh chỉ với một giọt nhỏ.',
  },
  {
    id: 13,
    title: 'Nước Tẩy Đa Năng Mr. Muscle',
    category: 'Nước Tẩy Rửa',
    slug: 'nuoc-tay-mr-muscle',
    image: 'https://placehold.co/400x400/2e3b63/ffffff?text=Mr+Muscle',
    description: 'Nước tẩy đa năng Mr. Muscle làm sạch mọi bề mặt, khử khuẩn và bảo vệ sức khỏe.',
  },
  {
    id: 14,
    title: 'Nước Lau Sàn Lipon',
    category: 'Nước Lau Sàn',
    slug: 'nuoc-lau-san-lipon',
    image: 'https://placehold.co/400x400/2e3b63/ffffff?text=Lipon',
    description: 'Nước lau sàn Lipon Thái Lan với hương thơm dễ chịu, sàn nhà sạch bóng như mới.',
  },
  {
    id: 15,
    title: 'Nước Lau Sàn Kleenso',
    category: 'Nước Lau Sàn',
    slug: 'nuoc-lau-san-kleenso',
    image: 'https://placehold.co/400x400/2e3b63/ffffff?text=Kleenso',
    description: 'Nước lau sàn Kleenso diệt khuẩn hiệu quả, an toàn cho trẻ em và thú cưng.',
  },
  {
    id: 16,
    title: 'Nước Lau Sàn Joy',
    category: 'Nước Lau Sàn',
    slug: 'nuoc-lau-san-joy',
    image: 'https://placehold.co/400x400/2e3b63/ffffff?text=Joy',
    description: 'Nước lau sàn Joy hương thơm tự nhiên, làm sạch và khử mùi hiệu quả.',
  },
  {
    id: 17,
    title: 'Sữa Tắm Breeze',
    category: 'Chăm Sóc Da',
    slug: 'sua-tam-breeze',
    image: 'https://placehold.co/400x400/2e3b63/ffffff?text=Breeze+Body',
    description: 'Sữa tắm Breeze Thái Lan dưỡng ẩm sâu, thơm mát và mịn màng cả ngày dài.',
  },
  {
    id: 18,
    title: 'Kem Dưỡng Da Nivea',
    category: 'Chăm Sóc Da',
    slug: 'kem-duong-da-nivea',
    image: 'https://placehold.co/400x400/2e3b63/ffffff?text=Nivea',
    description: 'Kem dưỡng da Nivea chính hãng, dưỡng ẩm chuyên sâu 24h, làm trắng da tự nhiên.',
  },
  {
    id: 19,
    title: 'Dầu Gội Clear',
    category: 'Chăm Sóc Da',
    slug: 'dau-goi-clear',
    image: 'https://placehold.co/400x400/2e3b63/ffffff?text=Clear',
    description: 'Dầu gội Clear Thái Lan chống gàu hiệu quả, tóc khỏe mạnh và bồng bềnh.',
  },
  {
    id: 20,
    title: 'Nước Rửa Tay Lifebuoy',
    category: 'Chăm Sóc Da',
    slug: 'nuoc-rua-tay-lifebuoy',
    image: 'https://placehold.co/400x400/2e3b63/ffffff?text=Lifebuoy',
    description: 'Nước rửa tay Lifebuoy diệt khuẩn 99.9%, bảo vệ cả gia đình khỏi vi khuẩn.',
  },
  {
    id: 21,
    title: 'Sữa Tắm Dove',
    category: 'Chăm Sóc Da',
    slug: 'sua-tam-dove',
    image: 'https://placehold.co/400x400/2e3b63/ffffff?text=Dove',
    description: 'Sữa tắm Dove dưỡng ẩm vượt trội với 1/4 kem dưỡng, da mềm mịn tức thì.',
  },
  {
    id: 22,
    title: 'Dầu Gội Sunsilk',
    category: 'Chăm Sóc Da',
    slug: 'dau-goi-sunsilk',
    image: 'https://placehold.co/400x400/2e3b63/ffffff?text=Sunsilk',
    description: 'Dầu gội Sunsilk công thức chuyên sâu, tóc mượt mà và bóng khỏe từ gốc đến ngọn.',
  },
  {
    id: 23,
    title: 'Mì Mama Tôm Yum',
    category: 'Thực Phẩm',
    slug: 'mi-mama-tom-yum',
    image: 'https://placehold.co/400x400/2e3b63/ffffff?text=Mama',
    description: 'Mì ăn liền Mama số 1 Thái Lan với hương vị Tôm Yum đặc trưng, cay nồng hấp dẫn.',
  },
  {
    id: 24,
    title: 'Nước Mắm Cá Thái Lan',
    category: 'Thực Phẩm',
    slug: 'nuoc-mam-ca-thai-lan',
    image: 'https://placehold.co/400x400/2e3b63/ffffff?text=Fish+Sauce',
    description: 'Nước mắm cá Thái Lan chính hãng, đậm đà ngon miệng, tăng thêm hương vị món ăn.',
  },
  {
    id: 25,
    title: 'Snack Khoai Tây Thái',
    category: 'Thực Phẩm',
    slug: 'snack-khoai-tay-thai',
    image: 'https://placehold.co/400x400/2e3b63/ffffff?text=Snack',
    description: 'Bánh snack khoai tây Thái Lan giòn tan, nhiều vị độc đáo, thích hợp mọi lứa tuổi.',
  },
  {
    id: 26,
    title: 'Xốt Ớt Sriracha',
    category: 'Thực Phẩm',
    slug: 'xot-ot-sriracha',
    image: 'https://placehold.co/400x400/2e3b63/ffffff?text=Sriracha',
    description: 'Tương ớt Sriracha Thái Lan cay nồng đặc trưng, không thể thiếu trong bữa ăn.',
  },
  {
    id: 27,
    title: 'Trà Thái Xanh',
    category: 'Thực Phẩm',
    slug: 'tra-thai-xanh',
    image: 'https://placehold.co/400x400/2e3b63/ffffff?text=Thai+Tea',
    description: 'Trà xanh Thái Lan thơm ngon, giải khát tuyệt vời, tốt cho sức khỏe.',
  },
  {
    id: 28,
    title: 'Bánh Pocky Thái',
    category: 'Thực Phẩm',
    slug: 'banh-pocky-thai',
    image: 'https://placehold.co/400x400/2e3b63/ffffff?text=Pocky',
    description: 'Bánh que Pocky Thái Lan giòn ngon với nhiều hương vị chocolate đa dạng.',
  },
  {
    id: 29,
    title: 'Nước Giặt Tide',
    category: 'Nước Giặt',
    slug: 'nuoc-giat-tide',
    image: 'https://placehold.co/400x400/2e3b63/ffffff?text=Tide',
    description: 'Nước giặt Tide công thức mạnh mẽ, giúp quần áo sạch như mới sau mỗi lần giặt.',
  },
  {
    id: 30,
    title: 'Nước Xả Lenor',
    category: 'Nước Xả',
    slug: 'nuoc-xa-lenor',
    image: 'https://placehold.co/400x400/2e3b63/ffffff?text=Lenor',
    description: 'Nước xả Lenor hương thơm sang trọng, mang lại cảm giác thư giãn cho cả gia đình.',
  },
];

// Helper function to get products for homepage (first 16)
export const getHomepageProducts = () => products.slice(0, 16);

// Helper function to get all products
export const getAllProducts = () => products;

// Helper function to get product by slug
export const getProductBySlug = (slug: string) => 
  products.find(product => product.slug === slug);

