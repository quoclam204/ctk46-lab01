import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

export default function Example() {
  return (
    <div className="max-w-sm">
      <Card>
        <CardHeader>
          <CardTitle>Tiêu đề</CardTitle>
          <CardDescription>Mô tả ngắn</CardDescription>
        </CardHeader>

        <CardContent>
          <p>Nội dung chính</p>
        </CardContent>

        <CardFooter>
          <Button>Hành động</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
