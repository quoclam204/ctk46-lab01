export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  author: string;
}

export const posts: Post[] = [
  {
    slug: "a/b/c",
    title: "Catch-all demo: a/b/c",
    excerpt: "Bai viet mau de quan sat route catch-all.",
    content: `Bai viet mau de quan sat catch-all route.

Khi truy cap /blog/a/b/c, slug se duoc gop thanh "a/b/c" va lay noi dung nay.
Day la vi du ngan de minh hoa su khac biet voi route [slug].`,
    date: "2026-04-18",
    category: "Demo",
    author: "Nguyen Le Quoc Lam",
  },
  {
    slug: "gioi-thieu-nextjs",
    title: "Giới thiệu Next.JS — Framework React phổ biến nhất",
    excerpt:
      "Tìm hiểu tại sao Next.JS là lựa chọn hàng đầu cho phát triển web hiện đại.",
    content: `Next.JS là một React framework mạnh mẽ được phát triển bởi Vercel.
Nó cung cấp nhiều tính năng quan trọng như Server-Side Rendering (SSR),
Static Site Generation (SSG), và App Router.

Một số ưu điểm nổi bật của Next.JS:
- Routing tự động dựa trên cấu trúc thư mục
- Hỗ trợ Server Components và Client Components
- Tối ưu hóa hình ảnh, font, và scripts tự động
- API Routes tích hợp
- Hỗ trợ TypeScript sẵn có`,
    date: "2025-01-15",
    category: "Công nghệ",
    author: "Nguyễn Lê Quốc Lâm",
  },

  {
    slug: "hoc-tailwind-css",
    title: "Tailwind CSS — Cách tiếp cận mới cho CSS",
    excerpt:
      "Khám phá phương pháp utility-first CSS và tại sao nó thay đổi cách viết CSS.",
    content: `Tailwind CSS là một utility-first CSS framework, nghĩa là thay vì viết
CSS tùy chỉnh, bạn sử dụng các class tiện ích có sẵn để xây dựng giao diện.

Ví dụ, thay vì viết:
.card { padding: 16px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }

Bạn viết trực tiếp trong HTML:
<div class="p-4 rounded-lg shadow-md">...</div>

Ưu điểm:
- Không cần đặt tên class
- Không cần chuyển qua lại giữa file HTML và CSS
- File CSS cuối cùng rất nhỏ (chỉ chứa class đã dùng)`,
    date: "2025-01-20",
    category: "Công nghệ",
    author: "Nguyễn Lê Quốc Lâm",
  },

  {
    slug: "kinh-nghiem-hoc-lap-trinh",
    title: "Chia sẻ kinh nghiệm tự học lập trình hiệu quả",
    excerpt: "Những bài học rút ra sau 3 năm tự học lập trình ở đại học.",
    content: `Sau 3 năm học tập và thực hành lập trình, tôi rút ra một số kinh nghiệm quan trọng:

1. Thực hành nhiều hơn đọc lý thuyết
Lập trình là kỹ năng thực hành. Đọc sách và xem video chỉ chiếm 30%, 70% còn lại là viết code.

2. Xây dựng dự án thực tế
Không gì tốt hơn việc xây dựng một sản phẩm thực tế để học.
Hãy bắt đầu từ những dự án nhỏ và tăng dần độ phức tạp.

3. Tham gia cộng đồng
Tham gia các cộng đồng lập trình để học hỏi và chia sẻ kinh nghiệm.`,
    date: "2025-02-01",
    category: "Học tập",
    author: "Nguyễn Lê Quốc Lâm",
  },

  {
    slug: "hoc-git-co-ban",
    title: "Git cơ bản cho người mới bắt đầu",
    excerpt: "Hướng dẫn sử dụng Git từ cơ bản đến nâng cao cho sinh viên IT.",
    content: `Git là một hệ thống quản lý phiên bản phân tán (Distributed Version Control System).

Một số lệnh cơ bản:
- git init: khởi tạo repository
- git add .: thêm tất cả file vào staging
- git commit -m "message": lưu thay đổi
- git push: đẩy code lên GitHub

Lợi ích của Git:
- Quản lý lịch sử code
- Làm việc nhóm hiệu quả
- Dễ dàng rollback khi có lỗi`,
    date: "2025-02-10",
    category: "Công nghệ",
    author: "Nguyễn Lê Quốc Lâm",
  },

  {
    slug: "html-css-co-ban",
    title: "HTML & CSS — Nền tảng của Web",
    excerpt: "Tìm hiểu các kiến thức cơ bản nhất để bắt đầu làm web.",
    content: `HTML và CSS là nền tảng của mọi website.

HTML (HyperText Markup Language):
- Dùng để xây dựng cấu trúc trang web
- Bao gồm các thẻ như: div, p, h1, img,...

CSS (Cascading Style Sheets):
- Dùng để tạo giao diện
- Bao gồm màu sắc, layout, animation

Để học tốt:
- Học HTML trước
- Sau đó học CSS Flexbox và Grid
- Thực hành làm các trang web nhỏ`,
    date: "2025-02-15",
    category: "Học tập",
    author: "Nguyễn Lê Quốc Lâm",
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}
