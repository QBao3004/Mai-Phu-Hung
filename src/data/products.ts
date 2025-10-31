// Shared product data for the entire application
export interface Product {
  id: number;
  title: string;
  category: string;
  subcategory?: string;
  slug: string;
  image: string;
  images?: string[];
  description: string;
  metaDescription?: string;
  features: string[];
  specifications: { label: string; value: string }[];
  usage: string[];
  benefits: string[];
  isNew?: boolean;
  inStock?: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    title: 'Bánh que Ticky vị dâu hộp 18g',
    category: 'Thực Phẩm Thái Lan',
    subcategory: 'Ticky',
    slug: 'banh-que-ticky-vi-dau-18g',
    image: '/Product/Ticky/Banh_que_Ticky_hop_vi_dau_18g.png',
    images: [
      
    ],
    isNew: true,
    inStock: true,
    description: 'Bánh que Ticky vị dâu mang đến hương thơm ngọt ngào và thanh mát từ dâu tây, kết hợp cùng lớp bánh giòn tan tạo nên món ăn vặt hấp dẫn cho mọi lứa tuổi. Mỗi que bánh là sự hòa quyện hoàn hảo giữa vị dâu chua ngọt và lớp bánh vàng ruộm, khiến bạn khó lòng dừng lại ngay từ lần nếm đầu tiên.',
    features: [
      'Hương vị dâu tây ngọt thanh, chua nhẹ',
      'Lớp kem dâu mềm mịn hòa quyện bánh giòn tan',
      'Kích thước nhỏ gọn, tiện lợi mang theo',
      'Phù hợp cho mọi lứa tuổi'
    ],
    specifications: [
      { label: 'Xuất xứ', value: 'Thái Lan' },
      { label: 'Trọng lượng', value: '18g' },
      { label: 'Thương hiệu', value: 'Ticky' },
      { label: 'Hạn sử dụng', value: '12 tháng từ ngày sản xuất' }
    ],
    usage: [
      'Dùng trực tiếp',
      'Ngon hơn khi bảo quản trong ngăn mát tủ lạnh'
    ],
    benefits: [
      'Món snack lý tưởng cho mọi lứa tuổi',
      'Vị dâu chua ngọt hấp dẫn',
      'Bánh giòn tan, thơm ngon',
      'Bao bì tiện lợi, dễ mang theo'
    ]
  },
  {
    id: 2,
    title: 'Bánh que Ticky vị sữa hộp 18g',
    category: 'Thực Phẩm Thái Lan',
    subcategory: 'Ticky',
    slug: 'banh-que-ticky-vi-sua-18g',
    image: '/Product/Ticky/Banh_que_Ticky_hop_vi_sua_18g.png',
    images: [
      
    ],
    isNew: true,
    inStock: true,
    description: 'Với lớp kem sữa béo nhẹ phủ đều trên từng que bánh giòn rụm, bánh que Ticky vị sữa đem lại cảm giác ngọt dịu, thanh thoát và dễ ăn. Đây là lựa chọn lý tưởng cho những ai yêu thích vị sữa truyền thống và đang tìm kiếm một món snack nhẹ nhàng, giàu năng lượng.',
    features: [
      'Vị sữa truyền thống thơm béo nhẹ, ngọt dịu',
      'Lớp kem sữa phủ đều trên que bánh giòn rụm',
      'Dễ ăn, thanh thoát, giàu năng lượng',
      'Phù hợp cho cả trẻ em và người lớn'
    ],
    specifications: [
      { label: 'Xuất xứ', value: 'Thái Lan' },
      { label: 'Trọng lượng', value: '18g' },
      { label: 'Thương hiệu', value: 'Ticky' },
      { label: 'Hạn sử dụng', value: '12 tháng từ ngày sản xuất' }
    ],
    usage: [
      'Dùng trực tiếp',
      'Ngon hơn khi bảo quản trong ngăn mát tủ lạnh'
    ],
    benefits: [
      'Snack giòn rụm thơm ngon',
      'Vị sữa truyền thống quen thuộc',
      'Nhẹ nhàng, giàu năng lượng',
      'Phù hợp mọi lứa tuổi'
    ]
  },
  {
    id: 3,
    title: 'Bánh que Ticky vị sô-cô-la hộp 18g',
    category: 'Thực Phẩm Thái Lan',
    subcategory: 'Ticky',
    slug: 'banh-que-ticky-vi-socola-18g',
    image: '/Product/Ticky/Banh_que_Ticky_vi_socola_18g.png',
    images: [
      
    ],
    isNew: true,
    inStock: true,
    description: 'Bánh que Ticky vị sô-cô-la nổi bật với hương vị đậm đà, kết hợp hoàn hảo cùng lớp bánh giòn thơm. Mỗi que bánh mang lại cảm giác ngọt nhẹ, không ngấy, giúp bạn tận hưởng trọn vẹn hương vị sô-cô-la truyền thống trong một phiên bản snack tiện lợi.',
    features: [
      'Hương vị sô-cô-la đậm đà truyền thống',
      'Lớp phủ sô-cô-la béo ngậy, ngọt nhẹ',
      'Bánh giòn thơm, không ngấy',
      'Phiên bản snack tiện lợi'
    ],
    specifications: [
      { label: 'Xuất xứ', value: 'Thái Lan' },
      { label: 'Trọng lượng', value: '18g' },
      { label: 'Thương hiệu', value: 'Ticky' },
      { label: 'Hạn sử dụng', value: '12 tháng từ ngày sản xuất' }
    ],
    usage: [
      'Dùng trực tiếp',
      'Ngon hơn khi bảo quản trong ngăn mát tủ lạnh'
    ],
    benefits: [
      'Hương vị sô-cô-la đậm đà hấp dẫn',
      'Snack giòn tan thơm ngon',
      'Tiện lợi mang theo',
      'Phù hợp cho mọi lứa tuổi'
    ]
  },
  {
    id: 4,
    title: 'Bánh que Ticky vị cam hộp 18g',
    category: 'Thực Phẩm Thái Lan',
    subcategory: 'Ticky',
    slug: 'banh-que-ticky-vi-cam-18g',
    image: '/Product/Ticky/Banh_que_Ticky_hop_vi_cam_18g.png',
    images: [
      
    ],
    isNew: true,
    inStock: true,
    description: 'Bánh que Ticky vị cam mang đến sự tươi mới với lớp kem vị cam chua nhẹ, thơm mát, kết hợp cùng bánh giòn tan tạo nên một món ăn vặt độc đáo. Vị cam không quá gắt, rất dễ ăn và phù hợp với cả người lớn lẫn trẻ nhỏ.',
    features: [
      'Vị cam tươi mát, chua nhẹ dễ chịu',
      'Lớp kem cam thơm mát độc đáo',
      'Bánh giòn tan, dễ ăn',
      'Phù hợp cả người lớn và trẻ nhỏ'
    ],
    specifications: [
      { label: 'Xuất xứ', value: 'Thái Lan' },
      { label: 'Trọng lượng', value: '18g' },
      { label: 'Thương hiệu', value: 'Ticky' },
      { label: 'Hạn sử dụng', value: '12 tháng từ ngày sản xuất' }
    ],
    usage: [
      'Dùng trực tiếp',
      'Ngon hơn khi bảo quản trong ngăn mát tủ lạnh'
    ],
    benefits: [
      'Món snack tươi mát độc đáo',
      'Vị cam chua nhẹ dễ ăn',
      'Kích thích vị giác',
      'Thích hợp mọi lứa tuổi'
    ]
  },
  {
    id: 5,
    title: 'Bánh que Ticky vị sô-cô-la gấp 2 lần hộp 18g',
    category: 'Thực Phẩm Thái Lan',
    subcategory: 'Ticky',
    slug: 'banh-que-ticky-vi-socola-gap-2-lan-18g',
    image: '/Product/Ticky/Banh_que_Ticky_hop_vi_socola_gap_2_lan_18g.png',
    images: [
      
    ],
    isNew: true,
    inStock: true,
    description: 'Phiên bản sô-cô-la gấp đôi mang đến lớp phủ dày hơn, đậm vị hơn cho những tín đồ yêu thích socola nồng nàn. Bánh giòn, lớp kem sánh mịn, ngọt vừa đủ giúp tăng thêm phần hấp dẫn trong từng miếng cắn.',
    features: [
      'Lớp phủ sô-cô-la dày gấp đôi',
      'Hương vị nồng nàn, béo ngậy',
      'Lớp kem sánh mịn, ngọt vừa đủ',
      'Dành cho tín đồ socola'
    ],
    specifications: [
      { label: 'Xuất xứ', value: 'Thái Lan' },
      { label: 'Trọng lượng', value: '18g' },
      { label: 'Thương hiệu', value: 'Ticky' },
      { label: 'Hạn sử dụng', value: '12 tháng từ ngày sản xuất' }
    ],
    usage: [
      'Dùng trực tiếp',
      'Ngon hơn khi bảo quản trong ngăn mát tủ lạnh'
    ],
    benefits: [
      'Vị sô-cô-la đậm gấp đôi',
      'Cực kỳ hấp dẫn cho tín đồ socola',
      'Bánh giòn, kem mịn',
      'Món ăn vặt cao cấp'
    ]
  },
  {
    id: 6,
    title: 'Bánh que Ticky vị Yogurt dâu hộp 18g',
    category: 'Thực Phẩm Thái Lan',
    subcategory: 'Ticky',
    slug: 'banh-que-ticky-vi-yogurt-dau-18g',
    image: '/Product/Ticky/Banh_que_Ticky_hop_vi_yogurt_dau_18g.png',
    images: [
      
    ],
    isNew: true,
    inStock: true,
    description: 'Sự kết hợp giữa vị chua nhẹ của sữa chua và ngọt thanh từ dâu tây tạo nên lớp phủ kem hấp dẫn, lạ miệng. Bánh que Ticky vị yogurt dâu mang đến trải nghiệm mới mẻ, thanh mát và đặc biệt thích hợp cho những ai yêu thích hương vị trái cây dịu nhẹ.',
    features: [
      'Kết hợp yogurt chua nhẹ và dâu tây ngọt thanh',
      'Hương vị lạ miệng, mới mẻ',
      'Thanh mát, dễ gây nghiện',
      'Phù hợp với người yêu thích trái cây'
    ],
    specifications: [
      { label: 'Xuất xứ', value: 'Thái Lan' },
      { label: 'Trọng lượng', value: '18g' },
      { label: 'Thương hiệu', value: 'Ticky' },
      { label: 'Hạn sử dụng', value: '12 tháng từ ngày sản xuất' }
    ],
    usage: [
      'Dùng trực tiếp',
      'Ngon hơn khi bảo quản trong ngăn mát tủ lạnh'
    ],
    benefits: [
      'Trải nghiệm vị mới lạ miệng',
      'Vị chua nhẹ, ngọt thanh hài hòa',
      'Thơm mát, dễ ăn',
      'Snack lý tưởng cho nữ giới'
    ]
  },
  {
    id: 7,
    title: 'Bánh que Ticky vị sữa sô-cô-la hộp 18g',
    category: 'Thực Phẩm Thái Lan',
    subcategory: 'Ticky',
    slug: 'banh-que-ticky-vi-sua-socola-18g',
    image: '/Product/Ticky/Banh_que_Ticky_hop_vi_socola_18g.png',
    images: [
      
    ],
    isNew: true,
    inStock: true,
    description: 'Đây là sự hòa quyện tinh tế giữa hai hương vị được yêu thích: sữa béo và sô-cô-la đậm đà. Lớp kem phủ mịn màng kết hợp cùng bánh giòn giúp bánh que Ticky vị sữa sô-cô-la trở thành món ăn nhẹ lý tưởng cho giờ giải lao, học tập hay làm việc.',
    features: [
      'Kết hợp sữa béo và sô-cô-la đậm đà',
      'Lớp kem phủ mịn màng hoàn hảo',
      'Bánh giòn thơm ngon',
      'Lý tưởng cho giờ giải lao'
    ],
    specifications: [
      { label: 'Xuất xứ', value: 'Thái Lan' },
      { label: 'Trọng lượng', value: '18g' },
      { label: 'Thương hiệu', value: 'Ticky' },
      { label: 'Hạn sử dụng', value: '12 tháng từ ngày sản xuất' }
    ],
    usage: [
      'Dùng trực tiếp',
      'Ngon hơn khi bảo quản trong ngăn mát tủ lạnh'
    ],
    benefits: [
      'Sự kết hợp hoàn hảo giữa sữa và socola',
      'Món ăn nhẹ tiện lợi',
      'Phù hợp cho học tập, làm việc',
      'Bữa xế lý tưởng'
    ]
  },
  {
    id: 36,
    title: 'Bánh Xốp Jumpo Thái Lan Vị Socola',
    category: 'Thực Phẩm Thái Lan',
    subcategory: 'Jumbo',
    slug: 'banh-xop-jumpo-vi-socola',
    image: '/Product/Jumbo/76.png',
    images: [
      
    ],
    isNew: true,
    inStock: true,
    description: 'Bánh xốp Jumpo vị Socola phủ lớp kem socola với vị đắng nhẹ hòa quyện cùng vị sữa béo thơm. Bên trong là bánh xốp giòn tan, tạo nên sự kết hợp hoàn hảo, hương vị độc đáo, thơm ngon khó cưỡng trong từng miếng bánh.',
    features: [
      'Lớp kem socola vị đắng nhẹ đặc trưng',
      'Vị sữa béo thơm hòa quyện',
      'Bánh xốp giòn tan bên trong',
      'Hương vị độc đáo khó cưỡng'
    ],
    specifications: [
      { label: 'Xuất xứ', value: 'Thái Lan' },
      { label: 'Trọng lượng', value: '75g' },
      { label: 'Thương hiệu', value: 'Jumpo' },
      { label: 'Hạn sử dụng', value: '12 tháng từ ngày sản xuất' }
    ],
    usage: [
      'Dùng trực tiếp',
      'Ngon hơn khi bảo quản trong ngăn mát tủ lạnh'
    ],
    benefits: [
      'Sự kết hợp hoàn hảo giữa socola và sữa',
      'Bánh xốp giòn tan thơm ngon',
      'Hương vị độc đáo, hấp dẫn',
      'Snack cao cấp từ Thái Lan'
    ]
  },
  {
    id: 37,
    title: 'Bánh Xốp Jumpo Thái Lan Vị Sữa',
    category: 'Thực Phẩm Thái Lan',
    subcategory: 'Jumbo',
    slug: 'banh-xop-jumpo-vi-sua',
    image: '/Product/Jumbo/75.png',
    images: [
      
    ],
    isNew: true,
    inStock: true,
    description: 'Bánh xốp Jumpo Thái Lan vị sữa được làm từ sữa bò tươi, mang đến vị béo thơm tự nhiên. Lớp kem sữa mềm mịn bao phủ bên ngoài chiếc bánh xốp giòn rụm, tạo nên sự kết hợp hoàn hảo giữa độ giòn tan và hương sữa thơm lừng, bùng nổ vị ngon ngay khi vừa cắn miếng đầu tiên.',
    features: [
      'Làm từ sữa bò tươi tự nhiên',
      'Lớp kem sữa mềm mịn bao phủ',
      'Bánh xốp giòn rụm bên trong',
      'Hương sữa thơm lừng, bùng nổ vị ngon'
    ],
    specifications: [
      { label: 'Xuất xứ', value: 'Thái Lan' },
      { label: 'Trọng lượng', value: '75g' },
      { label: 'Thương hiệu', value: 'Jumpo' },
      { label: 'Hạn sử dụng', value: '12 tháng từ ngày sản xuất' }
    ],
    usage: [
      'Dùng trực tiếp',
      'Ngon hơn khi bảo quản trong ngăn mát tủ lạnh'
    ],
    benefits: [
      'Vị sữa béo thơm tự nhiên',
      'Kết hợp hoàn hảo giữa giòn và mềm',
      'Ngon ngay từ miếng đầu tiên',
      'Sản phẩm cao cấp từ Thái Lan'
    ]
  },
  {
    id: 38,
    title: 'Cá mòi Mackerel Thai Ship lon 155g',
    category: 'Thực Phẩm Thái Lan',
    subcategory: 'Thai Ship',
    slug: 'ca-moi-mackerel-thai-ship-lon-155g',
    image: '/Product/Ca_moi_Mackerel_Thai_Ship_lon_155g.png',
    images: [
      
    ],
    isNew: true,
    inStock: true,
    description: 'Cá mòi Mackerel Thai Ship 155g là sản phẩm cá hộp cao cấp nhập khẩu từ Thái Lan, nổi bật với phần thịt cá mềm, béo ngậy được chế biến sẵn trong nước sốt cà chua đậm đà, hấp dẫn. Cá được tuyển chọn kỹ lưỡng, giữ trọn độ tươi ngon và giá trị dinh dưỡng tự nhiên như omega‑3, protein và các khoáng chất thiết yếu, phù hợp cho cả người lớn và trẻ em.',
    features: [
      'Thịt cá mềm béo ngậy tự nhiên',
      'Nước sốt cà chua đậm đà hấp dẫn',
      'Giàu omega-3, protein và khoáng chất',
      'Được tuyển chọn kỹ lưỡng, giữ trọn độ tươi ngon',
      'Phù hợp cho cả người lớn và trẻ em'
    ],
    specifications: [
      { label: 'Xuất xứ', value: 'Thái Lan' },
      { label: 'Trọng lượng', value: '155g' },
      { label: 'Thương hiệu', value: 'Thai Ship' },
      { label: 'Hạn sử dụng', value: '12 tháng từ ngày sản xuất' }
    ],
    usage: [
      'Dùng trực tiếp',
      'Có thể ăn kèm với cơm nóng',
      'Làm nguyên liệu cho các món xào, nấu',
      'Bảo quản nơi khô ráo, thoáng mát'
    ],
    benefits: [
      'Giàu omega-3 tốt cho tim mạch và não bộ',
      'Cung cấp protein chất lượng cao',
      'Tiện lợi, không cần chế biến',
      'Thơm ngon, bổ dưỡng cho cả gia đình',
      'Sản phẩm cao cấp nhập khẩu từ Thái Lan'
    ]
  },
  {
    id: 39,
    title: 'Bánh Quy Magic Kẹp Kem Vị Phô Mai',
    category: 'Thực Phẩm Thái Lan',
    subcategory: 'Magic',
    slug: 'banh-quy-magic-kep-kem-vi-pho-mai',
    image: '/Product/Magic/pho_mai.png',
    images: [
      
    ],
    isNew: true,
    inStock: true,
    description: 'Bánh Quy Magic Kẹp Kem Vị Phô Mai giòn rụm với lớp vỏ thơm ngon, kết hợp nhân kem phô mai béo mặn đậm đà. Sự hòa quyện giữa vị giòn và béo thơm mang đến trải nghiệm ăn vặt hấp dẫn cho cả trẻ em lẫn người lớn.',
    features: [
      'Lớp vỏ bánh giòn rụm thơm ngon',
      'Nhân kem phô mai béo mặn đậm đà',
      'Vị giòn và béo thơm hòa quyện hoàn hảo',
      'Phù hợp cho cả trẻ em và người lớn'
    ],
    specifications: [
      { label: 'Xuất xứ', value: 'Thái Lan' },
      { label: 'Thương hiệu', value: 'Magic' },
      { label: 'Hạn sử dụng', value: '12 tháng từ ngày sản xuất' }
    ],
    usage: [
      'Dùng trực tiếp'
    ],
    benefits: [
      'Bánh quy thơm béo bổ sung năng lượng',
      'Lý tưởng để nhâm nhi cùng trà nóng',
      'Phù hợp cho bữa xế hoặc giữa buổi',
      'Tiện mang theo đi học, đi làm'
    ]
  },
  {
    id: 40,
    title: 'Bánh Quy Magic Kẹp Kem Vị Dâu',
    category: 'Thực Phẩm Thái Lan',
    subcategory: 'Magic',
    slug: 'banh-quy-magic-kep-kem-vi-dau',
    image: '/Product/Magic/dau.png',
    images: [
      
    ],
    isNew: true,
    inStock: true,
    description: 'Bánh Quy Magic Kẹp Kem Vị Dâu mang đến hương vị ngọt nhẹ, thơm dịu từ nhân kem dâu hòa quyện cùng lớp vỏ bánh giòn tan. Vị dâu chua nhẹ, dễ ăn, tạo nên món bánh quy hấp dẫn cho cả trẻ em lẫn người lớn.',
    features: [
      'Hương vị dâu ngọt nhẹ thơm dịu',
      'Lớp vỏ bánh giòn tan thơm ngon',
      'Vị dâu chua nhẹ dễ ăn, không ngán',
      'Phù hợp cho mọi lứa tuổi'
    ],
    specifications: [
      { label: 'Xuất xứ', value: 'Thái Lan' },
      { label: 'Thương hiệu', value: 'Magic' },
      { label: 'Hạn sử dụng', value: '12 tháng từ ngày sản xuất' }
    ],
    usage: [
      'Dùng trực tiếp'
    ],
    benefits: [
      'Hương vị thơm dịu ngọt nhẹ dễ ăn',
      'Không gây ngán, ăn hoài không chán',
      'Tiện mang theo đi học, đi làm',
      'Phù hợp cho cả trẻ em và người lớn'
    ]
  },
  {
    id: 41,
    title: 'Bánh Quy Magic Kẹp Kem Vị Socola',
    category: 'Thực Phẩm Thái Lan',
    subcategory: 'Magic',
    slug: 'banh-quy-magic-kep-kem-vi-socola',
    image: '/Product/Magic/socola.png',
    images: [
      
    ],
    isNew: true,
    inStock: true,
    description: 'Bánh Quy Magic Kẹp Kem Vị Socola mang đến lớp vỏ bánh vàng thơm, kết hợp cùng nhân kem socola mịn màng, ngọt vừa phải. Vị socola đậm đà, tạo nên sự cân bằng hoàn hảo với lớp vỏ giòn tan, phù hợp với khẩu vị của nhiều lứa tuổi.',
    features: [
      'Lớp vỏ bánh vàng thơm giòn tan',
      'Nhân kem socola mịn màng đậm đà',
      'Vị ngọt vừa phải cân bằng hoàn hảo',
      'Phù hợp với nhiều lứa tuổi'
    ],
    specifications: [
      { label: 'Xuất xứ', value: 'Thái Lan' },
      { label: 'Thương hiệu', value: 'Magic' },
      { label: 'Hạn sử dụng', value: '12 tháng từ ngày sản xuất' }
    ],
    usage: [
      'Dùng trực tiếp'
    ],
    benefits: [
      'Vị socola đậm đà ngọt vừa',
      'Giòn tan dễ ăn không ngấy',
      'Phù hợp với nhiều lứa tuổi',
      'Snack lý tưởng cho mọi dịp'
    ]
  },
  {
    id: 42,
    title: 'Bánh Quy Socola Magic Kẹp Kem Vị Socola',
    category: 'Thực Phẩm Thái Lan',
    subcategory: 'Magic',
    slug: 'banh-quy-socola-magic-kep-kem-vi-socola',
    image: '/Product/Magic/socola_socola.png',
    images: [
      
    ],
    isNew: true,
    inStock: true,
    description: 'Bánh Quy Magic Socola Kẹp Kem Vị Socola là lựa chọn lý tưởng cho tín đồ socola với cả vỏ bánh và nhân kem đều mang hương vị socola đậm đà. Lớp bánh quy giòn nhẹ hòa quyện cùng kem socola, tạo nên vị ngọt vừa phải, dễ ăn. Phù hợp với khẩu vị của nhiều lứa tuổi.',
    features: [
      'Vỏ và nhân đều vị socola đậm đà',
      'Bánh quy giòn nhẹ kết hợp kem mịn',
      'Vị ngọt vừa phải dễ ăn',
      'Dành cho tín đồ yêu socola'
    ],
    specifications: [
      { label: 'Xuất xứ', value: 'Thái Lan' },
      { label: 'Thương hiệu', value: 'Magic' },
      { label: 'Hạn sử dụng', value: '12 tháng từ ngày sản xuất' }
    ],
    usage: [
      'Dùng trực tiếp'
    ],
    benefits: [
      'Vỏ và nhân đều vị socola đậm đà',
      'Ngọt vừa giòn nhẹ dễ ăn',
      'Tiện mang theo đi học, đi làm',
      'Dùng giữa buổi bổ sung năng lượng'
    ]
  },
  {
    id: 43,
    title: 'Bánh Xốp Rinny Thái Lan Vị Bơ Sữa',
    category: 'Thực Phẩm Thái Lan',
    subcategory: 'Rinny',
    slug: 'banh-xop-rinny-thai-lan-vi-bo-sua',
    image: '/Product/Rinny/rinny_bo.png',
    images: [
      
    ],
    isNew: true,
    inStock: true,
    description: 'Bánh Xốp Rinny Thái Lan Vị Bơ Sữa với lớp ngoài giòn tan, hương vị thơm béo và ngọt ngào nhẹ nhàng. Các lớp kem bơ sữa mỏng xen lẫn giữa các lớp bánh xốp giúp tăng thêm vị đậm đà, béo thơm cho bánh, phù hợp để làm bữa ăn nhẹ, ăn vặt để cung cấp năng lượng cần thiết cho cơ thể.',
    features: [
      'Lớp ngoài giòn tan thơm ngon',
      'Kem bơ sữa béo ngậy đậm đà',
      'Hương vị ngọt ngão nhẹ nhàng',
      'Phù hợp làm bữa ăn nhẹ'
    ],
    specifications: [
      { label: 'Xuất xứ', value: 'Thái Lan' },
      { label: 'Thương hiệu', value: 'Rinny' },
      { label: 'Hạn sử dụng', value: '12 tháng từ ngày sản xuất' }
    ],
    usage: [
      'Dùng trực tiếp',
      'Ngon hơn khi bảo quản trong ngăn mát tủ lạnh'
    ],
    benefits: [
      'Lớp vỏ giòn tan thơm ngọt nhẹ nhàng',
      'Lớp kem bơ sữa béo ngậy',
      'Món ăn vặt bổ sung năng lượng',
      'Thích hợp cho mọi lứa tuổi'
    ]
  },
  {
    id: 44,
    title: 'Bánh Xốp Rinny Thái Lan Vị Cam',
    category: 'Thực Phẩm Thái Lan',
    subcategory: 'Rinny',
    slug: 'banh-xop-rinny-thai-lan-vi-cam',
    image: '/Product/Rinny/rinny_cam.png',
    images: [
      
    ],
    isNew: true,
    inStock: true,
    description: 'Bánh Xốp Rinny Thái Lan Vị Cam với lớp bánh giòn nhẹ hòa quyện cùng kem cam chua ngọt dịu, mang đến hương vị tươi mát, dễ ăn. Phù hợp làm món ăn vặt hoặc bữa nhẹ nạp năng lượng nhanh chóng, thích hợp mang theo đi học, đi làm hoặc dùng mọi lúc trong ngày',
    features: [
      'Lớp bánh giòn nhẹ thơm ngon',
      'Kem cam chua ngọt dịu tươi mát',
      'Hương vị dễ ăn không ngán',
      'Tiện lợi mang theo đi học, đi làm'
    ],
    specifications: [
      { label: 'Xuất xứ', value: 'Thái Lan' },
      { label: 'Thương hiệu', value: 'Rinny' },
      { label: 'Hạn sử dụng', value: '12 tháng từ ngày sản xuất' }
    ],
    usage: [
      'Dùng trực tiếp',
      'Ngon hơn khi bảo quản trong ngăn mát tủ lạnh'
    ],
    benefits: [
      'Lớp vỏ giòn nhẹ kem cam chua ngọt',
      'Thơm mát dễ ăn',
      'Tiện lợi mang theo',
      'Bổ sung năng lượng nhanh chóng'
    ]
  },
  {
    id: 45,
    title: 'Bánh Xốp Rinny Thái Lan Vị Dâu',
    category: 'Thực Phẩm Thái Lan',
    subcategory: 'Rinny',
    slug: 'banh-xop-rinny-thai-lan-vi-dau',
    image: '/Product/Rinny/rinny_dau.png',
    images: [
      
    ],
    isNew: true,
    inStock: true,
    description: 'Bánh Xốp Rinny Thái Lan Vị Dâu với lớp ngoài giòn tan, hương vị thơm và ngọt ngào nhẹ nhàng. Các lớp kem dâu mỏng xen lẫn giữa các lớp bánh xốp giúp tăng thêm vị đậm đà cho bánh, phù hợp để làm bữa ăn nhẹ, ăn vặt để cung cấp năng lượng cần thiết cho cơ thể.',
    features: [
      'Lớp ngoài giòn tan thơm ngon',
      'Kem dâu đậm đà ngọt dịu',
      'Hương vị thơm ngọt nhẹ nhàng',
      'Phù hợp làm món ăn vặt'
    ],
    specifications: [
      { label: 'Xuất xứ', value: 'Thái Lan' },
      { label: 'Thương hiệu', value: 'Rinny' },
      { label: 'Hạn sử dụng', value: '12 tháng từ ngày sản xuất' }
    ],
    usage: [
      'Dùng trực tiếp',
      'Ngon hơn khi bảo quản trong ngăn mát tủ lạnh'
    ],
    benefits: [
      'Lớp vỏ giòn tan thơm ngọt',
      'Lớp kem dâu đậm đà',
      'Bổ sung năng lượng mỗi ngày',
      'Món ăn vặt lý tưởng'
    ]
  },
  {
    id: 46,
    title: 'Bánh Xốp Rinny Thái Lan Vị Dừa',
    category: 'Thực Phẩm Thái Lan',
    subcategory: 'Rinny',
    slug: 'banh-xop-rinny-thai-lan-vi-dua',
    image: '/Product/Rinny/rinny_dua.png',
    images: [
      
    ],
    isNew: true,
    inStock: true,
    description: 'Bánh Xốp Rinny Thái Lan Vị Dừa với lớp ngoài giòn tan, hương vị thơm và ngọt ngào nhẹ nhàng. Các lớp kem dừa mỏng xen lẫn giữa các lớp bánh xốp giúp tăng thêm vị đậm đà cho bánh, phù hợp để làm bữa ăn nhẹ, ăn vặt để cung cấp năng lượng cần thiết cho cơ thể.',
    features: [
      'Lớp ngoài giòn tan thơm ngon',
      'Kem dừa đậm đà thơm béo',
      'Hương vị ngọt ngào nhẹ nhàng',
      'Phù hợp làm bữa ăn nhẹ'
    ],
    specifications: [
      { label: 'Xuất xứ', value: 'Thái Lan' },
      { label: 'Thương hiệu', value: 'Rinny' },
      { label: 'Hạn sử dụng', value: '12 tháng từ ngày sản xuất' }
    ],
    usage: [
      'Dùng trực tiếp',
      'Ngon hơn khi bảo quản trong ngăn mát tủ lạnh'
    ],
    benefits: [
      'Lớp vỏ giòn tan thơm ngọt',
      'Lớp kem dừa đậm đà',
      'Bổ sung năng lượng cần thiết',
      'Thích hợp làm món ăn vặt'
    ]
  },
  {
    id: 47,
    title: 'Bánh Xốp Rinny Thái Lan Vị Sầu Riêng',
    category: 'Thực Phẩm Thái Lan',
    subcategory: 'Rinny',
    slug: 'banh-xop-rinny-thai-lan-vi-sau-rieng',
    image: '/Product/Rinny/rinny_saurieng.png',
    images: [
      
    ],
    isNew: true,
    inStock: true,
    description: 'Bánh Xốp Rinny Thái Lan Vị Sầu Riêng với lớp ngoài giòn tan, hương vị thơm béo và ngọt ngào nhẹ nhàng. Các lớp kem sầu riêng xen lẫn giữa các lớp bánh xốp giúp tăng thêm vị đậm đà, thơm ngon cho bánh, phù hợp để làm bữa ăn nhẹ, ăn vặt để cung cấp năng lượng cần thiết cho cơ thể.',
    features: [
      'Lớp ngoài giòn tan thơm béo',
      'Kem sầu riêng đậm đà đặc trưng',
      'Hương vị ngọt ngào nhẹ nhàng',
      'Dành cho tín đồ sầu riêng'
    ],
    specifications: [
      { label: 'Xuất xứ', value: 'Thái Lan' },
      { label: 'Thương hiệu', value: 'Rinny' },
      { label: 'Hạn sử dụng', value: '12 tháng từ ngày sản xuất' }
    ],
    usage: [
      'Dùng trực tiếp',
      'Ngon hơn khi bảo quản trong ngăn mát tủ lạnh'
    ],
    benefits: [
      'Lớp vỏ giòn tan thơm ngọt',
      'Lớp kem sầu riêng đậm vị',
      'Bổ sung năng lượng mỗi ngày',
      'Hương vị độc đáo hấp dẫn'
    ]
  },
  {
    id: 48,
    title: 'Bánh Xốp Rinny Thái Lan Vị Socola',
    category: 'Thực Phẩm Thái Lan',
    subcategory: 'Rinny',
    slug: 'banh-xop-rinny-thai-lan-vi-socola',
    image: '/Product/Rinny/rinny_socola.png',
    images: [
      
    ],
    isNew: true,
    inStock: true,
    description: 'Bánh Xốp Rinny Thái Lan Vị Socola với lớp ngoài giòn tan, hương vị đậm đà và không quá ngọt. Các lớp kem socola xen lẫn giữa các lớp bánh xốp giúp tăng thêm vị đắng nhẹ cho bánh, phù hợp để làm bữa ăn nhẹ, ăn vặt để cung cấp năng lượng cần thiết cho cơ thể.',
    features: [
      'Lớp ngoài giòn tan thơm ngon',
      'Kem socola đậm đà đắng nhẹ',
      'Hương vị không quá ngọt',
      'Phù hợp cho tín đồ socola'
    ],
    specifications: [
      { label: 'Xuất xứ', value: 'Thái Lan' },
      { label: 'Thương hiệu', value: 'Rinny' },
      { label: 'Hạn sử dụng', value: '12 tháng từ ngày sản xuất' }
    ],
    usage: [
      'Dùng trực tiếp',
      'Ngon hơn khi bảo quản trong ngăn mát tủ lạnh'
    ],
    benefits: [
      'Lớp vỏ giòn tan đậm đà',
      'Lớp kem socola đắng nhẹ',
      'Bổ sung năng lượng cần thiết',
      'Món ăn vặt lý tưởng'
    ]
  },
  {
    id: 49,
    title: 'Bánh Xốp Rinny Thái Lan Vị Sữa',
    category: 'Thực Phẩm Thái Lan',
    subcategory: 'Rinny',
    slug: 'banh-xop-rinny-thai-lan-vi-sua',
    image: '/Product/Rinny/rinny_sua.png',
    images: [
      
    ],
    isNew: true,
    inStock: true,
    description: 'Bánh Xốp Rinny Thái Lan Vị Sữa với lớp ngoài giòn tan, hương vị thơm béo và ngọt ngào nhẹ nhàng. Các lớp kem sữa xen lẫn giữa các lớp bánh xốp giúp tăng thêm vị béo, ngọt thơm cho bánh, phù hợp để làm bữa ăn nhẹ, ăn vặt để cung cấp năng lượng cần thiết cho cơ thể.',
    features: [
      'Lớp ngoài giòn tan thơm béo',
      'Kem sữa ngọt dịu béo ngậy',
      'Hương vị ngọt ngào nhẹ nhàng',
      'Phù hợp cho mọi lứa tuổi'
    ],
    specifications: [
      { label: 'Xuất xứ', value: 'Thái Lan' },
      { label: 'Thương hiệu', value: 'Rinny' },
      { label: 'Hạn sử dụng', value: '12 tháng từ ngày sản xuất' }
    ],
    usage: [
      'Dùng trực tiếp',
      'Ngon hơn khi bảo quản trong ngăn mát tủ lạnh'
    ],
    benefits: [
      'Lớp vỏ giòn tan thơm ngọt',
      'Lớp kem sữa ngọt dịu',
      'Bổ sung năng lượng mỗi ngày',
      'Món ăn vặt thích hợp mọi lúc'
    ]
  },
  {
    id: 50,
    title: 'Cá thu chiên sốt chua cay Roza Thái Lan lon 140g',
    category: 'Thực Phẩm Thái Lan',
    subcategory: 'Roza',
    slug: 'ca-thu-chien-sot-chua-cay-roza-thai-lan-lon-140g',
    image: '/Product/roza.png',
    images: [
      
    ],
    isNew: true,
    inStock: true,
    description: 'Cá thu chiên sốt chua cay Roza Thái Lan lon 140g là món ăn tiện lợi giàu dinh dưỡng, kết hợp giữa thịt cá thu chiên thơm béo và sốt cà chua chua cay đậm đà. Sản phẩm được chế biến từ cá thu tươi nguyên con, giàu DHA, Omega‑3 và canxi, tốt cho sức khỏe tim mạch và trí não. Phần sốt được nấu từ cà chua tươi và ớt đỏ, mang đến vị chua nhẹ, cay vừa và ngọt hài hòa, phù hợp với khẩu vị người Việt.',
    features: [
      'Thịt cá thu chiên thơm béo',
      'Sốt cà chua chua cay đậm đà',
      'Giàu DHA, Omega-3 và canxi',
      'Tốt cho tim mạch và trí não',
      'Phù hợp khẩu vị người Việt'
    ],
    specifications: [
      { label: 'Xuất xứ', value: 'Thái Lan' },
      { label: 'Trọng lượng', value: '140g' },
      { label: 'Thương hiệu', value: 'Roza' },
      { label: 'Hạn sử dụng', value: '12 tháng từ ngày sản xuất' }
    ],
    usage: [
      'Dùng trực tiếp',
      'Ngon hơn khi bảo quản trong ngăn mát tủ lạnh'
    ],
    benefits: [
      'Cá thu đậm vị sốt chua cay hài hòa',
      'Giàu DHA và canxi tốt cho sức khỏe',
      'Thích hợp khẩu vị Việt',
      'Tiện lợi cho bữa cơm nhanh gọn',
      'Món ăn bổ dưỡng cho cả gia đình'
    ]
  },
  {
    id: 51,
    title: 'Cà phê sữa Kopiko Macchiato túi 480g',
    category: 'Thực Phẩm Thái Lan',
    subcategory: 'Kopiko',
    slug: 'ca-phe-sua-kopiko-macchiato-tui-480g',
    image: '/Product/kopiko.png',
    images: [
      
    ],
    isNew: true,
    inStock: true,
    description: 'Cà phê sữa Kopiko Macchiato là sự kết hợp hài hòa giữa cà phê nguyên chất và lớp kem sữa mịn màng, mang đến hương vị đậm đà, béo nhẹ và dễ uống. Với công thức 3 trong 1 tiện lợi, sản phẩm cho bạn ly cà phê thơm ngon chuẩn vị Ý chỉ sau vài giây pha chế. Kopiko Macchiato phù hợp cho người bận rộn, dân văn phòng hoặc những ai yêu thích sự nhẹ nhàng trong từng ngụm cà phê sữa mỗi sáng.',
    features: [
      'Cà phê nguyên chất đậm đà',
      'Kem sữa mịn màng béo nhẹ',
      'Công thức 3 trong 1 tiện lợi',
      'Vị Ý chuẩn chỉnh',
      'Pha chế nhanh chóng'
    ],
    specifications: [
      { label: 'Xuất xứ', value: 'Thái Lan' },
      { label: 'Trọng lượng', value: '480g' },
      { label: 'Thương hiệu', value: 'Kopiko' },
      { label: 'Hạn sử dụng', value: '12 tháng từ ngày sản xuất' }
    ],
    usage: [
      'Dùng trực tiếp',
      'Ngon hơn khi bảo quản trong ngăn mát tủ lạnh'
    ],
    benefits: [
      'Cà phê thơm đậm vị Ý',
      'Kem sữa mịn dễ uống',
      'Phù hợp dân văn phòng',
      'Tiện lợi cho người bận rộn',
      'Nhẹ nhàng dễ chịu mỗi sáng'
    ]
  },
  {
    id: 52,
    title: 'Kẹo me Amira túi 120g',
    category: 'Thực Phẩm Thái Lan',
    subcategory: 'Amira',
    slug: 'keo-me-amira-tui-120g',
    image: '/Product/amira.png',
    images: [
      
    ],
    isNew: true,
    inStock: true,
    description: 'Kẹo me Amira túi 120g là món ăn vặt nhập khẩu từ Thái Lan được nhiều người yêu thích nhờ hương vị chua ngọt hài hòa và nhân sốt me dẻo mềm bên trong. Mỗi viên kẹo là sự kết hợp tinh tế giữa lớp vỏ ngọt dịu và vị me chua nhẹ, tạo cảm giác kích thích vị giác nhưng không gắt. Sản phẩm không chứa phẩm màu nhân tạo, an toàn cho sức khỏe, phù hợp với cả trẻ em lẫn người lớn, tiện lợi mang theo khi đi học, đi làm hoặc du lịch.',
    features: [
      'Hương vị chua ngọt hài hòa',
      'Nhân sốt me dẻo mềm',
      'Không phẩm màu nhân tạo',
      'An toàn cho sức khỏe',
      'Phù hợp mọi lứa tuổi'
    ],
    specifications: [
      { label: 'Xuất xứ', value: 'Thái Lan' },
      { label: 'Trọng lượng', value: '120g' },
      { label: 'Thương hiệu', value: 'Amira' },
      { label: 'Hạn sử dụng', value: '12 tháng từ ngày sản xuất' }
    ],
    usage: [
      'Dùng trực tiếp',
      'Ngon hơn khi bảo quản trong ngăn mát tủ lạnh'
    ],
    benefits: [
      'Kẹo me chua ngọt hấp dẫn',
      'Nhân sốt me dẻo mềm',
      'Không phẩm màu an toàn',
      'Thích hợp cho cả trẻ em và người lớn',
      'Tiện lợi mang theo mọi lúc'
    ]
  },
  {
    id: 53,
    title: 'Bột Giặt Pao Super Soft túi 2,7kg',
    category: 'Mặt Hàng Khác',
    subcategory: 'Bột giặt Pao',
    slug: 'bot-giat-pao-super-soft-tui-2-7kg',
    image: '/Product/Pao/Nho/super_soft_nho.png',
    images: [
      
    ],
    isNew: true,
    inStock: true,
    description: 'Bột giặt Pao Super Soft túi 2,7kg giúp làm sạch hiệu quả đồng thời chăm sóc từng sợi vải, mang lại cảm giác mềm mại tự nhiên và hương thơm nước hoa nồng nàn, cho quần áo luôn mềm mại và thơm lâu như mới.',
    features: [
      'Làm sạch hiệu quả vết bẩn',
      'Chăm sóc từng sợi vải',
      'Mềm mại tự nhiên',
      'Hương thơm nước hoa nồng nàn',
      'Phù hợp cho giặt tay và máy giặt cửa trên'
    ],
    specifications: [
      { label: 'Xuất xứ', value: 'Thái Lan' },
      { label: 'Khối lượng', value: '2,7kg' },
      { label: 'Thương hiệu', value: 'Pao' }
    ],
    usage: [
      'Giặt tay: Hòa tan 1 muỗng bột giặt Pao trong khoảng 3–5 lít nước',
      'Ngâm quần áo trong 15–30 phút để bột giặt thấm và làm sạch vết bẩn',
      'Vò nhẹ, xả sạch bằng nước và phơi ở nơi thoáng mát',
      'Giặt máy: Cho 1–2 muỗng bột giặt Pao vào khay bột giặt của máy',
      'Chọn chế độ giặt phù hợp',
      'Lấy quần áo ra phơi ngay sau khi giặt để giữ mùi thơm lâu hơn'
    ],
    benefits: [
      'Giặt sạch và thơm lâu',
      'Mềm mại từng sợi vải',
      'Hương tươi mát dễ chịu',
      'Tiết kiệm và hiệu quả'
    ]
  },
  {
    id: 54,
    title: 'Bột Giặt Pao Super White túi 2,7kg',
    category: 'Mặt Hàng Khác',
    subcategory: 'Bột giặt Pao',
    slug: 'bot-giat-pao-super-white-tui-2-7kg',
    image: '/Product/Pao/Nho/super_white_nho.png',
    images: [
      
    ],
    isNew: true,
    inStock: true,
    description: 'Bột Giặt Pao Super White túi 2,7kg nổi bật với khả năng làm sáng mạnh mẽ các vết ố, bảo vệ màu sắc trắng sáng, mùi thơm dễ chịu mang lại cảm giác tự tin khi mặc.',
    features: [
      'Làm sáng mạnh mẽ các vết ố',
      'Bảo vệ màu trắng sáng',
      'Mùi thơm dễ chịu',
      'Mang lại cảm giác tự tin',
      'Phù hợp cho giặt tay và máy giặt cửa trên'
    ],
    specifications: [
      { label: 'Xuất xứ', value: 'Thái Lan' },
      { label: 'Khối lượng', value: '2,7kg' },
      { label: 'Thương hiệu', value: 'Pao' }
    ],
    usage: [
      'Giặt tay: Hòa tan 1 muỗng bột giặt Pao trong khoảng 3–5 lít nước',
      'Ngâm quần áo trong 15–30 phút để bột giặt thấm và làm sạch vết bẩn',
      'Vò nhẹ, xả sạch bằng nước và phơi ở nơi thoáng mát',
      'Giặt máy: Cho 1–2 muỗng bột giặt Pao vào khay bột giặt của máy',
      'Chọn chế độ giặt phù hợp',
      'Lấy quần áo ra phơi ngay sau khi giặt để giữ mùi thơm lâu hơn'
    ],
    benefits: [
      'Quần áo trắng sáng',
      'Thơm dịu và bền màu',
      'Luôn như mới sau mỗi lần giặt',
      'Hiệu quả với vết bẩn cứng đầu'
    ]
  },
  {
    id: 55,
    title: 'Bột Giặt Pao Super Color túi 2,7kg',
    category: 'Mặt Hàng Khác',
    subcategory: 'Bột giặt Pao',
    slug: 'bot-giat-pao-super-color-tui-2-7kg',
    image: '/Product/Pao/Nho/super_color_nho.png',
    images: [
      
    ],
    isNew: true,
    inStock: true,
    description: 'Bột Giặt Pao Super Color túi 2,7kg mang hương thơm hoa ngọt ngào giúp làm sạch hiệu quả các vết bẩn cứng đầu, đồng thời bảo vệ màu sắc và lưu hương thơm lâu cho quần áo. Sản phẩm phù hợp đặc biệt phù hợp với quần áo màu.',
    features: [
      'Hương thơm hoa ngọt ngào',
      'Làm sạch vết bẩn cứng đầu',
      'Bảo vệ màu sắc quần áo',
      'Lưu hương thơm lâu',
      'Phù hợp cho giặt tay và máy giặt cửa trên'
    ],
    specifications: [
      { label: 'Xuất xứ', value: 'Thái Lan' },
      { label: 'Khối lượng', value: '2,7kg' },
      { label: 'Thương hiệu', value: 'Pao' }
    ],
    usage: [
      'Giặt tay: Hòa tan 1 muỗng bột giặt Pao trong khoảng 3–5 lít nước',
      'Ngâm quần áo trong 15–30 phút để bột giặt thấm và làm sạch vết bẩn',
      'Vò nhẹ, xả sạch bằng nước và phơi ở nơi thoáng mát',
      'Giặt máy: Cho 1–2 muỗng bột giặt Pao vào khay bột giặt của máy',
      'Chọn chế độ giặt phù hợp',
      'Lấy quần áo ra phơi ngay sau khi giặt để giữ mùi thơm lâu hơn'
    ],
    benefits: [
      'Bảo vệ màu sắc tươi mới',
      'Lưu hương dài lâu',
      'Đặc biệt phù hợp với quần áo màu',
      'Hiệu quả và tiết kiệm'
    ]
  },
  {
    id: 56,
    title: 'Bột Giặt Pao Super Soft túi 5kg',
    category: 'Mặt Hàng Khác',
    subcategory: 'Bột giặt Pao',
    slug: 'bot-giat-pao-super-soft-tui-5kg',
    image: '/Product/Pao/Lon/super_soft.png',
    images: [
      
    ],
    isNew: true,
    inStock: true,
    description: 'Bột Giặt Pao Super Soft túi 5kg giúp làm sạch hiệu quả đồng thời chăm sóc từng sợi vải, mang lại cảm giác mềm mại tự nhiên và hương thơm nước hoa nồng nàn, cho quần áo luôn mềm mại và thơm lâu như mới.',
    features: [
      'Làm sạch hiệu quả vết bẩn',
      'Chăm sóc từng sợi vải',
      'Mềm mại tự nhiên',
      'Hương thơm nước hoa nồng nàn',
      'Phù hợp cho giặt tay và máy giặt cửa trên'
    ],
    specifications: [
      { label: 'Xuất xứ', value: 'Thái Lan' },
      { label: 'Khối lượng', value: '5kg' },
      { label: 'Thương hiệu', value: 'Pao' }
    ],
    usage: [
      'Giặt tay: Hòa tan 1 muỗng bột giặt Pao trong khoảng 3–5 lít nước',
      'Ngâm quần áo trong 15–30 phút để bột giặt thấm và làm sạch vết bẩn',
      'Vò nhẹ, xả sạch bằng nước và phơi ở nơi thoáng mát',
      'Giặt máy: Cho 1–2 muỗng bột giặt Pao vào khay bột giặt của máy',
      'Chọn chế độ giặt phù hợp',
      'Lấy quần áo ra phơi ngay sau khi giặt để giữ mùi thơm lâu hơn'
    ],
    benefits: [
      'Quần áo sạch thơm',
      'Mềm mại và giữ hương lâu bền',
      'Túi lớn tiết kiệm hơn',
      'Phù hợp cho gia đình đông người'
    ]
  },
  {
    id: 57,
    title: 'Bột Giặt Pao Super White túi 5kg',
    category: 'Mặt Hàng Khác',
    subcategory: 'Bột giặt Pao',
    slug: 'bot-giat-pao-super-white-tui-5kg',
    image: '/Product/Pao/Lon/super_white.png',
    images: [
      
    ],
    isNew: true,
    inStock: true,
    description: 'Bột Giặt Pao Super White túi 5kg nổi bật với khả năng làm sáng mạnh mẽ các vết ố, bảo vệ màu sắc trắng sáng, mùi thơm dễ chịu mang lại cảm giác tự tin khi mặc.',
    features: [
      'Làm sáng mạnh mẽ các vết ố',
      'Bảo vệ màu trắng sáng',
      'Mùi thơm dễ chịu',
      'Mang lại cảm giác tự tin',
      'Phù hợp cho giặt tay và máy giặt cửa trên'
    ],
    specifications: [
      { label: 'Xuất xứ', value: 'Thái Lan' },
      { label: 'Khối lượng', value: '5kg' },
      { label: 'Thương hiệu', value: 'Pao' }
    ],
    usage: [
      'Giặt tay: Hòa tan 1 muỗng bột giặt Pao trong khoảng 3–5 lít nước',
      'Ngâm quần áo trong 15–30 phút để bột giặt thấm và làm sạch vết bẩn',
      'Vò nhẹ, xả sạch bằng nước và phơi ở nơi thoáng mát',
      'Giặt máy: Cho 1–2 muỗng bột giặt Pao vào khay bột giặt của máy',
      'Chọn chế độ giặt phù hợp',
      'Lấy quần áo ra phơi ngay sau khi giặt để giữ mùi thơm lâu hơn'
    ],
    benefits: [
      'Quần áo trắng sáng',
      'Thơm dịu và bền màu',
      'Túi lớn tiết kiệm chi phí',
      'Hiệu quả lâu dài'
    ]
  },
  {
    id: 58,
    title: 'Bột Giặt Pao Super Color túi 5kg',
    category: 'Mặt Hàng Khác',
    subcategory: 'Bột giặt Pao',
    slug: 'bot-giat-pao-super-color-tui-5kg',
    image: '/Product/Pao/Lon/super_color.png',
    images: [
      
    ],
    isNew: true,
    inStock: true,
    description: 'Bột Giặt Pao Super Color túi 5kg mang hương thơm hoa ngọt ngào giúp làm sạch hiệu quả các vết bẩn cứng đầu, đồng thời bảo vệ màu sắc và lưu hương thơm lâu cho quần áo. Sản phẩm đặc biệt phù hợp với quần áo màu.',
    features: [
      'Hương thơm hoa ngọt ngào',
      'Làm sạch vết bẩn cứng đầu',
      'Bảo vệ màu sắc quần áo',
      'Lưu hương thơm lâu',
      'Phù hợp cho giặt tay và máy giặt cửa trên'
    ],
    specifications: [
      { label: 'Xuất xứ', value: 'Thái Lan' },
      { label: 'Khối lượng', value: '5kg' },
      { label: 'Thương hiệu', value: 'Pao' }
    ],
    usage: [
      'Giặt tay: Hòa tan 1 muỗng bột giặt Pao trong khoảng 3–5 lít nước',
      'Ngâm quần áo trong 15–30 phút để bột giặt thấm và làm sạch vết bẩn',
      'Vò nhẹ, xả sạch bằng nước và phơi ở nơi thoáng mát',
      'Giặt máy: Cho 1–2 muỗng bột giặt Pao vào khay bột giặt của máy',
      'Chọn chế độ giặt phù hợp',
      'Lấy quần áo ra phơi ngay sau khi giặt để giữ mùi thơm lâu hơn'
    ],
    benefits: [
      'Giữ màu tươi mới',
      'Lưu hương lâu',
      'Tiết kiệm với túi lớn',
      'Đặc biệt tốt cho quần áo màu'
    ]
  },
  {
    id: 59,
    title: 'Bột Giặt Pao Super Happy túi 5kg',
    category: 'Mặt Hàng Khác',
    subcategory: 'Bột giặt Pao',
    slug: 'bot-giat-pao-super-happy-tui-5kg',
    image: '/Product/Pao/Lon/super_happy.png',
    images: [
      
    ],
    isNew: true,
    inStock: true,
    description: 'Bột Giặt Pao Super Happy túi 5 kg mang đến trải nghiệm giặt giũ với hương nước hoa cao cấp giúp quần áo luôn thơm ngát. Đồng thời sản phẩm giúp loại bỏ nhanh các vết bẩn cứng đầu, tiết kiệm thời gian giặt giũ.',
    features: [
      'Hương nước hoa cao cấp',
      'Quần áo luôn thơm ngát',
      'Loại bỏ nhanh vết bẩn cứng đầu',
      'Tiết kiệm thời gian giặt giũ',
      'Phù hợp cho giặt tay và máy giặt cửa trên'
    ],
    specifications: [
      { label: 'Xuất xứ', value: 'Thái Lan' },
      { label: 'Khối lượng', value: '5kg' },
      { label: 'Thương hiệu', value: 'Pao' }
    ],
    usage: [
      'Giặt tay: Hòa tan 1 muỗng bột giặt Pao trong khoảng 3–5 lít nước',
      'Ngâm quần áo trong 15–30 phút để bột giặt thấm và làm sạch vết bẩn',
      'Vò nhẹ, xả sạch bằng nước và phơi ở nơi thoáng mát',
      'Giặt máy: Cho 1–2 muỗng bột giặt Pao vào khay bột giặt của máy',
      'Chọn chế độ giặt phù hợp',
      'Lấy quần áo ra phơi ngay sau khi giặt để giữ mùi thơm lâu hơn'
    ],
    benefits: [
      'Hương nước hoa cao cấp',
      'Sạch nhanh tiết kiệm thời gian',
      'Quần áo thơm lâu',
      'Hiệu quả với mọi loại vết bẩn'
    ]
  },
  {
    id: 60,
    title: 'Nước giặt cho bé Dnee Aloe Vera can 3 lít',
    category: 'Nước Giặt',
    subcategory: 'Dnee',
    slug: 'nuoc-giat-cho-be-dnee-aloe-vera-can-3-lit',
    image: '/Product/Dnee/aloe_vera.png',
    images: [
      
    ],
    isNew: true,
    inStock: true,
    description: 'Nước giặt cho bé Dnee Xanh Aloe Vera can 3 lít là loại nước giặt Thái đặc biệt dành cho bé yêu với công thức không chứa các chất độc hại như Gluten, chất tạo màu, Enzymes, Cồn, Paraben, Chất huỳnh quang, Formaldehyde. Sản phẩm chứa tinh chất lô hội an toàn cho làn da trẻ nhỏ và mang lại hương thơm ngát cho vải. Nước giặt Dnee Thái Lan còn giúp làm mềm vải, êm dịu, có thể dùng để giặt đồ cho cả gia đình.',
    features: [
      'Công thức đặc biệt giúp giặt sạch và đánh bay các vết bẩn cứng đầu',
      'Ngăn chặn các vết bẩn quay trở lại',
      'Độ pH trung tính, rất mềm dịu và không làm hỏng quần áo của bé',
      'Lưu lại hương thơm bền lâu',
      'Không chứa Gluten, chất tạo màu, Enzymes, Cồn, Paraben, Chất huỳnh quang, Formaldehyde',
      'Chứa tinh chất lô hội an toàn cho làn da trẻ nhỏ'
    ],
    specifications: [
      { label: 'Xuất xứ', value: 'Thái Lan' },
      { label: 'Dung tích', value: '3 lít' },
      { label: 'Thương hiệu', value: 'Dnee' }
    ],
    usage: [
      'Giặt tay: Hòa ½ nắp chai hoặc 15ml nước giặt em bé D-Nee với 2 lít nước (khoảng 10 bộ quần áo trẻ em)',
      'Ngâm quần áo trong vài phút',
      'Giặt lại với nước sạch',
      'Giặt máy: Hòa 2 nắp chai hoặc 60ml Nước giặt em bé D-Nee với 8 lít nước trong máy giặt',
      'Ngâm quần áo trong vài phút',
      'Giặt lại với nước sạch'
    ],
    benefits: [
      'An toàn cho làn da nhạy cảm của bé',
      'Giặt sạch vết bẩn cứng đầu',
      'Quần áo thơm ngát suốt cả ngày',
      'Mềm mại vải, êm dịu',
      'Phù hợp cho cả gia đình'
    ]
  },
  {
    id: 61,
    title: 'Nước giặt cho bé Dnee Hồng Honey Star can 3 lít',
    category: 'Nước Giặt',
    subcategory: 'Dnee',
    slug: 'nuoc-giat-cho-be-dnee-hong-honey-star-can-3-lit',
    image: '/Product/Dnee/honey_star.png',
    images: [
      
    ],
    isNew: true,
    inStock: true,
    description: 'Nước giặt cho bé Dnee Hồng Honey Star can 3 lít là loại nước giặt Thái đặc biệt dành cho bé yêu với công thức không chứa các chất độc hại như Gluten, chất tạo màu, Enzymes, Cồn, Paraben, Chất huỳnh quang, Formaldehyde. Sản phẩm giúp đánh bay các vết bẩn cứng đầu và mang lại hương thơm ngọt ngào của mật ong cho quần áo của trẻ nhỏ. Nước giặt Dnee Thái Lan còn giúp làm mềm vải, êm dịu, an toàn với làn da nhạy cảm của các bé, có thể dùng để giặt đồ cho cả gia đình.',
    features: [
      'Công thức đặc biệt giúp giặt sạch và đánh bay các vết bẩn cứng đầu',
      'Ngăn chặn các vết bẩn quay trở lại',
      'Độ pH trung tính, rất mềm dịu và không làm hỏng quần áo của bé',
      'Lưu lại hương thơm bền lâu',
      'Không chứa Gluten, chất tạo màu, Enzymes, Cồn, Paraben, Chất huỳnh quang, Formaldehyde',
      'Hương thơm ngọt ngào của mật ong'
    ],
    specifications: [
      { label: 'Xuất xứ', value: 'Thái Lan' },
      { label: 'Dung tích', value: '3 lít' },
      { label: 'Thương hiệu', value: 'Dnee' }
    ],
    usage: [
      'Giặt tay: Hòa ½ nắp chai hoặc 15ml nước giặt em bé D-Nee với 2 lít nước (khoảng 10 bộ quần áo trẻ em)',
      'Ngâm quần áo trong vài phút',
      'Giặt lại với nước sạch',
      'Giặt máy: Hòa 2 nắp chai hoặc 60ml Nước giặt em bé D-Nee với 8 lít nước trong máy giặt',
      'Ngâm quần áo trong vài phút',
      'Giặt lại với nước sạch'
    ],
    benefits: [
      'An toàn cho làn da nhạy cảm của bé',
      'Giặt sạch vết bẩn cứng đầu',
      'Hương thơm mật ong ngọt ngào',
      'Mềm mại vải, êm dịu',
      'Phù hợp cho cả gia đình'
    ]
  },
  {
    id: 62,
    title: 'Nước giặt cho bé Dnee Tím Yellow Moon can 3 lít',
    category: 'Nước Giặt',
    subcategory: 'Dnee',
    slug: 'nuoc-giat-cho-be-dnee-tim-yellow-moon-can-3-lit',
    image: '/Product/Dnee/yellow_moon.png',
    images: [
      
    ],
    isNew: true,
    inStock: true,
    description: 'Nước giặt cho bé Dnee Tím Yellow Moon can 3 lít là loại nước giặt Thái với công thức không chứa các chất độc hại như Gluten, chất tạo màu, Enzymes, Cồn, Paraben, Chất huỳnh quang, Formaldehyde, dành cho bé yêu giúp đánh bay các vết bẩn cứng đầu và mang lại hương thơm trái cây dịu nhẹ cho vải. Nước giặt Dnee Thái Lan còn giúp làm mềm vải, êm dịu, an toàn với làn da nhạy cảm của các bé, ngoài ra có thể dùng để giặt đồ cho cả gia đình.',
    features: [
      'Công thức đặc biệt giúp giặt sạch và đánh bay các vết bẩn cứng đầu',
      'Ngăn chặn các vết bẩn quay trở lại',
      'Độ pH trung tính, rất mềm dịu và không làm hỏng quần áo của bé',
      'Lưu lại hương thơm bền lâu',
      'Không chứa Gluten, chất tạo màu, Enzymes, Cồn, Paraben, Chất huỳnh quang, Formaldehyde',
      'Hương thơm trái cây dịu nhẹ'
    ],
    specifications: [
      { label: 'Xuất xứ', value: 'Thái Lan' },
      { label: 'Dung tích', value: '3 lít' },
      { label: 'Thương hiệu', value: 'Dnee' }
    ],
    usage: [
      'Giặt tay: Hòa ½ nắp chai hoặc 15ml nước giặt em bé D-Nee với 2 lít nước (khoảng 10 bộ quần áo trẻ em)',
      'Ngâm quần áo trong vài phút',
      'Giặt lại với nước sạch',
      'Giặt máy: Hòa 2 nắp chai hoặc 60ml Nước giặt em bé D-Nee với 8 lít nước trong máy giặt',
      'Ngâm quần áo trong vài phút',
      'Giặt lại với nước sạch'
    ],
    benefits: [
      'An toàn cho làn da nhạy cảm của bé',
      'Giặt sạch vết bẩn cứng đầu',
      'Hương thơm trái cây dịu nhẹ',
      'Mềm mại vải, êm dịu',
      'Phù hợp cho cả gia đình'
    ]
  },
  {
    id: 63,
    title: 'Nước giặt cho bé Dnee Xanh Lovely Sky can 3 lít',
    category: 'Nước Giặt',
    subcategory: 'Dnee',
    slug: 'nuoc-giat-cho-be-dnee-xanh-lovely-sky-can-3-lit',
    image: '/Product/Dnee/lovely_sky.png',
    images: [
      
    ],
    isNew: true,
    inStock: true,
    description: 'Nước giặt cho bé Dnee Xanh Lovely Sky can 3 lít là loại nước giặt Thái đặc biệt dành cho bé yêu với công thức không chứa các chất độc hại như Gluten, chất tạo màu, Enzymes, Cồn, Paraben, Chất huỳnh quang, Formaldehyde giúp đánh bay các vết bẩn cứng đầu và mang lại hương phấn thơm dịu nhẹ cho vải. Nước giặt Dnee Thái Lan còn giúp làm mềm vải, êm dịu, an toàn với làn da nhạy cảm của bé yêu, có thể dùng để giặt đồ cho cả gia đình.',
    features: [
      'Công thức đặc biệt giúp giặt sạch và đánh bay các vết bẩn cứng đầu',
      'Ngăn chặn các vết bẩn quay trở lại',
      'Độ pH trung tính, rất mềm dịu và không làm hỏng quần áo của bé',
      'Lưu lại hương thơm bền lâu',
      'Không chứa Gluten, chất tạo màu, Enzymes, Cồn, Paraben, Chất huỳnh quang, Formaldehyde',
      'Hương phấn thơm dịu nhẹ'
    ],
    specifications: [
      { label: 'Xuất xứ', value: 'Thái Lan' },
      { label: 'Dung tích', value: '3 lít' },
      { label: 'Thương hiệu', value: 'Dnee' }
    ],
    usage: [
      'Giặt tay: Hòa ½ nắp chai hoặc 15ml nước giặt em bé D-Nee với 2 lít nước (khoảng 10 bộ quần áo trẻ em)',
      'Ngâm quần áo trong vài phút',
      'Giặt lại với nước sạch',
      'Giặt máy: Hòa 2 nắp chai hoặc 60ml Nước giặt em bé D-Nee với 8 lít nước trong máy giặt',
      'Ngâm quần áo trong vài phút',
      'Giặt lại với nước sạch'
    ],
    benefits: [
      'An toàn cho làn da nhạy cảm của bé',
      'Giặt sạch vết bẩn cứng đầu',
      'Hương phấn thơm dịu nhẹ',
      'Mềm mại vải, êm dịu',
      'Phù hợp cho cả gia đình'
    ]
  },
  {
    id: 64,
    title: 'Nước giặt cho bé Dnee Tím Sweet Dream can 3 lít',
    category: 'Nước Giặt',
    subcategory: 'Dnee',
    slug: 'nuoc-giat-cho-be-dnee-tim-sweet-dream-can-3-lit',
    image: '/Product/Dnee/sweet_dream.png',
    images: [
      
    ],
    isNew: true,
    inStock: true,
    description: 'Nước giặt cho bé Dnee Tím Sweet Dream can 3 lít là loại nước giặt Thái đặc biệt dành cho bé yêu với công thức không chứa các chất độc hại như Gluten, chất tạo màu, Enzymes, Cồn, Paraben, Chất huỳnh quang, Formaldehyde giúp đánh bay các vết bẩn và mang lại hương thơm hoa oải hương Pháp cho vải. Nước giặt Dnee Thái Lan còn mang đến hương thơm ngát, êm dịu, an toàn với làn da nhạy cảm của các bé, có thể dùng để giặt đồ cho cả gia đình.',
    features: [
      'Công thức đặc biệt giúp giặt sạch và đánh bay các vết bẩn cứng đầu',
      'Ngăn chặn các vết bẩn quay trở lại',
      'Độ pH trung tính, rất mềm dịu và không làm hỏng quần áo của bé',
      'Lưu lại hương thơm bền lâu',
      'Không chứa Gluten, chất tạo màu, Enzymes, Cồn, Paraben, Chất huỳnh quang, Formaldehyde',
      'Hương thơm hoa oải hương Pháp'
    ],
    specifications: [
      { label: 'Xuất xứ', value: 'Thái Lan' },
      { label: 'Dung tích', value: '3 lít' },
      { label: 'Thương hiệu', value: 'Dnee' }
    ],
    usage: [
      'Giặt tay: Hòa ½ nắp chai hoặc 15ml nước giặt em bé D-Nee với 2 lít nước (khoảng 10 bộ quần áo trẻ em)',
      'Ngâm quần áo trong vài phút',
      'Giặt lại với nước sạch',
      'Giặt máy: Hòa 2 nắp chai hoặc 60ml Nước giặt em bé D-Nee với 8 lít nước trong máy giặt',
      'Ngâm quần áo trong vài phút',
      'Giặt lại với nước sạch'
    ],
    benefits: [
      'An toàn cho làn da nhạy cảm của bé',
      'Giặt sạch vết bẩn cứng đầu',
      'Hương thơm hoa oải hương Pháp',
      'Mềm mại vải, êm dịu',
      'Phù hợp cho cả gia đình'
    ]
  },
  {
    id: 65,
    title: 'Nước giặt Essence Blossom can 3 lít',
    category: 'Nước Giặt',
    subcategory: 'Essence',
    slug: 'nuoc-giat-essence-blossom-can-3-lit',
    image: '/Product/Essence/Blossom.png',
    images: [
      
    ],
    isNew: true,
    inStock: true,
    description: 'Essence Blossom là lựa chọn lý tưởng cho những ai yêu thích hương hoa dịu nhẹ, thanh thoát nhưng vẫn lưu hương lâu trên quần áo. Với sự hòa quyện của những loài hoa mùa xuân tinh khôi, nước giặt Essence Blossom mang lại cảm giác dễ chịu, thư giãn mỗi khi mặc đồ. Mùi hương thoang thoảng nhưng bền lâu, giúp quần áo luôn thơm mát như mới giặt dù trải qua cả ngày dài.',
    features: [
      'Công nghệ Polymer-A giúp ngăn vết bẩn bám ngược trở lại',
      'Làm sạch hiệu quả',
      'Công thức pH cân bằng bảo vệ sợi vải và giữ màu quần áo',
      'Công nghệ khử mùi Musty Odor Reducer',
      'Hoạt chất dễ phân hủy sinh học',
      'Hương thơm bền lâu và an toàn cho người dùng',
      'Hương hoa dịu nhẹ, thanh thoát'
    ],
    specifications: [
      { label: 'Xuất xứ', value: 'Thái Lan' },
      { label: 'Dung tích', value: '3 lít' },
      { label: 'Thương hiệu', value: 'Essence' }
    ],
    usage: [
      'Giặt máy: Cho 65ml nước giặt vào máy giặt dùng cho 6–7 Kg quần áo',
      'Chọn chế độ giặt phù hợp',
      'Giặt tay: Cho 35ml nước giặt hòa tan vào 4–5 L nước cho 8–10 chiếc quần áo',
      'Vò nhẹ và xả lại với nước sạch'
    ],
    benefits: [
      'Hương hoa mùa xuân tinh khôi',
      'Cảm giác dễ chịu, thư giãn',
      'Mùi hương thoang thoảng nhưng bền lâu',
      'Quần áo luôn thơm mát như mới giặt',
      'Bảo vệ sợi vải và giữ màu'
    ]
  },
  {
    id: 66,
    title: 'Nước giặt Essence Floral can 3 lít',
    category: 'Nước Giặt',
    subcategory: 'Essence',
    slug: 'nuoc-giat-essence-floral-can-3-lit',
    image: '/Product/Essence/Floral.png',
    images: [
      
    ],
    isNew: true,
    inStock: true,
    description: 'Essence Floral gây ấn tượng bởi hương hoa ngọt ngào, nữ tính và đầy quyến rũ. Mỗi lần mở tủ áo hay khoác lên mình chiếc áo đã giặt với Essence Floral, bạn sẽ cảm nhận được làn hương dịu dàng như một vườn hoa đang khoe sắc. Đây là mùi hương dễ gây thiện cảm và thích hợp cho cả mặc thường ngày lẫn những dịp đặc biệt, mang lại cảm giác sạch sẽ và thoải mái.',
    features: [
      'Công nghệ Polymer-A giúp ngăn vết bẩn bám ngược trở lại',
      'Làm sạch hiệu quả',
      'Công thức pH cân bằng bảo vệ sợi vải và giữ màu quần áo',
      'Công nghệ khử mùi Musty Odor Reducer',
      'Hoạt chất dễ phân hủy sinh học',
      'Hương thơm bền lâu và an toàn cho người dùng',
      'Hương hoa ngọt ngào, nữ tính và quyến rũ'
    ],
    specifications: [
      { label: 'Xuất xứ', value: 'Thái Lan' },
      { label: 'Dung tích', value: '3 lít' },
      { label: 'Thương hiệu', value: 'Essence' }
    ],
    usage: [
      'Giặt máy: Cho 65ml nước giặt vào máy giặt dùng cho 6–7 Kg quần áo',
      'Chọn chế độ giặt phù hợp',
      'Giặt tay: Cho 35ml nước giặt hòa tan vào 4–5 L nước cho 8–10 chiếc quần áo',
      'Vò nhẹ và xả lại với nước sạch'
    ],
    benefits: [
      'Hương hoa ngọt ngào, quyến rũ',
      'Làn hương dịu dàng như vườn hoa',
      'Dễ gây thiện cảm',
      'Thích hợp cho cả ngày thường và dịp đặc biệt',
      'Cảm giác sạch sẽ và thoải mái'
    ]
  },
  {
    id: 67,
    title: 'Nước giặt Essence Impression can 3 lít',
    category: 'Nước Giặt',
    subcategory: 'Essence',
    slug: 'nuoc-giat-essence-impression-can-3-lit',
    image: '/Product/Essence/Impression.png',
    images: [
      
    ],
    isNew: true,
    inStock: true,
    description: 'Essence Impression mang đến một dấu ấn khó quên với hương thơm hiện đại, sang trọng và cá tính. Mùi hương này phù hợp với những ai yêu thích sự mạnh mẽ, rõ nét nhưng vẫn có nét tinh tế riêng. Không chỉ làm sạch hiệu quả, nước giặt Essence Impression còn giúp quần áo luôn tỏa hương như nước hoa nhẹ nhàng, tạo nên phong cách riêng biệt cho người sử dụng.',
    features: [
      'Công nghệ Polymer-A giúp ngăn vết bẩn bám ngược trở lại',
      'Làm sạch hiệu quả',
      'Công thức pH cân bằng bảo vệ sợi vải và giữ màu quần áo',
      'Công nghệ khử mùi Musty Odor Reducer',
      'Hoạt chất dễ phân hủy sinh học',
      'Hương thơm bền lâu và an toàn cho người dùng',
      'Hương thơm hiện đại, sang trọng và cá tính'
    ],
    specifications: [
      { label: 'Xuất xứ', value: 'Thái Lan' },
      { label: 'Dung tích', value: '3 lít' },
      { label: 'Thương hiệu', value: 'Essence' }
    ],
    usage: [
      'Giặt máy: Cho 65ml nước giặt vào máy giặt dùng cho 6–7 Kg quần áo',
      'Chọn chế độ giặt phù hợp',
      'Giặt tay: Cho 35ml nước giặt hòa tan vào 4–5 L nước cho 8–10 chiếc quần áo',
      'Vò nhẹ và xả lại với nước sạch'
    ],
    benefits: [
      'Dấu ấn khó quên',
      'Hương thơm hiện đại, sang trọng',
      'Mạnh mẽ, rõ nét nhưng tinh tế',
      'Quần áo tỏa hương như nước hoa',
      'Tạo phong cách riêng biệt'
    ]
  },
  {
    id: 68,
    title: 'Nước giặt xả Fineline Aloe Vera can 3 lít',
    category: 'Nước Giặt',
    subcategory: 'Fineline',
    slug: 'nuoc-giat-xa-fineline-aloe-vera-can-3-lit',
    image: '/Product/Fineline/Aloe_Vera.png',
    images: [
      
    ],
    isNew: true,
    inStock: true,
    description: 'Nước giặt xả Fineline Aloe Vera can 3 lít mang hương thơm nhẹ nhàng, thanh khiết từ chiết xuất nha đam hữu cơ, giúp quần áo luôn thơm mát và dễ chịu. Nước giặt Thái vừa đánh bay vết bẩn sâu trong sợi vải vừa dịu nhẹ, an toàn cho da, đồng thời lưu lại hương thơm tự nhiên bền lâu.',
    features: [
      'Khử mùi ẩm mốc, mùi bụi bẩn',
      'Đánh bật các vết bẩn cứng đầu khỏi sợi vải',
      'Ngăn cản chất bẩn bám trở lại quần áo trong khi giặt',
      'Giúp quần áo trắng sạch mềm mại',
      'Lưu lại hương thơm của cánh đồng hoa tươi mát',
      'Bảo vệ vải sợi được bền màu',
      'Hương nha đam hữu cơ thanh khiết'
    ],
    specifications: [
      { label: 'Xuất xứ', value: 'Thái Lan' },
      { label: 'Dung tích', value: '3 lít' },
      { label: 'Thương hiệu', value: 'Fineline' }
    ],
    usage: [
      'Hòa tan kỹ nước giặt Fineline với nước trước khi cho quần áo vào',
      'Tỷ lệ: 1 nắp đầy hòa với 3 – 4 lít nước',
      'Ngâm quần áo trong 5 phút, vò nhẹ, xả qua với nước',
      'Đối với máy giặt theo tỷ lệ 4 – 6 nắp cho 1 lần giặt'
    ],
    benefits: [
      'Hương thơm nhẹ nhàng, thanh khiết',
      'An toàn cho da',
      'Lưu hương tự nhiên bền lâu',
      'Quần áo luôn thơm mát và dễ chịu',
      'Vải mềm mại, bền màu'
    ]
  },
  {
    id: 69,
    title: 'Nước giặt xả Fineline Sunny Gold can 3 lít',
    category: 'Nước Giặt',
    subcategory: 'Fineline',
    slug: 'nuoc-giat-xa-fineline-sunny-gold-can-3-lit',
    image: '/Product/Fineline/Sunny_Gold.png',
    images: [
      
    ],
    isNew: true,
    inStock: true,
    description: 'Nước giặt xả Fineline Sunny Gold can 3 lít sở hữu hương thơm như ánh nắng sớm mai, giúp quần áo luôn thơm mát dài lâu. Nước giặt Thái không chỉ làm sạch sâu mà còn ngăn mùi ẩm mốc, mang lại hương thơm trong từng sợi vải.',
    features: [
      'Khử mùi ẩm mốc hiệu quả',
      'Đánh bật các vết bẩn cứng đầu khỏi sợi vải',
      'Ngăn cản chất bẩn bám trở lại quần áo trong khi giặt',
      'Giúp quần áo luôn trong trạng thái mềm mại',
      'Lưu lại hương thơm nắng vàng tươi mát trên quần áo',
      'Bảo vệ vải sợi được bền màu',
      'Hương thơm như ánh nắng sớm mai'
    ],
    specifications: [
      { label: 'Xuất xứ', value: 'Thái Lan' },
      { label: 'Dung tích', value: '3 lít' },
      { label: 'Thương hiệu', value: 'Fineline' }
    ],
    usage: [
      'Hòa tan kỹ nước giặt Fineline với nước trước khi cho quần áo vào',
      'Tỷ lệ: 1 nắp đầy hòa với 3 – 4 lít nước',
      'Ngâm quần áo trong 5 phút, vò nhẹ, xả qua với nước',
      'Đối với máy giặt theo tỷ lệ 4 – 6 nắp cho 1 lần giặt'
    ],
    benefits: [
      'Hương thơm nắng mai tươi mát',
      'Làm sạch sâu hiệu quả',
      'Ngăn mùi ẩm mốc',
      'Quần áo thơm lâu',
      'Vải mềm mại, bền màu'
    ]
  },
  {
    id: 70,
    title: 'Nước giặt xả Fineline Sunny Pink can 3 lít',
    category: 'Nước Giặt',
    subcategory: 'Fineline',
    slug: 'nuoc-giat-xa-fineline-sunny-pink-can-3-lit',
    image: '/Product/Fineline/Sunny_Pink.png',
    images: [
      
    ],
    isNew: true,
    inStock: true,
    description: 'Nước giặt xả Fineline Sunny Pink can 3 lít đem đến hương thơm ngọt ngào và nữ tính. Nước giặt Thái giúp giảm mùi hôi khi phơi trong bóng râm hoặc ngày mưa, đồng thời giữ quần áo luôn mềm mại và thơm ngát suốt ngày dài.',
    features: [
      'Đánh bật các vết bẩn cứng đầu khỏi sợi vải',
      'Ngăn cản chất bẩn bám trở lại quần áo trong khi giặt',
      'Giúp quần áo trắng sạch mềm mại',
      'Lưu lại hương thơm nắng hồng tươi mát trên từng thớ vải',
      'Bảo vệ vải sợi được bền màu',
      'Giảm mùi hôi khi phơi trong bóng râm',
      'Hương thơm ngọt ngào nữ tính'
    ],
    specifications: [
      { label: 'Xuất xứ', value: 'Thái Lan' },
      { label: 'Dung tích', value: '3 lít' },
      { label: 'Thương hiệu', value: 'Fineline' }
    ],
    usage: [
      'Hòa tan kỹ nước giặt Fineline với nước trước khi cho quần áo vào',
      'Tỷ lệ: 1 nắp đầy hòa với 3 – 4 lít nước',
      'Ngâm quần áo trong 5 phút, vò nhẹ, xả qua với nước',
      'Đối với máy giặt theo tỷ lệ 4 – 6 nắp cho 1 lần giặt'
    ],
    benefits: [
      'Hương ngọt ngào nữ tính',
      'Giảm mùi hôi khi phơi râm',
      'Vải mềm mại và thơm ngát',
      'Thơm lâu suốt ngày dài',
      'Bảo vệ sợi vải bền màu'
    ]
  },
  {
    id: 71,
    title: 'Nước giặt xả Fineline Secret Night can 3 lít',
    category: 'Nước Giặt',
    subcategory: 'Fineline',
    slug: 'nuoc-giat-xa-fineline-secret-night-can-3-lit',
    image: '/Product/Fineline/Secret_Night.png',
    images: [
      
    ],
    isNew: true,
    inStock: true,
    description: 'Nước giặt xả Fineline Secret Night can 3 lít mang hương thơm bí ẩn, quyến rũ, lưu lại trên quần áo, giúp bạn tự tin suốt cả ngày. Nước giặt Thái chứa Acrylic Polymer không chỉ làm sạch sâu và loại bỏ vết bẩn cứng đầu, mà còn giữ cho các loại vải luôn mềm mại và bền đẹp.',
    features: [
      'Công thức đậm đặc đặc biệt giúp đánh bay mùi ẩm mốc khó chịu',
      'Đánh bật các vết bẩn cứng đầu khỏi sợi vải',
      'Ngăn cản chất bẩn bám trở lại quần áo trong khi giặt',
      'Giúp quần áo trắng sạch mềm mại',
      'Lưu lại hương thơm ngát trên từng thớ vải',
      'Bảo vệ vải sợi được bền màu',
      'Chứa Acrylic Polymer',
      'Hương thơm bí ẩn quyến rũ'
    ],
    specifications: [
      { label: 'Xuất xứ', value: 'Thái Lan' },
      { label: 'Dung tích', value: '3 lít' },
      { label: 'Thương hiệu', value: 'Fineline' }
    ],
    usage: [
      'Hòa tan kỹ nước giặt Fineline với nước trước khi cho quần áo vào',
      'Tỷ lệ: 1 nắp đầy hòa với 3 – 4 lít nước',
      'Ngâm quần áo trong 5 phút, vò nhẹ, xả qua với nước',
      'Đối với máy giặt theo tỷ lệ 4 – 6 nắp cho 1 lần giặt'
    ],
    benefits: [
      'Hương bí ẩn quyến rũ',
      'Sạch sâu vết bẩn',
      'Vải mềm mại và bền đẹp',
      'Tự tin suốt cả ngày',
      'Công thức đậm đặc đặc biệt'
    ]
  },
  {
    id: 72,
    title: 'Nước giặt xả Fineline Sweet Floral can 3 lít',
    category: 'Nước Giặt',
    subcategory: 'Fineline',
    slug: 'nuoc-giat-xa-fineline-sweet-floral-can-3-lit',
    image: '/Product/Fineline/Sweet_Floral.png',
    images: [
      
    ],
    isNew: true,
    inStock: true,
    description: 'Nước giặt xả Fineline Sweet Floral can 3 lít mang hương hoa ngọt ngào, lưu lại lâu trên từng sợi vải. Nước giặt Thái chứa công thức giặt xả dịu nhẹ giúp làm sạch hiệu quả, giữ vải mềm mại và màu sắc luôn tươi mới.',
    features: [
      'Khử mùi ẩm mốc, mùi bụi bẩn',
      'Đánh bật các vết bẩn cứng đầu khỏi sợi vải',
      'Ngăn cản chất bẩn bám trở lại quần áo trong khi giặt',
      'Giúp quần áo trắng sạch mềm mại',
      'Lưu lại hương thơm của cánh đồng hoa tươi mát',
      'Bảo vệ vải sợi được bền màu',
      'Công thức giặt xả dịu nhẹ',
      'Hương hoa ngọt ngào'
    ],
    specifications: [
      { label: 'Xuất xứ', value: 'Thái Lan' },
      { label: 'Dung tích', value: '3 lít' },
      { label: 'Thương hiệu', value: 'Fineline' }
    ],
    usage: [
      'Hòa tan kỹ nước giặt Fineline với nước trước khi cho quần áo vào',
      'Tỷ lệ: 1 nắp đầy hòa với 3 – 4 lít nước',
      'Ngâm quần áo trong 5 phút, vò nhẹ, xả qua với nước',
      'Đối với máy giặt theo tỷ lệ 4 – 6 nắp cho 1 lần giặt'
    ],
    benefits: [
      'Hương hoa ngọt ngào',
      'Giặt sạch dịu nhẹ',
      'Vải mềm mại',
      'Màu sắc tươi mới',
      'Lưu hương lâu'
    ]
  },
  {
    id: 73,
    title: 'Nước giặt xả Fineline Charming Violet can 3 lít',
    category: 'Nước Giặt',
    subcategory: 'Fineline',
    slug: 'nuoc-giat-xa-fineline-charming-violet-can-3-lit',
    image: '/Product/Fineline/Charming_Violet.png',
    images: [
      
    ],
    isNew: true,
    inStock: true,
    description: 'Nước giặt xả Fineline Charming Violet can 3 lít sở hữu hương hoa violet quyến rũ, thanh lịch, đem lại cảm giác sang trọng và lôi cuốn. Nước giặt Thái giúp đánh bay vết bẩn, giữ sợi vải mềm mượt và lưu hương thơm lâu dài.',
    features: [
      'Giúp khử mùi ẩm mốc',
      'Đánh bật các vết bẩn cứng đầu khỏi sợi vải',
      'Ngăn cản chất bẩn bám trở lại quần áo trong khi giặt',
      'Giúp quần áo trắng sạch mềm mại',
      'Lưu lại hương thơm nước hoa tươi mát trên quần áo',
      'Bảo vệ vải sợi được bền màu',
      'Hương hoa violet quyến rũ thanh lịch'
    ],
    specifications: [
      { label: 'Xuất xứ', value: 'Thái Lan' },
      { label: 'Dung tích', value: '3 lít' },
      { label: 'Thương hiệu', value: 'Fineline' }
    ],
    usage: [
      'Hòa tan kỹ nước giặt Fineline với nước trước khi cho quần áo vào',
      'Tỷ lệ: 1 nắp đầy hòa với 3 – 4 lít nước',
      'Ngâm quần áo trong 5 phút, vò nhẹ, xả qua với nước',
      'Đối với máy giặt theo tỷ lệ 4 – 6 nắp cho 1 lần giặt'
    ],
    benefits: [
      'Hương violet thanh lịch',
      'Sạch vết bẩn',
      'Sợi vải mềm mượt',
      'Thơm lâu',
      'Cảm giác sang trọng lôi cuốn'
    ]
  },
  {
    id: 74,
    title: 'Nước giặt xả Fineline Lovely Lavender can 3 lít',
    category: 'Nước Giặt',
    subcategory: 'Fineline',
    slug: 'nuoc-giat-xa-fineline-lovely-lavender-can-3-lit',
    image: '/Product/Fineline/Lively_Lavender.png',
    images: [
      
    ],
    isNew: true,
    inStock: true,
    description: 'Nước giặt xả Fineline Lovely Lavender can 3 lít tỏa hương oải hương dịu nhẹ kết hợp tinh dầu vỏ cam, mang lại cảm giác thư giãn. Nước giặt Thái chứa công thức dịu nhẹ giúp loại bỏ vết bẩn, ngăn 99,9% vi khuẩn và giảm mùi ẩm mốc.',
    features: [
      'Khử mùi ẩm mốc, mùi bùn đất, mùi mồ hôi',
      'Đánh bật các vết bẩn cứng đầu khỏi sợi vải',
      'Ngăn cản chất bẩn bám trở lại quần áo trong khi giặt',
      'Giúp quần áo trắng sạch mềm mại',
      'Lưu lại hương thơm của hoa oải hương tươi mát',
      'Bảo vệ vải sợi được bền màu',
      'Ngăn 99,9% vi khuẩn',
      'Kết hợp tinh dầu vỏ cam'
    ],
    specifications: [
      { label: 'Xuất xứ', value: 'Thái Lan' },
      { label: 'Dung tích', value: '3 lít' },
      { label: 'Thương hiệu', value: 'Fineline' }
    ],
    usage: [
      'Hòa tan kỹ nước giặt Fineline với nước trước khi cho quần áo vào',
      'Tỷ lệ: 1 nắp đầy hòa với 3 – 4 lít nước',
      'Ngâm quần áo trong 5 phút, vò nhẹ, xả qua với nước',
      'Đối với máy giặt theo tỷ lệ 4 – 6 nắp cho 1 lần giặt'
    ],
    benefits: [
      'Hương oải hương dịu nhẹ',
      'Ngăn 99,9% vi khuẩn',
      'Giảm mùi ẩm mốc hiệu quả',
      'Mang lại cảm giác thư giãn',
      'Công thức dịu nhẹ an toàn'
    ]
  },
  {
    id: 75,
    title: 'Nước giặt xả Fineline Moonlight Fresh can 3 lít',
    category: 'Nước Giặt',
    subcategory: 'Fineline',
    slug: 'nuoc-giat-xa-fineline-moonlight-fresh-can-3-lit',
    image: '/Product/Fineline/Moonlight_Fresh.png',
    images: [
      
    ],
    isNew: true,
    inStock: true,
    description: 'Nước giặt xả Fineline Moonlight Fresh can 3 lít mang hương thơm mát lành như làn gió đêm dịu nhẹ, đem lại cảm giác thư thái và tươi mới. Nước giặt Thái giúp loại bỏ vết bẩn hiệu quả, giữ vải mềm mại và lưu hương bền lâu.',
    features: [
      'Công thức đậm đặc',
      'Đánh bật các vết bẩn cứng đầu khỏi sợi vải',
      'Ngăn cản chất bẩn bám trở lại quần áo trong khi giặt',
      'Giúp quần áo trắng sạch mềm mại',
      'Lưu lại hương thơm tươi mát trên quần áo suốt cả ngày dài',
      'Hương gió đêm tươi mát dịu nhẹ'
    ],
    specifications: [
      { label: 'Xuất xứ', value: 'Thái Lan' },
      { label: 'Dung tích', value: '3 lít' },
      { label: 'Thương hiệu', value: 'Fineline' }
    ],
    usage: [
      'Hòa tan kỹ nước giặt Fineline với nước trước khi cho quần áo vào',
      'Tỷ lệ: 1 nắp đầy hòa với 3 – 4 lít nước',
      'Ngâm quần áo trong 5 phút, vò nhẹ, xả qua với nước',
      'Đối với máy giặt theo tỷ lệ 4 – 6 nắp cho 1 lần giặt'
    ],
    benefits: [
      'Hương gió đêm tươi mát',
      'Giặt sạch hiệu quả',
      'Vải mềm mại',
      'Thơm lâu',
      'Cảm giác thư thái và tươi mới'
    ]
  },
  {
    id: 76,
    title: 'Nước giặt xả Fineline Deluxe Perfume Tím can 3 lít',
    category: 'Nước Giặt',
    subcategory: 'Fineline',
    slug: 'nuoc-giat-xa-fineline-deluxe-perfume-tim-can-3-lit',
    image: '/Product/Fineline/Violet_Delux.png',
    images: [
      
    ],
    isNew: true,
    inStock: true,
    description: 'Nước giặt xả Fineline Deluxe Perfume Tím can 3 lít sở hữu hương nước hoa tím violet sang trọng, bí ẩn và cuốn hút, giúp quần áo thơm lâu, giảm mùi ẩm mốc hiệu quả. Với công thức đậm đặc, nước giặt Thái đánh bay 7 loại vết bẩn khó giặt, đồng thời bảo vệ màu sắc và chất liệu vải như mới.',
    features: [
      'Triệt tiêu mùi ẩm mốc',
      'Đánh bật các vết bẩn cứng đầu khỏi sợi vải',
      'Êm dịu cho da',
      'Giúp quần áo trắng sạch mềm mại',
      'Lưu lại hương thơm nước hoa sang trọng tươi mát',
      'Bảo vệ vải sợi được bền màu',
      'Đánh bay 7 loại vết bẩn khó giặt',
      'Hương violet sang trọng bí ẩn'
    ],
    specifications: [
      { label: 'Xuất xứ', value: 'Thái Lan' },
      { label: 'Dung tích', value: '3 lít' },
      { label: 'Thương hiệu', value: 'Fineline' }
    ],
    usage: [
      'Hòa tan kỹ nước giặt Fineline với nước trước khi cho quần áo vào',
      'Tỷ lệ: 1 nắp đầy hòa với 3 – 4 lít nước',
      'Ngâm quần áo trong 5 phút, vò nhẹ, xả qua với nước',
      'Đối với máy giặt theo tỷ lệ 4 – 6 nắp cho 1 lần giặt'
    ],
    benefits: [
      'Hương violet sang trọng',
      'Sạch 7 vết bẩn khó giặt',
      'Vải bền đẹp',
      'Giảm mùi ẩm mốc',
      'Thơm lâu'
    ]
  },
  {
    id: 77,
    title: 'Nước giặt xả Fineline Deluxe Perfume Vàng can 3 lít',
    category: 'Nước Giặt',
    subcategory: 'Fineline',
    slug: 'nuoc-giat-xa-fineline-deluxe-perfume-vang-can-3-lit',
    image: '/Product/Fineline/Yellow_Delux.png',
    images: [
      
    ],
    isNew: true,
    inStock: true,
    description: 'Nước giặt xả Fineline Deluxe Perfume Vàng can 3 lít mang hương hoa lily trắng cao cấp, thanh khiết và sang trọng, lưu hương lâu dài trên từng sợi vải. Công thức đậm đặc giúp loại bỏ hiệu quả tới 7 loại vết bẩn cứng đầu như trà, cà phê, mỹ phẩm, dầu mỡ… đồng thời giữ cho màu vải luôn mềm mại và bền đẹp.',
    features: [
      'Triệt tiêu mùi ẩm mốc',
      'Đánh bật các vết bẩn cứng đầu khỏi sợi vải',
      'Êm dịu cho da',
      'Giúp quần áo trắng sạch mềm mại',
      'Lưu lại hương thơm nước hoa sang trọng tươi mát',
      'Bảo vệ vải sợi được bền màu',
      'Loại bỏ 7 loại vết bẩn cứng đầu',
      'Hương lily trắng thanh khiết'
    ],
    specifications: [
      { label: 'Xuất xứ', value: 'Thái Lan' },
      { label: 'Dung tích', value: '3 lít' },
      { label: 'Thương hiệu', value: 'Fineline' }
    ],
    usage: [
      'Hòa tan kỹ nước giặt Fineline với nước trước khi cho quần áo vào',
      'Tỷ lệ: 1 nắp đầy hòa với 3 – 4 lít nước',
      'Ngâm quần áo trong 5 phút, vò nhẹ, xả qua với nước',
      'Đối với máy giặt theo tỷ lệ 4 – 6 nắp cho 1 lần giặt'
    ],
    benefits: [
      'Hương lily trắng thanh khiết',
      'Sạch sâu',
      'Màu vải mềm mại',
      'Bền đẹp',
      'Lưu hương lâu dài'
    ]
  },
  {
    id: 78,
    title: 'Nước giặt xả Fineline Deluxe Perfume Hồng can 3 lít',
    category: 'Nước Giặt',
    subcategory: 'Fineline',
    slug: 'nuoc-giat-xa-fineline-deluxe-perfume-hong-can-3-lit',
    image: '/Product/Fineline/Pink_Deluxe_Perfume.png',
    images: [
      
    ],
    isNew: true,
    inStock: true,
    description: 'Nước giặt xả Fineline Deluxe Perfume Hồng can 3 lít mang hương nước hoa hồng cao cấp, ngọt ngào và quyến rũ, lưu lại lâu trên từng sợi vải. Công thức đậm đặc giúp loại bỏ sâu tới 7 loại vết bẩn cứng đầu như trà, cà phê, mỹ phẩm, dầu mỡ… đồng thời giữ màu vải luôn tươi mới và mềm mại.',
    features: [
      'Triệt tiêu mùi ẩm mốc',
      'Đánh bật các vết bẩn cứng đầu khỏi sợi vải',
      'Êm dịu cho da',
      'Giúp quần áo trắng sạch mềm mại',
      'Lưu lại hương thơm nước hoa sang trọng tươi mát',
      'Bảo vệ vải sợi được bền màu',
      'Loại bỏ 7 loại vết bẩn cứng đầu',
      'Hương nước hoa hồng ngọt ngào'
    ],
    specifications: [
      { label: 'Xuất xứ', value: 'Thái Lan' },
      { label: 'Dung tích', value: '3 lít' },
      { label: 'Thương hiệu', value: 'Fineline' }
    ],
    usage: [
      'Hòa tan kỹ nước giặt Fineline với nước trước khi cho quần áo vào',
      'Tỷ lệ: 1 nắp đầy hòa với 3 – 4 lít nước',
      'Ngâm quần áo trong 5 phút, vò nhẹ, xả qua với nước',
      'Đối với máy giặt theo tỷ lệ 4 – 6 nắp cho 1 lần giặt'
    ],
    benefits: [
      'Hương nước hoa hồng quyến rũ',
      'Sạch sâu',
      'Màu sắc tươi mới',
      'Vải mềm mại',
      'Lưu hương lâu'
    ]
  },
  {
    id: 79,
    title: 'Nước giặt xả Fineline Deluxe Perfume Đỏ can 3 lít',
    category: 'Nước Giặt',
    subcategory: 'Fineline',
    slug: 'nuoc-giat-xa-fineline-deluxe-perfume-do-can-3-lit',
    image: '/Product/Fineline/Red_Delux.png',
    images: [
      
    ],
    isNew: true,
    inStock: true,
    description: 'Nước giặt xả Fineline Deluxe Perfume Đỏ can 3 lít mang hương hoa trà đỏ cao cấp, nồng nàn và quyến rũ. Công thức đậm đặc giúp loại bỏ hiệu quả tới 7 loại vết bẩn cứng đầu như trà, cà phê, mỹ phẩm, dầu mỡ… đồng thời giữ cho màu vải luôn tươi sáng và mềm mại.',
    features: [
      'Triệt tiêu mùi ẩm mốc',
      'Đánh bật các vết bẩn cứng đầu khỏi sợi vải',
      'Êm dịu cho da',
      'Giúp quần áo trắng sạch mềm mại',
      'Lưu lại hương thơm nước hoa sang trọng tươi mát',
      'Bảo vệ vải sợi được bền màu',
      'Loại bỏ 7 loại vết bẩn cứng đầu',
      'Hương hoa trà đỏ nồng nàn'
    ],
    specifications: [
      { label: 'Xuất xứ', value: 'Thái Lan' },
      { label: 'Dung tích', value: '3 lít' },
      { label: 'Thương hiệu', value: 'Fineline' }
    ],
    usage: [
      'Hòa tan kỹ nước giặt Fineline với nước trước khi cho quần áo vào',
      'Tỷ lệ: 1 nắp đầy hòa với 3 – 4 lít nước',
      'Ngâm quần áo trong 5 phút, vò nhẹ, xả qua với nước',
      'Đối với máy giặt theo tỷ lệ 4 – 6 nắp cho 1 lần giặt'
    ],
    benefits: [
      'Hương hoa trà đỏ nồng nàn',
      'Sạch 7 vết bẩn',
      'Vải mềm mại',
      'Màu vải tươi sáng',
      'Quyến rũ'
    ]
  },
  {
    id: 80,
    title: 'Nước giặt xả Fineline Organic Chamomile can 3 lít',
    category: 'Nước Giặt',
    subcategory: 'Fineline',
    slug: 'nuoc-giat-xa-fineline-organic-chamomile-can-3-lit',
    image: '/Product/Fineline/Organic_Chamomile.png',
    images: [
      
    ],
    isNew: true,
    inStock: true,
    description: 'Nước giặt xả Fineline Organic Chamomile can 3 lít chứa chiết xuất hoa cúc Chamomile hữu cơ từ thiên nhiên. Công thức dịu nhẹ nhưng vẫn loại bỏ hiệu quả vết bẩn sâu, kết hợp với hương thơm thanh mát giúp giảm mùi ẩm mốc hiệu quả.',
    features: [
      'Khử mùi ẩm mốc, mùi bụi bẩn',
      'Đánh bật các vết bẩn cứng đầu khỏi sợi vải',
      'Ngăn cản chất bẩn bám trở lại quần áo trong khi giặt',
      'Giúp quần áo trắng sạch mềm mại',
      'Lưu lại hương thơm của cánh đồng hoa tươi mát',
      'Bảo vệ vải sợi được bền màu',
      'Chiết xuất hoa cúc Chamomile hữu cơ',
      'Công thức dịu nhẹ từ thiên nhiên'
    ],
    specifications: [
      { label: 'Xuất xứ', value: 'Thái Lan' },
      { label: 'Dung tích', value: '3 lít' },
      { label: 'Thương hiệu', value: 'Fineline' }
    ],
    usage: [
      'Hòa tan kỹ nước giặt Fineline với nước trước khi cho quần áo vào',
      'Tỷ lệ: 1 nắp đầy hòa với 3 – 4 lít nước',
      'Ngâm quần áo trong 5 phút, vò nhẹ, xả qua với nước',
      'Đối với máy giặt theo tỷ lệ 4 – 6 nắp cho 1 lần giặt'
    ],
    benefits: [
      'Chiết xuất cúc chamomile hữu cơ',
      'Sạch dịu nhẹ',
      'Giảm mùi ẩm mốc',
      'An toàn từ thiên nhiên',
      'Hương thanh mát'
    ]
  },
  {
    id: 81,
    title: 'Nước giặt xả Fineline Midnight Wash can 3 lít',
    category: 'Nước Giặt',
    subcategory: 'Fineline',
    slug: 'nuoc-giat-xa-fineline-midnight-wash-can-3-lit',
    image: '/Product/Fineline/Midnight_Wash.png',
    images: [
      
    ],
    isNew: true,
    inStock: true,
    description: 'Nước giặt xả Fineline Midnight Wash can 3 lít sở hữu công thức đậm đặc giúp đánh bay tới 7 loại vết bẩn cứng đầu như trà, cà phê, mỹ phẩm, dầu mỡ… ngay cả khi giặt vào ban đêm. Sản phẩm lưu lại hương thơm dễ chịu, giảm mùi ẩm mốc hiệu quả, đồng thời giữ màu vải tươi sáng và mềm mại.',
    features: [
      'Khử mùi ẩm mốc, mùi bụi bẩn',
      'Đánh bật các vết bẩn cứng đầu khỏi sợi vải',
      'Ngăn cản chất bẩn bám trở lại quần áo trong khi giặt',
      'Giúp quần áo trắng sạch mềm mại',
      'Lưu lại hương thơm của cánh đồng hoa tươi mát',
      'Bảo vệ vải sợi được bền màu',
      'Công thức đậm đặc',
      'Sạch 7 vết bẩn ngay cả khi giặt đêm'
    ],
    specifications: [
      { label: 'Xuất xứ', value: 'Thái Lan' },
      { label: 'Dung tích', value: '3 lít' },
      { label: 'Thương hiệu', value: 'Fineline' }
    ],
    usage: [
      'Hòa tan kỹ nước giặt Fineline với nước trước khi cho quần áo vào',
      'Tỷ lệ: 1 nắp đầy hòa với 3 – 4 lít nước',
      'Ngâm quần áo trong 5 phút, vò nhẹ, xả qua với nước',
      'Đối với máy giặt theo tỷ lệ 4 – 6 nắp cho 1 lần giặt'
    ],
    benefits: [
      'Sạch 7 vết bẩn ngay cả khi giặt đêm',
      'Lưu hương dễ chịu',
      'Công thức đậm đặc',
      'Màu vải tươi sáng',
      'Vải mềm mại'
    ]
  },
  {
    id: 82,
    title: 'Nước giặt Hygiene Happy Sunshine Thái Lan túi 3 lít',
    category: 'Nước Giặt',
    subcategory: 'Hygiene',
    slug: 'nuoc-giat-hygiene-happy-sunshine-thai-lan-tui-3-lit',
    image: '/Product/Nưoc_giat_Hygiene/Happy_Sunshine.png',
    images: [
      
    ],
    isNew: true,
    inStock: true,
    description: 'Nước giặt Hygiene Happy Sunshine Thái Lan túi 3 lít mang đến hương thơm nắng mai rực rỡ, tươi mát và tràn đầy năng lượng, giúp áo quần luôn bừng sáng như ngày mới. Nhờ công nghệ Active Scent Flip, quần áo không chỉ được giữ màu tươi mới mà còn khử sạch mùi ẩm mốc khó chịu. Mỗi cử động đều làm lan tỏa hương thơm rạng rỡ, cho bạn tự tin tỏa sáng cả ngày.',
    features: [
      'Khử mùi ẩm mốc, mùi bụi bẩn',
      'Đánh bật các vết bẩn cứng đầu khỏi sợi vải',
      'Ngăn cản chất bẩn bám trở lại quần áo trong khi giặt',
      'Giúp quần áo trắng sạch mềm mại',
      'Lưu lại hương thơm của cánh đồng hoa tươi mát',
      'Bảo vệ vải sợi được bền màu',
      'Công nghệ Active Scent Flip',
      'Hương nắng mai rực rỡ tươi mát'
    ],
    specifications: [
      { label: 'Xuất xứ', value: 'Thái Lan' },
      { label: 'Dung tích', value: '3 lít' },
      { label: 'Thương hiệu', value: 'Hygiene' }
    ],
    usage: [
      'Hòa tan kỹ nước giặt Hygiene Expert Wash với nước trước khi cho quần áo vào',
      'Tỷ lệ: 1 nắp đầy hòa với 3 – 4 lít nước',
      'Ngâm quần áo trong 5 phút, vò nhẹ, xả qua với nước',
      'Đối với máy giặt theo tỷ lệ 4 – 6 nắp cho 1 lần giặt'
    ],
    benefits: [
      'Hương nắng mai rực rỡ',
      'Tràn đầy năng lượng',
      'Giữ màu tươi mới',
      'Khử mùi ẩm mốc',
      'Tự tin tỏa sáng cả ngày'
    ]
  },
  {
    id: 83,
    title: 'Nước giặt Hygiene Expert Wash Milky Touch Thái Lan túi 3 lít',
    category: 'Nước Giặt',
    subcategory: 'Hygiene',
    slug: 'nuoc-giat-hygiene-expert-wash-milky-touch-thai-lan-tui-3-lit',
    image: '/Product/Nưoc_giat_Hygiene/Wash_Milky_Touch.png',
    images: [
      
    ],
    isNew: true,
    inStock: true,
    description: 'Nước giặt Hygiene Expert Wash Milky Touch Thái Lan túi 3 lít được chiết xuất từ tinh chất sữa, mang lại hương thơm dịu nhẹ, ngọt lành như mùi phấn em bé. Sản phẩm vừa làm sạch sâu các vết bẩn, vừa nuôi dưỡng và chăm sóc từng sợi vải, giúp quần áo luôn mềm mại, êm ái khi mặc.',
    features: [
      'Khử mùi ẩm mốc, mùi bụi bẩn',
      'Đánh bật các vết bẩn cứng đầu khỏi sợi vải',
      'Ngăn cản chất bẩn bám trở lại quần áo trong khi giặt',
      'Giúp quần áo trắng sạch mềm mại',
      'Lưu lại hương thơm của cánh đồng hoa tươi mát',
      'Bảo vệ vải sợi được bền màu',
      'Chiết xuất từ tinh chất sữa',
      'Hương thơm dịu nhẹ như mùi phấn em bé'
    ],
    specifications: [
      { label: 'Xuất xứ', value: 'Thái Lan' },
      { label: 'Dung tích', value: '3 lít' },
      { label: 'Thương hiệu', value: 'Hygiene' }
    ],
    usage: [
      'Hòa tan kỹ nước giặt Hygiene Expert Wash với nước trước khi cho quần áo vào',
      'Tỷ lệ: 1 nắp đầy hòa với 3 – 4 lít nước',
      'Ngâm quần áo trong 5 phút, vò nhẹ, xả qua với nước',
      'Đối với máy giặt theo tỷ lệ 4 – 6 nắp cho 1 lần giặt'
    ],
    benefits: [
      'Chiết xuất tinh chất sữa',
      'Hương dịu nhẹ ngọt lành',
      'Nuôi dưỡng sợi vải',
      'Mềm mại êm ái',
      'Chăm sóc như em bé'
    ]
  },
  {
    id: 84,
    title: 'Nước giặt Hygiene Expert Wash Peony Bloom Thái Lan túi 3 lít',
    category: 'Nước Giặt',
    subcategory: 'Hygiene',
    slug: 'nuoc-giat-hygiene-expert-wash-peony-bloom-thai-lan-tui-3-lit',
    image: '/Product/Nưoc_giat_Hygiene/Wash_Peony_Bloom.png',
    images: [
      
    ],
    isNew: true,
    inStock: true,
    description: 'Nước giặt Hygiene Expert Wash Peony Bloom Thái Lan túi 3 lít nổi bật với hương hoa mẫu đơn sang trọng và tinh tế, mang lại cảm giác thanh lịch, cuốn hút cho từng bộ trang phục. Sản phẩm giúp đánh bay bụi bẩn và khử mùi ẩm mốc hiệu quả, giữ cho quần áo luôn thơm mát và sạch sẽ.',
    features: [
      'Khử mùi ẩm mốc, mùi bụi bẩn',
      'Đánh bật các vết bẩn cứng đầu khỏi sợi vải',
      'Ngăn cản chất bẩn bám trở lại quần áo trong khi giặt',
      'Giúp quần áo trắng sạch mềm mại',
      'Lưu lại hương thơm của cánh đồng hoa tươi mát',
      'Bảo vệ vải sợi được bền màu',
      'Hương hoa mẫu đơn sang trọng',
      'Mang lại cảm giác thanh lịch cuốn hút'
    ],
    specifications: [
      { label: 'Xuất xứ', value: 'Thái Lan' },
      { label: 'Dung tích', value: '3 lít' },
      { label: 'Thương hiệu', value: 'Hygiene' }
    ],
    usage: [
      'Hòa tan kỹ nước giặt Hygiene Expert Wash với nước trước khi cho quần áo vào',
      'Tỷ lệ: 1 nắp đầy hòa với 3 – 4 lít nước',
      'Ngâm quần áo trong 5 phút, vò nhẹ, xả qua với nước',
      'Đối với máy giặt theo tỷ lệ 4 – 6 nắp cho 1 lần giặt'
    ],
    benefits: [
      'Hương hoa mẫu đơn sang trọng',
      'Thanh lịch tinh tế',
      'Đánh bay bụi bẩn',
      'Khử mùi ẩm mốc hiệu quả',
      'Quần áo thơm mát sạch sẽ'
    ]
  },
  {
    id: 85,
    title: 'Nước giặt Hygiene Expert Wash Sweet Blossom Thái Lan túi 3 lít',
    category: 'Nước Giặt',
    subcategory: 'Hygiene',
    slug: 'nuoc-giat-hygiene-expert-wash-sweet-blossom-thai-lan-tui-3-lit',
    image: '/Product/Nưoc_giat_Hygiene/Wash_Sweet_Blossom.png',
    images: [
      
    ],
    isNew: true,
    inStock: true,
    description: 'Nước giặt Hygiene Expert Wash Sweet Blossom Thái Lan túi 3 lít mang hương hoa ngọt ngào, lôi cuốn và lưu hương dài lâu trong từng chuyển động. Với các phân tử làm sạch hoạt tính, sản phẩm giúp loại bỏ vết bẩn cứng đầu đồng thời khử mùi ẩm mốc hiệu quả.',
    features: [
      'Khử mùi ẩm mốc, mùi bụi bẩn',
      'Đánh bật các vết bẩn cứng đầu khỏi sợi vải',
      'Ngăn cản chất bẩn bám trở lại quần áo trong khi giặt',
      'Giúp quần áo trắng sạch mềm mại',
      'Lưu lại hương thơm của cánh đồng hoa tươi mát',
      'Bảo vệ vải sợi được bền màu',
      'Các phân tử làm sạch hoạt tính',
      'Hương hoa ngọt ngào lôi cuốn'
    ],
    specifications: [
      { label: 'Xuất xứ', value: 'Thái Lan' },
      { label: 'Dung tích', value: '3 lít' },
      { label: 'Thương hiệu', value: 'Hygiene' }
    ],
    usage: [
      'Hòa tan kỹ nước giặt Hygiene Expert Wash với nước trước khi cho quần áo vào',
      'Tỷ lệ: 1 nắp đầy hòa với 3 – 4 lít nước',
      'Ngâm quần áo trong 5 phút, vò nhẹ, xả qua với nước',
      'Đối với máy giặt theo tỷ lệ 4 – 6 nắp cho 1 lần giặt'
    ],
    benefits: [
      'Hương hoa ngọt ngào',
      'Lôi cuốn',
      'Lưu hương dài lâu',
      'Phân tử làm sạch hoạt tính',
      'Loại bỏ vết bẩn cứng đầu'
    ]
  },
  {
    id: 86,
    title: 'Nước giặt Okashi Hồng siêu lưu hương túi 2 lít',
    category: 'Nước Giặt',
    subcategory: 'Okashi',
    slug: 'nuoc-giat-okashi-hong-sieu-luu-huong-tui-2-lit',
    image: '/Product/Okashi/Pink1.png',
    images: [
      
    ],
    isNew: true,
    inStock: true,
    description: 'Nước giặt Okashi Hồng siêu lưu hương túi 2 lít với công nghệ lưu hương 3D hàng đầu từ Nhật Bản giúp áo quần luôn thơm tho, mềm mại và hoàn toàn an toàn cho da nhạy cảm. Nước giặt Okashi giúp đánh bay nhiều loại vết bẩn cứng đầu và giữ quần áo trắng sáng như mới. Hương Floral Sweet Scent nhẹ nhàng, quyến rũ, lưu hương bền lâu trên từng thớ vải.',
    features: [
      'Công nghệ giặt xả trong 1 lần 100% từ Nhật Bản',
      'Tiết kiệm thời gian',
      'Đánh bay các vết bẩn cứng đầu',
      'Bảo vệ màu sắc của quần áo luôn như mới',
      'Tỏa hương hoa sang trọng thơm ngát suốt ngày dài',
      'Công nghệ lưu hương 3D từ Nhật Bản',
      'An toàn cho da nhạy cảm',
      'Hương Floral Sweet Scent nhẹ nhàng quyến rũ'
    ],
    specifications: [
      { label: 'Xuất xứ', value: 'Thái Lan' },
      { label: 'Dung tích', value: '2 lít' },
      { label: 'Thương hiệu', value: 'Okashi' }
    ],
    usage: [
      'Ngâm sơ quần áo với nước sạch',
      'Hòa 15 – 30ml nước giặt trong khoảng 3-4L nước'
    ],
    benefits: [
      'Công nghệ lưu hương 3D',
      'Giặt xả trong 1 lần',
      'Thơm tho mềm mại',
      'An toàn cho da',
      'Lưu hương bền lâu'
    ]
  },
  {
    id: 87,
    title: 'Nước giặt Okashi Xanh siêu lưu hương túi 2 lít',
    category: 'Nước Giặt',
    subcategory: 'Okashi',
    slug: 'nuoc-giat-okashi-xanh-sieu-luu-huong-tui-2-lit',
    image: '/Product/Okashi/Blue1.png',
    images: [
      
    ],
    isNew: true,
    inStock: true,
    description: 'Nước giặt Okashi Xanh siêu lưu hương túi 2 lít với công nghệ lưu hương 3D hàng đầu từ Nhật Bản giúp áo quần luôn thơm tho, mềm mại và hoàn toàn an toàn cho da nhạy cảm. Nước giặt Okashi còn giúp ngăn chặn vi khuẩn, ẩm mốc, mềm mại với da tay, thân thiện với môi trường, bảo vệ màu sắc của quần áo luôn như mới.',
    features: [
      'Công nghệ giặt xả trong 1 lần 100% từ Nhật Bản',
      'Tiết kiệm thời gian',
      'Đánh bay các vết bẩn cứng đầu',
      'Bảo vệ màu sắc của quần áo luôn như mới',
      'Tỏa hương hoa sang trọng thơm ngát suốt ngày dài',
      'Công nghệ lưu hương 3D từ Nhật Bản',
      'Ngăn chặn vi khuẩn, ẩm mốc',
      'Thân thiện với môi trường'
    ],
    specifications: [
      { label: 'Xuất xứ', value: 'Thái Lan' },
      { label: 'Dung tích', value: '2 lít' },
      { label: 'Thương hiệu', value: 'Okashi' }
    ],
    usage: [
      'Ngâm sơ quần áo với nước sạch',
      'Hòa 15 – 30ml nước giặt trong khoảng 3-4L nước'
    ],
    benefits: [
      'Công nghệ lưu hương 3D',
      'Giặt xả trong 1 lần',
      'Ngăn vi khuẩn ẩm mốc',
      'Mềm mại với da tay',
      'Thân thiện môi trường'
    ]
  },
  {
    id: 88,
    title: 'Nước giặt xả Deemee hương hoa mẫu đơn nồng nàn túi 2 kg',
    category: 'Nước Giặt',
    subcategory: 'Deemee',
    slug: 'nuoc-giat-xa-deemee-huong-hoa-mau-don-nong-nan-tui-2-kg',
    image: '/Product/Deemee/do.png',
    images: [
      '/Product/Deemee/sau_do.png'
    ],
    isNew: true,
    inStock: true,
    description: 'Nước giặt Deemee hương hoa Mẫu Đơn nồng nàn được chiết xuất từ hoa mẫu đơn mùa xuân – biểu tượng của sự quyến rũ và tinh tế. Hương thơm len lỏi vào từng sợi vải, lan tỏa cảm giác cuốn hút suốt cả ngày dài. Sản phẩm ứng dụng công nghệ lưu hương thông minh từ Thái Lan, giúp giữ mùi thơm bền lâu hơn 24 giờ, cho bạn luôn tự tin và rạng rỡ trong từng khoảnh khắc.',
    features: [
      'Công nghệ lưu hương thông minh Thái Lan',
      'Loại bỏ vết bẩn hiệu quả',
      'Hương hoa mẫu đơn nồng nàn kiêu sa',
      'Phù hợp với mọi loại vải',
      'An toàn cho giặt tay và giặt máy',
      'Bảo vệ từng sợi vải khỏi tia UV',
      'Giữ quần áo bền đẹp',
      'Lưu hương hơn 24 giờ'
    ],
    specifications: [
      { label: 'Xuất xứ', value: 'Thái Lan' },
      { label: 'Khối lượng', value: '2 kg' },
      { label: 'Thương hiệu', value: 'Deemee' }
    ],
    usage: [
      'Giặt máy: Cho 65ml nước giặt vào máy giặt dùng cho 6–7 Kg quần áo',
      'Chọn chế độ giặt phù hợp',
      'Giặt tay: Cho 35ml nước giặt hòa tan vào 4–5 L nước cho 8–10 chiếc quần áo',
      'Vò nhẹ và xả lại với nước sạch'
    ],
    benefits: [
      'Hương hoa mẫu đơn quyến rũ',
      'Lưu hương hơn 24h',
      'Bảo vệ khỏi tia UV',
      'Tự tin cuốn hút',
      'Tiết kiệm thời gian'
    ]
  },
  {
    id: 89,
    title: 'Nước giặt xả Deemee hương hoa mộc lan thanh khiết túi 2 kg',
    category: 'Nước Giặt',
    subcategory: 'Deemee',
    slug: 'nuoc-giat-xa-deemee-huong-hoa-moc-lan-thanh-khiet-tui-2-kg',
    image: '/Product/Deemee/vang.png',
    images: [
      '/Product/Deemee/sau_vang.png'
    ],
    isNew: true,
    inStock: true,
    description: 'Nước giặt Deemee hương hoa Mộc Lan thanh khiết là lựa chọn lý tưởng cho những ai yêu thích sự nhẹ nhàng và tinh tế. Với công nghệ lưu hương thông minh từ Thái Lan, sản phẩm giúp giữ mùi hương thanh khiết bền lâu trên từng sợi vải suốt 24 giờ. Hương thơm từ cánh hoa Mộc Lan mang đến cảm giác thư giãn, dễ chịu mỗi khi mặc. Nước giặt Deemee không chỉ làm sạch hiệu quả mà còn lan tỏa mùi hương thanh khiết trong từng chuyển động – cho bạn luôn tự tin và rạng rỡ cả ngày dài.',
    features: [
      'Công nghệ lưu hương thông minh Thái Lan',
      'Loại bỏ vết bẩn hiệu quả',
      'Hương mộc lan nhẹ nhàng thanh khiết',
      'Phù hợp với mọi loại vải',
      'An toàn cho giặt tay và giặt máy',
      'Bảo vệ từng sợi vải khỏi tia UV',
      'Giữ quần áo bền đẹp',
      'Lưu hương 24 giờ'
    ],
    specifications: [
      { label: 'Xuất xứ', value: 'Thái Lan' },
      { label: 'Khối lượng', value: '2 kg' },
      { label: 'Thương hiệu', value: 'Deemee' }
    ],
    usage: [
      'Giặt máy: Cho 65ml nước giặt vào máy giặt dùng cho 6–7 Kg quần áo',
      'Chọn chế độ giặt phù hợp',
      'Giặt tay: Cho 35ml nước giặt hòa tan vào 4–5 L nước cho 8–10 chiếc quần áo',
      'Vò nhẹ và xả lại với nước sạch'
    ],
    benefits: [
      'Hương mộc lan thanh khiết',
      'Lưu hương 24h',
      'Thư giãn thoải mái',
      'Bảo vệ khỏi tia UV',
      'Tiết kiệm thời gian'
    ]
  },
  {
    id: 90,
    title: 'Nước giặt xả Deemee hương hoa violet quyến rũ túi 2 kg',
    category: 'Nước Giặt',
    subcategory: 'Deemee',
    slug: 'nuoc-giat-xa-deemee-huong-hoa-violet-quyen-ru-tui-2-kg',
    image: '/Product/Deemee/violet.png',
    images: [
      '/Product/Deemee/sau_violet.png'
    ],
    isNew: true,
    inStock: true,
    description: 'Nước giặt Deemee hương hoa Violet mang đến hương thơm say đắm từ những cánh hoa Violet dịu dàng. Từng giọt nước giặt được ứng dụng công nghệ lưu hương thông minh từ Thái Lan, giúp hương thơm quyến rũ vương vấn dài lâu trên từng sợi vải, như lời thì thầm nhẹ nhàng đánh thức mọi giác quan.',
    features: [
      'Công nghệ lưu hương thông minh Thái Lan',
      'Làm sạch hiệu quả',
      'Hương Violet quyến rũ mê hoặc',
      'An toàn cho mọi loại vải',
      'Dùng được cho cả giặt tay và giặt máy',
      'Bảo vệ sợi vải khỏi tia UV',
      'Giữ quần áo bền màu và mềm mại',
      'Lưu hương suốt cả ngày'
    ],
    specifications: [
      { label: 'Xuất xứ', value: 'Thái Lan' },
      { label: 'Khối lượng', value: '2 kg' },
      { label: 'Thương hiệu', value: 'Deemee' }
    ],
    usage: [
      'Giặt máy: Cho 65ml nước giặt vào máy giặt dùng cho 6–7 Kg quần áo',
      'Chọn chế độ giặt phù hợp',
      'Giặt tay: Cho 35ml nước giặt hòa tan vào 4–5 L nước cho 8–10 chiếc quần áo',
      'Vò nhẹ và xả lại với nước sạch'
    ],
    benefits: [
      'Hương violet quyến rũ',
      'Lưu hương lâu',
      'Tạo dấu ấn riêng',
      'Bảo vệ khỏi tia UV',
      'Bền màu mềm mại'
    ]
  },
  {
    id: 91,
    title: 'Nước xả Comfort Thái Lan Hương Hoa Tulip túi 500ml',
    category: 'Nước Xả',
    subcategory: 'Comfort',
    slug: 'nuoc-xa-comfort-thai-lan-huong-hoa-tulip-tui-500ml',
    image: '/Product/Comfort/tulip.png',
    images: [
      
    ],
    isNew: true,
    inStock: true,
    description: 'Nước xả Comfort Thái Lan Hương Hoa Tulip túi 500ml sở hữu công thức 5in1 giúp làm mềm vải, lưu hương thơm lâu, bảo vệ màu sắc, chăm sóc sợi vải và hỗ trợ ủi dễ dàng. Hương vườn hoa tulip tươi mới, ngọt ngào mang đến cảm giác thư thái và sang trọng cho từng bộ quần áo.',
    features: [
      'Công thức 5in1 vượt trội',
      'Làm mềm vải hiệu quả',
      'Lưu hương thơm lâu',
      'Bảo vệ màu sắc',
      'Chăm sóc sợi vải',
      'Hỗ trợ ủi dễ dàng',
      'Giảm nhăn hiệu quả',
      'Hương vườn tulip tươi mới ngọt ngào'
    ],
    specifications: [
      { label: 'Xuất xứ', value: 'Thái Lan' },
      { label: 'Dung tích', value: '500ml' },
      { label: 'Thương hiệu', value: 'Comfort' }
    ],
    usage: [
      'Sau khi giặt quần áo với xà bông, hòa tan Nước xả Comfort Thái Lan vào nước',
      'Ngâm với quần áo khoảng 10 phút',
      'Sau đó vắt ráo và phơi khô'
    ],
    benefits: [
      'Hương tulip tươi mới',
      'Cảm giác thư thái sang trọng',
      'Quần áo mềm mại',
      'Giảm nhăn',
      'Lưu hương lâu'
    ]
  },
  {
    id: 92,
    title: 'Nước xả Comfort Thái Lan Hương Hoa Hồng túi 500ml',
    category: 'Nước Xả',
    subcategory: 'Comfort',
    slug: 'nuoc-xa-comfort-thai-lan-huong-hoa-hong-tui-500ml',
    image: '/Product/Comfort/hong.png',
    images: [
      
    ],
    isNew: true,
    inStock: true,
    description: 'Nước xả Comfort Thái Lan Hương Hoa Hồng túi 500ml mang đến hương hoa hồng ngọt ngào, lãng mạn và lưu hương bền lâu trên từng sợi vải. Nước giặt Thái có công thức 5in1 giúp quần áo mềm mại, giảm nhăn, giữ màu tươi sáng, bảo vệ sợi vải và khử mùi hiệu quả.',
    features: [
      'Công thức 5in1 vượt trội',
      'Làm mềm vải hiệu quả',
      'Giảm nhăn',
      'Giữ màu tươi sáng',
      'Bảo vệ sợi vải',
      'Khử mùi hiệu quả',
      'Lưu hương bền lâu',
      'Hương hoa hồng ngọt ngào lãng mạn'
    ],
    specifications: [
      { label: 'Xuất xứ', value: 'Thái Lan' },
      { label: 'Dung tích', value: '500ml' },
      { label: 'Thương hiệu', value: 'Comfort' }
    ],
    usage: [
      'Sau khi giặt quần áo với xà bông, hòa tan Nước xả Comfort Thái Lan vào nước',
      'Ngâm với quần áo khoảng 10 phút',
      'Sau đó vắt ráo và phơi khô'
    ],
    benefits: [
      'Hương hoa hồng ngọt ngão',
      'Lãng mạn',
      'Quần áo thơm ngát',
      'Mềm mại dễ chịu',
      'Giữ màu tươi sáng'
    ]
  },
  {
    id: 93,
    title: 'Nước xả Comfort Thái Lan Hương Hoa Vườn Đêm túi 500ml',
    category: 'Nước Xả',
    subcategory: 'Comfort',
    slug: 'nuoc-xa-comfort-thai-lan-huong-hoa-vuon-dem-tui-500ml',
    image: '/Product/Comfort/vuon_dem.png',
    images: [
      
    ],
    isNew: true,
    inStock: true,
    description: 'Nước xả Comfort Thái Lan Hương Hoa Vườn Đêm túi 500ml sở hữu công thức 5in1 giúp quần áo mềm mại, giữ màu tươi sáng, giảm nhăn, khử mùi và lưu hương bền lâu. Hương hoa vườn đêm thanh mát và quyến rũ mang lại cảm giác thư giãn, dễ chịu suốt cả ngày.',
    features: [
      'Công thức 5in1 vượt trội',
      'Giúp vải mềm mại',
      'Giữ màu tươi sáng',
      'Giảm nhăn hiệu quả',
      'Khử mùi',
      'Lưu hương bền lâu',
      'Giữ vải không bị khô cứng',
      'Dễ ủi',
      'Hương vườn đêm thanh mát quyến rũ'
    ],
    specifications: [
      { label: 'Xuất xứ', value: 'Thái Lan' },
      { label: 'Dung tích', value: '500ml' },
      { label: 'Thương hiệu', value: 'Comfort' }
    ],
    usage: [
      'Sau khi giặt quần áo với xà bông, hòa tan Nước xả Comfort Thái Lan vào nước',
      'Ngâm với quần áo khoảng 10 phút',
      'Sau đó vắt ráo và phơi khô'
    ],
    benefits: [
      'Hương vườn đêm quyến rũ',
      'Thư giãn dễ chịu',
      'Mềm mại',
      'Dễ ủi',
      'Thơm ngát suốt ngày'
    ]
  },
  {
    id: 94,
    title: 'Nước xả Comfort Thái Lan Hương Hoa Cúc Chamomile túi 500ml',
    category: 'Nước Xả',
    subcategory: 'Comfort',
    slug: 'nuoc-xa-comfort-thai-lan-huong-hoa-cuc-chamomile-tui-500ml',
    image: '/Product/Comfort/cuc.png',
    images: [
      
    ],
    isNew: true,
    inStock: true,
    description: 'Nước xả Comfort Thái Lan Hương Hoa Cúc Chamomile túi 500ml với công thức 5in1 mang lại lợi ích vượt trội như làm mềm vải, giữ màu tươi sáng, giảm nhăn, khử mùi và lưu hương dài lâu. Hương hoa cúc tinh khiết nhẹ nhàng, thanh mát giúp quần áo luôn thơm ngát và mang lại cảm giác dễ chịu suốt cả ngày.',
    features: [
      'Công thức 5in1 vượt trội',
      'Làm mềm vải',
      'Giữ màu tươi sáng',
      'Giảm nhăn',
      'Khử mùi',
      'Lưu hương dài lâu',
      'Vải không bị khô cứng',
      'Dễ ủi',
      'Hương hoa cúc tinh khiết nhẹ nhàng'
    ],
    specifications: [
      { label: 'Xuất xứ', value: 'Thái Lan' },
      { label: 'Dung tích', value: '500ml' },
      { label: 'Thương hiệu', value: 'Comfort' }
    ],
    usage: [
      'Sau khi giặt quần áo với xà bông, hòa tan Nước xả Comfort Thái Lan vào nước',
      'Ngâm với quần áo khoảng 10 phút',
      'Sau đó vắt ráo và phơi khô'
    ],
    benefits: [
      'Hương chamomile tinh khiết',
      'Nhẹ nhàng thanh mát',
      'Mềm mại',
      'Dễ ủi',
      'Thơm ngát suốt ngày'
    ]
  },
  {
    id: 95,
    title: 'Nước xả Comfort Thái Lan Hương Hoa Sớm Mai túi 500ml',
    category: 'Nước Xả',
    subcategory: 'Comfort',
    slug: 'nuoc-xa-comfort-thai-lan-huong-hoa-som-mai-tui-500ml',
    image: '/Product/Comfort/som_mai.png',
    images: [
      
    ],
    isNew: true,
    inStock: true,
    description: 'Nước xả Comfort Thái Lan Hương Hoa Sớm Mai túi 500ml với công thức 5in1 mang lại lợi ích vượt trội như làm mềm vải, giữ màu tươi sáng, giảm nhăn, khử mùi và lưu hương dài lâu. Hương hoa sớm mai thanh khiết, tươi mát đem lại cảm giác sảng khoái như làn gió ban mai, kể cả khi phơi trong nhà.',
    features: [
      'Công thức 5in1 vượt trội',
      'Làm mềm vải',
      'Giữ màu tươi sáng',
      'Giảm nhăn',
      'Khử mùi',
      'Lưu hương dài lâu',
      'Vải không bị khô cứng',
      'Dễ ủi',
      'Hương sớm mai thanh khiết tươi mát'
    ],
    specifications: [
      { label: 'Xuất xứ', value: 'Thái Lan' },
      { label: 'Dung tích', value: '500ml' },
      { label: 'Thương hiệu', value: 'Comfort' }
    ],
    usage: [
      'Sau khi giặt quần áo với xà bông, hòa tan Nước xả Comfort Thái Lan vào nước',
      'Ngâm với quần áo khoảng 10 phút',
      'Sau đó vắt ráo và phơi khô'
    ],
    benefits: [
      'Hương sớm mai thanh khiết',
      'Tươi mát sảng khoái',
      'Mềm mại',
      'Dễ ủi',
      'Thơm ngát cả khi phơi trong nhà'
    ]
  },
  {
    id: 96,
    title: 'Sữa tắm Sofia Goat\'s Milk 1000ml',
    category: 'Chăm Sóc Da',
    subcategory: 'Sữa tắm Sofia',
    slug: 'sua-tam-sofia-goats-milk-1000ml',
    image: '/Product/Sua_tam_Sofia/Goat_Milk_1000ml.png',
    images: [],
    isNew: true,
    inStock: true,
    description: 'Sữa tắm Sofia Goat\'s Milk với chiết xuất sữa dê giúp làm sạch dịu nhẹ, đồng thời nuôi dưỡng làn da mềm mịn và trắng sáng. Sản phẩm có hương thơm dịu nhẹ từ sữa dê giúp cơ thể luôn thơm tho, dễ chịu suốt cả ngày dài.',
    metaDescription: 'Sữa tắm chiết xuất sữa dê giúp làm sạch nhẹ nhàng, dưỡng ẩm sâu, phù hợp da khô và nhạy cảm, mang lại làn da mềm mịn và thơm dịu suốt cả ngày.',
    features: [
      'Sữa tắm Sofia giúp làm sạch nhẹ nhàng bụi bẩn và bã nhờn trên da, đồng thời cung cấp độ ẩm và dưỡng chất giúp da mềm mại, mịn màng và tươi sáng hơn sau mỗi lần tắm.',
      'Với chiết xuất thiên nhiên, Sofia không chỉ giúp làm sạch da hiệu quả mà còn hỗ trợ chống lão hóa, khử mùi cơ thể và mang lại hương thơm dễ chịu, thư giãn tinh thần.'
    ],
    specifications: [
      { label: 'Xuất xứ', value: 'Thái Lan' },
      { label: 'Dung tích', value: '1000ml' }
    ],
    usage: [
      'Làm ướt toàn thân.',
      'Lấy một lượng sữa tắm vừa đủ ra tay hoặc bông tắm, tạo bọt nhẹ nhàng.',
      'Thoa đều khắp cơ thể và massage nhẹ trong 1–2 phút để dưỡng chất thẩm thấu.',
      'Tắm sạch lại với nước.',
      'Dùng hàng ngày để đạt hiệu quả dưỡng da tốt nhất.'
    ],
    benefits: [
      'Chiết xuất sữa dê tự nhiên',
      'Làm sạch dịu nhẹ',
      'Nuôi dưỡng da mềm mịn',
      'Hương thơm dịu nhẹ',
      'Phù hợp da khô và nhạy cảm'
    ]
  },
  {
    id: 97,
    title: 'Sữa tắm Sofia Pomelo 1000ml',
    category: 'Chăm Sóc Da',
    subcategory: 'Sữa tắm Sofia',
    slug: 'sua-tam-sofia-pomelo-1000ml',
    image: '/Product/Sua_tam_Sofia/Pomelo1000ml.png',
    images: [],
    isNew: true,
    inStock: true,
    description: 'Sữa tắm Sofia Pomelo với chiết xuất từ tinh chất bưởi tươi mang đến cảm giác tươi mát và sảng khoái tức thì. Sản phẩm không chỉ giúp làm sạch dịu nhẹ, mà còn nuôi dưỡng làn da mềm mịn và trắng sáng',
    metaDescription: 'Chiết xuất bưởi tươi giúp làm sạch sâu, khử mùi hiệu quả và mang lại cảm giác sảng khoái, tươi mới mỗi ngày. Phù hợp cho da dầu và người năng động.',
    features: [
      'Sữa tắm Sofia giúp làm sạch nhẹ nhàng bụi bẩn và bã nhờn trên da, đồng thời cung cấp độ ẩm và dưỡng chất giúp da mềm mại, mịn màng và tươi sáng hơn sau mỗi lần tắm.',
      'Với chiết xuất thiên nhiên, Sofia không chỉ giúp làm sạch da hiệu quả mà còn hỗ trợ chống lão hóa, khử mùi cơ thể và mang lại hương thơm dễ chịu, thư giãn tinh thần.'
    ],
    specifications: [
      { label: 'Xuất xứ', value: 'Thái Lan' },
      { label: 'Dung tích', value: '1000ml' }
    ],
    usage: [
      'Làm ướt toàn thân.',
      'Lấy một lượng sữa tắm vừa đủ ra tay hoặc bông tắm, tạo bọt nhẹ nhàng.',
      'Thoa đều khắp cơ thể và massage nhẹ trong 1–2 phút để dưỡng chất thẩm thấu.',
      'Tắm sạch lại với nước.',
      'Dùng hàng ngày để đạt hiệu quả dưỡng da tốt nhất.'
    ],
    benefits: [
      'Chiết xuất bưởi tươi tự nhiên',
      'Cảm giác tươi mát sảng khoái',
      'Làm sạch sâu và khử mùi hiệu quả',
      'Phù hợp da dầu và người năng động',
      'Nuôi dưỡng da mềm mịn'
    ]
  },
  {
    id: 98,
    title: 'Sữa tắm Sofia Royal Jelly 1000ml',
    category: 'Chăm Sóc Da',
    subcategory: 'Sữa tắm Sofia',
    slug: 'sua-tam-sofia-royal-jelly-1000ml',
    image: '/Product/Sua_tam_Sofia/RoyalJelly1000ml.png',
    images: [],
    isNew: true,
    inStock: true,
    description: 'Sữa tắm Sofia Royal Jelly chứa chiết xuất sữa ong chúa giàu dưỡng chất, giúp nuôi dưỡng làn da sáng khỏe và mềm mại. Hương thơm ngọt ngào, ấm áp đặc trưng của sữa ong chúa mang lại cảm giác thư giãn, dễ chịu, giúp bạn thêm phần tự tin và cuốn hút sau mỗi lần tắm.',
    metaDescription: 'Bổ sung dưỡng chất từ sữa ong chúa, giúp da mềm mịn, sáng khỏe và ngăn ngừa lão hóa. Làm sạch nhẹ nhàng, phù hợp da mệt mỏi, thiếu sức sống.',
    features: [
      'Sữa tắm Sofia giúp làm sạch nhẹ nhàng bụi bẩn và bã nhờn trên da, đồng thời cung cấp độ ẩm và dưỡng chất giúp da mềm mại, mịn màng và tươi sáng hơn sau mỗi lần tắm.',
      'Với chiết xuất thiên nhiên, Sofia không chỉ giúp làm sạch da hiệu quả mà còn hỗ trợ chống lão hóa, khử mùi cơ thể và mang lại hương thơm dễ chịu, thư giãn tinh thần.'
    ],
    specifications: [
      { label: 'Xuất xứ', value: 'Thái Lan' },
      { label: 'Dung tích', value: '1000ml' }
    ],
    usage: [
      'Làm ướt toàn thân.',
      'Lấy một lượng sữa tắm vừa đủ ra tay hoặc bông tắm, tạo bọt nhẹ nhàng.',
      'Thoa đều khắp cơ thể và massage nhẹ trong 1–2 phút để dưỡng chất thẩm thấu.',
      'Tắm sạch lại với nước.',
      'Dùng hàng ngày để đạt hiệu quả dưỡng da tốt nhất.'
    ],
    benefits: [
      'Chiết xuất sữa ong chúa giàu dưỡng chất',
      'Nuôi dưỡng da sáng khỏe',
      'Hương thơm ngọt ngào ấm áp',
      'Chống lão hóa hiệu quả',
      'Phù hợp da mệt mỏi, thiếu sức sống'
    ]
  },
  {
    id: 99,
    title: 'Sữa tắm Sofia Rose 1000ml',
    category: 'Chăm Sóc Da',
    subcategory: 'Sữa tắm Sofia',
    slug: 'sua-tam-sofia-rose-1000ml',
    image: '/Product/Sua_tam_Sofia/Rose1000ml.png',
    images: [],
    isNew: true,
    inStock: true,
    description: 'Sữa tắm Sofia Rose giúp làn da được làm sạch dịu nhẹ, đồng thời cân bằng độ ẩm làn da hiệu quả. Với hương thơm hoa hồng quyến rũ giúp bạn thêm tự tin cuốn hút.',
    metaDescription: 'Hương hoa hồng quyến rũ, giúp làm sạch và dưỡng ẩm cho da. Chống oxy hóa, mang lại làn da mịn màng và cảm giác thư giãn như spa tại nhà.',
    features: [
      'Sữa tắm Sofia giúp làm sạch nhẹ nhàng bụi bẩn và bã nhờn trên da, đồng thời cung cấp độ ẩm và dưỡng chất giúp da mềm mại, mịn màng và tươi sáng hơn sau mỗi lần tắm.',
      'Với chiết xuất thiên nhiên, Sofia không chỉ giúp làm sạch da hiệu quả mà còn hỗ trợ chống lão hóa, khử mùi cơ thể và mang lại hương thơm dễ chịu, thư giãn tinh thần.'
    ],
    specifications: [
      { label: 'Xuất xứ', value: 'Thái Lan' },
      { label: 'Dung tích', value: '1000ml' }
    ],
    usage: [
      'Làm ướt toàn thân.',
      'Lấy một lượng sữa tắm vừa đủ ra tay hoặc bông tắm, tạo bọt nhẹ nhàng.',
      'Thoa đều khắp cơ thể và massage nhẹ trong 1–2 phút để dưỡng chất thẩm thấu.',
      'Tắm sạch lại với nước.',
      'Dùng hàng ngày để đạt hiệu quả dưỡng da tốt nhất.'
    ],
    benefits: [
      'Hương hoa hồng quyến rũ',
      'Cân bằng độ ẩm hiệu quả',
      'Chống oxy hóa',
      'Cảm giác thư giãn như spa',
      'Làn da mịn màng'
    ]
  },
  {
    id: 100,
    title: 'Sữa tắm Sofia Lavender 1000ml',
    category: 'Chăm Sóc Da',
    subcategory: 'Sữa tắm Sofia',
    slug: 'sua-tam-sofia-lavender-1000ml',
    image: '/Product/Sua_tam_Sofia/Lavender.png',
    images: [],
    isNew: true,
    inStock: true,
    description: 'Sữa tắm Sofia Lavender được chiết xuất từ hoa oải hương tự nhiên, giúp làm sạch da nhẹ nhàng, cân bằng độ ẩm và mang lại mùi hương dịu nhẹ.',
    metaDescription: 'Chiết xuất oải hương tự nhiên giúp thư giãn tinh thần, làm sạch da nhẹ nhàng và hỗ trợ giấc ngủ sâu. Thích hợp dùng buổi tối hoặc sau ngày dài mệt mỏi.',
    features: [
      'Sữa tắm Sofia giúp làm sạch nhẹ nhàng bụi bẩn và bã nhờn trên da, đồng thời cung cấp độ ẩm và dưỡng chất giúp da mềm mại, mịn màng và tươi sáng hơn sau mỗi lần tắm.',
      'Với chiết xuất thiên nhiên, Sofia không chỉ giúp làm sạch da hiệu quả mà còn hỗ trợ chống lão hóa, khử mùi cơ thể và mang lại hương thơm dễ chịu, thư giãn tinh thần.'
    ],
    specifications: [
      { label: 'Xuất xứ', value: 'Thái Lan' },
      { label: 'Dung tích', value: '1000ml' }
    ],
    usage: [
      'Làm ướt toàn thân.',
      'Lấy một lượng sữa tắm vừa đủ ra tay hoặc bông tắm, tạo bọt nhẹ nhàng.',
      'Thoa đều khắp cơ thể và massage nhẹ trong 1–2 phút để dưỡng chất thẩm thấu.',
      'Tắm sạch lại với nước.',
      'Dùng hàng ngày để đạt hiệu quả dưỡng da tốt nhất.'
    ],
    benefits: [
      'Chiết xuất oải hương tự nhiên',
      'Thư giãn tinh thần',
      'Hỗ trợ giấc ngủ sâu',
      'Thích hợp buổi tối',
      'Cân bằng độ ẩm da'
    ]
  },
  {
    id: 101,
    title: 'Sữa Tắm Ngựa Nâu Mistine Top Country Thái Lan 500ml',
    category: 'Chăm Sóc Da',
    subcategory: 'Sữa tắm Mistine Top Country',
    slug: 'sua-tam-ngua-nau-mistine-top-country-thai-lan-500ml',
    image: '/Product/Mistine.png',
    images: [],
    isNew: true,
    inStock: true,
    description: 'Sữa tắm Ngựa Nâu Mistine Top Country 500ml là dòng sữa tắm cao cấp đến từ Thái Lan, được thiết kế dành riêng cho nam giới với hương thơm mạnh mẽ, nam tính và đầy cuốn hút. Sản phẩm không chỉ giúp làm sạch bụi bẩn, mồ hôi và bã nhờn hiệu quả mà còn giúp dưỡng ẩm, làm mềm da và cải thiện độ đàn hồi.',
    metaDescription: 'Sữa tắm Ngựa Nâu Mistine Top Country 500ml Thái Lan làm sạch sâu, khử mùi hiệu quả, dưỡng ẩm và lưu hương nam tính mạnh mẽ, giúp phái mạnh luôn tự tin, sảng khoái.',
    features: [
      'Sản phẩm giúp duy trì độ ẩm tự nhiên, nuôi dưỡng làn da mềm mại, khỏe khoắn và đàn hồi tốt hơn.',
      'Đồng thời, sữa tắm giúp loại bỏ mùi hôi cơ thể hiệu quả, mang lại cảm giác sạch sẽ, khô thoáng và tự tin suốt cả ngày dài. Đặc biệt, hương thơm mạnh mẽ, nam tính được lưu giữ lâu trên da, tạo nên phong cách cuốn hút riêng biệt cho phái mạnh.'
    ],
    specifications: [
      { label: 'Xuất xứ', value: 'Thái Lan' },
      { label: 'Dung tích', value: '500ml' }
    ],
    usage: [
      'Làm ướt toàn thân.',
      'Lấy một lượng sữa tắm vừa đủ ra tay hoặc bông tắm, tạo bọt nhẹ nhàng.',
      'Thoa đều khắp cơ thể và massage nhẹ trong 1–2 phút để dưỡng chất thẩm thấu.',
      'Tắm sạch lại với nước.',
      'Dùng hàng ngày để đạt hiệu quả dưỡng da tốt nhất.'
    ],
    benefits: [
      'Hương thơm mạnh mẽ, nam tính',
      'Làm sạch sâu và khử mùi hiệu quả',
      'Dưỡng ẩm và làm mềm da',
      'Cải thiện độ đàn hồi da',
      'Lưu hương lâu trên da',
      'Thiết kế dành riêng cho nam giới'
    ]
  },
  {
    id: 102,
    title: 'Sữa Tắm Cá Ngựa Algemarin Exclusive Perfume 300ml',
    category: 'Chăm Sóc Da',
    subcategory: 'Algemarin',
    slug: 'sua-tam-ca-ngua-algemarin-exclusive-perfume-300ml',
    image: '/Product/Algemarin/duc_300.png',
    images: [],
    isNew: true,
    inStock: true,
    description: 'Sữa Tắm Cá Ngựa Algemarin Exclusive Perfume 300ml xuất xứ từ Đức, nổi bật với thành phần chiết xuất từ tinh dầu cá ngựa, các loài hoa và vitamin, mang lại làn da mềm mại, khỏe khoắn và tràn đầy sức sống',
    metaDescription: 'Sữa Tắm Cá Ngựa Algemarin Exclusive Perfume 300ml mang lại làn da mềm mại, khỏe khoắn và tràn đầy sức sống',
    features: [
      'Sữa tắm cá ngựa Đức Algemarin 300ml giúp làm sạch nhẹ nhàng, loại bỏ bụi bẩn và tạp chất mà vẫn giữ được độ ẩm tự nhiên của da.',
      'Nhờ tinh dầu cá ngựa giàu protein và dưỡng chất, sản phẩm nuôi dưỡng làn da mềm mịn, khỏe mạnh và duy trì độ đàn hồi.',
      'Hương thơm sang trọng, lưu hương dài lâu mang đến cảm giác thư giãn và tự tin suốt cả ngày.'
    ],
    specifications: [
      { label: 'Xuất xứ', value: 'Thái Lan' },
      { label: 'Dung tích', value: '300ml' }
    ],
    usage: [
      'Dùng trực tiếp lên da ướt, tắm sạch với nước sạch để làn da được mịn màng và trắng sáng.'
    ],
    benefits: [
      'Chiết xuất tinh dầu cá ngựa',
      'Thành phần hoa và vitamin',
      'Làn da mềm mại, khỏe khoắn',
      'Tràn đầy sức sống',
      'Hương thơm sang trọng',
      'Lưu hương dài lâu'
    ]
  },
  {
    id: 103,
    title: 'Sữa Tắm Cá Ngựa Algemarin Exclusive Perfume 600ml',
    category: 'Chăm Sóc Da',
    subcategory: 'Algemarin',
    slug: 'sua-tam-ca-ngua-algemarin-exclusive-perfume-600ml',
    image: '/Product/Algemarin/duc_600.png',
    images: [],
    isNew: true,
    inStock: true,
    description: 'Sữa Tắm Cá Ngựa Algemarin Exclusive Perfume 600ml xuất xứ từ Đức, nổi bật với thành phần chiết xuất từ tinh dầu cá ngựa, các loài hoa và vitamin, mang lại làn da mềm mại, khỏe khoắn và tràn đầy sức sống',
    metaDescription: 'Sữa Tắm Cá Ngựa Algemarin Exclusive Perfume 600ml mang lại làn da mềm mại, khỏe khoắn và tràn đầy sức sống',
    features: [
      'Sữa tắm cá ngựa Đức Algemarin 600ml giúp làm sạch nhẹ nhàng, loại bỏ bụi bẩn và tạp chất mà vẫn giữ được độ ẩm tự nhiên của da.',
      'Nhờ tinh dầu cá ngựa giàu protein và dưỡng chất, sản phẩm nuôi dưỡng làn da mềm mịn, khỏe mạnh và duy trì độ đàn hồi.',
      'Hương thơm sang trọng, lưu hương dài lâu mang đến cảm giác thư giãn và tự tin suốt cả ngày.'
    ],
    specifications: [
      { label: 'Xuất xứ', value: 'Thái Lan' },
      { label: 'Dung tích', value: '600ml' }
    ],
    usage: [
      'Dùng trực tiếp lên da ướt, tắm sạch với nước sạch để làn da được mịn màng và trắng sáng.'
    ],
    benefits: [
      'Chiết xuất tinh dầu cá ngựa',
      'Thành phần hoa và vitamin',
      'Làn da mềm mại, khỏe khoắn',
      'Tràn đầy sức sống',
      'Hương thơm sang trọng',
      'Lưu hương dài lâu',
      'Dung tích lớn tiết kiệm'
    ]
  },
  // Okashi Dishwashing Liquids
  {
    id: 104,
    title: 'Nước Rửa Chén Okashi Hương Tinh Dầu Quế & Muối Khoáng Chai 1000ml',
    category: 'Nước Rửa Chén',
    subcategory: 'Okashi',
    slug: 'nuoc-rua-chen-okashi-huong-tinh-dau-que-muoi-khoang-1000ml',
    image: '/Product/Okashi/okashi_que_muoikhoang.png', // Placeholder - will need actual image
    images: [],
    isNew: false,
    inStock: true,
    description: 'Nước Rửa Chén Okashi Hương Tinh Dầu Quế & Muối Khoáng mang đến giải pháp làm sạch hiệu quả với công thức kết hợp tinh dầu quế tự nhiên và muối khoáng, giúp đánh bay dầu mỡ, vết bẩn cứng đầu và khử mùi tanh trên chén bát nhanh chóng. Hương thơm ấm nồng đặc trưng từ quế tạo cảm giác dễ chịu, thư giãn khi sử dụng.',
    metaDescription: 'Nước Rửa Chén Okashi Hương Tinh Dầu Quế & Muối Khoáng làm sạch dầu mỡ, khử mùi tanh hiệu quả với tinh dầu quế và muối khoáng.',
    features: [
      'Công thức kết hợp tinh dầu quế tự nhiên và muối khoáng',
      'Làm sạch hiệu quả dầu mỡ và vết bẩn cứng đầu',
      'Khử mùi tanh nhanh chóng',
      'Hương thơm ấm nồng đặc trưng từ quế',
      'Dịu nhẹ, không gây khô da',
      'Thân thiện với môi trường'
    ],
    specifications: [
      { label: 'Xuất xứ', value: 'Thái Lan' },
      { label: 'Dung tích', value: '1000ml' },
      { label: 'Thương hiệu', value: 'Okashi' },
      { label: 'Hạn sử dụng', value: '24 tháng từ ngày sản xuất' }
    ],
    usage: [
      'Cho dung dịch Okashi vừa đủ hòa vào một chén nước',
      'Hòa tan khoảng 2 giây và bắt đầu rửa',
      'Có thể dùng với nước lạnh hoặc nước nóng'
    ],
    benefits: [
      'Làm sạch hiệu quả các vết dầu mỡ và cặn bám',
      'Khử mùi tanh tốt',
      'Khử khuẩn nhẹ',
      'Hương thơm dễ chịu',
      'An toàn cho da tay',
      'Tiết kiệm nước và thời gian'
    ]
  },
  {
    id: 105,
    title: 'Nước Rửa Chén Okashi Hương Tinh Dầu Gừng & Muối Khoáng Chai 1000ml',
    category: 'Nước Rửa Chén',
    subcategory: 'Okashi',
    slug: 'nuoc-rua-chen-okashi-huong-tinh-dau-gung-muoi-khoang-1000ml',
    image: 'Product/Okashi/okashi_gung_muoikhoang.png', // Placeholder - will need actual image
    images: [],
    isNew: false,
    inStock: true,
    description: 'Nước rửa chén Okashi Hương Tinh Dầu Gừng & Muối Khoáng không chỉ làm sạch nhanh chóng các vết dầu mỡ, mà còn khử mùi hiệu quả và bảo vệ da tay. Mùi gừng nhẹ ấm, dễ chịu tạo cảm giác sạch sẽ, an toàn khi sử dụng hàng ngày.',
    metaDescription: 'Chiết xuất gừng và muối khoáng giúp rửa sạch nhanh, khử mùi tốt, không gây khô da. Hương gừng dịu nhẹ, tự nhiên, an toàn cho cả gia đình.',
    features: [
      'Chiết xuất gừng và muối khoáng tự nhiên',
      'Làm sạch nhanh chóng các vết dầu mỡ',
      'Khử mùi hiệu quả',
      'Bảo vệ da tay không gây khô',
      'Hương gừng dịu nhẹ, tự nhiên',
      'An toàn cho cả gia đình'
    ],
    specifications: [
      { label: 'Xuất xứ', value: 'Thái Lan' },
      { label: 'Dung tích', value: '1000ml' },
      { label: 'Thương hiệu', value: 'Okashi' },
      { label: 'Hạn sử dụng', value: '24 tháng từ ngày sản xuất' }
    ],
    usage: [
      'Cho dung dịch Okashi vừa đủ hòa vào một chén nước',
      'Hòa tan khoảng 2 giây và bắt đầu rửa',
      'Có thể dùng với nước lạnh hoặc nước nóng'
    ],
    benefits: [
      'Làm sạch hiệu quả các vết dầu mỡ và cặn bám',
      'Khử mùi tanh tốt',
      'Khử khuẩn nhẹ',
      'Hương thơm dễ chịu',
      'An toàn cho da tay',
      'Tiết kiệm nước và thời gian'
    ]
  },
  // Vixol Toilet Bowl Cleaners
  {
    id: 106,
    title: 'Nước tẩy Bồn Cầu Duck Pro 900ml',
    category: 'Nước Tẩy Rửa',
    subcategory: 'Duck',
    slug: 'nuoc-tay-bon-cau-duck-pro-900ml',
    image: '/Product/Duck.png',
    images: [],
    isNew: false,
    inStock: true,
    description: 'Nước tẩy bồn cầu Duck Pro 900ml là sản phẩm làm sạch chuyên dụng đến từ thương hiệu Duck, nổi bật với công thức Germinex siêu mạnh có khả năng diệt đến 99,9% vi khuẩn và tẩy sạch các vết bẩn cứng đầu như ố vàng, cặn vôi, gỉ sét trong bồn cầu và nhà vệ sinh. Không chỉ làm sạch, Duck Pro còn để lại hương thơm dịu nhẹ, giúp không gian nhà vệ sinh luôn thông thoáng, dễ chịu.',
    metaDescription: 'Nước tẩy bồn cầu Duck Pro 900ml diệt 99,9% vi khuẩn, đánh bay ố vàng, cặn vôi, gỉ sét và mang lại hương thơm dịu nhẹ cho nhà vệ sinh luôn sạch sẽ, thông thoáng.',
    features: [
      'Công thức Germinex siêu mạnh',
      'Diệt 99,9% vi khuẩn',
      'Tẩy sạch ố vàng, cặn vôi, gỉ sét',
      'Hương thơm dịu nhẹ',
      'Không gian nhà vệ sinh thông thoáng'
    ],
    specifications: [
      // { label: 'Xuất xứ', value: 'Thái Lan' },
      { label: 'Dung tích', value: '900ml' },
      { label: 'Thương hiệu', value: 'Duck' },
      //  
    ],
    usage: [
      'Cho trực tiếp nước tẩy bồn cầu Duck lên thành bồn cầu',
      'Dùng dụng cụ cọ rửa khoảng 5 phút rồi xả lại với nước',
      'Hòa 2 nắp nước tẩy bồn cầu Duck vào 3 lít nước để sử dụng cho nhà tắm',
      'Dùng dụng cụ để cọ rửa sàn nhà tắm và khu vực nhà vệ sinh'
    ],
    benefits: [
      'Loại bỏ hiệu quả các vết bẩn cứng đầu như ố vàng, cặn vôi, gỉ sét',
      'Tiêu diệt đến 99,9% vi khuẩn gây mùi',
      'Mang lại bề mặt sạch bong',
      'Không gian nhà vệ sinh thông thoáng, dễ chịu',
      'Hương thơm nhẹ nhàng sau khi sử dụng'
    ]
  },
  {
    id: 107,
    title: 'Nước Tẩy Bồn Cầu và Nhà Tắm Vixol White 900ml',
    category: 'Nước Tẩy Rửa',
    subcategory: 'Vixol',
    slug: 'nuoc-tay-bon-cau-nha-tam-vixol-white-900ml',
    image: '/Product/Vixol/White.png',
    images: [],
    isNew: false,
    inStock: true,
    description: 'Nước Tẩy Bồn Cầu và Nhà Tắm Vixol White 900ml với công thức DUO Action kết hợp chất tẩy vết bẩn và lớp phủ bề mặt giúp làm sạch nhanh chóng mà không tốn nhiều công sức chà rửa. Sản phẩm loại bỏ 11 loại vết bẩn thường gặp như rỉ sét, cặn vôi, rêu xanh, vết bẩn khe gạch… đồng thời tiêu diệt 99,9% vi khuẩn, nấm mốc, virus Rotavirus và H1N1, mang đến hương thơm Sun Breeze tươi mát.',
    metaDescription: 'Nước tẩy bồn cầu và nhà tắm Vixol White 900ml với công thức DUO Action làm sạch nhanh, diệt 99,9% vi khuẩn, mang hương Sun Breeze tươi mát.',
    features: [
      'Công thức DUO Action',
      'Làm sạch nhanh chóng',
      'Loại bỏ 11 loại vết bẩn thường gặp',
      'Tiêu diệt 99,9% vi khuẩn, nấm mốc, virus',
      'Hương thơm Sun Breeze tươi mát'
    ],
    specifications: [
      // { label: 'Xuất xứ', value: 'Thái Lan' },
      { label: 'Dung tích', value: '900ml' },
      { label: 'Thương hiệu', value: 'Vixol' },
      //  
    ],
    usage: [
      'Pha dung dịch theo tỉ lệ 02 phần dung dịch Vixol với 01 phần nước',
      'Đổ hỗn hợp vừa pha lên nơi muốn tẩy rửa và diệt khuẩn',
      'Để khoảng 10 phút rồi dùng bàn chải hoặc khăn lau chà nhẹ',
      'Rửa lại bằng nước sạch'
    ],
    benefits: [
      'Tẩy sạch các vết bẩn cứng đầu dễ dàng',
      'Làm cho bề mặt bồn cầu và nhà tắm trở nên sáng bóng',
      'Khử nấm và diệt khuẩn lên đến 99.9%',
      'Loại bỏ rỉ sét, cặn vôi, rêu xanh, vết bẩn khe gạch',
      'Hương thơm tươi mát'
    ]
  },
  {
    id: 108,
    title: 'Nước Tẩy Bồn Cầu và Nhà Tắm Vixol Smart 900ml',
    category: 'Nước Tẩy Rửa',
    subcategory: 'Vixol',
    slug: 'nuoc-tay-bon-cau-nha-tam-vixol-smart-900ml',
    image: '/Product/Vixol/Smart.png',
    images: [],
    isNew: false,
    inStock: true,
    description: 'Nước Tẩy Bồn Cầu và Nhà Tắm Vixol Smart 900ml với công thức DUO Action kết hợp chất tẩy và lớp phủ bề mặt giúp làm sạch hiệu quả mà không tốn nhiều sức. Sản phẩm loại bỏ 11 loại vết bẩn thường gặp, diệt 99,9% vi khuẩn và đem lại hương Pink Paradise thơm ngát, giữ không gian phòng tắm luôn sạch sẽ, thơm mát.',
    metaDescription: 'Vixol Smart 900ml làm sạch hiệu quả với công thức DUO Action, loại bỏ 11 vết bẩn thường gặp và diệt 99,9% vi khuẩn, hương Pink Paradise thơm ngát.',
    features: [
      'Công thức DUO Action',
      'Làm sạch hiệu quả',
      'Loại bỏ 11 loại vết bẩn thường gặp',
      'Diệt 99,9% vi khuẩn',
      'Hương Pink Paradise thơm ngát'
    ],
    specifications: [
      // { label: 'Xuất xứ', value: 'Thái Lan' },
      { label: 'Dung tích', value: '900ml' },
      { label: 'Thương hiệu', value: 'Vixol' },
    ],
    usage: [
      'Pha dung dịch theo tỉ lệ 02 phần dung dịch Vixol với 01 phần nước',
      'Đổ hỗn hợp vừa pha lên nơi muốn tẩy rửa và diệt khuẩn',
      'Để khoảng 10 phút rồi dùng bàn chải hoặc khăn lau chà nhẹ',
      'Rửa lại bằng nước sạch'
    ],
    benefits: [
      'Tẩy sạch các vết bẩn cứng đầu dễ dàng',
      'Làm cho bề mặt bồn cầu và nhà tắm trở nên sáng bóng',
      'Khử nấm và diệt khuẩn lên đến 99.9%',
      'Giữ không gian phòng tắm luôn sạch sẽ, thơm mát',
      'Hương thơm ngát quyến rũ'
    ]
  },
  {
    id: 109,
    title: 'Nước Tẩy Bồn Cầu và Nhà Tắm Vixol Power 900ml',
    category: 'Nước Tẩy Rửa',
    subcategory: 'Vixol',
    slug: 'nuoc-tay-bon-cau-nha-tam-vixol-power-900ml',
    image: '/Product/Vixol/Power.png',
    images: [],
    isNew: false,
    inStock: true,
    description: 'Nước Tẩy Bồn Cầu và Nhà Tắm Vixol Power 900ml sử dụng công thức DUO Action tiên tiến, vừa làm mềm và đánh bay vết bẩn cứng đầu, vừa phủ lớp bảo vệ giúp bề mặt sáng bóng và dễ lau chùi hơn. Sản phẩm loại bỏ 11 loại vết bẩn phổ biến và diệt 99,9% vi khuẩn, nấm mốc, virus Rotavirus, H1N1, mang đến hương Forever Fresh sảng khoái.',
    metaDescription: 'Nước tẩy bồn cầu Vixol Power 900ml với công nghệ DUO Action đánh bay vết bẩn cứng đầu, diệt 99,9% vi khuẩn, hương Forever Fresh sảng khoái.',
    features: [
      'Công thức DUO Action tiên tiến',
      'Làm mềm và đánh bay vết bẩn cứng đầu',
      'Phủ lớp bảo vệ bề mặt sáng bóng',
      'Loại bỏ 11 loại vết bẩn phổ biến',
      'Diệt 99,9% vi khuẩn, nấm mốc, virus',
      'Hương Forever Fresh sảng khoái'
    ],
    specifications: [
      // { label: 'Xuất xứ', value: 'Thái Lan' },
      { label: 'Dung tích', value: '900ml' },
      { label: 'Thương hiệu', value: 'Vixol' },
      // { label: 'Hạn sử dụng', value: '24 tháng từ ngày sản xuất' }
    ],
    usage: [
      'Pha dung dịch theo tỉ lệ 02 phần dung dịch Vixol với 01 phần nước',
      'Đổ hỗn hợp vừa pha lên nơi muốn tẩy rửa và diệt khuẩn',
      'Để khoảng 10 phút rồi dùng bàn chải hoặc khăn lau chà nhẹ',
      'Rửa lại bằng nước sạch'
    ],
    benefits: [
      'Tẩy sạch các vết bẩn cứng đầu dễ dàng',
      'Làm cho bề mặt bồn cầu và nhà tắm trở nên sáng bóng',
      'Khử nấm và diệt khuẩn lên đến 99.9%',
      'Bề mặt dễ lau chùi hơn',
      'Hương thơm sảng khoái'
    ]
  },
  {
    id: 110,
    title: 'Nước Tẩy Bồn Cầu và Nhà Tắm Vixol Pink 900ml',
    category: 'Nước Tẩy Rửa',
    subcategory: 'Vixol',
    slug: 'nuoc-tay-bon-cau-nha-tam-vixol-pink-900ml',
    image: '/Product/Vixol/Pink.png',
    images: [],
    isNew: false,
    inStock: true,
    description: 'Nước Tẩy Bồn Cầu và Nhà Tắm Vixol Pink 900ml với công thức DUO Action kết hợp chất tẩy vết bẩn và lớp phủ bề mặt giúp đánh bay nhanh chóng 11 loại vết bẩn thường gặp như rỉ sét, cặn vôi, rêu xanh, vết bẩn khe gạch… mà không tốn nhiều công sức. Sản phẩm còn tiêu diệt 99,9% vi khuẩn, mang đến hương Pink Paradise ngọt ngào, giúp phòng tắm luôn sạch sẽ và thơm mát.',
    metaDescription: 'Vixol Pink 900ml giúp làm sạch nhanh 11 loại vết bẩn, diệt 99,9% vi khuẩn nhờ công thức DUO Action, mang hương Pink Paradise ngọt ngào, dễ chịu.',
    features: [
      'Công thức DUO Action',
      'Đánh bay nhanh chóng 11 loại vết bẩn',
      'Tiêu diệt 99,9% vi khuẩn',
      'Hương Pink Paradise ngọt ngào',
      'Phòng tắm luôn sạch sẽ và thơm mát'
    ],
    specifications: [
      // { label: 'Xuất xứ', value: 'Thái Lan' },
      { label: 'Dung tích', value: '900ml' },
      { label: 'Thương hiệu', value: 'Vixol' },
      // { label: 'Hạn sử dụng', value: '24 tháng từ ngày sản xuất' }
    ],
    usage: [
      'Pha dung dịch theo tỉ lệ 02 phần dung dịch Vixol với 01 phần nước',
      'Đổ hỗn hợp vừa pha lên nơi muốn tẩy rửa và diệt khuẩn',
      'Để khoảng 10 phút rồi dùng bàn chải hoặc khăn lau chà nhẹ',
      'Rửa lại bằng nước sạch'
    ],
    benefits: [
      'Tẩy sạch các vết bẩn cứng đầu dễ dàng',
      'Làm cho bề mặt bồn cầu và nhà tắm trở nên sáng bóng',
      'Khử nấm và diệt khuẩn lên đến 99.9%',
      'Loại bỏ rỉ sét, cặn vôi, rêu xanh, vết bẩn khe gạch',
      'Hương thơm ngọt ngào'
    ]
  },
  {
    id: 111,
    title: 'Nước Tẩy Bồn Cầu và Nhà Tắm Vixol Gold 900ml',
    category: 'Nước Tẩy Rửa',
    subcategory: 'Vixol',
    slug: 'nuoc-tay-bon-cau-nha-tam-vixol-gold-900ml',
    image: '/Product/Vixol/Gold.png',
    images: [],
    isNew: false,
    inStock: true,
    description: 'Nước Tẩy Bồn Cầu và Nhà Tắm Vixol Gold 900ml sở hữu công thức 3D Action hiện đại giúp làm sạch nhanh chóng, ngăn vết bẩn bám lại và giữ cho bề mặt sáng bóng lâu dài, giảm tần suất vệ sinh. Sản phẩm loại bỏ 11 loại vết bẩn cứng đầu, diệt 99,9% vi khuẩn và nấm mốc, mang đến hương Fresh Touch tươi mát cho không gian phòng tắm.',
    metaDescription: 'Nước tẩy bồn cầu Vixol Gold 900ml với công thức 3D Action làm sạch nhanh, ngăn bám bẩn, diệt 99,9% vi khuẩn, hương Fresh Touch tươi mát.',
    features: [
      'Công thức 3D Action hiện đại',
      'Làm sạch nhanh chóng',
      'Ngăn vết bẩn bám lại',
      'Giữ bề mặt sáng bóng lâu dài',
      'Loại bỏ 11 loại vết bẩn cứng đầu',
      'Diệt 99,9% vi khuẩn và nấm mốc',
      'Hương Fresh Touch tươi mát'
    ],
    specifications: [
      // { label: 'Xuất xứ', value: 'Thái Lan' },
      { label: 'Dung tích', value: '900ml' },
      { label: 'Thương hiệu', value: 'Vixol' },
      // { label: 'Hạn sử dụng', value: '24 tháng từ ngày sản xuất' }
    ],
    usage: [
      'Pha dung dịch theo tỉ lệ 02 phần dung dịch Vixol với 01 phần nước',
      'Đổ hỗn hợp vừa pha lên nơi muốn tẩy rửa và diệt khuẩn',
      'Để khoảng 10 phút rồi dùng bàn chải hoặc khăn lau chà nhẹ',
      'Rửa lại bằng nước sạch'
    ],
    benefits: [
      'Tẩy sạch các vết bẩn cứng đầu dễ dàng',
      'Làm cho bề mặt bồn cầu và nhà tắm trở nên sáng bóng',
      'Khử nấm và diệt khuẩn lên đến 99.9%',
      'Giảm tần suất vệ sinh',
      'Hương thơm tươi mát'
    ]
  },
  {
    id: 112,
    title: 'Nước Tẩy Bồn Cầu và Nhà Tắm Vixol Oxy Xanh Hương Aqua Fresh 700ml',
    category: 'Nước Tẩy Rửa',
    subcategory: 'Vixol',
    slug: 'nuoc-tay-bon-cau-nha-tam-vixol-oxy-xanh-huong-aqua-fresh-700ml',
    image: '/Product/Vixol/Aqua_Fresh.png',
    images: [],
    isNew: false,
    inStock: true,
    description: 'Nước Tẩy Bồn Cầu và Nhà Tắm Vixol Oxy Xanh Hương Aqua Fresh 700ml với công thức sức mạnh oxy "O2 Power" (không chứa axit) để làm sạch phòng tắm mạnh mẽ cùng hương Aqua fresh, đánh bay mọi vết ố vàng, cặn phèn và mảng bám nhanh chóng nhanh hơn gấp 2 lần, giúp cho các thiết bị sứ như bồn tắm, bệ toilet,… luôn sạch sẽ, trắng sáng.',
    metaDescription: 'Vixol Oxy Xanh Aqua Fresh 700ml với công nghệ O2 Power không axit, làm sạch nhanh gấp 2 lần, khử ố vàng, hương Aqua Fresh sảng khoái.',
    features: [
      'Công thức sức mạnh oxy "O2 Power"',
      'Không chứa axit',
      'Làm sạch nhanh gấp 2 lần',
      'Đánh bay vết ố vàng, cặn phèn và mảng bám',
      'Hương Aqua Fresh sảng khoái',
      'Các thiết bị sứ luôn sạch sẽ, trắng sáng'
    ],
    specifications: [
      // { label: 'Xuất xứ', value: 'Thái Lan' },
      { label: 'Dung tích', value: '700ml' },
      { label: 'Thương hiệu', value: 'Vixol' },
      // { label: 'Hạn sử dụng', value: '24 tháng từ ngày sản xuất' }
    ],
    usage: [
      'Pha dung dịch theo tỉ lệ 02 phần dung dịch Vixol với 01 phần nước',
      'Đổ hỗn hợp vừa pha lên nơi muốn tẩy rửa và diệt khuẩn',
      'Để khoảng 10 phút rồi dùng bàn chải hoặc khăn lau chà nhẹ',
      'Rửa lại bằng nước sạch'
    ],
    benefits: [
      'Tẩy sạch các vết bẩn cứng đầu dễ dàng',
      'Làm cho bề mặt bồn cầu và nhà tắm trở nên sáng bóng',
      'Khử nấm và diệt khuẩn lên đến 99.9%',
      'Làm sạch mạnh mẽ với sức mạnh oxy',
      'Hương thơm sảng khoái'
    ]
  },
  {
    id: 113,
    title: 'Nước Tẩy Bồn Cầu và Nhà Tắm Vixol Oxy Hồng Hương Hoa 700ml',
    category: 'Nước Tẩy Rửa',
    subcategory: 'Vixol',
    slug: 'nuoc-tay-bon-cau-nha-tam-vixol-oxy-hong-huong-hoa-700ml',
    image: '/Product/Vixol/Hong_Huong_Hoa.png',
    images: [],
    isNew: false,
    inStock: true,
    description: 'Nước Tẩy Bồn Cầu và Nhà Tắm Vixol Oxy Hồng Hương Hoa 700ml với công thức sức mạnh oxy "O2 Power" (không chứa axit) để làm sạch phòng tắm mạnh mẽ cùng hương hoa thơm, đánh bay mọi vết ố vàng, cặn phèn và mảng bám nhanh chóng nhanh hơn gấp 2 lần, giúp cho các thiết bị sứ như bồn tắm, bệ toilet,… luôn sạch sẽ, trắng sáng.',
    metaDescription: 'Nước tẩy Vixol Oxy Hồng 700ml ứng dụng O2 Power không axit, làm sạch mạnh mẽ, đánh bay vết ố vàng, hương hoa thơm ngát, dễ chịu.',
    features: [
      'Công thức sức mạnh oxy "O2 Power"',
      'Không chứa axit',
      'Làm sạch mạnh mẽ',
      'Đánh bay vết ố vàng',
      'Hương hoa thơm ngát, dễ chịu'
    ],
    specifications: [
      // { label: 'Xuất xứ', value: 'Thái Lan' },
      { label: 'Dung tích', value: '700ml' },
      { label: 'Thương hiệu', value: 'Vixol' },
      // { label: 'Hạn sử dụng', value: '24 tháng từ ngày sản xuất' }
    ],
    usage: [
      'Pha dung dịch theo tỉ lệ 02 phần dung dịch Vixol với 01 phần nước',
      'Đổ hỗn hợp vừa pha lên nơi muốn tẩy rửa và diệt khuẩn',
      'Để khoảng 10 phút rồi dùng bàn chải hoặc khăn lau chà nhẹ',
      'Rửa lại bằng nước sạch'
    ],
    benefits: [
      'Tẩy sạch các vết bẩn cứng đầu dễ dàng',
      'Làm cho bề mặt bồn cầu và nhà tắm trở nên sáng bóng',
      'Khử nấm và diệt khuẩn lên đến 99.9%',
      'Làm sạch mạnh mẽ với sức mạnh oxy',
      'Hương hoa thơm ngát'
    ]
  },
  {
    id: 114,
    title: 'Nước Tẩy Bồn Cầu và Nhà Tắm Vixol Oxy Xanh Spring Fresh 700ml',
    category: 'Nước Tẩy Rửa',
    subcategory: 'Vixol',
    slug: 'nuoc-tay-bon-cau-nha-tam-vixol-oxy-xanh-spring-fresh-700ml',
    image: '/Product/Vixol/Spring_Fresh.png',
    images: [],
    isNew: false,
    inStock: true,
    description: 'Nước Tẩy Bồn Cầu và Nhà Tắm Vixol Oxy Xanh Spring Fresh 700ml với công thức sức mạnh oxy "O2 Power" (không chứa axit) để làm sạch phòng tắm mạnh mẽ cùng hương hoa thơm, đánh bay mọi vết ố vàng, cặn phèn và mảng bám nhanh chóng nhanh hơn gấp 2 lần, giúp cho các thiết bị sứ như bồn tắm, bệ toilet,… luôn sạch sẽ, trắng sáng.',
    metaDescription: 'Vixol Oxy Xanh Spring Fresh 700ml với công nghệ O2 Power không axit, làm sạch nhanh gấp 2 lần, khử ố vàng, hương Spring Fresh tươi mới.',
    features: [
      'Công thức sức mạnh oxy "O2 Power"',
      'Không chứa axit',
      'Làm sạch nhanh gấp 2 lần',
      'Khử ố vàng',
      'Hương Spring Fresh tươi mới'
    ],
    specifications: [
      // { label: 'Xuất xứ', value: 'Thái Lan' },
      { label: 'Dung tích', value: '700ml' },
      { label: 'Thương hiệu', value: 'Vixol' },
      // { label: 'Hạn sử dụng', value: '24 tháng từ ngày sản xuất' }
    ],
    usage: [
      'Pha dung dịch theo tỉ lệ 02 phần dung dịch Vixol với 01 phần nước',
      'Đổ hỗn hợp vừa pha lên nơi muốn tẩy rửa và diệt khuẩn',
      'Để khoảng 10 phút rồi dùng bàn chải hoặc khăn lau chà nhẹ',
      'Rửa lại bằng nước sạch'
    ],
    benefits: [
      'Tẩy sạch các vết bẩn cứng đầu dễ dàng',
      'Làm cho bề mặt bồn cầu và nhà tắm trở nên sáng bóng',
      'Khử nấm và diệt khuẩn lên đến 99.9%',
      'Làm sạch mạnh mẽ với sức mạnh oxy',
      'Hương thơm tươi mới'
    ]
  },
  // Vaseline Body Lotions
  {
    id: 115,
    title: 'Sữa dưỡng thể Vaseline Gluta-Hya Serum Burst Lotion Dewy Radiance 300ml',
    category: 'Chăm Sóc Da',
    subcategory: 'Vaseline',
    slug: 'sua-duong-the-vaseline-gluta-hya-serum-burst-lotion-dewy-radiance-300ml',
    image: '/Product/Vaseline/pink.png',
    images: [],
    isNew: false,
    inStock: true,
    description: 'Sữa dưỡng thể Vaseline Gluta-Hya Serum Burst Lotion Dewy Radiance 300ml ứng dụng công nghệ GlutaGlow mạnh gấp 70 lần so với Vitamin C, kết hợp cùng niacinamide và hyaluronic acid giúp dưỡng da sáng rạng rỡ, căng mướt không bị khô. Chất kem nhẹ như serum tan trên da, thẩm thấu nhanh chóng, để lại cảm giác mềm mại và ẩm mịn tự nhiên.',
    metaDescription: 'Dưỡng da sáng mịn, căng mướt với Sữa dưỡng thể Vaseline Gluta-Hya Serum Burst Lotion Dewy Radiance 300ml, thẩm thấu nhanh, ẩm mịn không gây kích ứng.',
    features: [
      'Công nghệ GlutaGlow mạnh gấp 70 lần Vitamin C',
      'Kết hợp niacinamide và hyaluronic acid',
      'Dưỡng da sáng rạng rỡ, căng mướt',
      'Chất kem nhẹ như serum tan trên da',
      'Thẩm thấu nhanh chóng',
      'Cảm giác mềm mại và ẩm mịn tự nhiên'
    ],
    specifications: [
      { label: 'Xuất xứ', value: 'Thái Lan' },
      { label: 'Dung tích', value: '300ml' },
      { label: 'Thương hiệu', value: 'Vaseline' },
      { label: 'Hạn sử dụng', value: '36 tháng từ ngày sản xuất' }
    ],
    usage: [
      'Xoa dưỡng thể theo chiều xoắn ốc để kem thẩm thấu nhanh và đều vào da',
      'Nên thoa sữa dưỡng thể khoảng 30 phút trước khi đi ngủ'
    ],
    benefits: [
      'Khôi phục sự cân bằng tự nhiên cho làn da',
      'Công nghệ GlutaGlow kết hợp amino peptide',
      'Phục hồi và nuôi dưỡng da suốt đêm',
      'Da sáng mịn, căng mướt',
      'Thẩm thấu nhanh, không gây kích ứng'
    ]
  },
  {
    id: 116,
    title: 'Sữa dưỡng thể Vaseline Gluta-Hya Serum Burst UV Lotion Flawless Bright 330ml',
    category: 'Chăm Sóc Da',
    subcategory: 'Vaseline',
    slug: 'sua-duong-the-vaseline-gluta-hya-serum-burst-uv-lotion-flawless-bright-330ml',
    image: '/Product/Vaseline/yellow.png',
    images: [],
    isNew: false,
    inStock: true,
    description: 'Sữa dưỡng thể Vaseline Gluta-Hya Serum Burst UV Lotion Flawless Bright 330ml bổ sung công thức Flawless Bright với GlutaGlow mạnh gấp 10 lần so với Vitamin C, giúp bảo vệ da khỏi các tác nhân gây xỉn màu và hỗ trợ làm sáng da hiệu quả. Thành phần chứa Hyaluronic cùng bộ lọc UV tăng cường giữ ẩm và bảo vệ da, cho làn da mịn màng, tươi sáng hơn mỗi ngày.',
    metaDescription: 'Sữa dưỡng thể Vaseline Gluta-Hya Serum Burst UV Lotion Flawless Bright 330ml bảo vệ da khỏi xỉn màu, dưỡng sáng và giữ ẩm sâu với Hyaluronic & UV filter.',
    features: [
      'Công thức Flawless Bright',
      'GlutaGlow mạnh gấp 10 lần Vitamin C',
      'Bảo vệ da khỏi các tác nhân gây xỉn màu',
      'Hỗ trợ làm sáng da hiệu quả',
      'Thành phần chứa Hyaluronic',
      'Bộ lọc UV tăng cường bảo vệ da'
    ],
    specifications: [
      { label: 'Xuất xứ', value: 'Thái Lan' },
      { label: 'Dung tích', value: '330ml' },
      { label: 'Thương hiệu', value: 'Vaseline' },
      { label: 'Hạn sử dụng', value: '36 tháng từ ngày sản xuất' }
    ],
    usage: [
      'Xoa dưỡng thể theo chiều xoắn ốc để kem thẩm thấu nhanh và đều vào da',
      'Nên thoa sữa dưỡng thể khoảng 30 phút trước khi đi ngủ'
    ],
    benefits: [
      'Khôi phục sự cân bằng tự nhiên cho làn da',
      'Công nghệ GlutaGlow kết hợp amino peptide',
      'Phục hồi và nuôi dưỡng da suốt đêm',
      'Da mịn màng, tươi sáng hơn mỗi ngày',
      'Giữ ẩm sâu và bảo vệ da khỏi UV'
    ]
  },
  {
    id: 117,
    title: 'Sữa dưỡng thể Vaseline Gluta-Hya Serum Burst Lotion Overnight Radiance Repair 330ml',
    category: 'Chăm Sóc Da',
    subcategory: 'Vaseline',
    slug: 'sua-duong-the-vaseline-gluta-hya-serum-burst-lotion-overnight-radiance-repair-330ml',
    image: '/Product/Vaseline/blue.png',
    images: [],
    isNew: false,
    inStock: true,
    description: 'Sữa dưỡng thể Vaseline Gluta-Hya Serum Burst Lotion Overnight Radiance Repair 330ml tối ưu dưỡng da ban đêm bằng công nghệ GlutaGlow mạnh gấp 10 lần so với Vitamin C, kết hợp amino peptide giúp phục hồi và nuôi dưỡng da suốt đêm. Kết cấu serum tan thấm nhanh, mang lại cảm giác mềm mại và căng mướt ngay sau khi thoa.',
    metaDescription: 'Phục hồi da suốt đêm với Sữa dưỡng thể Vaseline Gluta-Hya Serum Burst Lotion Overnight Radiance Repair 330ml cho da mềm mại, căng mướt.',
    features: [
      'Tối ưu dưỡng da ban đêm',
      'Công nghệ GlutaGlow mạnh gấp 10 lần Vitamin C',
      'Kết hợp amino peptide',
      'Phục hồi và nuôi dưỡng da suốt đêm',
      'Kết cấu serum tan thấm nhanh',
      'Cảm giác mềm mại và căng mướt'
    ],
    specifications: [
      { label: 'Xuất xứ', value: 'Thái Lan' },
      { label: 'Dung tích', value: '330ml' },
      { label: 'Thương hiệu', value: 'Vaseline' },
      { label: 'Hạn sử dụng', value: '36 tháng từ ngày sản xuất' }
    ],
    usage: [
      'Xoa dưỡng thể theo chiều xoắn ốc để kem thẩm thấu nhanh và đều vào da',
      'Nên thoa sữa dưỡng thể khoảng 30 phút trước khi đi ngủ'
    ],
    benefits: [
      'Khôi phục sự cân bằng tự nhiên cho làn da',
      'Công nghệ GlutaGlow kết hợp amino peptide',
      'Phục hồi và nuôi dưỡng da suốt đêm',
      'Da mềm mại và căng mướt',
      'Thẩm thấu nhanh, hiệu quả ban đêm'
    ]
  },
  // Deemee Dishwashing Liquids
  {
    id: 118,
    title: 'Nước Rửa Chén Deemee Hương Trà Xanh',
    category: 'Nước Rửa Chén',
    subcategory: 'Deemee',
    slug: 'nuoc-rua-chen-deemee-huong-tra-xanh',
    image: '/Product/Deemee/Txanh.png',
    images: [],
    isNew: false,
    inStock: true,
    description: 'Nước rửa chén Deemee Hương Trà Xanh với công thức ION đột phá diệt khuẩn 99.9%(*) giúp chén dĩa luôn sạch bóng, khử mùi tanh, đánh bay dầu mỡ và ngát hương trà xanh. Đây là sản phẩm nước rửa chén an toàn cho da tay.',
    metaDescription: 'Nước rửa chén Deemee Hương Trà Xanh với công thức ION diệt khuẩn 99.9%, khử mùi tanh, đánh bay dầu mỡ, an toàn cho da tay.',
    features: [
      'Công thức ION đột phá',
      'Diệt khuẩn 99.9%',
      'Chén dĩa luôn sạch bóng',
      'Khử mùi tanh hiệu quả',
      'Đánh bay dầu mỡ',
      'Ngát hương trà xanh',
      'An toàn cho da tay'
    ],
    specifications: [
      // { label: 'Xuất xứ', value: 'Thái Lan' },
      { label: 'Dung tích', value: '1000ml' },
      { label: 'Thương hiệu', value: 'Deemee' },
      // { label: 'Hạn sử dụng', value: '24 tháng từ ngày sản xuất' }
    ],
    usage: [
      'Pha loãng nước Rửa Chén Deemee Hương Trà Xanh vào nước hoặc đổ trực tiếp lên miếng rửa chén đã thấm ướt',
      'Bóp nhẹ để tạo bọt rồi rửa chén',
      'Sau đó rửa lại bằng nước sạch'
    ],
    benefits: [
      'Đánh bay mọi vết bẩn cứng đầu và lớp dầu mỡ lì lợm',
      'Trả lại cho chén dĩa vẻ sáng bóng như mới',
      'Tiêu diệt đến 99,9% vi khuẩn có hại',
      'Bảo vệ sức khỏe cả gia đình trong từng bữa ăn',
      'Hương trà xanh thanh mát lan tỏa',
      'Giúp bạn cảm thấy thư thái và dễ chịu khi đang rửa chén'
    ]
  },
  {
    id: 119,
    title: 'Nước Rửa Chén Deemee Hương Gừng Sả',
    category: 'Nước Rửa Chén',
    subcategory: 'Deemee',
    slug: 'nuoc-rua-chen-deemee-huong-gung-sa',
    image: '/Product/Deemee/Gsa.png',
    images: [],
    isNew: false,
    inStock: true,
    description: 'Nước rửa chén Deemee Hương Gừng Sả với công thức ION đột phá diệt khuẩn 99.9%(*) giúp chén dĩa luôn sạch bóng, khử mùi tanh, đánh bay dầu mỡ và ngát hương gừng sả tự nhiên. Đây là sản phẩm nước rửa chén an toàn cho da tay.',
    metaDescription: 'Nước rửa chén Deemee Hương Gừng Sả công thức ION diệt khuẩn 99.9%, làm sạch nhanh, khử mùi tanh, hương gừng sả tự nhiên dễ chịu.',
    features: [
      'Công thức ION đột phá',
      'Diệt khuẩn 99.9%',
      'Chén dĩa luôn sạch bóng',
      'Khử mùi tanh hiệu quả',
      'Đánh bay dầu mỡ',
      'Ngát hương gừng sả tự nhiên',
      'An toàn cho da tay'
    ],
    specifications: [
      // { label: 'Xuất xứ', value: 'Thái Lan' },
      { label: 'Dung tích', value: '1000ml' },
      { label: 'Thương hiệu', value: 'Deemee' },
      // { label: 'Hạn sử dụng', value: '24 tháng từ ngày sản xuất' }
    ],
    usage: [
      'Pha loãng nước Rửa Chén Deemee Hương Gừng Sả vào nước hoặc đổ trực tiếp lên miếng rửa chén đã thấm ướt',
      'Bóp nhẹ để tạo bọt rồi rửa chén',
      'Sau đó rửa lại bằng nước sạch'
    ],
    benefits: [
      'Đánh bay mọi vết bẩn cứng đầu và lớp dầu mỡ lì lợm',
      'Trả lại cho chén dĩa vẻ sáng bóng như mới',
      'Tiêu diệt đến 99,9% vi khuẩn có hại',
      'Bảo vệ sức khỏe cả gia đình trong từng bữa ăn',
      'Hương gừng xả thanh mát lan tỏa',
      'Giúp bạn cảm thấy thư thái và dễ chịu khi đang rửa chén'
    ]
  },
  {
    id: 120,
    title: 'Nước Rửa Chén Deemee Hương Đào',
    category: 'Nước Rửa Chén',
    subcategory: 'Deemee',
    slug: 'nuoc-rua-chen-deemee-huong-dao',
    image: '/Product/Deemee/Dao.png',
    images: [],
    isNew: false,
    inStock: true,
    description: 'Nước rửa chén Deemee Hương Đào với công thức ION đột phá diệt khuẩn 99.9%(*) giúp chén dĩa luôn sạch bóng, khử mùi tanh, đánh bay dầu mỡ và ngát hương đào. Đây là sản phẩm nước rửa chén an toàn cho da tay.',
    metaDescription: 'Nước rửa chén Deemee Hương Đào công thức ION diệt khuẩn 99.9%, khử mùi tanh, đánh bay dầu mỡ, lưu hương đào ngọt ngào, dễ chịu.',
    features: [
      'Công thức ION đột phá',
      'Diệt khuẩn 99.9%',
      'Chén dĩa luôn sạch bóng',
      'Khử mùi tanh hiệu quả',
      'Đánh bay dầu mỡ',
      'Ngát hương đào ngọt ngào',
      'An toàn cho da tay'
    ],
    specifications: [
      // { label: 'Xuất xứ', value: 'Thái Lan' },
      { label: 'Dung tích', value: '1000ml' },
      { label: 'Thương hiệu', value: 'Deemee' },
      // { label: 'Hạn sử dụng', value: '24 tháng từ ngày sản xuất' }
    ],
    usage: [
      'Pha loãng nước Rửa Chén Deemee Hương Đào vào nước hoặc đổ trực tiếp lên miếng rửa chén đã thấm ướt',
      'Bóp nhẹ để tạo bọt rồi rửa chén',
      'Sau đó rửa lại bằng nước sạch'
    ],
    benefits: [
      'Đánh bay mọi vết bẩn cứng đầu và lớp dầu mỡ lì lợm',
      'Trả lại cho chén dĩa vẻ sáng bóng như mới',
      'Tiêu diệt đến 99,9% vi khuẩn có hại',
      'Bảo vệ sức khỏe cả gia đình trong từng bữa ăn',
      'Hương đào tự nhiên thanh mát lan tỏa',
      'Giúp bạn cảm thấy thư thái và dễ chịu khi đang rửa chén'
    ]
  },
  // Okay Floor Cleaners
  {
    id: 121,
    title: 'Nước lau sàn Okay Floral Fresh can 2 lít',
    category: 'Nước Lau Sàn',
    subcategory: 'Okay',
    slug: 'nuoc-lau-san-okay-floral-fresh-can-2-lit',
    image: '/Product/Okashi/Floral_Fresh/2000.png',
    images: [],
    isNew: false,
    inStock: true,
    description: 'Nước lau sàn Okay Floral Fresh can 2 lít với hương hoa tươi mát giúp không gian sống thêm dễ chịu và thư giãn. Công thức làm sạch hiệu quả, loại bỏ bụi và vết bẩn trên sàn, để lại bề mặt sáng bóng và thơm lâu.',
    metaDescription: 'Nước lau sàn Okay Floral Fresh 2L hương hoa tươi mát, làm sạch hiệu quả, loại bỏ bụi bẩn và mang lại sàn nhà sáng bóng, thơm lâu.',
    features: [
      'Hương hoa tươi mát',
      'Công thức làm sạch hiệu quả',
      'Loại bỏ bụi và vết bẩn trên sàn',
      'Để lại bề mặt sáng bóng',
      'Thơm lâu'
    ],
    specifications: [
      { label: 'Xuất xứ', value: 'Thái Lan' },
      { label: 'Dung tích', value: '2 lít' },
      { label: 'Thương hiệu', value: 'Okay' },
      { label: 'Hạn sử dụng', value: '24 tháng từ ngày sản xuất' }
    ],
    usage: [
      'Pha 1 nắp (khoảng 30ml) Nước lau sàn Okay với 5 lít nước sạch',
      'Nhúng cây lau vào dung dịch đã pha, vắt khô vừa phải',
      'Lau đều bề mặt sàn và lau lại bằng nước sạch',
      'Đậy kín nắp sau khi sử dụng và bảo quản nơi khô ráo, thoáng mát'
    ],
    benefits: [
      'Làm sạch bụi bẩn và vết ố trên sàn hiệu quả',
      'Lưu lại hương hoa tươi mát',
      'Mang đến không gian sống dễ chịu, đầy sức sống',
      'Phù hợp cho các loại sàn gạch men, đá hoa, gỗ đã xử lý, sàn nhựa',
      'Thích hợp cho gia đình, văn phòng, cửa hàng'
    ]
  },
  {
    id: 122,
    title: 'Nước lau sàn Okay Lemongrass can 2 lít',
    category: 'Nước Lau Sàn',
    subcategory: 'Okay',
    slug: 'nuoc-lau-san-okay-lemongrass-can-2-lit',
    image: '/Product/Okashi/Lemongrass/2000.png',
    images: [],
    isNew: false,
    inStock: true,
    description: 'Nước lau sàn Okay Lemongrass can 2 lít mang hương sả dịu nhẹ, giúp khử mùi và xua đuổi côn trùng hiệu quả. Sản phẩm làm sạch nhanh chóng, giữ cho sàn nhà luôn sạch bóng và thoáng mát.',
    metaDescription: 'Nước lau sàn Okay Lemongrass 2L hương sả dịu nhẹ, khử mùi, xua côn trùng, làm sạch nhanh và giữ sàn nhà luôn sạch bóng, thoáng mát.',
    features: [
      'Hương sả dịu nhẹ',
      'Khử mùi hiệu quả',
      'Xua đuổi côn trùng',
      'Làm sạch nhanh chóng',
      'Giữ sàn nhà sạch bóng và thoáng mát'
    ],
    specifications: [
      { label: 'Xuất xứ', value: 'Thái Lan' },
      { label: 'Dung tích', value: '2 lít' },
      { label: 'Thương hiệu', value: 'Okay' },
      { label: 'Hạn sử dụng', value: '24 tháng từ ngày sản xuất' }
    ],
    usage: [
      'Pha 1 nắp (khoảng 30ml) Nước lau sàn Okay với 5 lít nước sạch',
      'Nhúng cây lau vào dung dịch đã pha, vắt khô vừa phải',
      'Lau đều bề mặt sàn và lau lại bằng nước sạch',
      'Đậy kín nắp sau khi sử dụng và bảo quản nơi khô ráo, thoáng mát'
    ],
    benefits: [
      'Làm sạch nhanh chóng',
      'Khử mùi hiệu quả',
      'Mang hương sả chanh thanh mát tự nhiên',
      'Giúp xua đuổi muỗi và côn trùng',
      'Phù hợp cho các loại sàn cứng'
    ]
  },
  {
    id: 123,
    title: 'Nước lau sàn Okay Lavender can 2 lít',
    category: 'Nước Lau Sàn',
    subcategory: 'Okay',
    slug: 'nuoc-lau-san-okay-lavender-can-2-lit',
    image: '/Product/Okashi/Lavender/2000.png',
    images: [],
    isNew: false,
    inStock: true,
    description: 'Nước lau sàn Okay Lavender can 2 lít với hương oải hương thư giãn mang lại cảm giác dễ chịu sau mỗi lần lau dọn. Công thức diệt khuẩn và làm sạch mạnh mẽ giúp sàn nhà sáng bóng, sạch sẽ và thơm ngát.',
    metaDescription: 'Nước lau sàn Okay Lavender 2L hương oải hương thư giãn, diệt khuẩn và làm sạch mạnh mẽ, giúp sàn nhà sáng bóng, thơm ngát dài lâu.',
    features: [
      'Hương oải hương thư giãn',
      'Diệt khuẩn hiệu quả',
      'Làm sạch mạnh mẽ',
      'Sàn nhà sáng bóng',
      'Thơm ngát dài lâu'
    ],
    specifications: [
      { label: 'Xuất xứ', value: 'Thái Lan' },
      { label: 'Dung tích', value: '2 lít' },
      { label: 'Thương hiệu', value: 'Okay' },
      { label: 'Hạn sử dụng', value: '24 tháng từ ngày sản xuất' }
    ],
    usage: [
      'Pha 1 nắp (khoảng 30ml) Nước lau sàn Okay với 5 lít nước sạch',
      'Nhúng cây lau vào dung dịch đã pha, vắt khô vừa phải',
      'Lau đều bề mặt sàn và lau lại bằng nước sạch',
      'Đậy kín nắp sau khi sử dụng và bảo quản nơi khô ráo, thoáng mát'
    ],
    benefits: [
      'Loại bỏ bụi bẩn, vết ố trên sàn',
      'Tỏa hương oải hương thư giãn',
      'Giúp tinh thần thoải mái, dễ chịu',
      'Diệt khuẩn hiệu quả',
      'Làm cho sàn nhà sáng bóng'
    ]
  },
  {
    id: 124,
    title: 'Nước lau sàn Okay Skyblue can 2 lít',
    category: 'Nước Lau Sàn',
    subcategory: 'Okay',
    slug: 'nuoc-lau-san-okay-skyblue-can-2-lit',
    image: '/Product/Okashi/Skyblue/2000.png',
    images: [],
    isNew: false,
    inStock: true,
    description: 'Nước lau sàn Okay Skyblue can 2 lít đem đến hương thơm trong lành, tươi mát. Sản phẩm giúp loại bỏ vết bẩn nhanh chóng, diệt khuẩn và giữ cho không gian nhà cửa luôn sạch sẽ, thoáng đãng.',
    metaDescription: 'Nước lau sàn Okay Skyblue 2L hương trong lành, tươi mát, giúp loại bỏ vết bẩn, diệt khuẩn, mang lại không gian sạch sẽ, thoáng đãng.',
    features: [
      'Hương thơm trong lành, tươi mát',
      'Loại bỏ vết bẩn nhanh chóng',
      'Diệt khuẩn hiệu quả',
      'Giữ không gian sạch sẽ',
      'Thoáng đãng'
    ],
    specifications: [
      { label: 'Xuất xứ', value: 'Thái Lan' },
      { label: 'Dung tích', value: '2 lít' },
      { label: 'Thương hiệu', value: 'Okay' },
      { label: 'Hạn sử dụng', value: '24 tháng từ ngày sản xuất' }
    ],
    usage: [
      'Pha 1 nắp (khoảng 30ml) Nước lau sàn Okay với 5 lít nước sạch',
      'Nhúng cây lau vào dung dịch đã pha, vắt khô vừa phải',
      'Lau đều bề mặt sàn và lau lại bằng nước sạch',
      'Đậy kín nắp sau khi sử dụng và bảo quản nơi khô ráo, thoáng mát'
    ],
    benefits: [
      'Làm sạch vết bẩn và bụi mịn trên sàn',
      'Đem lại hương thơm mát lành, sảng khoái',
      'Giữ cho không gian luôn tươi mới',
      'Diệt khuẩn hiệu quả',
      'Thích hợp cho mọi loại sàn cứng'
    ]
  },
  {
    id: 125,
    title: 'Nước lau sàn Okay Floral Fresh can 3,8 lít',
    category: 'Nước Lau Sàn',
    subcategory: 'Okay',
    slug: 'nuoc-lau-san-okay-floral-fresh-can-3-8-lit',
    image: '/Product/Okashi/Floral_Fresh/3800.png',
    images: [],
    isNew: false,
    inStock: true,
    description: 'Nước lau sàn Okay Floral Fresh can 3,8 lít với hương hoa tươi mát giúp không gian sống thêm dễ chịu và thư giãn. Công thức làm sạch hiệu quả, loại bỏ bụi và vết bẩn trên sàn, để lại bề mặt sáng bóng và thơm lâu.',
    metaDescription: 'Nước lau sàn Okay Floral Fresh 3.8L hương hoa tươi mát, làm sạch hiệu quả, loại bỏ bụi bẩn và lưu hương dễ chịu, thư giãn dài lâu.',
    features: [
      'Hương hoa tươi mát',
      'Công thức làm sạch hiệu quả',
      'Loại bỏ bụi và vết bẩn trên sàn',
      'Để lại bề mặt sáng bóng',
      'Thơm lâu dài'
    ],
    specifications: [
      { label: 'Xuất xứ', value: 'Thái Lan' },
      { label: 'Dung tích', value: '3.8 lít' },
      { label: 'Thương hiệu', value: 'Okay' },
      { label: 'Hạn sử dụng', value: '24 tháng từ ngày sản xuất' }
    ],
    usage: [
      'Pha 1 nắp (khoảng 30ml) Nước lau sàn Okay với 5 lít nước sạch',
      'Nhúng cây lau vào dung dịch đã pha, vắt khô vừa phải',
      'Lau đều bề mặt sàn và lau lại bằng nước sạch',
      'Đậy kín nắp sau khi sử dụng và bảo quản nơi khô ráo, thoáng mát'
    ],
    benefits: [
      'Làm sạch bụi bẩn và vết ố trên sàn hiệu quả',
      'Lưu lại hương hoa tươi mát',
      'Mang đến không gian sống dễ chịu, đầy sức sống',
      'Dung tích lớn tiết kiệm chi phí',
      'Phù hợp cho gia đình và văn phòng'
    ]
  },
  {
    id: 126,
    title: 'Nước lau sàn Okay Lemongrass can 3,8 lít',
    category: 'Nước Lau Sàn',
    subcategory: 'Okay',
    slug: 'nuoc-lau-san-okay-lemongrass-can-3-8-lit',
    image: '/Product/Okashi/Lemongrass/3800.png',
    images: [],
    isNew: false,
    inStock: true,
    description: 'Nước lau sàn Okay Lemongrass can 3,8 lít mang hương sả dịu nhẹ, giúp khử mùi và xua đuổi côn trùng hiệu quả. Sản phẩm làm sạch nhanh chóng, giữ cho sàn nhà luôn sạch bóng và thoáng mát.',
    metaDescription: 'Nước lau sàn Okay Lemongrass 3.8L hương sả dịu nhẹ, khử mùi, xua côn trùng, làm sạch nhanh, giúp sàn luôn sáng bóng và thơm mát.',
    features: [
      'Hương sả dịu nhẹ',
      'Khử mùi hiệu quả',
      'Xua đuổi côn trùng',
      'Làm sạch nhanh chóng',
      'Giữ sàn nhà sáng bóng và thơm mát'
    ],
    specifications: [
      { label: 'Xuất xứ', value: 'Thái Lan' },
      { label: 'Dung tích', value: '3.8 lít' },
      { label: 'Thương hiệu', value: 'Okay' },
      { label: 'Hạn sử dụng', value: '24 tháng từ ngày sản xuất' }
    ],
    usage: [
      'Pha 1 nắp (khoảng 30ml) Nước lau sàn Okay với 5 lít nước sạch',
      'Nhúng cây lau vào dung dịch đã pha, vắt khô vừa phải',
      'Lau đều bề mặt sàn và lau lại bằng nước sạch',
      'Đậy kín nắp sau khi sử dụng và bảo quản nơi khô ráo, thoáng mát'
    ],
    benefits: [
      'Làm sạch nhanh chóng',
      'Khử mùi hiệu quả',
      'Mang hương sả chanh thanh mát tự nhiên',
      'Giúp xua đuổi muỗi và côn trùng',
      'Dung tích lớn cho nhiều lần sử dụng'
    ]
  },
  {
    id: 127,
    title: 'Nước lau sàn Okay Floral Fresh can 5 lít',
    category: 'Nước Lau Sàn',
    subcategory: 'Okay',
    slug: 'nuoc-lau-san-okay-floral-fresh-can-5-lit',
    image: '/Product/Okashi/Floral_Fresh/5000.png',
    images: [],
    isNew: false,
    inStock: true,
    description: 'Nước lau sàn Okay Floral Fresh can 5 lít với hương hoa tươi mát giúp không gian sống thêm dễ chịu và thư giãn. Công thức làm sạch hiệu quả, loại bỏ bụi và vết bẩn trên sàn, để lại bề mặt sáng bóng và thơm lâu.',
    metaDescription: 'Nước lau sàn Okay Floral Fresh 5L hương hoa tươi mát, làm sạch hiệu quả, loại bỏ bụi bẩn, cho sàn nhà sáng bóng và thơm lâu.',
    features: [
      'Hương hoa tươi mát',
      'Công thức làm sạch hiệu quả',
      'Loại bỏ bụi và vết bẩn trên sàn',
      'Để lại bề mặt sáng bóng',
      'Thơm lâu dài'
    ],
    specifications: [
      { label: 'Xuất xứ', value: 'Thái Lan' },
      { label: 'Dung tích', value: '5 lít' },
      { label: 'Thương hiệu', value: 'Okay' },
      { label: 'Hạn sử dụng', value: '24 tháng từ ngày sản xuất' }
    ],
    usage: [
      'Pha 1 nắp (khoảng 30ml) Nước lau sàn Okay với 5 lít nước sạch',
      'Nhúng cây lau vào dung dịch đã pha, vắt khô vừa phải',
      'Lau đều bề mặt sàn và lau lại bằng nước sạch',
      'Đậy kín nắp sau khi sử dụng và bảo quản nơi khô ráo, thoáng mát'
    ],
    benefits: [
      'Làm sạch bụi bẩn và vết ố trên sàn hiệu quả',
      'Lưu lại hương hoa tươi mát',
      'Mang đến không gian sống dễ chịu, đầy sức sống',
      'Dung tích lớn phù hợp cho gia đình lớn',
      'Tiết kiệm chi phí sử dụng'
    ]
  },
  {
    id: 128,
    title: 'Nước lau sàn Okay Lemongrass can 5 lít',
    category: 'Nước Lau Sàn',
    subcategory: 'Okay',
    slug: 'nuoc-lau-san-okay-lemongrass-can-5-lit',
    image: '/Product/Okashi/Lemongrass/5000.png',
    images: [],
    isNew: false,
    inStock: true,
    description: 'Nước lau sàn Okay Lemongrass can 5 lít mang hương sả dịu nhẹ, giúp khử mùi và xua đuổi côn trùng hiệu quả. Sản phẩm làm sạch nhanh chóng, giữ cho sàn nhà luôn sạch bóng và thoáng mát.',
    metaDescription: 'Nước lau sàn Okay Lemongrass 5L hương sả dịu nhẹ, khử mùi, xua côn trùng, giúp sàn nhà sạch bóng, thoáng mát suốt ngày dài.',
    features: [
      'Hương sả dịu nhẹ',
      'Khử mùi hiệu quả',
      'Xua đuổi côn trùng',
      'Làm sạch nhanh chóng',
      'Giữ sàn nhà sạch bóng và thoáng mát'
    ],
    specifications: [
      { label: 'Xuất xứ', value: 'Thái Lan' },
      { label: 'Dung tích', value: '5 lít' },
      { label: 'Thương hiệu', value: 'Okay' },
      { label: 'Hạn sử dụng', value: '24 tháng từ ngày sản xuất' }
    ],
    usage: [
      'Pha 1 nắp (khoảng 30ml) Nước lau sàn Okay với 5 lít nước sạch',
      'Nhúng cây lau vào dung dịch đã pha, vắt khô vừa phải',
      'Lau đều bề mặt sàn và lau lại bằng nước sạch',
      'Đậy kín nắp sau khi sử dụng và bảo quản nơi khô ráo, thoáng mát'
    ],
    benefits: [
      'Làm sạch nhanh chóng',
      'Khử mùi hiệu quả',
      'Mang hương sả chanh thanh mát tự nhiên',
      'Giúp xua đuổi muỗi và côn trùng',
      'Dung tích lớn cho nhiều lần sử dụng'
    ]
  },
  {
    id: 129,
    title: 'Nước lau sàn Okay Lavender can 5 lít',
    category: 'Nước Lau Sàn',
    subcategory: 'Okay',
    slug: 'nuoc-lau-san-okay-lavender-can-5-lit',
    image: '/Product/Okashi/Lavender/5000.png',
    images: [],
    isNew: false,
    inStock: true,
    description: 'Nước lau sàn Okay Lavender can 5 lít với hương oải hương thư giãn mang lại cảm giác dễ chịu sau mỗi lần lau dọn. Công thức diệt khuẩn và làm sạch mạnh mẽ giúp sàn nhà sáng bóng, sạch sẽ và thơm ngát.',
    metaDescription: 'Nước lau sàn Okay Lavender 5L hương oải hương thư giãn, làm sạch và diệt khuẩn hiệu quả, mang lại sàn nhà sáng bóng, thơm ngát.',
    features: [
      'Hương oải hương thư giãn',
      'Diệt khuẩn hiệu quả',
      'Làm sạch mạnh mẽ',
      'Sàn nhà sáng bóng',
      'Thơm ngát dài lâu'
    ],
    specifications: [
      { label: 'Xuất xứ', value: 'Thái Lan' },
      { label: 'Dung tích', value: '5 lít' },
      { label: 'Thương hiệu', value: 'Okay' },
      { label: 'Hạn sử dụng', value: '24 tháng từ ngày sản xuất' }
    ],
    usage: [
      'Pha 1 nắp (khoảng 30ml) Nước lau sàn Okay với 5 lít nước sạch',
      'Nhúng cây lau vào dung dịch đã pha, vắt khô vừa phải',
      'Lau đều bề mặt sàn và lau lại bằng nước sạch',
      'Đậy kín nắp sau khi sử dụng và bảo quản nơi khô ráo, thoáng mát'
    ],
    benefits: [
      'Loại bỏ bụi bẩn, vết ố trên sàn',
      'Tỏa hương oải hương thư giãn',
      'Giúp tinh thần thoải mái, dễ chịu',
      'Diệt khuẩn hiệu quả',
      'Dung tích lớn tiết kiệm chi phí'
    ]
  },
  {
    id: 130,
    title: 'Nước lau sàn Okay Skyblue can 5 lít',
    category: 'Nước Lau Sàn',
    subcategory: 'Okay',
    slug: 'nuoc-lau-san-okay-skyblue-can-5-lit',
    image: '/Product/Okashi/Skyblue/5000.png',
    images: [],
    isNew: false,
    inStock: true,
    description: 'Nước lau sàn Okay Skyblue can 5 lít đem đến hương thơm trong lành, tươi mát. Sản phẩm giúp loại bỏ vết bẩn nhanh chóng, diệt khuẩn và giữ cho không gian nhà cửa luôn sạch sẽ, thoáng đãng.',
    metaDescription: 'Nước lau sàn Okay Skyblue 5L hương thơm trong lành, tươi mát, giúp loại bỏ vết bẩn, diệt khuẩn, giữ không gian luôn sạch sẽ, thoáng đãng.',
    features: [
      'Hương thơm trong lành, tươi mát',
      'Loại bỏ vết bẩn nhanh chóng',
      'Diệt khuẩn hiệu quả',
      'Giữ không gian sạch sẽ',
      'Thoáng đãng'
    ],
    specifications: [
      { label: 'Xuất xứ', value: 'Thái Lan' },
      { label: 'Dung tích', value: '5 lít' },
      { label: 'Thương hiệu', value: 'Okay' },
      { label: 'Hạn sử dụng', value: '24 tháng từ ngày sản xuất' }
    ],
    usage: [
      'Pha 1 nắp (khoảng 30ml) Nước lau sàn Okay với 5 lít nước sạch',
      'Nhúng cây lau vào dung dịch đã pha, vắt khô vừa phải',
      'Lau đều bề mặt sàn và lau lại bằng nước sạch',
      'Đậy kín nắp sau khi sử dụng và bảo quản nơi khô ráo, thoáng mát'
    ],
    benefits: [
      'Làm sạch vết bẩn và bụi mịn trên sàn',
      'Đem lại hương thơm mát lành, sảng khoái',
      'Giữ cho không gian luôn tươi mới',
      'Diệt khuẩn hiệu quả',
      'Dung tích lớn cho nhiều lần sử dụng'
    ]
  },
  {
    id: 131,
    title: 'Túi thơm Hygiene Pink Sweet gói 8g',
    category: 'Mặt Hàng Khác',
    subcategory: 'Túi thơm Hygiene',
    slug: 'tui-thom-hygiene-pink-sweet-goi-8g',
    image: '/Product/Tui_thom_Hygiene/Pink_Sweet.png',
    images: [],
    description: 'Túi thơm Hygiene Pink Sweet sở hữu hương hoa thơm ngọt ngào và nữ tính giúp mang lại cảm giác dễ chịu cho không gian sống. Sản phẩm thích hợp đặt trong tủ quần áo, ngăn kéo, túi xách hoặc xe hơi, giúp khử mùi và lưu hương bền lâu lên đến 8 tuần.',
    metaDescription: 'Túi thơm Hygiene Pink Sweet mang hương hoa thơm ngọt ngào và nữ tính giúp mang lại cảm giác dễ chịu và lưu hương lâu lên đến 8 tuần.',
    features: [
      'Túi thơm Hygiene Pink Sweet giúp lưu giữ mùi thơm trong hơn 8 tuần, và loại bỏ mùi hôi. Có thể treo hoặc đặt trong khu vực bạn muốn, chẳng hạn như tủ quần áo, xe hơi hoặc phòng tắm.'
    ],
    specifications: [
      { label: 'Xuất xứ', value: 'Thái Lan' },
      { label: 'Trọng lượng', value: '8g' },
      { label: 'Sử dụng cho', value: 'Tủ quần áo, xe hơi, nhà tắm, tủ đồ' }
    ],
    usage: [
      'Xé bao bì bên ngoài, lấy túi thơm ra và treo vào khu vực mình mong muốn',
      'Để có độ thơm liên tục nên thay túi sau mỗi 8 tuần sử dụng'
    ],
    benefits: [
      'Khử mùi hiệu quả, lưu hương lâu đến 12 tuần',
      'Mang lại không gian thơm mát, dễ chịu mọi lúc mọi nơi'
    ],
    isNew: true,
    inStock: true
  },
  {
    id: 132,
    title: 'Túi thơm Hygiene Sunrise Kiss gói 8g',
    category: 'Mặt Hàng Khác',
    subcategory: 'Túi thơm Hygiene',
    slug: 'tui-thom-hygiene-sunrise-kiss-goi-8g',
    image: '/Product/Tui_thom_Hygiene/Sunrise_Kiss.png',
    images: [],
    description: 'Túi thơm Hygiene Sunrise Kiss mang hương thơm hoa hồng Damask, giúp không gian luôn thơm mát như buổi sớm mai. Sản phẩm thích hợp đặt trong tủ quần áo, ngăn kéo, túi xách hoặc xe hơi, giúp khử mùi và lưu hương bền lâu lên đến 12 tuần.',
    metaDescription: 'Túi thơm Hygiene Sunrise Kiss mang hương hoa tươi ngọt ngào, lưu hương đến 12 tuần và khử mùi hiệu quả.',
    features: [
      'Túi thơm Hygiene Sunrise Kiss giúp lưu giữ mùi thơm trong hơn 8 tuần, và loại bỏ mùi hôi. Có thể treo hoặc đặt trong khu vực bạn muốn, chẳng hạn như tủ quần áo, xe hơi hoặc phòng tắm.'
    ],
    specifications: [
      { label: 'Xuất xứ', value: 'Thái Lan' },
      { label: 'Trọng lượng', value: '8g' },
      { label: 'Sử dụng cho', value: 'Tủ quần áo, xe hơi, nhà tắm, tủ đồ' }
    ],
    usage: [
      'Xé bao bì bên ngoài, lấy túi thơm ra và treo vào khu vực mình mong muốn',
      'Để có độ thơm liên tục nên thay túi sau mỗi 8 tuần sử dụng'
    ],
    benefits: [
      'Hương thơm hoa hồng Damask tinh tế',
      'Lưu hương bền lâu lên đến 12 tuần',
      'Khử mùi hiệu quả'
    ],
    isNew: true,
    inStock: true
  },
  {
    id: 133,
    title: 'Túi thơm Hygiene Peony Bloom gói 8g',
    category: 'Mặt Hàng Khác',
    subcategory: 'Túi thơm Hygiene',
    slug: 'tui-thom-hygiene-peony-bloom-goi-8g',
    image: '/Product/Tui_thom_Hygiene/Peony_Bloom.png',
    images: [],
    description: 'Túi thơm Hygiene Peony Bloom mang đến hương hoa mẫu đơn thanh lịch và sang trọng, mang lại không gian dễ chịu, thư giãn và nhẹ nhàng. Sản phẩm thích hợp đặt trong tủ quần áo, ngăn kéo, túi xách hoặc xe hơi, giúp khử mùi và lưu hương bền lâu lên đến 12 tuần.',
    metaDescription: 'Túi thơm Hygiene Peony Bloom mang đến hương hoa mẫu đơn thanh lịch và sang trọng. Sản phẩm lưu hương bền lâu lên đến 12 tuần.',
    features: [
      'Túi thơm Hygien Peony Bloom giúp lưu giữ mùi thơm trong hơn 8 tuần, và loại bỏ mùi hôi. Có thể treo hoặc đặt trong khu vực bạn muốn, chẳng hạn như tủ quần áo, xe hơi hoặc phòng tắm.'
    ],
    specifications: [
      { label: 'Xuất xứ', value: 'Thái Lan' },
      { label: 'Trọng lượng', value: '8g' },
      { label: 'Sử dụng cho', value: 'Tủ quần áo, xe hơi, nhà tắm, tủ đồ' }
    ],
    usage: [
      'Xé bao bì bên ngoài, lấy túi thơm ra và treo vào khu vực mình mong muốn',
      'Để có độ thơm liên tục nên thay túi sau mỗi 8 tuần sử dụng'
    ],
    benefits: [
      'Hương hoa mẫu đơn thanh lịch và sang trọng',
      'Mang lại không gian thư giãn, nhẹ nhàng',
      'Lưu hương bền lâu'
    ],
    isNew: true,
    inStock: true
  },
  {
    id: 134,
    title: 'Túi thơm Hygiene Blue Fresh gói 8g',
    category: 'Mặt Hàng Khác',
    subcategory: 'Túi thơm Hygiene',
    slug: 'tui-thom-hygiene-blue-fresh-goi-8g',
    image: '/Product/Tui_thom_Hygiene/Blue_Fresh.png',
    images: [],
    description: 'Túi thơm Hygiene Blue Fresh mang hương thơm dịu nhẹ, tươi mát gợi lên cảm giác mát mẻ. Sản phẩm thích hợp đặt trong tủ quần áo, ngăn kéo, túi xách hoặc xe hơi, giúp khử mùi và lưu hương bền lâu lên đến 8 tuần.',
    metaDescription: 'Túi thơm Hygiene Blue Fresh mang hương thơm dịu nhẹ, tươi mát và lưu hương bền lâu lên đến 8 tuần.',
    features: [
      'Túi thơm Hygiene Blue Fresh giúp lưu giữ mùi thơm trong hơn 8 tuần, và loại bỏ mùi hôi. Có thể treo hoặc đặt trong khu vực bạn muốn, chẳng hạn như tủ quần áo, xe hơi hoặc phòng tắm.'
    ],
    specifications: [
      { label: 'Xuất xứ', value: 'Thái Lan' },
      { label: 'Trọng lượng', value: '8g' },
      { label: 'Sử dụng cho', value: 'Tủ quần áo, xe hơi, nhà tắm, tủ đồ' }
    ],
    usage: [
      'Xé bao bì bên ngoài, lấy túi thơm ra và treo vào khu vực mình mong muốn',
      'Để có độ thơm liên tục nên thay túi sau mỗi 8 tuần sử dụng'
    ],
    benefits: [
      'Hương thơm dịu nhẹ, tươi mát',
      'Gợi cảm giác mát mẻ',
      'Khử mùi hiệu quả'
    ],
    isNew: true,
    inStock: true
  },
  {
    id: 135,
    title: 'Túi thơm Hygiene Sunkiss Blooming gói 8g',
    category: 'Mặt Hàng Khác',
    subcategory: 'Túi thơm Hygiene',
    slug: 'tui-thom-hygiene-sunkiss-blooming-goi-8g',
    image: '/Product/Tui_thom_Hygiene/Sunkiss_Blooming.png',
    images: [],
    description: 'Túi thơm Hygiene Sunkiss Blooming tỏa hương hoa rực rỡ và ngọt ngào, mang lại cảm giác dễ chịu cho không gian sống. Sản phẩm thích hợp đặt trong tủ quần áo, ngăn kéo, túi xách hoặc xe hơi, giúp khử mùi và lưu hương bền lâu lên đến 12 tuần.',
    metaDescription: 'Túi thơm Hygiene Sunkiss Blooming tỏa hương hoa rực rỡ và ngọt ngào và lưu hương bền lâu lên đến 12 tuần.',
    features: [
      'Túi thơm Hygiene Sunkiss Blooming giúp lưu giữ mùi thơm trong hơn 8 tuần, và loại bỏ mùi hôi. Có thể treo hoặc đặt trong khu vực bạn muốn, chẳng hạn như tủ quần áo, xe hơi hoặc phòng tắm.'
    ],
    specifications: [
      { label: 'Xuất xứ', value: 'Thái Lan' },
      { label: 'Trọng lượng', value: '8g' },
      { label: 'Sử dụng cho', value: 'Tủ quần áo, xe hơi, nhà tắm, tủ đồ' }
    ],
    usage: [
      'Xé bao bì bên ngoài, lấy túi thơm ra và treo vào khu vực mình mong muốn',
      'Để có độ thơm liên tục nên thay túi sau mỗi 8 tuần sử dụng'
    ],
    benefits: [
      'Hương hoa rực rỡ và ngọt ngào',
      'Mang lại cảm giác dễ chịu',
      'Lưu hương bền lâu'
    ],
    isNew: true,
    inStock: true
  },
  {
    id: 136,
    title: 'Túi thơm Hygiene Blooming Touch gói 8g',
    category: 'Mặt Hàng Khác',
    subcategory: 'Túi thơm Hygiene',
    slug: 'tui-thom-hygiene-blooming-touch-goi-8g',
    image: '/Product/Tui_thom_Hygiene/Blooming_Touch.png',
    images: [],
    description: 'Túi thơm Hygiene Blooming Touch mang hương sữa ngọt ngào kết hợp cùng hương hoa mẫu đơn tạo cảm giác ấm áp và dễ chịu cho không gian sống. Sản phẩm thích hợp đặt trong tủ quần áo, ngăn kéo, túi xách hoặc xe hơi, giúp khử mùi và lưu hương bền lâu lên đến 12 tuần.',
    metaDescription: 'Túi thơm Hygiene Blooming Touch mang hương sữa ngọt ngào kết hợp hương hoa mẫu đơn. Sản phẩm lưu hương bền lâu lên đến 12 tuần.',
    features: [
      'Túi thơm Hygiene Blooming Touch giúp lưu giữ mùi thơm trong hơn 8 tuần, và loại bỏ mùi hôi. Có thể treo hoặc đặt trong khu vực bạn muốn, chẳng hạn như tủ quần áo, xe hơi hoặc phòng tắm.'
    ],
    specifications: [
      { label: 'Xuất xứ', value: 'Thái Lan' },
      { label: 'Trọng lượng', value: '8g' },
      { label: 'Sử dụng cho', value: 'Tủ quần áo, xe hơi, nhà tắm, tủ đồ' }
    ],
    usage: [
      'Xé bao bì bên ngoài, lấy túi thơm ra và treo vào khu vực mình mong muốn',
      'Để có độ thơm liên tục nên thay túi sau mỗi 8 tuần sử dụng'
    ],
    benefits: [
      'Hương sữa ngọt ngào kết hợp hương hoa mẫu đơn',
      'Tạo cảm giác ấm áp và dễ chịu',
      'Lưu hương bền lâu'
    ],
    isNew: true,
    inStock: true
  },
  {
    id: 137,
    title: 'Túi thơm Hygiene Violet Soft gói 8g',
    category: 'Mặt Hàng Khác',
    subcategory: 'Túi thơm Hygiene',
    slug: 'tui-thom-hygiene-violet-soft-goi-8g',
    image: '/Product/Tui_thom_Hygiene/Violet_Soft.png',
    images: [],
    description: 'Túi thơm Hygiene Violet Soft mang hương hoa violet thanh khiết tạo không gian dễ chịu và tươi mát. Sản phẩm thích hợp đặt trong tủ quần áo, ngăn kéo, túi xách hoặc xe hơi, giúp khử mùi và lưu hương bền lâu lên đến 8 tuần.',
    metaDescription: 'Túi thơm Hygiene Violet Soft mang hương hoa violet thanh khiết tạo không gian dễ chịu và tươi mát. Sản phẩm lưu hương bền lâu lên đến 8 tuần.',
    features: [
      'Túi thơm Hygiene Violet Soft giúp lưu giữ mùi thơm trong hơn 8 tuần, và loại bỏ mùi hôi. Có thể treo hoặc đặt trong khu vực bạn muốn, chẳng hạn như tủ quần áo, xe hơi hoặc phòng tắm.'
    ],
    specifications: [
      { label: 'Xuất xứ', value: 'Thái Lan' },
      { label: 'Trọng lượng', value: '8g' },
      { label: 'Sử dụng cho', value: 'Tủ quần áo, xe hơi, nhà tắm, tủ đồ' }
    ],
    usage: [
      'Xé bao bì bên ngoài, lấy túi thơm ra và treo vào khu vực mình mong muốn',
      'Để có độ thơm liên tục nên thay túi sau mỗi 8 tuần sử dụng'
    ],
    benefits: [
      'Hương hoa violet thanh khiết',
      'Tạo không gian dễ chịu và tươi mát',
      'Khử mùi hiệu quả'
    ],
    isNew: true,
    inStock: true
  },
  {
    id: 138,
    title: 'Túi thơm Hygiene Happy Sunshine gói 8g',
    category: 'Mặt Hàng Khác',
    subcategory: 'Túi thơm Hygiene',
    slug: 'tui-thom-hygiene-happy-sunshine-goi-8g',
    image: '/Product/Tui_thom_Hygiene/Happy_Sunshine.png',
    images: [],
    description: 'Túi thơm Hygiene Happy Sunshine mang mùi hương của ánh nắng hạnh phúc giúp không gian ấm áp và thư giãn. Sản phẩm thích hợp đặt trong tủ quần áo, ngăn kéo, túi xách hoặc xe hơi, giúp khử mùi và lưu hương bền lâu lên đến 12 tuần.',
    metaDescription: 'Túi thơm Hygiene Happy Sunshine mang mùi hương của ánh nắng hạnh phúc. Sản phẩm lưu hương bền lâu lên đến 12 tuần.',
    features: [
      'Túi thơm Hygiene Happy Sunshine giúp lưu giữ mùi thơm trong hơn 8 tuần, và loại bỏ mùi hôi. Có thể treo hoặc đặt trong khu vực bạn muốn, chẳng hạn như tủ quần áo, xe hơi hoặc phòng tắm.'
    ],
    specifications: [
      { label: 'Xuất xứ', value: 'Thái Lan' },
      { label: 'Trọng lượng', value: '8g' },
      { label: 'Sử dụng cho', value: 'Tủ quần áo, xe hơi, nhà tắm, tủ đồ' }
    ],
    usage: [
      'Xé bao bì bên ngoài, lấy túi thơm ra và treo vào khu vực mình mong muốn',
      'Để có độ thơm liên tục nên thay túi sau mỗi 8 tuần sử dụng'
    ],
    benefits: [
      'Mùi hương của ánh nắng hạnh phúc',
      'Giúp không gian ấm áp và thư giãn',
      'Lưu hương bền lâu'
    ],
    isNew: true,
    inStock: true
  },
  {
    id: 139,
    title: 'Túi thơm Hygiene Lovely Bloom gói 8g',
    category: 'Mặt Hàng Khác',
    subcategory: 'Túi thơm Hygiene',
    slug: 'tui-thom-hygiene-lovely-bloom-goi-8g',
    image: '/Product/Tui_thom_Hygiene/Lovely_Bloom.png',
    images: [],
    description: 'Túi thơm Hygiene Lovely Bloom mang đến sự kết hợp tinh tế giữa hương hoa ngọt ngào và trái cây mọng nước, tạo nên mùi hương tươi mới và quyến rũ. Sản phẩm thích hợp đặt trong tủ quần áo, ngăn kéo, túi xách hoặc xe hơi, giúp khử mùi và lưu hương bền lâu lên đến 12 tuần.',
    metaDescription: 'Túi thơm Hygiene Lovely Bloom với hương hoa và trái cây tươi mát, lưu hương đến 12 tuần, giúp khử mùi hiệu quả và mang lại không gian thơm ngát, dễ chịu mỗi ngày.',
    features: [
      'Túi thơm Hygiene Lovely Bloom giúp lưu giữ mùi thơm trong hơn 8 tuần, và loại bỏ mùi hôi. Có thể treo hoặc đặt trong khu vực bạn muốn, chẳng hạn như tủ quần áo, xe hơi hoặc phòng tắm.'
    ],
    specifications: [
      { label: 'Xuất xứ', value: 'Thái Lan' },
      { label: 'Trọng lượng', value: '8g' },
      { label: 'Sử dụng cho', value: 'Tủ quần áo, xe hơi, nhà tắm, tủ đồ' }
    ],
    usage: [
      'Xé bao bì bên ngoài, lấy túi thơm ra và treo vào khu vực mình mong muốn',
      'Để có độ thơm liên tục nên thay túi sau mỗi 8 tuần sử dụng'
    ],
    benefits: [
      'Kết hợp hương hoa ngọt ngào và trái cây mọng nước',
      'Mùi hương tươi mới và quyến rũ',
      'Khử mùi hiệu quả'
    ],
    isNew: true,
    inStock: true
  },
  {
    id: 140,
    title: 'Cốc Thả Bồn Cầu Hàn Quốc Hương Hoa 180g',
    category: 'Mặt Hàng Khác',
    subcategory: 'Cốc thả bồn cầu Hàn Quốc',
    slug: 'coc-tha-bon-cau-han-quoc-huong-hoa-180g',
    image: '/Product/Coc_tha_bon_cau.png',
    images: [],
    description: 'Cốc thả bồn cầu Hàn Quốc hương hoa 180g mang lại không gian nhà vệ sinh luôn thơm mát và dễ chịu, giúp khử mùi hiệu quả và lưu hương dài lâu. Với hương hoa thơm ngát, sản phẩm không chỉ làm sạch bồn cầu mà còn mang đến cảm giác sảng khoái, dễ chịu mỗi lần sử dụng.',
    metaDescription: 'Cốc thả bồn cầu Hàn Quốc hương hoa 180g mang lại không gian nhà vệ sinh luôn thơm mát, giúp khử mùi hiệu quả và lưu hương dài lâu.',
    features: [
      'Khử trùng, khử mùi, sạch, sang trọng, duy trì độ sáng của gốm, chống ăn mòn, không cần cọ rửa, không gây xước men, tẩy sạch các vết bẩn bám trong thành kẽ của xí bệt. Tiêu diệt tận gốc vi khuẩn có hại.'
    ],
    specifications: [
      { label: 'Xuất xứ', value: 'Thái Lan' },
      { label: 'Khối lượng', value: '180g' },
      { label: 'Sử dụng cho', value: 'Bồn cầu, bệ vệ sinh, bồn rửa mặt, các loại đồ gia dụng, nội thất bằng gốm' }
    ],
    usage: [
      'Mở nắp chai và điều chỉnh độ màu sắc của nước với núm xoay thông minh.',
      'Mở nắp bồn chứa nước, xả hết nước trong bồn.',
      'Đợi lượng nước trong bồn rút hết, thả nguyên cả chai vào góc bồn nước ở vị trí xa van xả. Sau khoảng 10 phút, nước trong bồn sẽ chuyển sang màu xanh nước biển.'
    ],
    benefits: [
      'Không gian nhà vệ sinh thơm mát',
      'Khử mùi hiệu quả và lưu hương dài lâu',
      'Làm sạch bồn cầu',
      'Mang đến cảm giác sảng khoái'
    ],
    isNew: true,
    inStock: true
  },
  {
    id: 141,
    title: 'Kem đánh răng Median 93% Hàn Quốc Original 120g',
    category: 'Mặt Hàng Khác',
    subcategory: 'Kem đánh răng Median 93%',
    slug: 'kem-danh-rang-median-93-han-quoc-original-120g',
    image: '/Product/Median/Original.png',
    images: [],
    description: 'Kem đánh răng Median 93% Hàn Quốc Original 120g mang hương bạc hà dịu mát, giúp hơi thở luôn sảng khoái và dễ chịu. Công thức làm sạch chuyên sâu hỗ trợ loại bỏ mảng bám, ngăn ngừa sâu răng và viêm nướu hiệu quả.',
    metaDescription: 'Kem đánh răng Median 93% Hàn Quốc Original 120g với bạc hà dịu mát, sạch mảng bám, ngừa sâu răng và viêm nướu.',
    features: [
      'Kem đánh răng Median 93% Hàn Quốc Original 120g là sản phẩm được chuyên gia khuyên dùng để chăm sóc răng miệng với khả năng loại bỏ sạch mảng bám, ngăn ngừa cao răng, hỗ trợ làm trắng răng, bảo vệ vùng nướu. Đây là sản phẩm kem đánh răng bán chạy số 1 tại Hàn Quốc và đang được thị trường châu Á ưa chuộng.',
      'Giúp chải sạch răng, loại bỏ mảng bám, thức ăn thừa, giúp răng miệng được sạch sẽ',
      'Ngăn ngừa mảng bám, cao răng, các vi khuẩn gây mùi',
      'Bảo vệ nướu và làm chắc răng',
      'Chứa các thành phần giúp hỗ trợ răng trắng sáng và giảm ố vàng',
      'Chống viêm lợi và giảm ê buốt răng',
      'Loại bỏ mùi hôi miệng bằng hương bạc hà/trà xanh/hương chanh the mát cực kỳ dễ chịu, sảng khoái.'
    ],
    specifications: [
      { label: 'Xuất xứ', value: 'Thái Lan' },
      { label: 'Khối lượng', value: '120g' },
      { label: 'Sử dụng cho', value: 'Người lớn, trẻ em trên 13 tuổi, người bị hôi miệng do hút thuốc, uống rượu bia,…' }
    ],
    usage: [
      'Dùng một lượng nhỏ kem đánh răng Median Hàn Quốc lên bàn chải, sau đó chải sạch răng và nướu trong vòng 2-3 phút, súc miệng thật sạch với nước.',
      'Dùng ít nhất 2 lần mỗi ngày'
    ],
    benefits: [
      'Hương bạc hà dịu mát',
      'Hơi thở sảng khoái',
      'Loại bỏ mảng bám, ngăn ngừa sâu răng',
      'Bảo vệ nướu hiệu quả'
    ],
    isNew: true,
    inStock: true
  },
  {
    id: 142,
    title: 'Kem đánh răng Median 93% Hàn Quốc Max Fresh 120g',
    category: 'Mặt Hàng Khác',
    subcategory: 'Kem đánh răng Median 93%',
    slug: 'kem-danh-rang-median-93-han-quoc-max-fresh-120g',
    image: '/Product/Median/Max_Fresh.png',
    images: [],
    description: 'Kem đánh răng Median 93% Hàn Quốc Max Fresh 120g hương bạc hà đem lại cảm giác sảng khoái sau khi chải răng. Thành phần làm sạch mạnh mẽ giúp loại bỏ vi khuẩn và mảng bám, bảo vệ răng miệng toàn diện.',
    metaDescription: 'Kem đánh răng Median 93% Hàn Quốc Max Fresh 120g tươi mát tối đa, sạch vi khuẩn và mảng bám, bảo vệ răng miệng khỏe mạnh và thơm lâu.',
    features: [
      'Kem đánh răng Median 93% Hàn Quốc Max Fresh 120g là sản phẩm được chuyên gia khuyên dùng để chăm sóc răng miệng với khả năng loại bỏ sạch mảng bám, ngăn ngừa cao răng, hỗ trợ làm trắng răng, bảo vệ vùng nướu. Đây là sản phẩm kem đánh răng bán chạy số 1 tại Hàn Quốc và đang được thị trường châu Á ưa chuộng.',
      'Giúp chải sạch răng, loại bỏ mảng bám, thức ăn thừa, giúp răng miệng được sạch sẽ',
      'Ngăn ngừa mảng bám, cao răng, các vi khuẩn gây mùi',
      'Bảo vệ nướu và làm chắc răng',
      'Chứa các thành phần giúp hỗ trợ răng trắng sáng và giảm ố vàng',
      'Chống viêm lợi và giảm ê buốt răng',
      'Loại bỏ mùi hôi miệng bằng hương bạc hà/trà xanh/hương chanh the mát cực kỳ dễ chịu, sảng khoái.'
    ],
    specifications: [
      { label: 'Xuất xứ', value: 'Thái Lan' },
      { label: 'Khối lượng', value: '120g' },
      { label: 'Sử dụng cho', value: 'Người lớn, trẻ em trên 13 tuổi, người bị hôi miệng do hút thuốc, uống rượu bia,…' }
    ],
    usage: [
      'Dùng một lượng nhỏ kem đánh răng Median Hàn Quốc lên bàn chải, sau đó chải sạch răng và nướu trong vòng 2-3 phút, súc miệng thật sạch với nước.',
      'Dùng ít nhất 2 lần mỗi ngày'
    ],
    benefits: [
      'Hương bạc hà sảng khoái',
      'Thành phần làm sạch mạnh mẽ',
      'Loại bỏ vi khuẩn và mảng bám',
      'Bảo vệ răng miệng toàn diện'
    ],
    isNew: true,
    inStock: true
  },
  {
    id: 143,
    title: 'Kem đánh răng Median 93% Hàn Quốc White 120g',
    category: 'Mặt Hàng Khác',
    subcategory: 'Kem đánh răng Median 93%',
    slug: 'kem-danh-rang-median-93-han-quoc-white-120g',
    image: '/Product/Median/White.png',
    images: [],
    description: 'Kem đánh răng Median 93% Hàn Quốc White 120g tập trung vào khả năng làm sáng, hỗ trợ loại bỏ vết ố và cao răng. Công thức dịu nhẹ kết hợp hương thơm tươi mát mang lại sự tự tin và cảm giác sạch sẽ sau mỗi lần sử dụng.',
    metaDescription: 'Kem đánh răng Median 93% Hàn Quốc White 120g giúp răng trắng sáng tự nhiên, loại bỏ vết ố và cao răng, hương thơm tươi mát cho nụ cười rạng rỡ.',
    features: [
      'Kem đánh răng Median 93% Hàn Quốc White 120g là sản phẩm được chuyên gia khuyên dùng để chăm sóc răng miệng với khả năng loại bỏ sạch mảng bám, ngăn ngừa cao răng, hỗ trợ làm trắng răng, bảo vệ vùng nướu. Đây là sản phẩm kem đánh răng bán chạy số 1 tại Hàn Quốc và đang được thị trường châu Á ưa chuộng.',
      'Giúp chải sạch răng, loại bỏ mảng bám, thức ăn thừa, giúp răng miệng được sạch sẽ',
      'Ngăn ngừa mảng bám, cao răng, các vi khuẩn gây mùi',
      'Bảo vệ nướu và làm chắc răng',
      'Chứa các thành phần giúp hỗ trợ răng trắng sáng và giảm ố vàng',
      'Chống viêm lợi và giảm ê buốt răng',
      'Loại bỏ mùi hôi miệng bằng hương bạc hà/trà xanh/hương chanh the mát cực kỳ dễ chịu, sảng khoái.'
    ],
    specifications: [
      { label: 'Xuất xứ', value: 'Thái Lan' },
      { label: 'Khối lượng', value: '120g' },
      { label: 'Sử dụng cho', value: 'Người lớn, trẻ em trên 13 tuổi, người bị hôi miệng do hút thuốc, uống rượu bia,…' }
    ],
    usage: [
      'Dùng một lượng nhỏ kem đánh răng Median Hàn Quốc lên bàn chải, sau đó chải sạch răng và nướu trong vòng 2-3 phút, súc miệng thật sạch với nước.',
      'Dùng ít nhất 2 lần mỗi ngày'
    ],
    benefits: [
      'Làm sáng răng tự nhiên',
      'Loại bỏ vết ố và cao răng',
      'Công thức dịu nhẹ',
      'Hương thơm tươi mát'
    ],
    isNew: true,
    inStock: true
  },
  {
    id: 144,
    title: 'Kem đánh răng Median 93% Hàn Quốc Gum 120g',
    category: 'Mặt Hàng Khác',
    subcategory: 'Kem đánh răng Median 93%',
    slug: 'kem-danh-rang-median-93-han-quoc-gum-120g',
    image: '/Product/Median/Gum.png',
    images: [],
    description: 'Kem đánh răng Median 93% Hàn Quốc Gum 120g chăm sóc và bảo vệ nướu, giúp giảm sưng đỏ và phòng ngừa viêm nướu hiệu quả. Kết cấu dịu nhẹ nhưng vẫn đảm bảo làm sạch sâu, loại bỏ mảng bám gây hại.',
    metaDescription: 'Kem đánh răng Median 93% Hàn Quốc Gum 120g giúp chăm sóc nướu khỏe, giảm sưng đỏ, làm sạch sâu và ngăn viêm nướu hiệu quả.',
    features: [
      'Kem đánh răng Median 93% Hàn Quốc Gum 120g là sản phẩm được chuyên gia khuyên dùng để chăm sóc răng miệng với khả năng loại bỏ sạch mảng bám, ngăn ngừa cao răng, hỗ trợ làm trắng răng, bảo vệ vùng nướu. Đây là sản phẩm kem đánh răng bán chạy số 1 tại Hàn Quốc và đang được thị trường châu Á ưa chuộng.',
      'Giúp chải sạch răng, loại bỏ mảng bám, thức ăn thừa, giúp răng miệng được sạch sẽ',
      'Ngăn ngừa mảng bám, cao răng, các vi khuẩn gây mùi',
      'Bảo vệ nướu và làm chắc răng',
      'Chứa các thành phần giúp hỗ trợ răng trắng sáng và giảm ố vàng',
      'Chống viêm lợi và giảm ê buốt răng',
      'Loại bỏ mùi hôi miệng bằng hương bạc hà/trà xanh/hương chanh the mát cực kỳ dễ chịu, sảng khoái.'
    ],
    specifications: [
      { label: 'Xuất xứ', value: 'Thái Lan' },
      { label: 'Khối lượng', value: '120g' },
      { label: 'Sử dụng cho', value: 'Người lớn, trẻ em trên 13 tuổi, người bị hôi miệng do hút thuốc, uống rượu bia,…' }
    ],
    usage: [
      'Dùng một lượng nhỏ kem đánh răng Median Hàn Quốc lên bàn chải, sau đó chải sạch răng và nướu trong vòng 2-3 phút, súc miệng thật sạch với nước.',
      'Dùng ít nhất 2 lần mỗi ngày'
    ],
    benefits: [
      'Chăm sóc và bảo vệ nướu',
      'Giảm sưng đỏ và phòng ngừa viêm nướu',
      'Làm sạch sâu, loại bỏ mảng bám',
      'Kết cấu dịu nhẹ'
    ],
    isNew: true,
    inStock: true
  },

  {
    id: 145,
    title: 'Nước giặt Hygiene Expert Wash Sweet Blossom Thái Lan can 2800ml',
    category: 'Nước Giặt',
    subcategory: 'Hygiene',
    slug: 'nc-git-hygiene-expert-wash-sweet-blossom-thi-lan-can-2800ml',
    image: '/Product/Nưoc_giat_Hygiene/2800_Sweet_Blossom.png',
    images: [],
    isNew: true,
    inStock: true,
    description: 'Nước giặt Hygiene Expert Wash Sweet Blossom Thái Lan can 2800ml mang hương hoa ngọt ngào, lôi cuốn và lưu hương dài lâu trong từng chuyển động. Với các phân tử làm sạch hoạt tính, sản phẩm giúp loại bỏ vết bẩn cứng đầu đồng thời khử mùi ẩm mốc hiệu quả.',
    metaDescription: 'Nước giặt Hygiene Expert Wash Sweet Blossom Thái Lan 2800ml mang hương hoa ngọt ngào, lưu hương bền lâu. Công thức hoạt tính giúp đánh bay vết bẩn cứng đầu và khử mùi ẩm mốc hiệu quả.',
    features: [
      'Khử mùi ẩm mốc, mùi bụi bẩn,… đánh bật các vết bẩn cứng đầu khỏi sợi vải',
      'Ngăn cản chất bẩn bám trở lại quần áo trong khi giặt',
      'Giúp quần áo trắng sạch mềm mại',
      'Lưu lại hương thơm của cánh đồng hoa tươi mát cho quần áo của cả gia đình bạn',
      'Bảo vệ vải sợi được bền màu'
    ],
    specifications: [
      { label: 'Xuất xứ', value: 'Thái Lan' },
      { label: 'Dung tích', value: '2800ml' }
    ],
    usage: [
      'Hòa tan kỹ nước giặt Hygiene với nước trước khi cho quần áo vào nước với tỷ lệ 1 nắp đầy hòa với 3 – 4 lít nước',
      'Ngâm quần áo trong 5 phút, vò nhẹ, xả qua với nước',
      'Đối với máy giặt theo tỷ lệ 4 – 6 cho 1 lần giặt'
    ],
    benefits: [
      'Khử mùi ẩm mốc hiệu quả',
      'Loại bỏ vết bẩn cứng đầu',
      'Quần áo trắng sạch mềm mại',
      'Hương thơm bền lâu',
      'Bảo vệ màu vải'
    ]
  },

  {
    id: 146,
    title: 'Nước giặt Hygiene Expert Wash Sunkiss Blooming Thái Lan can 2800ml',
    category: 'Nước Giặt',
    subcategory: 'Hygiene',
    slug: 'nc-git-hygiene-expert-wash-sunkiss-blooming-thi-lan-can-2800ml',
    image: '/Product/Nưoc_giat_Hygiene/2800_Sunkiss_Blooming.png',
    images: [],
    isNew: true,
    inStock: true,
    description: 'Nước giặt Hygiene Expert Wash Sunkiss Blooming Thái Lan can 2800ml lấy cảm hứng từ ánh nắng ban mai ấm áp và hương hoa rực rỡ. Nhờ công nghệ Active Scent Flip, quần áo không chỉ được giữ màu tươi mới mà còn khử sạch mùi ẩm mốc khó chịu. Mỗi cử động đều làm lan tỏa hương thơm rạng rỡ, cho bạn tự tin tỏa sáng cả ngày.',
    metaDescription: 'Nước giặt Hygiene Expert Wash Sunkiss Blooming Thái Lan 2800ml mang hương hoa rực rỡ, tươi sáng. Công nghệ Active Scent Flip giúp quần áo giữ màu bền đẹp, khử mùi ẩm mốc và lan tỏa hương thơm rạng rỡ suốt ngày dài.',
    features: [
      'Khử mùi ẩm mốc, mùi bụi bẩn,… đánh bật các vết bẩn cứng đầu khỏi sợi vải',
      'Ngăn cản chất bẩn bám trở lại quần áo trong khi giặt',
      'Giúp quần áo trắng sạch mềm mại',
      'Lưu lại hương thơm của cánh đồng hoa tươi mát cho quần áo của cả gia đình bạn',
      'Bảo vệ vải sợi được bền màu'
    ],
    specifications: [
      { label: 'Xuất xứ', value: 'Thái Lan' },
      { label: 'Dung tích', value: '2800ml' }
    ],
    usage: [
      'Hòa tan kỹ nước giặt Hygiene với nước trước khi cho quần áo vào nước với tỷ lệ 1 nắp đầy hòa với 3 – 4 lít nước',
      'Ngâm quần áo trong 5 phút, vò nhẹ, xả qua với nước',
      'Đối với máy giặt theo tỷ lệ 4 – 6 cho 1 lần giặt'
    ],
    benefits: [
      'Công nghệ Active Scent Flip giữ màu quần áo',
      'Khử mùi ẩm mốc khó chịu',
      'Lan tỏa hương thơm rạng rỡ',
      'Quần áo tươi mới suốt ngày',
      'Tự tin tỏa sáng'
    ]
  },

  {
    id: 147,
    title: 'Nước giặt Hygiene Expert Wash Blooming Fresh Thái Lan can 2800ml',
    category: 'Nước Giặt',
    subcategory: 'Hygiene',
    slug: 'nc-git-hygiene-expert-wash-blooming-fresh-thi-lan-can-2800ml',
    image: '/Product/Nưoc_giat_Hygiene/2800_Blooming_Fresh.png',
    images: [],
    isNew: true,
    inStock: true,
    description: 'Nước giặt Hygiene Expert Wash Blooming Fresh Thái Lan can 2800ml mang đến làn hương hoa tươi mát, sảng khoái như một ngày trời trong xanh buổi sáng. Với các phân tử làm sạch hoạt tính, sản phẩm giúp loại bỏ vết bẩn cứng đầu đồng thời khử mùi ẩm mốc hiệu quả.',
    metaDescription: 'Nước giặt Hygiene Expert Wash Blooming Fresh Thái Lan 2800ml mang hương hoa tươi mát, sảng khoái. Công thức hoạt tính giúp đánh bay vết bẩn cứng đầu, khử mùi ẩm mốc và lưu hương dễ chịu dài lâu.',
    features: [
      'Khử mùi ẩm mốc, mùi bụi bẩn,… đánh bật các vết bẩn cứng đầu khỏi sợi vải',
      'Ngăn cản chất bẩn bám trở lại quần áo trong khi giặt',
      'Giúp quần áo trắng sạch mềm mại',
      'Lưu lại hương thơm của cánh đồng hoa tươi mát cho quần áo của cả gia đình bạn',
      'Bảo vệ vải sợi được bền màu'
    ],
    specifications: [
      { label: 'Xuất xứ', value: 'Thái Lan' },
      { label: 'Dung tích', value: '2800ml' }
    ],
    usage: [
      'Hòa tan kỹ nước giặt Hygiene với nước trước khi cho quần áo vào nước với tỷ lệ 1 nắp đầy hòa với 3 – 4 lít nước',
      'Ngâm quần áo trong 5 phút, vò nhẹ, xả qua với nước',
      'Đối với máy giặt theo tỷ lệ 4 – 6 cho 1 lần giặt'
    ],
    benefits: [
      'Hương hoa tươi mát, sảng khoái',
      'Loại bỏ vết bẩn cứng đầu',
      'Khử mùi ẩm mốc hiệu quả',
      'Quần áo trắng sạch mềm mại',
      'Lưu hương dễ chịu dài lâu'
    ]
  },

  {
    id: 148,
    title: 'Nước Giặt Xả Deemee Hương Hoa Diên Vĩ 5000ml',
    category: 'Nước Giặt',
    subcategory: 'Deemee',
    slug: 'nc-git-x-deemee-hng-hoa-din-v-5000ml',
    image: '/Product/Deemee/Dien_vi.png',
    images: ['/Product/Deemee/MS_dien_vi.png'],
    isNew: true,
    inStock: true,
    description: 'Nước Giặt Xả Deemee Hương Hoa Diên Vĩ 5000ml với từng giọt hương hoa diên vĩ len lỏi vào sợi vải như một cái ôm dịu dàng giữa khu vườn huyền bí, đánh thức mọi giác quan bằng hương thơm thanh thoát và mê hoặc lan tỏa theo từng chuyển động. Sản phẩm ứng dụng công nghệ lưu hương thông minh từ Thái Lan, giúp giữ mùi thơm bền lâu hơn 24 giờ.',
    metaDescription: 'Nước giặt xả Deemee Hương Hoa Diên Vĩ 5000ml ứng dụng công nghệ lưu hương Thái Lan, hương thơm thanh thoát, bền lâu hơn 24 giờ.',
    features: [
      'Từng giọt hương hoa diên vĩ len lỏi vào sợi vải như một cái ôm dịu dàng giữa khu vườn huyền bí',
      'Đánh thức mọi giác quan bằng hương thơm thanh thoát và mê hoặc',
      'Lan tỏa theo từng chuyển động',
      'Công nghệ lưu hương thông minh từ Thái Lan',
      'Giữ mùi thơm bền lâu hơn 24 giờ',
      'Deemee sở hữu công thức đậm đặc, tạo bọt mịn giúp làm sạch vết bẩn dễ dàng',
      'Với Deemee hương hoa diên vĩ huyền bí, ban sẽ luôn khoác lên mình hương thơm quyến rũ đầy cuốn hút',
      'Sản phẩm phù hợp với mọi loại vải, an toàn cho giặt tay và giặt máy',
      'Giúp tiết kiệm thời gian và công sức trong việc giặt giũ hàng ngày'
    ],
    specifications: [
      { label: 'Dung tích', value: '5000ml' },
      { label: 'Sử dụng cho', value: 'Giặt tay, máy giặt cửa trên và máy giặt cửa trước' }
    ],
    usage: [
      'Giặt máy: 1/ Cho 65ml nước giặt vào máy giặt dùng cho 6–7 Kg quần áo. 2/ Chọn chế độ giặt phù hợp.',
      'Giặt tay: 1/ Cho 35ml nước giặt hòa tan vào 4–5 L nước cho 8–10 chiếc quần áo. 2/ Vò nhẹ và xả lại với nước sạch.'
    ],
    benefits: [
      'Hương thơm thanh thoát, mê hoặc',
      'Công nghệ lưu hương thông minh',
      'Bền mùi hơn 24 giờ',
      'Làm sạch vết bẩn dễ dàng',
      'An toàn cho mọi loại vải',
      'Tiết kiệm thời gian và công sức'
    ]
  }

];

// Helper function to get products for homepage (first 16)
export const getHomepageProducts = () => products.slice(0, 16);

// Helper function to get all products
export const getAllProducts = () => products;

// Helper function to get product by slug
export const getProductBySlug = (slug: string) =>
  products.find(product => product.slug === slug);

// Helper function to get category counts dynamically
export const getCategoryCounts = () => {
  const categoryCounts: Record<string, number> = {};

  products.forEach(product => {
    if (categoryCounts[product.category]) {
      categoryCounts[product.category]++;
    } else {
      categoryCounts[product.category] = 1;
    }
  });

  return categoryCounts;
};

// Helper function to get subcategory counts for a specific category
export const getSubcategoryCounts = (categoryName: string) => {
  const subcategoryCounts: Record<string, number> = {};

  products
    .filter(product => product.category === categoryName && product.subcategory)
    .forEach(product => {
      if (product.subcategory) {
        if (subcategoryCounts[product.subcategory]) {
          subcategoryCounts[product.subcategory]++;
        } else {
          subcategoryCounts[product.subcategory] = 1;
        }
      }
    });

  return subcategoryCounts;
};
