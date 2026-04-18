export interface Project {
  id: string;
  title: string;
  description: string;
  content: string;
  tech: string[];
}

export const projects: Project[] = [
  {
    id: "portfolio",
    title: "Website Portfolio",
    description: "Website cá nhân xây dựng bằng Next.js và Tailwind CSS",
    content: `Đây là dự án portfolio cá nhân.

Chức năng:
- Giới thiệu bản thân
- Hiển thị dự án
- Blog cá nhân

Công nghệ sử dụng:
- Next.js
- Tailwind CSS
- TypeScript`,
    tech: ["Next.js", "Tailwind CSS", "TypeScript"],
  },
  {
    id: "todo-app",
    title: "Ứng dụng Quản lý Công việc",
    description: "Ứng dụng Todo App với React và Local Storage",
    content: `Ứng dụng giúp quản lý công việc hằng ngày.

Chức năng:
- Thêm / sửa / xóa task
- Lưu local storage

Công nghệ:
- React
- JavaScript`,
    tech: ["React", "JavaScript"],
  },
];
