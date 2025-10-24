'use client';

import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

type TabType = 'description' | 'features' | 'specifications' | 'usage' | 'benefits';

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState<TabType>('description');

  // Product data
   const products: Record<string, {
     id: number;
     title: string;
     category: string;
     image: string;
     images?: string[];
     description: string;
     features: string[];
     specifications: { label: string; value: string }[];
     usage: string[];
     benefits: string[];
     isNew?: boolean;
     inStock?: boolean;
   }> = {
    'nuoc-giat-omo': {
      id: 1,
      title: 'Nước Giặt OMO',
      category: 'Nước Giặt',
      image: 'https://placehold.co/600x800/2e3b63/ffffff?text=OMO',
      images: [
        'https://placehold.co/600x800/2e3b63/ffffff?text=OMO',
        'https://placehold.co/600x800/2e3b63/ffffff?text=OMO+2',
        'https://placehold.co/600x800/2e3b63/ffffff?text=OMO+3'
      ],
      isNew: true,
      inStock: true,
      description: 'Nước giặt OMO Thái Lan với công thức mạnh mẽ, giúp loại bỏ vết bẩn hiệu quả và bảo vệ màu sắc quần áo.',
      features: [
        'Công thức mạnh mẽ loại bỏ vết bẩn cứng đầu',
        'Bảo vệ màu sắc quần áo tươi mới',
        'Hương thơm dịu nhẹ, lưu hương lâu dài',
        'An toàn cho da, không gây kích ứng'
      ],
      specifications: [
        { label: 'Xuất xứ', value: 'Thái Lan' },
        { label: 'Dung tích', value: '3.5L, 4L, 4.5L' },
        { label: 'Thương hiệu', value: 'OMO' },
        { label: 'Loại', value: 'Nước giặt đậm đặc' }
      ],
      usage: [
        'Đổ 1-2 nắp nước giặt vào máy giặt hoặc chậu',
        'Ngâm quần áo 15-20 phút trước khi giặt',
        'Giặt và xả sạch với nước',
        'Phơi nơi thoáng mát'
      ],
      benefits: [
        'Làm sạch hiệu quả mọi vết bẩn',
        'Tiết kiệm thời gian giặt giũ',
        'Giá cả phải chăng, phù hợp mọi gia đình',
        'Chất lượng đảm bảo từ Thái Lan'
      ]
    },
    'nuoc-giat-attack': {
      id: 2,
      title: 'Nước Giặt Attack',
      category: 'Nước Giặt',
      image: 'https://placehold.co/600x800/2e3b63/ffffff?text=Attack',
      images: ['https://placehold.co/600x800/2e3b63/ffffff?text=Attack', 'https://placehold.co/600x800/2e3b63/ffffff?text=Attack+2', 'https://placehold.co/600x800/2e3b63/ffffff?text=Attack+3'],
      isNew: true,
      inStock: true,
      description: 'Nước giặt Attack từ Thái Lan với công nghệ tiên tiến, làm sạch vượt trội, thơm lâu suốt cả ngày.',
      features: [
        'Công nghệ giặt tiên tiến từ Nhật Bản',
        'Loại bỏ mùi hôi khó chịu',
        'Dưỡng mềm sợi vải tự nhiên',
        'Thơm lâu suốt cả ngày'
      ],
      specifications: [
        { label: 'Xuất xứ', value: 'Thái Lan' },
        { label: 'Dung tích', value: '3L, 3.5L, 4L' },
        { label: 'Thương hiệu', value: 'Attack' },
        { label: 'Loại', value: 'Nước giặt cao cấp' }
      ],
      usage: [
        'Dùng 1.5-2 nắp cho mỗi mẻ giặt',
        'Có thể giặt trực tiếp hoặc ngâm trước',
        'Phù hợp cả giặt máy và giặt tay',
        'Xả sạch nhiều lần để đạt hiệu quả tốt nhất'
      ],
      benefits: [
        'Làm sạch sâu với công nghệ Nhật Bản',
        'Bảo vệ sợi vải, kéo dài tuổi thọ quần áo',
        'Mùi thơm dễ chịu, không gây kích ứng',
        'Được tin dùng bởi hàng triệu gia đình'
      ]
    },
    'nuoc-giat-pao': {
      id: 3,
      title: 'Nước Giặt Pao',
      category: 'Nước Giặt',
      image: 'https://placehold.co/600x800/2e3b63/ffffff?text=Pao',
      images: ['https://placehold.co/600x800/2e3b63/ffffff?text=Pao', 'https://placehold.co/600x800/2e3b63/ffffff?text=Pao+2', 'https://placehold.co/600x800/2e3b63/ffffff?text=Pao+3'],
      isNew: false,
      inStock: true,
      description: 'Nước giặt Pao Thái Lan chất lượng cao, giá cả phải chăng, phù hợp với mọi gia đình Việt.',
      features: [
        'Giá cả phải chăng nhất',
        'Làm sạch tốt mọi loại vải',
        'Tiết kiệm, chỉ cần ít sản phẩm',
        'Dễ tan, dễ xả'
      ],
      specifications: [
        { label: 'Xuất xứ', value: 'Thái Lan' },
        { label: 'Dung tích', value: '3L, 3.6L, 4L' },
        { label: 'Thương hiệu', value: 'Pao' },
        { label: 'Loại', value: 'Nước giặt phổ thông' }
      ],
      usage: [
        'Sử dụng 1-1.5 nắp cho mỗi lần giặt',
        'Ngâm 10-15 phút nếu quần áo quá bẩn',
        'Giặt và xả sạch',
        'Thích hợp cho cả giặt máy và giặt tay'
      ],
      benefits: [
        'Giá rẻ nhất thị trường',
        'Chất lượng ổn định',
        'Phù hợp cho mọi loại quần áo',
        'Tiết kiệm chi phí gia đình'
      ]
    },
    'nuoc-giat-breeze': {
      id: 4,
      title: 'Nước Giặt Breeze',
      category: 'Nước Giặt',
      image: 'https://placehold.co/600x800/2e3b63/ffffff?text=Breeze',
      images: ['https://placehold.co/600x800/2e3b63/ffffff?text=Breeze', 'https://placehold.co/600x800/2e3b63/ffffff?text=Breeze+2', 'https://placehold.co/600x800/2e3b63/ffffff?text=Breeze+3'],
      isNew: true,
      inStock: true,
      description: 'Nước giặt Breeze hương thơm quyến rũ, giúp quần áo sạch sâu và mềm mại tự nhiên.',
      features: [
        'Hương thơm quyến rũ đặc trưng',
        'Làm mềm vải tự nhiên',
        'Công thức đậm đặc tiết kiệm',
        'Kháng khuẩn hiệu quả'
      ],
      specifications: [
        { label: 'Xuất xứ', value: 'Thái Lan' },
        { label: 'Dung tích', value: '3L, 3.8L, 4.3L' },
        { label: 'Thương hiệu', value: 'Breeze' },
        { label: 'Loại', value: 'Nước giặt cao cấp' }
      ],
      usage: [
        'Dùng 1.5 nắp cho mỗi mẻ giặt',
        'Ngâm quần áo 15 phút trước khi giặt',
        'Có thể dùng cho giặt máy và giặt tay',
        'Xả sạch với nước'
      ],
      benefits: [
        'Hương thơm lưu lâu trên quần áo',
        'Diệt khuẩn và bảo vệ sức khỏe',
        'Mềm mại quần áo không cần xả vải',
        'Chất lượng cao cấp, giá hợp lý'
      ]
    },
    'nuoc-giat-ariel': {
      id: 5,
      title: 'Nước Giặt Ariel',
      category: 'Nước Giặt',
      image: 'https://placehold.co/600x800/2e3b63/ffffff?text=Ariel',
      images: ['https://placehold.co/600x800/2e3b63/ffffff?text=Ariel', 'https://placehold.co/600x800/2e3b63/ffffff?text=Ariel+2', 'https://placehold.co/600x800/2e3b63/ffffff?text=Ariel+3'],
      isNew: false,
      inStock: true,
      description: 'Nước giặt Ariel công nghệ đột phá, loại bỏ vết bẩn cứng đầu chỉ sau một lần giặt.',
      features: [
        'Công nghệ đột phá từ P&G',
        'Loại bỏ vết bẩn 1 lần giặt',
        'Hiệu quả ngay cả nước lạnh',
        'Bảo vệ sợi vải tối ưu'
      ],
      specifications: [
        { label: 'Xuất xứ', value: 'Thái Lan' },
        { label: 'Dung tích', value: '3.2L, 3.8L, 4.5L' },
        { label: 'Thương hiệu', value: 'Ariel' },
        { label: 'Loại', value: 'Nước giặt cao cấp' }
      ],
      usage: [
        'Sử dụng 2 nắp cho quần áo bẩn nhiều',
        'Có thể giặt ngay hoặc ngâm trước',
        'Hiệu quả với cả nước lạnh và nước ấm',
        'Xả sạch để đạt hiệu quả tốt nhất'
      ],
      benefits: [
        'Công nghệ tiên tiến từ P&G',
        'Tiết kiệm thời gian giặt giũ',
        'Bảo vệ màu sắc quần áo',
        'Phù hợp mọi loại máy giặt'
      ]
    },
    'nuoc-giat-tide': {
      id: 29,
      title: 'Nước Giặt Tide',
      category: 'Nước Giặt',
      image: 'https://placehold.co/600x800/2e3b63/ffffff?text=Tide',
      images: ['https://placehold.co/600x800/2e3b63/ffffff?text=Tide', 'https://placehold.co/600x800/2e3b63/ffffff?text=Tide+2', 'https://placehold.co/600x800/2e3b63/ffffff?text=Tide+3'],
      isNew: false,
      inStock: true,
      description: 'Nước giặt Tide công thức mạnh mẽ, giúp quần áo sạch như mới sau mỗi lần giặt.',
      features: [
        'Công thức mạnh mẽ từ Mỹ',
        'Sạch như mới sau mỗi lần giặt',
        'Giữ màu sắc tươi sáng',
        'Hương thơm sạch sẽ'
      ],
      specifications: [
        { label: 'Xuất xứ', value: 'Thái Lan' },
        { label: 'Dung tích', value: '3L, 3.5L, 4L' },
        { label: 'Thương hiệu', value: 'Tide' },
        { label: 'Loại', value: 'Nước giặt cao cấp' }
      ],
      usage: [
        'Dùng 1.5-2 nắp cho mỗi mẻ giặt',
        'Ngâm 15-20 phút với vết bẩn cứng đầu',
        'Phù hợp giặt máy và giặt tay',
        'Xả sạch nhiều lần'
      ],
      benefits: [
        'Thương hiệu uy tín từ Mỹ',
        'Hiệu quả giặt vượt trội',
        'Bảo vệ sợi vải lâu dài',
        'Mùi thơm sạch sẽ dễ chịu'
      ]
    },
    'nuoc-xa-comfort': {
      id: 6,
      title: 'Nước Xả Comfort',
      category: 'Nước Xả',
      image: 'https://placehold.co/600x800/2e3b63/ffffff?text=Comfort',
      images: ['https://placehold.co/600x800/2e3b63/ffffff?text=Comfort', 'https://placehold.co/600x800/2e3b63/ffffff?text=Comfort+2', 'https://placehold.co/600x800/2e3b63/ffffff?text=Comfort+3'],
      isNew: false,
      inStock: true,
      description: 'Nước xả vải Comfort với hương thơm quyến rũ, giúp quần áo mềm mại và dễ ủi hơn.',
      features: [
        'Hương thơm quyến rũ đa dạng',
        'Mềm mại sợi vải tối đa',
        'Dễ ủi, không nhăn',
        'Lưu hương 48 giờ'
      ],
      specifications: [
        { label: 'Xuất xứ', value: 'Thái Lan' },
        { label: 'Dung tích', value: '1.5L, 1.8L, 3L' },
        { label: 'Thương hiệu', value: 'Comfort' },
        { label: 'Loại', value: 'Nước xả vải cao cấp' }
      ],
      usage: [
        'Dùng 1 nắp cho mỗi mẻ giặt',
        'Cho vào ngăn xả vải của máy giặt',
        'Hoặc ngâm quần áo 3-5 phút rồi vắt khô',
        'Không cần xả lại với nước'
      ],
      benefits: [
        'Quần áo mềm mại, thơm lâu',
        'Dễ ủi, tiết kiệm thời gian',
        'An toàn cho da nhạy cảm',
        'Giá cả hợp lý, chất lượng cao'
      ]
    },
    'nuoc-xa-downy': {
      id: 7,
      title: 'Nước Xả Downy',
      category: 'Nước Xả',
      image: 'https://placehold.co/600x800/2e3b63/ffffff?text=Downy',
      images: ['https://placehold.co/600x800/2e3b63/ffffff?text=Downy', 'https://placehold.co/600x800/2e3b63/ffffff?text=Downy+2', 'https://placehold.co/600x800/2e3b63/ffffff?text=Downy+3'],
      isNew: false,
      inStock: true,
      description: 'Nước xả Downy chính hãng từ Thái Lan, giữ hương thơm lâu dài suốt 48 giờ.',
      features: [
        'Hương thơm đặc trưng Downy',
        'Lưu hương 48 giờ',
        'Mềm mại như lụa',
        'Bảo vệ sợi vải'
      ],
      specifications: [
        { label: 'Xuất xứ', value: 'Thái Lan' },
        { label: 'Dung tích', value: '1.5L, 1.8L, 2.5L' },
        { label: 'Thương hiệu', value: 'Downy' },
        { label: 'Loại', value: 'Nước xả vải cao cấp' }
      ],
      usage: [
        'Sử dụng 1 nắp cho mỗi lần giặt',
        'Đổ vào ngăn xả vải hoặc ngâm trực tiếp',
        'Ngâm 3-5 phút rồi vắt khô',
        'Không cần xả lại'
      ],
      benefits: [
        'Thương hiệu nổi tiếng toàn cầu',
        'Hương thơm đặc trưng quyến rũ',
        'Mềm mại, dễ ủi',
        'Bảo vệ quần áo lâu dài'
      ]
    },
    'nuoc-xa-essence': {
      id: 8,
      title: 'Nước Xả Essence',
      category: 'Nước Xả',
      image: 'https://placehold.co/600x800/2e3b63/ffffff?text=Essence',
      images: ['https://placehold.co/600x800/2e3b63/ffffff?text=Essence', 'https://placehold.co/600x800/2e3b63/ffffff?text=Essence+2', 'https://placehold.co/600x800/2e3b63/ffffff?text=Essence+3'],
      isNew: false,
      inStock: true,
      description: 'Nước xả Essence hương hoa tươi mát, bảo vệ sợi vải và giữ màu sắc tươi mới.',
      features: [
        'Hương hoa tươi mát tự nhiên',
        'Giữ màu sắc quần áo',
        'Chống nhăn hiệu quả',
        'Dưỡng mềm sợi vải'
      ],
      specifications: [
        { label: 'Xuất xứ', value: 'Thái Lan' },
        { label: 'Dung tích', value: '1.5L, 2L, 2.5L' },
        { label: 'Thương hiệu', value: 'Essence' },
        { label: 'Loại', value: 'Nước xả vải' }
      ],
      usage: [
        'Dùng 1 nắp cho mỗi mẻ giặt',
        'Cho vào ngăn xả vải',
        'Hoặc ngâm 3-5 phút sau khi giặt',
        'Vắt khô và phơi'
      ],
      benefits: [
        'Hương thơm tự nhiên dễ chịu',
        'Bảo vệ màu sắc quần áo',
        'Mềm mại, dễ ủi',
        'Giá cả phải chăng'
      ]
    },
    'nuoc-xa-hygiene': {
      id: 9,
      title: 'Nước Xả Hygiene',
      category: 'Nước Xả',
      image: 'https://placehold.co/600x800/2e3b63/ffffff?text=Hygiene',
      images: ['https://placehold.co/600x800/2e3b63/ffffff?text=Hygiene', 'https://placehold.co/600x800/2e3b63/ffffff?text=Hygiene+2', 'https://placehold.co/600x800/2e3b63/ffffff?text=Hygiene+3'],
      isNew: false,
      inStock: true,
      description: 'Nước xả Hygiene kháng khuẩn, bảo vệ gia đình bạn khỏi vi khuẩn gây hại.',
      features: [
        'Kháng khuẩn 99.9%',
        'Bảo vệ sức khỏe gia đình',
        'Mềm mại và thơm tho',
        'An toàn cho trẻ em'
      ],
      specifications: [
        { label: 'Xuất xứ', value: 'Thái Lan' },
        { label: 'Dung tích', value: '1.5L, 2L, 3L' },
        { label: 'Thương hiệu', value: 'Hygiene' },
        { label: 'Loại', value: 'Nước xả kháng khuẩn' }
      ],
      usage: [
        'Sử dụng 1 nắp mỗi lần giặt',
        'Đặc biệt phù hợp cho quần áo trẻ em',
        'Ngâm 5 phút sau giặt',
        'Vắt khô và phơi nắng'
      ],
      benefits: [
        'Diệt khuẩn hiệu quả',
        'An toàn cho da nhạy cảm',
        'Bảo vệ sức khỏe gia đình',
        'Mềm mại, thơm tho'
      ]
    },
    'nuoc-xa-lenor': {
      id: 30,
      title: 'Nước Xả Lenor',
      category: 'Nước Xả',
      image: 'https://placehold.co/600x800/2e3b63/ffffff?text=Lenor',
      images: ['https://placehold.co/600x800/2e3b63/ffffff?text=Lenor', 'https://placehold.co/600x800/2e3b63/ffffff?text=Lenor+2', 'https://placehold.co/600x800/2e3b63/ffffff?text=Lenor+3'],
      isNew: false,
      inStock: true,
      description: 'Nước xả Lenor hương thơm sang trọng, mang lại cảm giác thư giãn cho cả gia đình.',
      features: [
        'Hương thơm sang trọng đẳng cấp',
        'Mềm mại như khăn spa',
        'Lưu hương cực lâu',
        'Công nghệ Châu Âu'
      ],
      specifications: [
        { label: 'Xuất xứ', value: 'Thái Lan' },
        { label: 'Dung tích', value: '1.5L, 1.8L, 2.2L' },
        { label: 'Thương hiệu', value: 'Lenor' },
        { label: 'Loại', value: 'Nước xả cao cấp' }
      ],
      usage: [
        'Dùng 1 nắp cho mỗi mẻ giặt',
        'Cho vào ngăn xả vải',
        'Ngâm 3-5 phút',
        'Vắt khô, không cần xả lại'
      ],
      benefits: [
        'Hương thơm sang trọng',
        'Mềm mại vượt trội',
        'Thư giãn tinh thần',
        'Chất lượng Châu Âu'
      ]
    },
    'nuoc-rua-chen-sunlight': {
      id: 10,
      title: 'Nước Rửa Chén Sunlight',
      category: 'Nước Tẩy Rửa',
      image: 'https://placehold.co/600x800/2e3b63/ffffff?text=Sunlight',
      images: ['https://placehold.co/600x800/2e3b63/ffffff?text=Sunlight', 'https://placehold.co/600x800/2e3b63/ffffff?text=Sunlight+2', 'https://placehold.co/600x800/2e3b63/ffffff?text=Sunlight+3'],
      isNew: false,
      inStock: true,
      description: 'Nước rửa chén Sunlight loại bỏ dầu mỡ hiệu quả, an toàn cho da tay và môi trường.',
      features: [
        'Loại bỏ dầu mỡ hiệu quả',
        'An toàn cho da tay',
        'Hương chanh tươi mát',
        'Không để lại cặn'
      ],
      specifications: [
        { label: 'Xuất xứ', value: 'Thái Lan' },
        { label: 'Dung tích', value: '750ml, 1L, 1.5L' },
        { label: 'Thương hiệu', value: 'Sunlight' },
        { label: 'Loại', value: 'Nước rửa chén' }
      ],
      usage: [
        'Pha loãng với nước hoặc dùng trực tiếp',
        'Thoa lên bát đĩa và cọ rửa',
        'Xả sạch với nước',
        'Để khô tự nhiên'
      ],
      benefits: [
        'Loại dầu mỡ hiệu quả',
        'An toàn cho da',
        'Thơm mát, sạch sẽ',
        'Tiết kiệm, bền lâu'
      ]
    },
    'nuoc-tay-toilet-duck': {
      id: 11,
      title: 'Nước Tẩy Toilet Duck',
      category: 'Nước Tẩy Rửa',
      image: 'https://placehold.co/600x800/2e3b63/ffffff?text=Duck',
      images: ['https://placehold.co/600x800/2e3b63/ffffff?text=Duck', 'https://placehold.co/600x800/2e3b63/ffffff?text=Duck+2', 'https://placehold.co/600x800/2e3b63/ffffff?text=Duck+3'],
      isNew: false,
      inStock: true,
      description: 'Nước tẩy nhà vệ sinh Duck với công thức mạnh mẽ diệt khuẩn 99.9%, làm sạch và thơm mát.',
      features: [
        'Diệt khuẩn 99.9%',
        'Làm trắng bồn cầu',
        'Khử mùi hiệu quả',
        'Công thức gel bám dính tốt'
      ],
      specifications: [
        { label: 'Xuất xứ', value: 'Thái Lan' },
        { label: 'Dung tích', value: '500ml, 750ml, 900ml' },
        { label: 'Thương hiệu', value: 'Toilet Duck' },
        { label: 'Loại', value: 'Nước tẩy toilet' }
      ],
      usage: [
        'Đổ dưới vành bồn cầu',
        'Để ngấm 15-30 phút',
        'Chà bằng bàn chải',
        'Xả nước sạch'
      ],
      benefits: [
        'Diệt khuẩn tối đa',
        'Làm trắng bồn cầu',
        'Khử mùi lâu dài',
        'Sử dụng dễ dàng'
      ]
    },
    'nuoc-rua-chen-vim': {
      id: 12,
      title: 'Nước Rửa Chén Vim',
      category: 'Nước Tẩy Rửa',
      image: 'https://placehold.co/600x800/2e3b63/ffffff?text=Vim',
      images: ['https://placehold.co/600x800/2e3b63/ffffff?text=Vim', 'https://placehold.co/600x800/2e3b63/ffffff?text=Vim+2', 'https://placehold.co/600x800/2e3b63/ffffff?text=Vim+3'],
      isNew: false,
      inStock: true,
      description: 'Nước rửa chén Vim công thức đặc biệt, khử mỡ nhanh chỉ với một giọt nhỏ.',
      features: [
        'Khử mỡ siêu nhanh',
        'Tiết kiệm, chỉ cần ít',
        'Không làm khô da tay',
        'Hương chanh tự nhiên'
      ],
      specifications: [
        { label: 'Xuất xứ', value: 'Thái Lan' },
        { label: 'Dung tích', value: '750ml, 1L, 1.2L' },
        { label: 'Thương hiệu', value: 'Vim' },
        { label: 'Loại', value: 'Nước rửa chén đậm đặc' }
      ],
      usage: [
        'Chỉ cần 1-2 giọt',
        'Thoa đều lên bát đĩa',
        'Cọ rửa nhẹ nhàng',
        'Xả sạch với nước'
      ],
      benefits: [
        'Tiết kiệm tối đa',
        'Khử mỡ hiệu quả',
        'Bảo vệ da tay',
        'Mùi thơm dễ chịu'
      ]
    },
    'nuoc-tay-mr-muscle': {
      id: 13,
      title: 'Nước Tẩy Đa Năng Mr. Muscle',
      category: 'Nước Tẩy Rửa',
      image: 'https://placehold.co/600x800/2e3b63/ffffff?text=Mr+Muscle',
      images: ['https://placehold.co/600x800/2e3b63/ffffff?text=Mr+Muscle', 'https://placehold.co/600x800/2e3b63/ffffff?text=Mr+Muscle+2', 'https://placehold.co/600x800/2e3b63/ffffff?text=Mr+Muscle+3'],
      isNew: false,
      inStock: true,
      description: 'Nước tẩy đa năng Mr. Muscle làm sạch mọi bề mặt, khử khuẩn và bảo vệ sức khỏe.',
      features: [
        'Làm sạch đa bề mặt',
        'Diệt khuẩn hiệu quả',
        'Khử mùi nhanh',
        'Không để lại vệt'
      ],
      specifications: [
        { label: 'Xuất xứ', value: 'Thái Lan' },
        { label: 'Dung tích', value: '500ml, 750ml, 1L' },
        { label: 'Thương hiệu', value: 'Mr. Muscle' },
        { label: 'Loại', value: 'Nước tẩy đa năng' }
      ],
      usage: [
        'Xịt trực tiếp lên bề mặt',
        'Để 2-3 phút',
        'Lau bằng khăn sạch',
        'Không cần xả lại'
      ],
      benefits: [
        'Đa năng, tiện lợi',
        'Làm sạch nhanh',
        'Diệt khuẩn tối đa',
        'An toàn cho gia đình'
      ]
    },
    'nuoc-lau-san-lipon': {
      id: 14,
      title: 'Nước Lau Sàn Lipon',
      category: 'Nước Lau Sàn',
      image: 'https://placehold.co/600x800/2e3b63/ffffff?text=Lipon',
      images: ['https://placehold.co/600x800/2e3b63/ffffff?text=Lipon', 'https://placehold.co/600x800/2e3b63/ffffff?text=Lipon+2', 'https://placehold.co/600x800/2e3b63/ffffff?text=Lipon+3'],
      isNew: false,
      inStock: true,
      description: 'Nước lau sàn Lipon Thái Lan với hương thơm dễ chịu, sàn nhà sạch bóng như mới.',
      features: [
        'Làm sạch và bóng sàn',
        'Hương thơm dễ chịu',
        'Không trơn trượt',
        'Khô nhanh'
      ],
      specifications: [
        { label: 'Xuất xứ', value: 'Thái Lan' },
        { label: 'Dung tích', value: '1L, 2L, 3L' },
        { label: 'Thương hiệu', value: 'Lipon' },
        { label: 'Loại', value: 'Nước lau sàn' }
      ],
      usage: [
        'Pha loãng với nước theo tỷ lệ 1:50',
        'Lau sàn bằng cây lau hoặc khăn',
        'Không cần xả lại',
        'Để khô tự nhiên'
      ],
      benefits: [
        'Sàn sạch bóng',
        'Hương thơm lâu',
        'An toàn, không trơn',
        'Giá cả hợp lý'
      ]
    },
    'nuoc-lau-san-kleenso': {
      id: 15,
      title: 'Nước Lau Sàn Kleenso',
      category: 'Nước Lau Sàn',
      image: 'https://placehold.co/600x800/2e3b63/ffffff?text=Kleenso',
      images: ['https://placehold.co/600x800/2e3b63/ffffff?text=Kleenso', 'https://placehold.co/600x800/2e3b63/ffffff?text=Kleenso+2', 'https://placehold.co/600x800/2e3b63/ffffff?text=Kleenso+3'],
      isNew: false,
      inStock: true,
      description: 'Nước lau sàn Kleenso diệt khuẩn hiệu quả, an toàn cho trẻ em và thú cưng.',
      features: [
        'Diệt khuẩn 99.9%',
        'An toàn cho trẻ em, thú cưng',
        'Hương thơm tự nhiên',
        'Không độc hại'
      ],
      specifications: [
        { label: 'Xuất xứ', value: 'Thái Lan' },
        { label: 'Dung tích', value: '900ml, 1.5L, 2L' },
        { label: 'Thương hiệu', value: 'Kleenso' },
        { label: 'Loại', value: 'Nước lau sàn kháng khuẩn' }
      ],
      usage: [
        'Pha loãng 1:40 với nước',
        'Lau sàn đều khắp',
        'Không cần xả',
        'Khô tự nhiên'
      ],
      benefits: [
        'Diệt khuẩn tối đa',
        'An toàn tuyệt đối',
        'Mùi thơm dễ chịu',
        'Bảo vệ sức khỏe'
      ]
    },
    'nuoc-lau-san-joy': {
      id: 16,
      title: 'Nước Lau Sàn Joy',
      category: 'Nước Lau Sàn',
      image: 'https://placehold.co/600x800/2e3b63/ffffff?text=Joy',
      images: ['https://placehold.co/600x800/2e3b63/ffffff?text=Joy', 'https://placehold.co/600x800/2e3b63/ffffff?text=Joy+2', 'https://placehold.co/600x800/2e3b63/ffffff?text=Joy+3'],
      isNew: false,
      inStock: true,
      description: 'Nước lau sàn Joy hương thơm tự nhiên, làm sạch và khử mùi hiệu quả.',
      features: [
        'Hương thơm tự nhiên',
        'Khử mùi hiệu quả',
        'Làm bóng sàn',
        'Khô nhanh'
      ],
      specifications: [
        { label: 'Xuất xứ', value: 'Thái Lan' },
        { label: 'Dung tích', value: '1L, 1.8L, 2.5L' },
        { label: 'Thương hiệu', value: 'Joy' },
        { label: 'Loại', value: 'Nước lau sàn' }
      ],
      usage: [
        'Pha 1:50 với nước',
        'Lau sàn đều',
        'Không xả lại',
        'Để khô'
      ],
      benefits: [
        'Sạch sẽ, thơm tho',
        'Khử mùi tốt',
        'Bóng sàn tự nhiên',
        'Giá tốt'
      ]
    },
    'sua-tam-breeze': {
      id: 17,
      title: 'Sữa Tắm Breeze',
      category: 'Chăm Sóc Da',
      image: 'https://placehold.co/600x800/2e3b63/ffffff?text=Breeze+Body',
      images: ['https://placehold.co/600x800/2e3b63/ffffff?text=Breeze+Body', 'https://placehold.co/600x800/2e3b63/ffffff?text=Breeze+Body+2', 'https://placehold.co/600x800/2e3b63/ffffff?text=Breeze+Body+3'],
      isNew: false,
      inStock: true,
      description: 'Sữa tắm Breeze Thái Lan dưỡng ẩm sâu, thơm mát và mịn màng cả ngày dài.',
      features: [
        'Dưỡng ẩm sâu',
        'Hương thơm quyến rũ',
        'Mịn màng da tức thì',
        'Kháng khuẩn hiệu quả'
      ],
      specifications: [
        { label: 'Xuất xứ', value: 'Thái Lan' },
        { label: 'Dung tích', value: '450ml, 600ml, 900ml' },
        { label: 'Thương hiệu', value: 'Breeze' },
        { label: 'Loại', value: 'Sữa tắm dưỡng ẩm' }
      ],
      usage: [
        'Làm ướt cơ thể',
        'Cho sữa tắm ra tay hoặc bông tắm',
        'Massage nhẹ nhàng',
        'Xả sạch với nước'
      ],
      benefits: [
        'Da mịn màng tức thì',
        'Hương thơm lưu lâu',
        'Dưỡng ẩm cả ngày',
        'Kháng khuẩn bảo vệ da'
      ]
    },
    'kem-duong-da-nivea': {
      id: 18,
      title: 'Kem Dưỡng Da Nivea',
      category: 'Chăm Sóc Da',
      image: 'https://placehold.co/600x800/2e3b63/ffffff?text=Nivea',
      images: ['https://placehold.co/600x800/2e3b63/ffffff?text=Nivea', 'https://placehold.co/600x800/2e3b63/ffffff?text=Nivea+2', 'https://placehold.co/600x800/2e3b63/ffffff?text=Nivea+3'],
      isNew: false,
      inStock: true,
      description: 'Kem dưỡng da Nivea chính hãng, dưỡng ẩm chuyên sâu 24h, làm trắng da tự nhiên.',
      features: [
        'Dưỡng ẩm 24 giờ',
        'Làm trắng da tự nhiên',
        'Chống lão hóa',
        'Thấm nhanh không nhờn'
      ],
      specifications: [
        { label: 'Xuất xứ', value: 'Thái Lan' },
        { label: 'Dung tích', value: '50ml, 100ml, 200ml' },
        { label: 'Thương hiệu', value: 'Nivea' },
        { label: 'Loại', value: 'Kem dưỡng da toàn thân' }
      ],
      usage: [
        'Làm sạch da trước khi dùng',
        'Lấy lượng kem vừa đủ',
        'Thoa đều lên da',
        'Massage nhẹ nhàng đến khi thấm'
      ],
      benefits: [
        'Dưỡng ẩm suốt 24h',
        'Da trắng sáng tự nhiên',
        'Chống lão hóa hiệu quả',
        'Thương hiệu uy tín'
      ]
    },
    'dau-goi-clear': {
      id: 19,
      title: 'Dầu Gội Clear',
      category: 'Chăm Sóc Da',
      image: 'https://placehold.co/600x800/2e3b63/ffffff?text=Clear',
      images: ['https://placehold.co/600x800/2e3b63/ffffff?text=Clear', 'https://placehold.co/600x800/2e3b63/ffffff?text=Clear+2', 'https://placehold.co/600x800/2e3b63/ffffff?text=Clear+3'],
      isNew: false,
      inStock: true,
      description: 'Dầu gội Clear Thái Lan chống gàu hiệu quả, tóc khỏe mạnh và bồng bềnh.',
      features: [
        'Chống gàu hiệu quả',
        'Nuôi dưỡng tóc khỏe',
        'Tóc bồng bềnh mượt mà',
        'Giảm ngứa da đầu'
      ],
      specifications: [
        { label: 'Xuất xứ', value: 'Thái Lan' },
        { label: 'Dung tích', value: '300ml, 450ml, 650ml' },
        { label: 'Thương hiệu', value: 'Clear' },
        { label: 'Loại', value: 'Dầu gội chống gàu' }
      ],
      usage: [
        'Làm ướt tóc',
        'Cho dầu gội vào tay',
        'Massage da đầu 2-3 phút',
        'Xả sạch với nước'
      ],
      benefits: [
        'Hết gàu từ lần đầu',
        'Tóc khỏe, bồng bềnh',
        'Da đầu sạch, không ngứa',
        'Thơm mát cả ngày'
      ]
    },
    'nuoc-rua-tay-lifebuoy': {
      id: 20,
      title: 'Nước Rửa Tay Lifebuoy',
      category: 'Chăm Sóc Da',
      image: 'https://placehold.co/600x800/2e3b63/ffffff?text=Lifebuoy',
      images: ['https://placehold.co/600x800/2e3b63/ffffff?text=Lifebuoy', 'https://placehold.co/600x800/2e3b63/ffffff?text=Lifebuoy+2', 'https://placehold.co/600x800/2e3b63/ffffff?text=Lifebuoy+3'],
      isNew: false,
      inStock: true,
      description: 'Nước rửa tay Lifebuoy diệt khuẩn 99.9%, bảo vệ cả gia đình khỏi vi khuẩn.',
      features: [
        'Diệt khuẩn 99.9%',
        'Bảo vệ gia đình',
        'Dịu nhẹ với da',
        'Hương thơm sảng khoái'
      ],
      specifications: [
        { label: 'Xuất xứ', value: 'Thái Lan' },
        { label: 'Dung tích', value: '200ml, 450ml, 750ml' },
        { label: 'Thương hiệu', value: 'Lifebuoy' },
        { label: 'Loại', value: 'Nước rửa tay kháng khuẩn' }
      ],
      usage: [
        'Làm ướt tay',
        'Cho nước rửa tay ra',
        'Xoa đều 20 giây',
        'Xả sạch với nước'
      ],
      benefits: [
        'Diệt khuẩn tối đa',
        'Bảo vệ sức khỏe',
        'An toàn cho da',
        'Mùi thơm sạch sẽ'
      ]
    },
    'sua-tam-dove': {
      id: 21,
      title: 'Sữa Tắm Dove',
      category: 'Chăm Sóc Da',
      image: 'https://placehold.co/600x800/2e3b63/ffffff?text=Dove',
      images: ['https://placehold.co/600x800/2e3b63/ffffff?text=Dove', 'https://placehold.co/600x800/2e3b63/ffffff?text=Dove+2', 'https://placehold.co/600x800/2e3b63/ffffff?text=Dove+3'],
      isNew: false,
      inStock: true,
      description: 'Sữa tắm Dove dưỡng ẩm vượt trội với 1/4 kem dưỡng, da mềm mịn tức thì.',
      features: [
        'Chứa 1/4 kem dưỡng',
        'Dưỡng ẩm vượt trội',
        'Da mềm mịn tức thì',
        'Hương thơm nhẹ nhàng'
      ],
      specifications: [
        { label: 'Xuất xứ', value: 'Thái Lan' },
        { label: 'Dung tích', value: '400ml, 530ml, 800ml' },
        { label: 'Thương hiệu', value: 'Dove' },
        { label: 'Loại', value: 'Sữa tắm dưỡng ẩm' }
      ],
      usage: [
        'Làm ướt cơ thể',
        'Cho sữa tắm vào tay',
        'Massage nhẹ nhàng',
        'Xả sạch'
      ],
      benefits: [
        'Da mềm mịn ngay lập tức',
        'Dưỡng ẩm sâu',
        'Thơm nhẹ dễ chịu',
        'Phù hợp da nhạy cảm'
      ]
    },
    'dau-goi-sunsilk': {
      id: 22,
      title: 'Dầu Gội Sunsilk',
      category: 'Chăm Sóc Da',
      image: 'https://placehold.co/600x800/2e3b63/ffffff?text=Sunsilk',
      images: ['https://placehold.co/600x800/2e3b63/ffffff?text=Sunsilk', 'https://placehold.co/600x800/2e3b63/ffffff?text=Sunsilk+2', 'https://placehold.co/600x800/2e3b63/ffffff?text=Sunsilk+3'],
      isNew: false,
      inStock: true,
      description: 'Dầu gội Sunsilk công thức chuyên sâu, tóc mượt mà và bóng khỏe từ gốc đến ngọn.',
      features: [
        'Tóc mượt mà tức thì',
        'Bóng khỏe từ gốc đến ngọn',
        'Giảm rụng tóc',
        'Hương thơm quyến rũ'
      ],
      specifications: [
        { label: 'Xuất xứ', value: 'Thái Lan' },
        { label: 'Dung tích', value: '320ml, 450ml, 650ml' },
        { label: 'Thương hiệu', value: 'Sunsilk' },
        { label: 'Loại', value: 'Dầu gội dưỡng tóc' }
      ],
      usage: [
        'Làm ướt tóc',
        'Thoa dầu gội lên tóc',
        'Massage 2-3 phút',
        'Xả sạch với nước'
      ],
      benefits: [
        'Tóc mượt mà, bóng khỏe',
        'Giảm gãy rụng',
        'Dễ chải, không rối',
        'Hương thơm lâu'
      ]
    },
    'mi-mama-tom-yum': {
      id: 23,
      title: 'Mì Mama Tôm Yum',
      category: 'Thực Phẩm',
      image: 'https://placehold.co/600x800/2e3b63/ffffff?text=Mama',
      images: ['https://placehold.co/600x800/2e3b63/ffffff?text=Mama', 'https://placehold.co/600x800/2e3b63/ffffff?text=Mama+2', 'https://placehold.co/600x800/2e3b63/ffffff?text=Mama+3'],
      isNew: false,
      inStock: true,
      description: 'Mì ăn liền Mama số 1 Thái Lan với hương vị Tôm Yum đặc trưng, cay nồng hấp dẫn.',
      features: [
        'Hương vị Tôm Yum đặc trưng',
        'Cay nồng hấp dẫn',
        'Sợi mì dai ngon',
        'Nước soup đậm đà'
      ],
      specifications: [
        { label: 'Xuất xứ', value: 'Thái Lan' },
        { label: 'Trọng lượng', value: '55g, 60g, 70g' },
        { label: 'Thương hiệu', value: 'Mama' },
        { label: 'Loại', value: 'Mì ăn liền' }
      ],
      usage: [
        'Cho mì vào tô',
        'Đổ nước sôi vào',
        'Đậy nắp 3 phút',
        'Trộn đều và thưởng thức'
      ],
      benefits: [
        'Nhanh gọn, tiện lợi',
        'Hương vị đặc trưng Thái',
        'Giá cả phải chăng',
        'Được yêu thích toàn cầu'
      ]
    },
    'nuoc-mam-ca-thai-lan': {
      id: 24,
      title: 'Nước Mắm Cá Thái Lan',
      category: 'Thực Phẩm',
      image: 'https://placehold.co/600x800/2e3b63/ffffff?text=Fish+Sauce',
      images: ['https://placehold.co/600x800/2e3b63/ffffff?text=Fish+Sauce', 'https://placehold.co/600x800/2e3b63/ffffff?text=Fish+Sauce+2', 'https://placehold.co/600x800/2e3b63/ffffff?text=Fish+Sauce+3'],
      isNew: false,
      inStock: true,
      description: 'Nước mắm cá Thái Lan chính hãng, đậm đà ngon miệng, tăng thêm hương vị món ăn.',
      features: [
        'Đậm đà ngon miệng',
        'Chính hãng Thái Lan',
        'Không chất bảo quản',
        'Tăng vị món ăn'
      ],
      specifications: [
        { label: 'Xuất xứ', value: 'Thái Lan' },
        { label: 'Dung tích', value: '300ml, 700ml, 1L' },
        { label: 'Thương hiệu', value: 'Thai Fish Sauce' },
        { label: 'Loại', value: 'Nước mắm cá' }
      ],
      usage: [
        'Dùng để nêm nếm món ăn',
        'Làm nước chấm',
        'Pha chế món Thái',
        'Bảo quản nơi khô mát'
      ],
      benefits: [
        'Vị đậm đà tự nhiên',
        'Không chất bảo quản',
        'Tăng vị món ăn',
        'Giá cả hợp lý'
      ]
    },
    'snack-khoai-tay-thai': {
      id: 25,
      title: 'Snack Khoai Tây Thái',
      category: 'Thực Phẩm',
      image: 'https://placehold.co/600x800/2e3b63/ffffff?text=Snack',
      images: ['https://placehold.co/600x800/2e3b63/ffffff?text=Snack', 'https://placehold.co/600x800/2e3b63/ffffff?text=Snack+2', 'https://placehold.co/600x800/2e3b63/ffffff?text=Snack+3'],
      isNew: false,
      inStock: true,
      description: 'Bánh snack khoai tây Thái Lan giòn tan, nhiều vị độc đáo, thích hợp mọi lứa tuổi.',
      features: [
        'Giòn tan thơm ngon',
        'Nhiều vị độc đáo',
        'Không chất bảo quản độc hại',
        'Bao bì tiện lợi'
      ],
      specifications: [
        { label: 'Xuất xứ', value: 'Thái Lan' },
        { label: 'Trọng lượng', value: '25g, 48g, 60g' },
        { label: 'Thương hiệu', value: 'Thai Snack' },
        { label: 'Loại', value: 'Snack khoai tây' }
      ],
      usage: [
        'Ăn trực tiếp',
        'Kết hợp với nước giải khát',
        'Phù hợp mọi dịp',
        'Bảo quản nơi khô ráo'
      ],
      benefits: [
        'Ngon miệng, giòn tan',
        'Đa dạng hương vị',
        'Tiện lợi mang đi',
        'Phù hợp mọi lứa tuổi'
      ]
    },
    'xot-ot-sriracha': {
      id: 26,
      title: 'Xốt Ớt Sriracha',
      category: 'Thực Phẩm',
      image: 'https://placehold.co/600x800/2e3b63/ffffff?text=Sriracha',
      images: ['https://placehold.co/600x800/2e3b63/ffffff?text=Sriracha', 'https://placehold.co/600x800/2e3b63/ffffff?text=Sriracha+2', 'https://placehold.co/600x800/2e3b63/ffffff?text=Sriracha+3'],
      isNew: false,
      inStock: true,
      description: 'Tương ớt Sriracha Thái Lan cay nồng đặc trưng, không thể thiếu trong bữa ăn.',
      features: [
        'Cay nồng đặc trưng',
        'Hương vị phong phú',
        'Đa năng trong nấu nướng',
        'Chai tiện lợi'
      ],
      specifications: [
        { label: 'Xuất xứ', value: 'Thái Lan' },
        { label: 'Dung tích', value: '200ml, 435ml, 730ml' },
        { label: 'Thương hiệu', value: 'Sriracha' },
        { label: 'Loại', value: 'Tương ớt' }
      ],
      usage: [
        'Chấm trực tiếp',
        'Pha chế món ăn',
        'Làm gia vị',
        'Bảo quản nơi thoáng mát'
      ],
      benefits: [
        'Cay nồng hấp dẫn',
        'Đa dạng cách dùng',
        'Tăng vị món ăn',
        'Chai tiện lợi'
      ]
    },
    'tra-thai-xanh': {
      id: 27,
      title: 'Trà Thái Xanh',
      category: 'Thực Phẩm',
      image: 'https://placehold.co/600x800/2e3b63/ffffff?text=Thai+Tea',
      images: ['https://placehold.co/600x800/2e3b63/ffffff?text=Thai+Tea', 'https://placehold.co/600x800/2e3b63/ffffff?text=Thai+Tea+2', 'https://placehold.co/600x800/2e3b63/ffffff?text=Thai+Tea+3'],
      isNew: false,
      inStock: true,
      description: 'Trà xanh Thái Lan thơm ngon, giải khát tuyệt vời, tốt cho sức khỏe.',
      features: [
        'Thơm ngon tự nhiên',
        'Giải khát hiệu quả',
        'Tốt cho sức khỏe',
        'Pha chế dễ dàng'
      ],
      specifications: [
        { label: 'Xuất xứ', value: 'Thái Lan' },
        { label: 'Trọng lượng', value: '200g, 400g, 1kg' },
        { label: 'Thương hiệu', value: 'Thai Green Tea' },
        { label: 'Loại', value: 'Trà xanh' }
      ],
      usage: [
        'Pha với nước nóng',
        'Có thể uống nóng hoặc lạnh',
        'Thêm sữa theo khẩu vị',
        'Bảo quản nơi khô ráo'
      ],
      benefits: [
        'Giải khát tốt',
        'Tốt cho sức khỏe',
        'Thơm ngon tự nhiên',
        'Dễ pha chế'
      ]
    },
    'banh-pocky-thai': {
      id: 28,
      title: 'Bánh Pocky Thái',
      category: 'Thực Phẩm',
      image: 'https://placehold.co/600x800/2e3b63/ffffff?text=Pocky',
      images: ['https://placehold.co/600x800/2e3b63/ffffff?text=Pocky', 'https://placehold.co/600x800/2e3b63/ffffff?text=Pocky+2', 'https://placehold.co/600x800/2e3b63/ffffff?text=Pocky+3'],
      isNew: false,
      inStock: true,
      description: 'Bánh que Pocky Thái Lan giòn ngon với nhiều hương vị chocolate đa dạng.',
      features: [
        'Giòn ngon hấp dẫn',
        'Nhiều hương vị',
        'Bao bì đẹp mắt',
        'Phù hợp làm quà'
      ],
      specifications: [
        { label: 'Xuất xứ', value: 'Thái Lan' },
        { label: 'Trọng lượng', value: '33g, 39g, 45g' },
        { label: 'Thương hiệu', value: 'Pocky' },
        { label: 'Loại', value: 'Bánh que phủ chocolate' }
      ],
      usage: [
        'Ăn trực tiếp',
        'Làm quà tặng',
        'Ăn vặt',
        'Bảo quản nơi khô mát'
      ],
      benefits: [
        'Ngon miệng, giòn tan',
        'Đa dạng hương vị',
        'Bao bì đẹp',
        'Phù hợp mọi lứa tuổi'
      ]
    }
  };

  const product = products[slug];

  if (!product) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <div className="pt-32 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold mb-4 text-[#2e3b63]">Sản phẩm không tồn tại</h1>
            <p className="text-gray-600 mb-8">Sản phẩm bạn đang tìm kiếm không có sẵn.</p>
            <Link href="/san-pham" className="px-6 py-3 bg-[#ca993b] text-white rounded-full font-semibold hover:shadow-lg transition-shadow inline-block">
              Quay lại trang Sản Phẩm
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Get related products (same category, different product)
  const relatedProducts = Object.entries(products)
    .filter(([key, p]) => p.category === product.category && key !== slug)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Product Detail Section */}
      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Breadcrumb */}
            <div className="flex items-center text-sm text-gray-500 mb-6">
              <Link href="/" className="hover:text-[#ca993b]">Trang Chủ</Link>
              <span className="mx-2">/</span>
              <Link href="/san-pham" className="hover:text-[#ca993b]">Sản Phẩm</Link>
              <span className="mx-2">/</span>
              <span className="text-gray-700">{product.title}</span>
            </div>

             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
               {/* Product Image Gallery */}
               <div>
                 {/* Main Image */}
                 <div className="bg-gradient-to-b from-[#fffbea] to-[#fff5d0] rounded-lg overflow-hidden mb-4 aspect-square relative w-3/4 border-2 border-[#ca993b] group">
                   {product.isNew && (
                     <div className="absolute top-4 right-4 z-10 rounded-md bg-[#F8D43E] px-3 py-1 text-sm font-bold text-white shadow-md">
                       MỚI
                     </div>
                   )}
                   <img 
                     src={product.images?.[selectedImage] || product.image} 
                     alt={product.title}
                     className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 cursor-zoom-in"
                   />
                 </div>
                 
                 {/* Thumbnail Gallery */}
                 {product.images && product.images.length > 1 && (
                   <div className="grid grid-cols-4 gap-3 w-3/4">
                     {product.images.map((img, idx) => (
                      <div 
                        key={idx}
                        onClick={() => setSelectedImage(idx)}
                        className={`bg-white border-1 rounded-md overflow-hidden cursor-pointer aspect-square relative ${
                          selectedImage === idx 
                            ? 'border-yellow-500 ring-2 ring-yellow-100' 
                            : 'border-yellow-500 hover:border-yellow-600'
                        }`}
                      >
                         <img 
                           src={img} 
                           alt={`${product.title} - Ảnh ${idx + 1}`}
                           className="w-full h-full object-cover"
                         />
                       </div>
                     ))}
                   </div>
                 )}
               </div>

               {/* Product Info */}
               <div>
                 <h2 className="text-3xl font-bold text-gray-800 mb-2">
                   {product.title}
                 </h2>
                 
                 {/* Status Badges */}
                 <div className="mb-6">
                   <div className="flex items-center gap-2">
                     {product.isNew && (
                       <div className="bg-green-100 text-green-600 text-xs font-bold px-2 py-1 rounded">
                         Sản phẩm mới
                       </div>
                     )}
                     <div className="bg-[#ca993b]/10 text-[#ca993b] text-xs font-bold px-2 py-1 rounded">
                       {product.category}
                     </div>
                   </div>
                   {product.inStock !== false && (
                     <div className="mt-2 text-sm text-green-600 font-medium">
                       Còn hàng
                     </div>
                   )}
                 </div>

                 {/* Description */}
                 <div className="mb-8">
                   <h3 className="text-lg font-medium text-gray-800 mb-2">Mô tả</h3>
                   <p className="text-gray-600 leading-relaxed">{product.description}</p>
                 </div>

                 {/* CTA Button */}
                 <div className="mb-8">
                   <Link 
                     href="/lien-he" 
                     className="w-full block bg-[#2e3b63] hover:bg-[#1f2a45] text-white font-medium py-3 px-6 rounded-md flex items-center justify-center transition-colors"
                   >
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                     </svg>
                     Liên hệ tư vấn và đặt hàng
                   </Link>
                 </div>
               </div>
             </div>

             {/* Product Details Tabs */}
             <section className="bg-white py-12" id="product-details">
              <div className="container mx-auto px-4">
                {/* Tab Navigation */}
                <div className="flex flex-wrap border-b border-gray-200 mb-8 overflow-x-auto">
                  <button 
                    onClick={() => setActiveTab('description')}
                    className={`mr-8 pb-4 text-sm font-medium whitespace-nowrap ${
                      activeTab === 'description' 
                        ? 'text-[#2e3b63] border-b-2 border-[#2e3b63]' 
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    Mô tả sản phẩm
                  </button>
                  <button 
                    onClick={() => setActiveTab('features')}
                    className={`mr-8 pb-4 text-sm font-medium whitespace-nowrap ${
                      activeTab === 'features' 
                        ? 'text-[#2e3b63] border-b-2 border-[#2e3b63]' 
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    Tính năng
                  </button>
                  <button 
                    onClick={() => setActiveTab('specifications')}
                    className={`mr-8 pb-4 text-sm font-medium whitespace-nowrap ${
                      activeTab === 'specifications' 
                        ? 'text-[#2e3b63] border-b-2 border-[#2e3b63]' 
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    Thông tin sản phẩm
                  </button>
                  <button 
                    onClick={() => setActiveTab('usage')}
                    className={`mr-8 pb-4 text-sm font-medium whitespace-nowrap ${
                      activeTab === 'usage' 
                        ? 'text-[#2e3b63] border-b-2 border-[#2e3b63]' 
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    Hướng dẫn sử dụng
                  </button>
                  <button 
                    onClick={() => setActiveTab('benefits')}
                    className={`mr-8 pb-4 text-sm font-medium whitespace-nowrap ${
                      activeTab === 'benefits' 
                        ? 'text-[#2e3b63] border-b-2 border-[#2e3b63]' 
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    Lợi ích
                  </button>
                </div>

                {/* Tab Content */}
                <div className="bg-white p-8 rounded-lg shadow-sm">
                  {/* Description Tab */}
                  {activeTab === 'description' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">Chi tiết sản phẩm</h3>
                      <div className="prose max-w-none text-gray-700">
                        <p className="mb-4 leading-relaxed">{product.description}</p>
                        <p className="leading-relaxed">
                          {product.category === 'Nước Giặt' && 'Với công thức đậm đặc và hiệu quả cao, sản phẩm giúp loại bỏ vết bẩn cứng đầu, giữ màu sắc quần áo tươi mới và mang lại hương thơm dễ chịu.'}
                          {product.category === 'Nước Xả' && 'Sản phẩm giúp làm mềm vải, giảm tĩnh điện và mang lại hương thơm lâu dài cho quần áo của bạn.'}
                          {product.category === 'Nước Tẩy Rửa' && 'Với khả năng tẩy rửa mạnh mẽ và diệt khuẩn hiệu quả, sản phẩm giúp làm sạch và bảo vệ sức khỏe gia đình bạn.'}
                          {product.category === 'Nước Lau Sàn' && 'Sản phẩm giúp làm sạch sàn nhà hiệu quả, diệt khuẩn và để lại hương thơm dễ chịu trong không gian sống.'}
                          {product.category === 'Chăm Sóc Da' && 'Với công thức dịu nhẹ và an toàn, sản phẩm giúp chăm sóc da hiệu quả, mang lại làn da khỏe mạnh và tươi sáng.'}
                          {product.category === 'Thực Phẩm' && 'Sản phẩm chất lượng cao từ Thái Lan, mang đến hương vị đặc trưng và độ an toàn cho sức khỏe.'}
                        </p>
                      </div>
                    </motion.div>
                  )}

                  {/* Features Tab */}
                  {activeTab === 'features' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">Đặc điểm nổi bật</h3>
                      <ul className="space-y-3">
                        {product.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-gray-700">
                            <span className="text-[#2e3b63] mt-1 flex-shrink-0">✓</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}

                  {/* Specifications Tab */}
                  {activeTab === 'specifications' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">Thông tin sản phẩm</h3>
                      <div className="space-y-3">
                        {product.specifications.map((spec, idx) => (
                          <div key={idx} className="flex justify-between items-center py-3 border-b border-gray-100">
                            <span className="font-medium text-gray-700">{spec.label}</span>
                            <span className="text-gray-600">{spec.value}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Usage Tab */}
                  {activeTab === 'usage' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">Hướng dẫn sử dụng</h3>
                      <ol className="space-y-3">
                        {product.usage.map((step, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-gray-700">
                            <span className="text-[#2e3b63] font-bold flex-shrink-0 bg-gray-100 w-6 h-6 rounded-full flex items-center justify-center text-sm">
                              {idx + 1}
                            </span>
                            <span className="pt-0.5">{step}</span>
                          </li>
                        ))}
                      </ol>
                    </motion.div>
                  )}

                  {/* Benefits Tab */}
                  {activeTab === 'benefits' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">Lợi ích sử dụng sản phẩm</h3>
                      <ul className="space-y-3">
                        {product.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-gray-700">
                            <span className="text-[#ca993b] mt-1 flex-shrink-0">★</span>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </div>
               </div>
             </section>
           </motion.div>
         </div>
       </section>

       {/* Contact Form Section */}
       <section className="py-16 bg-gray-50" id="contact">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-12">
             <h2 className="text-3xl md:text-4xl font-bold text-[#2e3b63] mb-4">
               Liên Hệ Đặt Hàng
             </h2>
             <p className="text-gray-600 text-lg">
               Để lại thông tin của bạn, chúng tôi sẽ liên hệ ngay
             </p>
           </div>

           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:items-start">
             {/* Contact Form */}
             <motion.div
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
               className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow min-h-[600px]"
             >
               <form className="space-y-6">
                 <div>
                   <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                     Họ và tên <span className="text-red-500">*</span>
                   </label>
                   <input
                     type="text"
                     id="name"
                     name="name"
                     required
                     className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ca993b] focus:border-transparent"
                     placeholder="Nhập họ và tên"
                   />
                 </div>

                 <div>
                   <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                     Số điện thoại <span className="text-red-500">*</span>
                   </label>
                   <input
                     type="tel"
                     id="phone"
                     name="phone"
                     required
                     className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ca993b] focus:border-transparent"
                     placeholder="Nhập số điện thoại"
                   />
                 </div>

                 <div>
                   <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                     Email <span className="text-red-500">*</span>
                   </label>
                   <input
                     type="email"
                     id="email"
                     name="email"
                     required
                     className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ca993b] focus:border-transparent"
                     placeholder="Nhập địa chỉ email"
                   />
                 </div>

                 <div>
                   <label htmlFor="businessModel" className="block text-sm font-medium text-gray-700 mb-1">
                     Mô hình kinh doanh <span className="text-red-500">*</span>
                   </label>
                   <select
                     id="businessModel"
                     name="businessModel"
                     required
                     className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#ca993b] bg-white cursor-pointer hover:border-gray-400 transition-colors"
                   >
                     <option value="">Chọn mô hình kinh doanh</option>
                     <option value="distributor">Nhà phân phối, đại lý</option>
                     <option value="store">Cửa hàng</option>
                     <option value="online">Bán hàng online</option>
                     <option value="other">Khác</option>
                   </select>
                 </div>

                 {/* Product Info */}
                 <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                   <p className="text-sm text-gray-700">
                     <strong>Sản phẩm quan tâm:</strong> {product.title}
                   </p>
                 </div>

                 <div>
                   <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                     Lời nhắn
                   </label>
                   <textarea
                     id="message"
                     name="message"
                     rows={4}
                     className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ca993b] focus:border-transparent resize-none"
                     placeholder="Nhập lời nhắn của bạn"
                   />
                 </div>

                 <motion.button
                   whileHover={{ opacity: 0.9 }}
                   whileTap={{ scale: 0.98 }}
                   type="submit"
                   className="w-full bg-gradient-to-r from-[#ca993b] to-[#b8883a] text-white font-bold py-3 rounded-lg hover:opacity-90 transition-opacity flex justify-center items-center"
                 >
                   Gửi Tin Nhắn
                 </motion.button>
               </form>
             </motion.div>

             {/* Contact Information */}
             <motion.div
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
               className="lg:sticky lg:top-32"
             >
               <div className="bg-[#2e3b63] rounded-xl shadow-lg p-8 text-white h-full min-h-[600px]">
                 <div className="space-y-6">
                   {/* Phone */}
                   <div className="flex items-start">
                     <div className="bg-white/20 p-2 rounded-full flex-shrink-0 mt-1">
                       <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                       </svg>
                     </div>
                     <div className="ml-4">
                       <h4 className="font-medium text-white">Điện Thoại</h4>
                       <p className="text-white/80 text-sm">079.886.8886</p>
                     </div>
                   </div>

                   {/* Email */}
                   <div className="flex items-start">
                     <div className="bg-white/20 p-2 rounded-full flex-shrink-0 mt-1">
                       <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                       </svg>
                     </div>
                     <div className="ml-4">
                       <h4 className="font-medium text-white">Email</h4>
                       <p className="text-white/80 text-sm">maiphuhung79@gmail.com</p>
                     </div>
                   </div>

                   {/* Address */}
                   <div className="flex items-start">
                     <div className="bg-white/20 p-2 rounded-full flex-shrink-0 mt-1">
                       <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                       </svg>
                     </div>
                     <div className="ml-4">
                       <h4 className="font-medium text-white">Địa Chỉ</h4>
                       <p className="text-white/80 text-sm">31 Dân Tộc, P. Tân Sơn Nhì, TP. Hồ Chí Minh</p>
                     </div>
                   </div>
                 </div>

                 {/* Social Media */}
                 <div className="mt-8">
                   <h4 className="font-medium text-white mb-4">Theo dõi chúng tôi</h4>
                   <div className="flex gap-4">
                     <a
                       href="https://www.facebook.com/profile.php?id=61574483563011"
                       target="_blank"
                       rel="noopener noreferrer"
                       className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors"
                     >
                       <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                         <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                       </svg>
                     </a>
                     <a
                       href="https://www.instagram.com/maiphuhung.vn"
                       target="_blank"
                       rel="noopener noreferrer"
                       className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors"
                     >
                       <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                         <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                       </svg>
                     </a>
                     <a
                       href="https://www.youtube.com/@maiphuhung-vn"
                       target="_blank"
                       rel="noopener noreferrer"
                       className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors"
                     >
                       <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                         <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                       </svg>
                     </a>
                   </div>
                 </div>

                 {/* Map */}
                 <div className="mt-8">
                   <div className="rounded-lg overflow-hidden border-2 border-white/20 h-[200px] w-full">
                     <iframe
                       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2771.3067342279273!2d106.6338362241183!3d10.794488331183551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f3d98c77d09%3A0x4649ab36813418e9!2zTWFpIFBow7ogSMawbmcgLSBIw6BuZyBUaMOhaSBDaMOtbmggSMOjbmc!5e0!3m2!1svi!2s!4v1745295658845!5m2!1svi!2s"
                       width="100%"
                       height="100%"
                       style={{ border: 0 }}
                       loading="lazy"
                       referrerPolicy="no-referrer-when-downgrade"
                       title="Vị trí Mai Phú Hưng"
                     ></iframe>
                   </div>
                 </div>
               </div>
             </motion.div>
           </div>
         </div>
       </section>

       {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-6 text-[#2e3b63]">Sản Phẩm Liên Quan</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {relatedProducts.map(([key, relatedProduct], index) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all overflow-hidden cursor-pointer"
                >
                  <Link href={`/san-pham/${key}`}>
                    <div className="relative w-full pt-[100%] bg-gray-100">
                      <img 
                        src={relatedProduct.image} 
                        alt={relatedProduct.title}
                        className="absolute top-0 left-0 w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <div className="mb-2">
                        <span className="px-2 py-1 bg-[#ca993b]/10 text-[#ca993b] text-xs font-semibold rounded-full">
                          {relatedProduct.category}
                        </span>
                      </div>
                      <h3 className="text-base font-bold mb-1 hover:text-[#ca993b] transition-colors line-clamp-1">
                        {relatedProduct.title}
                      </h3>
                      <p className="text-xs text-gray-600 line-clamp-2">
                        {relatedProduct.description}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
}

